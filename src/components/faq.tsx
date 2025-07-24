"use client"
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Shield, Clock, Users, Smartphone, Globe, Archive, Building } from 'lucide-react';

export default function FAQ() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqs = [
    {
      icon: Smartphone,
      question: "Co se stane, když ztratím svůj telefon?",
      answer: "Vaše vzkazy jsou uloženy v cloudu a přístup k nim máte z jakéhokoliv zařízení. Stačí se přihlásit pomocí e-mailu a hesla. QR kód magnetka funguje nezávisle na vašem telefonu - notifikace dostanete na váš e-mail i na nové zařízení po přihlášení.",
      category: "Technické"
    },
    {
      icon: Archive,
      question: "Mohu změnit nebo smazat svůj vzkaz?",
      answer: "Ano, máte plnou kontrolu nad svými vzkazy. Můžete je upravovat, přidávat nové nebo mazat stávající kdykoli, dokud je váš účet aktivní. Změny se projeví okamžitě a všechny QR kódy budou aktualizovány automaticky.",
      category: "Správa"
    },
    {
      icon: Clock,
      question: "Jak dlouho jsou moje vzkazy uloženy?",
      answer: "Vaše vzkazy jsou uloženy trvale bez časového omezení. Služba je navržena tak, aby vaše zprávy byly dostupné i pro budoucí generace. Používáme redundantní zálohovací systémy ve více datových centrech pro maximální spolehlivost.",
      category: "Úložiště"
    },
    {
      icon: Shield,
      question: "Co když někdo ztratí nebo ukradne magnetku?",
      answer: "Můžete kdykoliv vytvořit novou magnetku s novým QR kódem a starou okamžitě deaktivovat přes webové rozhraní nebo mobilní aplikaci. Také můžete nastavit více magnetek pro různé členy rodiny s různými oprávněními.",
      category: "Bezpečnost"
    },
    {
      icon: Users,
      question: "Je možné sdílet přístup s více lidmi?",
      answer: "Ano, můžete nastavit více důvěryhodných kontaktů, kteří budou mít přístup k vašim vzkazům. Každý kontakt může mít různá oprávnění (okamžitý přístup vs. 24hodinové čekání) a přístup k různým vzkazům podle vašeho nastavení.",
      category: "Sdílení"
    },
    {
      icon: Globe,
      question: "Funguje služba i v zahraničí?",
      answer: "Ano, služba funguje globálně. QR kódy lze skenovat kdekoli na světě a notifikace dostanete bez ohledu na vaši polohu. Podporujeme více jazyků a časových pásem.",
      category: "Globální"
    },
    {
      icon: Archive,
      question: "Co se stane s mými daty, pokud společnost zanikne?",
      answer: "Máme připravený plán kontinuity, který zahrnuje možnost stažení všech vašich dat nebo převedení služby k jinému poskytovateli. O jakýchkoliv změnách budete informováni s dostatečným předstihem.",
      category: "Kontinuita"
    },
    {
      icon: Building,
      question: "Mohu službu využívat pro firmu nebo organizaci?",
      answer: "Ano, nabízíme i firemní řešení pro organizace, které chtějí poskytnout tuto službu svým zaměstnancům nebo klientům. Kontaktujte nás pro individuální nabídku a možnosti hromadných licencí.",
      category: "Business"
    }
  ];

  return (
    <div className="bg-[#ffddd8] py-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/90 px-6 py-3 rounded-full border border-[#FF6F6D]/20 mb-8">
            <HelpCircle className="w-5 h-5 text-[#FF6F6D]" />
            <span className="text-sm font-semibold text-gray-700">Potřebujete pomoc?</span>
          </div>
          <h2 className="text-6xl font-bold text-[#FF6F6D] mb-8">
            Často kladené otázky
          </h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            Máte otázky? Najděte odpovědi na nejčastější dotazy našich zákazníků
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full p-8 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-6">
                  <div className="bg-gradient-to-br from-[#FF6F6D]/10 to-[#e55a58]/10 p-3 rounded-xl group-hover:scale-110 transition-transform">
                    <faq.icon className="w-6 h-6 text-[#FF6F6D]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-semibold text-[#FF6F6D] bg-[#FF6F6D]/10 px-3 py-1 rounded-full">
                        {faq.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 pr-4">{faq.question}</h3>
                  </div>
                </div>
                <div className={`transform transition-transform duration-300 flex-shrink-0 ${expandedFaq === index ? 'rotate-180' : ''}`}>
                  <ChevronDown className="text-[#FF6F6D] w-8 h-8" />
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-500 ${expandedFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-8 pb-8">
                  <div className="pt-4 border-t border-gray-100 ml-12">
                    <p className="text-gray-700 text-lg leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-20 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
            <h3 className="text-3xl font-bold text-[#FF6F6D] mb-6">
              Nenašli jste odpověď na svou otázku?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Náš tým je tu pro vás. Kontaktujte nás a rádi vám pomůžeme s čímkoli, co potřebujete vědět o službě Poslední Vzkaz.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-[#FF6F6D] hover:bg-[#e55a58] text-white font-semibold py-4 px-8 rounded-xl transition-colors duration-200 shadow-lg hover:shadow-xl">
                Kontaktovat podporu
              </button>
              <button className="border-2 border-[#FF6F6D] text-[#FF6F6D] hover:bg-[#FF6F6D] hover:text-white font-semibold py-4 px-8 rounded-xl transition-colors duration-200">
                Živý chat
              </button>
            </div>
          </div>
        </div>

        {/* Help Categories */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Shield, label: "Bezpečnost", count: "12 článků" },
            { icon: Smartphone, label: "Technické", count: "8 článků" },
            { icon: Users, label: "Účet", count: "15 článků" },
            { icon: Globe, label: "Obecné", count: "6 článků" }
          ].map((category, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white transition-colors cursor-pointer border border-white/20">
              <category.icon className="w-8 h-8 text-[#FF6F6D] mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-1">{category.label}</h4>
              <p className="text-sm text-gray-500">{category.count}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}