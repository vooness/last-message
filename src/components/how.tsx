import React from 'react';
import { UserCheck, Video, QrCode, Shield, Bell, Clock, Smartphone, ArrowRight, Heart, Users, MessageCircle, Play, Mail, Lock, CheckCircle } from 'lucide-react';

export default function How() {
  return (
    <div className="bg-[#ffddd8] py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Úvod - Co je Poslední Vzkaz */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-[#FF6F6D] mb-6 md:mb-8 leading-tight">
            Co je Poslední Vzkaz?
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="mb-8 md:mb-12">
              <p className="text-lg md:text-2xl text-gray-700 mb-4 md:mb-6 leading-relaxed">
                <strong>Poslední Vzkaz</strong> je <span className="text-[#FF6F6D] font-semibold">diskrétní a bezpečná služba</span>, 
                která vám umožňuje nahráti osobní video zprávy pro vaše nejbližší a uchovat je až do okamžiku, 
                kdy je vaši blízcí skutečně potřebují.
              </p>
              
              <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
                Možná jste vážně nemocní, možná máte malé děti a chcete jim zanechat rady do života, 
                nebo prostě chcete zajistit, že pokud se vám něco stane, vaši nejbližší budou vědět, 
                jak moc je milujete. <strong className="text-[#FF6F6D]">Naše služba je tu pro každého, 
                kdo chce mít jistotu, že jeho nejdůležitější slova se dostanou k těm správným lidem 
                ve správný čas.</strong>
              </p>

              <div className="bg-gradient-to-r from-[#FF6F6D]/10 to-[#FF6F6D]/5 rounded-xl md:rounded-2xl p-4 md:p-6 mb-6 md:mb-8">
                <p className="text-sm md:text-lg text-gray-700 leading-relaxed">
                  <span className="font-semibold text-[#FF6F6D]">Absolutní diskrétnost:</span> Nikdo se nedozví, 
                  že máte u nás nahraný vzkaz, dokud jej sami nepovolíte k přehrání. 
                  <span className="font-semibold text-[#FF6F6D]">Vojenské zabezpečení:</span> Vaše vzpomínky 
                  jsou chráněny nejmodernějším šifrováním. <span className="font-semibold text-[#FF6F6D]">Jednoduchý systém:</span> 
                  QR magnetka na lednici - vaši blízcí přesně vědí, kde ji najít, když ji budou potřebovat.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold text-[#FF6F6D] mb-4 md:mb-6">Pro koho je služba určena?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                <div className="text-center">
                  <Heart className="w-10 md:w-12 h-10 md:h-12 text-[#FF6F6D] mx-auto mb-2 md:mb-3" />
                  <h4 className="font-bold text-gray-800 mb-2 text-sm md:text-base">Vážně nemocní</h4>
                  <p className="text-gray-600 text-xs md:text-sm">Dejte svým blízkým to nejcennější - vaše poslední slova lásky a povzbuzení</p>
                </div>
                <div className="text-center">
                  <Users className="w-10 md:w-12 h-10 md:h-12 text-[#FF6F6D] mx-auto mb-2 md:mb-3" />
                  <h4 className="font-bold text-gray-800 mb-2 text-sm md:text-base">Rodiče malých dětí</h4>
                  <p className="text-gray-600 text-xs md:text-sm">Zanechte svým dětem životní rady a vzpomínky na společné chvíle</p>
                </div>
                <div className="text-center">
                  <Shield className="w-10 md:w-12 h-10 md:h-12 text-[#FF6F6D] mx-auto mb-2 md:mb-3" />
                  <h4 className="font-bold text-gray-800 mb-2 text-sm md:text-base">Riziková povolání</h4>
                  <p className="text-gray-600 text-xs md:text-sm">Zajistěte rodině klid - vaše slova budou vždy dostupná</p>
                </div>
                <div className="text-center">
                  <Clock className="w-10 md:w-12 h-10 md:h-12 text-[#FF6F6D] mx-auto mb-2 md:mb-3" />
                  <h4 className="font-bold text-gray-800 mb-2 text-sm md:text-base">Každý zodpovědný</h4>
                  <p className="text-gray-600 text-xs md:text-sm">Kdo chce mít jistotu, že jeho nejdůležitější slova nezmizí</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Jak to funguje - Vizuální postup */}
        <div className="mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-[#FF6F6D] mb-8 md:mb-12 text-center leading-tight">
            Jak to funguje?
          </h2>
          
          {/* Kroky s vizualizací */}
          <div className="space-y-8 md:space-y-16">
            
            {/* Krok 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                  <div className="bg-[#FF6F6D] text-white w-10 md:w-12 h-10 md:h-12 rounded-full flex items-center justify-center text-lg md:text-xl font-bold">
                    1
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#FF6F6D]">Zaregistrujte se</h3>
                </div>
                <p className="text-base md:text-xl text-gray-700 mb-4 md:mb-6 leading-relaxed">
                  Vytvoříte si účet jednoduše pomocí e-mailu. Celý proces registrace trvá méně než 2 minuty.
                </p>
                <ul className="space-y-2 md:space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-4 md:w-5 h-4 md:h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm md:text-base">E-mail a heslo</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-4 md:w-5 h-4 md:h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm md:text-base">Ověření účtu</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-4 md:w-5 h-4 md:h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm md:text-base">Nastavení profilu</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 lg:order-2 bg-white rounded-xl md:rounded-2xl p-4 md:p-8 shadow-lg">
                <div className="bg-gradient-to-br from-[#ffddd8] to-[#ffe8e5] h-48 md:h-64 rounded-lg md:rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <UserCheck className="w-16 md:w-20 h-16 md:h-20 text-[#FF6F6D] mx-auto mb-3 md:mb-4" />
                    <p className="text-[#FF6F6D] font-semibold text-sm md:text-base">Rychlá registrace</p>
                    <p className="text-gray-500 text-xs md:text-sm mt-1 md:mt-2">[Ilustrace registračního formuláře]</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Krok 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
              <div className="order-2">
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                  <div className="bg-[#FF6F6D] text-white w-10 md:w-12 h-10 md:h-12 rounded-full flex items-center justify-center text-lg md:text-xl font-bold">
                    2
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#FF6F6D]">Nahrajte svůj vzkaz</h3>
                </div>
                <p className="text-base md:text-xl text-gray-700 mb-4 md:mb-6 leading-relaxed">
                  Natočte video zprávu až 5 minut dlouhou. Můžete nahrát rady pro děti, vzpomínky, nebo prostě říct, jak moc je milujete.
                </p>
                <ul className="space-y-2 md:space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-4 md:w-5 h-4 md:h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm md:text-base">Video až 5 minut</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-4 md:w-5 h-4 md:h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm md:text-base">Automatické šifrování</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-4 md:w-5 h-4 md:h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm md:text-base">Možnost přenahrání</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 bg-white rounded-xl md:rounded-2xl p-4 md:p-8 shadow-lg">
                <div className="bg-gradient-to-br from-[#ffddd8] to-[#ffe8e5] h-48 md:h-64 rounded-lg md:rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="bg-white/90 p-4 md:p-6 rounded-lg md:rounded-xl shadow-lg max-w-xs">
                      <Play className="w-12 md:w-16 h-12 md:h-16 text-[#FF6F6D] mx-auto mb-2 md:mb-3" />
                      <div className="w-full bg-gray-200 rounded-full h-1.5 md:h-2 mb-2 md:mb-3">
                        <div className="bg-[#FF6F6D] h-1.5 md:h-2 rounded-full w-3/4"></div>
                      </div>
                      <p className="text-xs md:text-sm text-gray-600">03:45 / 05:00</p>
                    </div>
                    <p className="text-[#FF6F6D] font-semibold mt-3 md:mt-4 text-sm md:text-base">Nahrávání videa</p>
                    <p className="text-gray-500 text-xs md:text-sm mt-1 md:mt-2">[Ilustrace nahrávání]</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Krok 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                  <div className="bg-[#FF6F6D] text-white w-10 md:w-12 h-10 md:h-12 rounded-full flex items-center justify-center text-lg md:text-xl font-bold">
                    3
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#FF6F6D]">Dostanete QR magnetku</h3>
                </div>
                <p className="text-base md:text-xl text-gray-700 mb-4 md:mb-6 leading-relaxed">
                  Pošleme vám krásnou magnetku s unikátním QR kódem. Umístíte ji na lednici nebo jiné viditelné místo, kde ji vaši blízcí snadno najdou.
                </p>
                <ul className="space-y-2 md:space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-4 md:w-5 h-4 md:h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm md:text-base">Stylový design magnetky</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-4 md:w-5 h-4 md:h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm md:text-base">Unikátní QR kód</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-4 md:w-5 h-4 md:h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm md:text-base">Poštou do 3 dnů</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 lg:order-2 bg-white rounded-xl md:rounded-2xl p-4 md:p-8 shadow-lg">
                <div className="bg-gradient-to-br from-[#ffddd8] to-[#ffe8e5] h-48 md:h-64 rounded-lg md:rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="bg-white p-4 md:p-6 rounded-lg md:rounded-xl shadow-lg border-2 border-[#FF6F6D] max-w-xs">
                      <div className="bg-gray-100 p-3 md:p-4 rounded-md md:rounded-lg mb-2 md:mb-3">
                        <QrCode className="w-12 md:w-16 h-12 md:h-16 text-gray-600 mx-auto" />
                      </div>
                      <p className="text-xs md:text-sm font-semibold text-gray-800 mb-1">Poslední Vzkaz</p>
                      <p className="text-xs text-gray-500">Pro mou rodinu ❤️</p>
                    </div>
                    <p className="text-[#FF6F6D] font-semibold mt-3 md:mt-4 text-sm md:text-base">QR magnetka</p>
                    <p className="text-gray-500 text-xs md:text-sm mt-1 md:mt-2">[Náhled magnetky]</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Krok 4 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
              <div className="order-2">
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                  <div className="bg-[#FF6F6D] text-white w-10 md:w-12 h-10 md:h-12 rounded-full flex items-center justify-center text-lg md:text-xl font-bold">
                    4
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#FF6F6D]">Bezpečný přístup</h3>
                </div>
                <p className="text-base md:text-xl text-gray-700 mb-4 md:mb-6 leading-relaxed">
                  Když někdo naskenuje QR kód, okamžitě dostanete notifikaci. Máte 24 hodin na rozhodnutí, zda přístup povolit nebo zamítnout.
                </p>
                <ul className="space-y-2 md:space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-4 md:w-5 h-4 md:h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm md:text-base">Okamžitá notifikace</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-4 md:w-5 h-4 md:h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm md:text-base">24hodinová ochrana</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-4 md:w-5 h-4 md:h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm md:text-base">Plná kontrola přístupu</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 bg-white rounded-xl md:rounded-2xl p-4 md:p-8 shadow-lg">
                <div className="bg-gradient-to-br from-[#ffddd8] to-[#ffe8e5] h-48 md:h-64 rounded-lg md:rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <Smartphone className="w-12 md:w-16 h-12 md:h-16 text-[#FF6F6D] mx-auto mb-3 md:mb-4" />
                    <div className="space-y-1.5 md:space-y-2 max-w-xs">
                      <div className="bg-blue-100 p-2 md:p-3 rounded-md md:rounded-lg text-blue-800 text-xs md:text-sm font-semibold">
                        🔔 Někdo skenoval QR kód
                      </div>
                      <div className="bg-yellow-100 p-2 md:p-3 rounded-md md:rounded-lg text-yellow-800 text-xs md:text-sm font-semibold">
                        ⏳ Rozhodnout do 23:45:12
                      </div>
                      <div className="flex gap-1.5 md:gap-2">
                        <button className="bg-green-500 text-white px-2 md:px-3 py-1 rounded text-xs">Povolit</button>
                        <button className="bg-red-500 text-white px-2 md:px-3 py-1 rounded text-xs">Zamítnout</button>
                      </div>
                    </div>
                    <p className="text-[#FF6F6D] font-semibold mt-3 md:mt-4 text-sm md:text-base">Kontrola přístupu</p>
                    <p className="text-gray-500 text-xs md:text-sm mt-1 md:mt-2">[Notifikace v telefonu]</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Výsledek - co se stane */}
        <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-12 shadow-xl mb-12 md:mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-[#FF6F6D] mb-6 md:mb-8 text-center">
            Co se stane poté?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="bg-green-100 p-2 md:p-3 rounded-full flex-shrink-0">
                    <CheckCircle className="w-5 md:w-6 h-5 md:h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-1 md:mb-2">Pokud potvrdíte přístup</h4>
                    <p className="text-gray-600 text-sm md:text-base">Vaše video zpráva se okamžitě zpřístupní. Vaši blízcí uvidí váš vzkaz a budou moci si ho uložit.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="bg-red-100 p-2 md:p-3 rounded-full flex-shrink-0">
                    <Shield className="w-5 md:w-6 h-5 md:h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-1 md:mb-2">Pokud zamítnete přístup</h4>
                    <p className="text-gray-600 text-sm md:text-base">Video zůstane zabezpečené. Můžete nastavit důvěryhodné kontakty s okamžitým přístupem.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="bg-blue-100 p-2 md:p-3 rounded-full flex-shrink-0">
                    <Clock className="w-5 md:w-6 h-5 md:h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-1 md:mb-2">Pokud neodpovíte</h4>
                    <p className="text-gray-600 text-sm md:text-base">Po 24 hodinách se video automaticky zpřístupní. Tím je zajištěno, že vaše poslední slova se dostanou k vašim blízkým.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[#ffddd8] to-[#ffe8e5] p-6 md:p-8 rounded-lg md:rounded-xl">
              <div className="text-center">
                <Heart className="w-16 md:w-20 h-16 md:h-20 text-[#FF6F6D] mx-auto mb-4 md:mb-6" />
                <h4 className="text-xl md:text-2xl font-bold text-[#FF6F6D] mb-3 md:mb-4">Vaše slova navždy</h4>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  Bez ohledu na to, co se stane, vaše nejdůležitější slova a vzpomínky budou navždy uchovány pro ty, na kterých vám nejvíce záleží.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Konkrétní příklady použití */}
        <div className="mb-12 md:mb-20">
          <h3 className="text-2xl md:text-4xl font-bold text-[#FF6F6D] mb-8 md:mb-12 text-center">
            Konkrétní situace, kdy službu využít
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="bg-[#FF6F6D]/10 p-2 md:p-3 rounded-full flex-shrink-0">
                  <Heart className="w-6 md:w-8 h-6 md:h-8 text-[#FF6F6D]" />
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-[#FF6F6D] leading-tight">&ldquo;Mám rakovinu a chci svým dětem zanechat něco víc než jen vzpomínky&rdquo;</h4>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Diskrétně nahrajte video s radami do života, vzpomínkami na společné chvíle a vyznáním lásky. 
                    Vaše děti budou mít vaše slova navždy, kdykoli je budou potřebovat.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="bg-[#FF6F6D]/10 p-2 md:p-3 rounded-full flex-shrink-0">
                  <Users className="w-6 md:w-8 h-6 md:h-8 text-[#FF6F6D]" />
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-[#FF6F6D] leading-tight">&ldquo;Pracuji v rizikové profesi&rdquo;</h4>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Policista, hasič, horský záchranář? Dejte rodině klid - vaše nejdůležitější slova 
                    budou vždy v bezpečí na magnetce na lednici.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="bg-[#FF6F6D]/10 p-2 md:p-3 rounded-full flex-shrink-0">
                  <MessageCircle className="w-6 md:w-8 h-6 md:h-8 text-[#FF6F6D]" />
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-[#FF6F6D] leading-tight">&ldquo;Máme malé děti a bojíme se, co by se stalo, kdyby...&rdquo;</h4>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Nahrajte společně video s radami, jak se o sebe postarat, kde najdou důležité dokumenty 
                    a především - jak moc je milujete a věříte jim.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="bg-[#FF6F6D]/10 p-2 md:p-3 rounded-full flex-shrink-0">
                  <Clock className="w-6 md:w-8 h-6 md:h-8 text-[#FF6F6D]" />
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-[#FF6F6D] leading-tight">&ldquo;Jsem prarodič a chci předat rodinné tradice&rdquo;</h4>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    Vyprávějte o rodinných tradicích, receptech od babičky, příbězích z mládí. 
                    Vaše vnoučata budou mít vaši moudrost i za generace.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 md:mt-12 bg-gradient-to-r from-[#FF6F6D]/10 to-[#FF6F6D]/5 rounded-xl md:rounded-2xl p-6 md:p-8 text-center">
            <h4 className="text-xl md:text-2xl font-bold text-[#FF6F6D] mb-3 md:mb-4">Prostě chcete mít jistotu?</h4>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Nemusíte být nemocní ani v nebezpečí. Mnozí z nás prostě chtějí mít jistotu, 
              že pokud se něco nečekaného stane, naši nejbližší budou vědět, jak moc je milujeme. 
              <strong className="text-[#FF6F6D]">A to je naprosto v pořádku.</strong>
            </p>
          </div>
        </div>

        {/* Shrnutí */}
        <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg text-center">
          <h3 className="text-xl md:text-2xl font-bold text-[#FF6F6D] mb-4">
            Jednoduché shrnutí
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6 mb-6">
            <div className="text-center">
              <Video className="w-10 md:w-12 h-10 md:h-12 text-[#FF6F6D] mx-auto mb-2" />
              <p className="text-sm font-semibold">Nahrajte video</p>
            </div>
            <ArrowRight className="text-[#FF6F6D] w-6 md:w-8 h-6 md:h-8 rotate-90 sm:rotate-0" />
            <div className="text-center">
              <QrCode className="w-10 md:w-12 h-10 md:h-12 text-[#FF6F6D] mx-auto mb-2" />
              <p className="text-sm font-semibold">Dostanete QR magnetku</p>
            </div>
            <ArrowRight className="text-[#FF6F6D] w-6 md:w-8 h-6 md:h-8 rotate-90 sm:rotate-0" />
            <div className="text-center">
              <Heart className="w-10 md:w-12 h-10 md:h-12 text-[#FF6F6D] mx-auto mb-2" />
              <p className="text-sm font-semibold">Věčná vzpomínka</p>
            </div>
          </div>
          <p className="text-lg md:text-xl text-gray-700">
            <strong>Nikdy nevíte, kdy bude pozdě.</strong> Zajistěte svým blízkým, že budou mít vaše nejdůležitější slova navždy.
          </p>
        </div>
      </div>
    </div>
  );
}