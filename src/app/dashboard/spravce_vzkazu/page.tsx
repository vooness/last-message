'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { useSession } from 'next-auth/react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { FiFileText, FiVideo, FiTrash2, FiShield, FiRefreshCw, FiUser, FiClock, FiPlay, FiCheck } from 'react-icons/fi'

type Msg = {
  id: number
  type: 'TEXT' | 'VIDEO'
  text?: string
  videoUrl?: string | null
  s3Key?: string // Debug info
  urlExpiresAt?: string
  error?: string
  recipient?: {
    id: number
    name: string
  } | null
  createdAt: string
}

export default function ManagerPage() {
  const { data: session } = useSession()
  const userId = session?.user?.id
  const [msgs, setMsgs] = useState<Msg[]>([])
  const [mode, setMode] = useState<'TEXT' | 'VIDEO'>('TEXT')
  const [text, setText] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [recipient, setRecipient] = useState('')
  const [loading, setLoading] = useState(true)
  const [err, setErr] = useState<string>()
  const [uploading, setUploading] = useState(false)
  const [refreshing, setRefreshing] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  // Load messages - useCallback aby se neměnila reference
  const loadMessages = useCallback(async () => {
    if (!userId) return
    
    try {
      console.log('Loading messages for userId:', userId)
      const response = await fetch(`/api/dashboard/messages?userId=${userId}`)
      
      if (!response.ok) {
        const errorText = await response.text()
        console.error('Load error:', response.status, errorText)
        throw new Error(`HTTP ${response.status}: Chyba při načítání zpráv`)
      }
      
      const data = await response.json()
      console.log('Loaded messages:', data)
      setMsgs(Array.isArray(data) ? data : [])
    } catch (error) {
      console.error('Error loading messages:', error)
      setErr((error as Error).message)
    }
  }, [userId])

  // Initial load
  useEffect(() => {
    loadMessages().finally(() => setLoading(false))
  }, [loadMessages])

  const handleRefreshVideos = async () => {
    setRefreshing(true)
    await loadMessages()
    setRefreshing(false)
  }

  const showSuccessMessage = (message: string) => {
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 3000)
  }

  const handleAddMessage = async () => {
    if (!userId) {
      alert('Musíte být přihlášený')
      return
    }

    setUploading(true)
    setErr(undefined)

    try {
      if (mode === 'TEXT') {
        if (!text.trim()) {
          alert('Text je povinný')
          setUploading(false)
          return
        }

        console.log('Creating text message...')
        const response = await fetch('/api/dashboard/messages', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            type: 'TEXT', 
            text: text.trim(), 
            recipient: recipient.trim() || undefined, 
            userId: Number(userId)
          })
        })

        if (!response.ok) {
          const errorText = await response.text()
          console.error('Text message error:', response.status, errorText)
          let errorMessage = `HTTP ${response.status}`
          try {
            const errorData = JSON.parse(errorText)
            errorMessage = errorData.error || errorMessage
          } catch {
            errorMessage = errorText
          }
          throw new Error(errorMessage)
        }

        console.log('Text message created successfully')

      } else {
        if (!file) {
          alert('Vyberte video soubor')
          setUploading(false)
          return
        }

        // Check file type
        if (!file.type.startsWith('video/')) {
          alert('Soubor musí být video')
          setUploading(false)
          return
        }

        // Check file size (300MB limit)
        if (file.size > 300 * 1024 * 1024) {
          alert('Soubor je příliš velký (max 300MB)')
          setUploading(false)
          return
        }

        console.log('Uploading video:', file.name, 'Size:', Math.round(file.size / 1024 / 1024) + 'MB')

        const formData = new FormData()
        formData.append('userId', String(userId))
        formData.append('recipient', recipient.trim())
        formData.append('file', file)

        const response = await fetch('/api/dashboard/upload', {
          method: 'POST',
          body: formData
        })

        if (!response.ok) {
          const errorText = await response.text()
          console.error('Video upload error:', response.status, errorText)
          let errorMessage = `HTTP ${response.status}`
          try {
            const errorData = JSON.parse(errorText)
            errorMessage = errorData.error || errorMessage
            if (errorData.details) {
              errorMessage += ` - ${errorData.details}`
            }
          } catch {
            errorMessage = errorText
          }
          throw new Error(errorMessage)
        }

        const result = await response.json()
        console.log('Video upload successful:', result)
      }

      // Refresh messages (s novými presigned URLs)
      console.log('Refreshing messages list...')
      await loadMessages()

      // Reset form
      setText('')
      setFile(null)
      setRecipient('')
      
      // Show success message
      showSuccessMessage(mode === 'TEXT' ? 'Textová zpráva byla přidána!' : 'Video bylo úspěšně nahráno!')

    } catch (error) {
      console.error('Error adding message:', error)
      const errorMessage = (error as Error).message
      setErr(errorMessage)
    } finally {
      setUploading(false)
    }
  }

  const handleDeleteMessage = async (messageId: number) => {
    if (!confirm('Opravdu chcete smazat tuto zprávu?')) {
      return
    }

    try {
      console.log('Deleting message:', messageId)
      const response = await fetch('/api/dashboard/messages', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: messageId })
      })

      if (!response.ok) {
        const errorText = await response.text()
        console.error('Delete error:', response.status, errorText)
        throw new Error(`Chyba při mazání zprávy: HTTP ${response.status}`)
      }

      // Remove from local state
      setMsgs(prev => prev.filter(msg => msg.id !== messageId))
      showSuccessMessage('Zpráva byla smazána!')
      console.log('Message deleted successfully')
    } catch (error) {
      console.error('Error deleting message:', error)
      setErr((error as Error).message)
    }
  }

  const formatExpiryTime = (expiresAt?: string) => {
    if (!expiresAt) return ''
    const expiry = new Date(expiresAt)
    const now = new Date()
    const diffHours = Math.round((expiry.getTime() - now.getTime()) / (1000 * 60 * 60))
    return diffHours > 0 ? `Vyprší za ${diffHours}h` : 'Vypršel'
  }

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
    const diffMinutes = Math.floor(diffMs / (1000 * 60))

    if (diffDays > 0) return `Před ${diffDays} dny`
    if (diffHours > 0) return `Před ${diffHours}h`
    if (diffMinutes > 0) return `Před ${diffMinutes}min`
    return 'Právě teď'
  }

  if (!userId) {
    return (
      <div className="min-h-screen bg-[#ffddd8]">
        <Navbar />
        <div className="pt-32 px-4">
          <div className="max-w-md mx-auto bg-white rounded-3xl shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiUser className="text-[#FF6F6D]" size={24} />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">Přihlášení potřebné</h2>
            <p className="text-gray-600">Musíte být přihlášený pro přístup ke správě vzkazů.</p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#ffddd8]">
        <Navbar />
        <div className="pt-32 px-4">
          <div className="max-w-md mx-auto bg-white rounded-3xl shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiRefreshCw className="text-[#FF6F6D] animate-spin" size={24} />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">Načítám zprávy...</h2>
            <p className="text-gray-600">Připravuji vaše vzkazy</p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const textMessages = msgs.filter(m => m.type === 'TEXT')
  const videoMessages = msgs.filter(m => m.type === 'VIDEO')

  return (
    <div className="min-h-screen bg-[#ffddd8]">
      <Navbar />
      
      {/* Success Message */}
      {showSuccess && (
        <div className="fixed top-24 right-4 z-50 bg-white border border-green-200 rounded-2xl shadow-lg p-4 flex items-center gap-3 animate-in slide-in-from-right duration-300">
          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
            <FiCheck className="text-green-600" size={16} />
          </div>
          <span className="text-gray-800 font-medium">Úspěšně provedeno!</span>
        </div>
      )}
      
      <div className="pt-32 px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Správa vzkazů</h1>
            <p className="text-gray-600 text-lg">Vytvářejte a spravujte své osobní vzkazy a video zprávy</p>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center">
                <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center">
                  <FiFileText className="text-[#FF6F6D]" size={24} />
                </div>
                <div className="ml-4">
                  <div className="text-3xl font-bold text-gray-800">{textMessages.length}</div>
                  <div className="text-sm text-gray-600 font-medium">Textové vzkazy</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center">
                  <FiVideo className="text-blue-500" size={24} />
                </div>
                <div className="ml-4">
                  <div className="text-3xl font-bold text-gray-800">{videoMessages.length}</div>
                  <div className="text-sm text-gray-600 font-medium">Video vzkazy</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center">
                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center">
                  <FiShield className="text-green-500" size={24} />
                </div>
                <div className="ml-4">
                  <div className="text-3xl font-bold text-gray-800">{msgs.length}</div>
                  <div className="text-sm text-gray-600 font-medium">Celkem vzkazů</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center">
                <div className="w-14 h-14 bg-yellow-100 rounded-2xl flex items-center justify-center">
                  <FiUser className="text-yellow-600" size={24} />
                </div>
                <div className="ml-4">
                  <div className="text-3xl font-bold text-gray-800">{new Set(msgs.filter(m => m.recipient).map(m => m.recipient!.name)).size}</div>
                  <div className="text-sm text-gray-600 font-medium">Příjemci</div>
                </div>
              </div>
            </div>
          </div>

          {err && (
            <div className="mb-8 bg-white rounded-3xl shadow-lg border-l-4 border-[#FF6F6D] p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center mr-4">
                    <span className="text-[#FF6F6D] font-bold text-lg">!</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg">Chyba</h3>
                    <p className="text-gray-600">{err}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setErr(undefined)} 
                  className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-xl"
                >
                  ✕
                </button>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Create Message Form */}
            <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-8">
                <div className="w-14 h-14 bg-[#FF6F6D] rounded-2xl flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">+</span>
                </div>
                <div className="ml-4">
                  <h2 className="text-2xl font-bold text-gray-800">Vytvořit nový vzkaz</h2>
                  <p className="text-gray-600">Přidejte textový nebo video vzkaz</p>
                </div>
              </div>

              {/* Mode Selection */}
              <div className="flex gap-4 mb-8">
                <button
                  onClick={() => setMode('TEXT')}
                  className={`flex-1 p-6 rounded-2xl border-2 transition-all duration-200 ${
                    mode === 'TEXT' 
                      ? 'bg-[#FF6F6D] text-white border-transparent shadow-lg transform scale-105' 
                      : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-gray-300 hover:bg-gray-100'
                  }`}
                >
                  <FiFileText className="mx-auto mb-3" size={28} />
                  <div className="font-semibold text-lg">Text</div>
                </button>
                <button
                  onClick={() => setMode('VIDEO')}
                  className={`flex-1 p-6 rounded-2xl border-2 transition-all duration-200 ${
                    mode === 'VIDEO' 
                      ? 'bg-[#FF6F6D] text-white border-transparent shadow-lg transform scale-105' 
                      : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-gray-300 hover:bg-gray-100'
                  }`}
                >
                  <FiVideo className="mx-auto mb-3" size={28} />
                  <div className="font-semibold text-lg">Video</div>
                </button>
              </div>

              {/* Form Content */}
              {mode === 'TEXT' ? (
                <div className="mb-6">
                  <label className="block text-lg font-semibold text-gray-700 mb-4">Obsah zprávy</label>
                  <textarea
                    rows={5}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:border-[#FF6F6D] focus:ring-0 resize-none transition-colors text-gray-800 placeholder-gray-500 text-lg"
                    placeholder="Napište zde svůj vzkaz..."
                    disabled={uploading}
                  />
                </div>
              ) : (
                <div className="mb-6">
                  <label className="block text-lg font-semibold text-gray-700 mb-4">Video soubor</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:border-[#FF6F6D] transition-colors bg-gray-50 hover:bg-gray-100">
                    <input
                      type="file"
                      accept="video/*"
                      onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                      className="hidden"
                      id="video-upload"
                      disabled={uploading}
                    />
                    <label htmlFor="video-upload" className="cursor-pointer">
                      {file ? (
                        <div>
                          <FiVideo className="mx-auto text-[#FF6F6D] mb-3" size={40} />
                          <div className="font-semibold text-gray-700 text-lg">{file.name}</div>
                          <div className="text-gray-500">{Math.round(file.size / 1024 / 1024)}MB</div>
                        </div>
                      ) : (
                        <div>
                          <FiVideo className="mx-auto text-gray-400 mb-3" size={40} />
                          <div className="font-semibold text-gray-700 text-lg">Klikněte pro výběr videa</div>
                          <div className="text-gray-500">Max 300MB</div>
                        </div>
                      )}
                    </label>
                  </div>
                  <div className="mt-4 p-4 bg-green-50 rounded-2xl">
                    <div className="flex items-center text-green-700">
                      <FiShield className="mr-3" size={20} />
                      <span className="font-medium">Video bude uloženo privátně a bezpečně</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Recipient */}
              <div className="mb-8">
                <label className="block text-lg font-semibold text-gray-700 mb-4">Příjemce (volitelné)</label>
                <input
                  type="text"
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                  placeholder="Komu je vzkaz určen"
                  className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:border-[#FF6F6D] focus:ring-0 transition-colors text-gray-800 placeholder-gray-500 text-lg"
                  disabled={uploading}
                />
              </div>

              {/* Submit Button */}
              <button
                onClick={handleAddMessage}
                disabled={uploading}
                className={`w-full py-4 px-6 rounded-2xl font-semibold text-lg transition-all duration-200 ${
                  uploading 
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                    : 'bg-[#FF6F6D] hover:bg-red-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                }`}
              >
                {uploading ? (
                  <div className="flex items-center justify-center">
                    <FiRefreshCw className="animate-spin mr-3" size={24} />
                    {mode === 'TEXT' ? 'Přidávám text...' : 'Nahrávám video...'}
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    {mode === 'TEXT' ? <FiFileText className="mr-3" size={24} /> : <FiVideo className="mr-3" size={24} />}
                    {mode === 'TEXT' ? 'Přidat textový vzkaz' : 'Nahrát video vzkaz'}
                  </div>
                )}
              </button>
            </div>

            {/* Messages List */}
            <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-[#FF6F6D] rounded-2xl flex items-center justify-center">
                    <FiFileText className="text-white" size={24} />
                  </div>
                  <div className="ml-4">
                    <h2 className="text-2xl font-bold text-gray-800">Moje vzkazy</h2>
                    <p className="text-gray-600">{msgs.length} zpráv celkem</p>
                  </div>
                </div>
                <button
                  onClick={handleRefreshVideos}
                  disabled={refreshing}
                  className="p-4 bg-red-50 hover:bg-red-100 rounded-2xl transition-colors disabled:opacity-50 hover:scale-105 transform duration-200"
                >
                  <FiRefreshCw className={`text-[#FF6F6D] ${refreshing ? 'animate-spin' : ''}`} size={24} />
                </button>
              </div>

              {msgs.length === 0 ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FiFileText className="text-gray-400" size={32} />
                  </div>
                  <h3 className="font-semibold text-gray-700 mb-3 text-xl">Zatím žádné vzkazy</h3>
                  <p className="text-gray-500">Začněte vytvořením svého prvního vzkazu</p>
                </div>
              ) : (
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {msgs.map((msg) => (
                    <div key={msg.id} className="border border-gray-100 rounded-2xl p-5 hover:shadow-md transition-all hover:border-gray-200">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center">
                          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                            msg.type === 'TEXT' 
                              ? 'bg-red-100' 
                              : 'bg-blue-100'
                          }`}>
                            {msg.type === 'TEXT' ? (
                              <FiFileText className="text-[#FF6F6D]" size={20} />
                            ) : (
                              <FiPlay className="text-blue-500" size={20} />
                            )}
                          </div>
                          <div className="ml-4">
                            <div className="flex items-center gap-3">
                              <FiClock className="text-gray-400" size={14} />
                              <span className="text-sm text-gray-500 font-medium">{formatTimeAgo(msg.createdAt)}</span>
                              {msg.recipient && (
                                <>
                                  <span className="text-gray-300">•</span>
                                  <span className="text-sm px-3 py-1 bg-red-50 text-[#FF6F6D] rounded-xl font-medium">
                                    {msg.recipient.name}
                                  </span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={() => handleDeleteMessage(msg.id)}
                          className="p-3 text-gray-400 hover:text-[#FF6F6D] hover:bg-red-50 rounded-2xl transition-colors"
                        >
                          <FiTrash2 size={18} />
                        </button>
                      </div>
                      
                      {msg.type === 'TEXT' ? (
                        <p className="text-gray-800 leading-relaxed">{msg.text}</p>
                      ) : (
                        <div>
                          {msg.videoUrl && !msg.error ? (
                            <div>
                              <video 
                                src={msg.videoUrl} 
                                controls 
                                className="w-full rounded-2xl"
                                style={{maxHeight: '200px'}}
                                preload="metadata"
                              >
                                Váš prohlížeč nepodporuje přehrávání videa.
                              </video>
                              <p className="text-xs text-gray-500 mt-3">
                                {formatExpiryTime(msg.urlExpiresAt)}
                              </p>
                            </div>
                          ) : (
                            <div className="bg-gray-50 rounded-2xl p-6 text-center">
                              <FiVideo className="mx-auto text-gray-400 mb-3" size={32} />
                              <p className="text-gray-600 mb-3">Video není dostupné</p>
                              <button
                                onClick={handleRefreshVideos}
                                className="text-[#FF6F6D] hover:text-red-600 font-medium"
                              >
                                Obnovit odkaz
                              </button>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}