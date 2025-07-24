import React from 'react';
import { Heart, Code, Shield, Users, Clock, MessageSquare, Star, Coffee, Laptop, Target } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Hlavní nadpis */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#FF6F6D] mb-6">
            Příběh, který změnil můj život
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Někdy stačí jeden okamžik, abychom pochopili, co je v životě skutečně důležité.
          </p>
        </div>

        {/* Hlavní příběh */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <div className="bg-gradient-to-br from-[#ffddd8] to-[#ffe8e5] rounded-2xl p-8 shadow-lg">
              <div className="text-center">
                <div className="w-32 h-32 bg-white rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#FF6F6D] to-[#ff8f8d] rounded-full flex items-center justify-center">
                    <Code className="w-12 h-12 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-[#FF6F6D] mb-2">Martin Novák</h3>
                <p className="text-gray-600 mb-4">Tvůrce Poslední Vzkaz</p>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Laptop className="w-4 h-4" />
                  <span>Full-stack vývojář</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-[#FF6F6D] mb-6">
              "Táta, proč jsi mi nikdy neřekl..."
            </h3>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                <strong>Byl jsem typický programátor.</strong> Pracoval jsem na různých projektech, 
                vytvářel aplikace pro firmy, žil si svůj samostatný život. Až do té chvíle, 
                kdy mi v nemocnici umíral dědeček.
              </p>
              
              <p>
                Seděl jsem u jeho postele a uvědomil jsem si, že <span className="text-[#FF6F6D] font-semibold">
                nikdy jsmi si pořádně nepopovídali</span>. Nikdy mi nevyprávěl o své mladosti, 
                o tom, jak poznal babičku, o svých snech. Prostě jsme na to nikdy neměli čas.
              </p>

              <div className="bg-[#FF6F6D]/5 rounded-lg p-4 border-l-4 border-[#FF6F6D]">
                <p className="italic">
                  "Když odešel, uvědomil jsem si, že všechny jeho vzpomínky, rady a láska 
                  odešly s ním. A já už se nikdy nedozvím, co mi chtěl říct."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Moment realizace */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-12 mb-20">
          <div className="text-center mb-12">
            <Target className="w-16 h-16 text-[#FF6F6D] mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-[#FF6F6D] mb-4">
              Moment, který všechno změnil
            </h3>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="text-xl font-bold text-gray-800 mb-4">Co mě nejvíc bolelo:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#FF6F6D] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Že jsem nevěděl, jak moc mě měl dědeček rád</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#FF6F6D] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Že mi nikdy nepředal své životní zkušenosti</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#FF6F6D] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Že jeho hlas a úsměv zmizely navždy</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="text-xl font-bold text-gray-800 mb-4">Co jsem si slíbil:</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Že toto neprožije nikdo jiný, pokud to bude na mně</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Že vytvořím něco, co zachová poslední slova navždy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Že každá rodina bude mít šanci na rozloučení</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong className="text-[#FF6F6D]">A tak vznikl Poslední Vzkaz.</strong> 
                Nechtěl jsem, aby ještě někdo prožíval to, co jsem prožíval já - 
                tu bolestnou prázdnotu nedoděčených slov.
              </p>
            </div>
          </div>
        </div>

        {/* Proč jsem to vytvořil */}
        <div className="mb-20">
          <h3 className="text-4xl font-bold text-[#FF6F6D] mb-12 text-center">
            Proč jsem to vytvořil?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <div className="bg-[#FF6F6D]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-[#FF6F6D]" />
              </div>
              <h4 className="text-xl font-bold text-[#FF6F6D] mb-4">Láska nesmí zmizet</h4>
              <p className="text-gray-700 leading-relaxed">
                Věřím, že láska, kterou cítíme k našim blízkým, je to nejcennější, 
                co máme. A tato láska by nikdy neměla zmizet jen proto, 
                že jsme nestihli ji říct.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <div className="bg-[#FF6F6D]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-[#FF6F6D]" />
              </div>
              <h4 className="text-xl font-bold text-[#FF6F6D] mb-4">Technologie pro dobro</h4>
              <p className="text-gray-700 leading-relaxed">
                Jako programátor vím, že technologie může změnit životy k lepšímu. 
                Chtěl jsem využít své schopnosti k něčemu skutečně smysluplnému.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300">
              <div className="bg-[#FF6F6D]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-[#FF6F6D]" />
              </div>
              <h4 className="text-xl font-bold text-[#FF6F6D] mb-4">Pomoc rodinám</h4>
              <p className="text-gray-700 leading-relaxed">
                Každá rodina si zaslouží mít možnost rozloučit se důstojně 
                a uchovat si vzpomínky na ty, které milovala.
              </p>
            </div>
          </div>
        </div>

        {/* Osobní mise */}
        <div className="bg-[#FF6F6D] rounded-2xl p-12 text-white mb-20">
          <div className="text-center mb-8">
            <MessageSquare className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">Moje osobní mise</h3>
          </div>

          <div className="max-w-4xl mx-auto">
            <blockquote className="text-xl leading-relaxed text-center mb-8">
              "Chci, aby každý člověk měl možnost zanechat svým blízkým to nejcennější - 
              svou lásku, své vzpomínky a svá poslední slova. Protože nikdy nevíme, 
              kdy bude pozdě."
            </blockquote>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white/10 rounded-xl p-6">
                <h4 className="text-xl font-bold mb-4">Co mě motivuje každý den:</h4>
                <ul className="space-y-2 text-white/90">
                  <li>• Zprávy od rodin, kterým jsme pomohli</li>
                  <li>• Vědomí, že zachraňujeme vzpomínky</li>
                  <li>• Možnost změnit životy k lepšímu</li>
                </ul>
              </div>

              <div className="bg-white/10 rounded-xl p-6">
                <h4 className="text-xl font-bold mb-4">Moje vize do budoucna:</h4>
                <ul className="space-y-2 text-white/90">
                  <li>• Aby službu znala každá česká rodina</li>
                  <li>• Aby nikdo nemusel litovat nevyřčených slov</li>
                  <li>• Aby láska přežila všechno</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Jak pracuji */}
        <div className="mb-20">
          <h3 className="text-4xl font-bold text-[#FF6F6D] mb-12 text-center">
            Jak na tom pracuji?
          </h3>

          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h4 className="text-2xl font-bold text-[#FF6F6D] mb-6">Každý den věnuji všechno</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#FF6F6D] w-8 h-8 rounded-full flex items-center justify-center">
                      <Coffee className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">Pracuji 12+ hodin denně na dokonalosti služby</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-[#FF6F6D] w-8 h-8 rounded-full flex items-center justify-center">
                      <Shield className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">Bezpečnost a soukromí jsou mou prioritou číslo 1</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-[#FF6F6D] w-8 h-8 rounded-full flex items-center justify-center">
                      <Heart className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">Každou zpětnou vazbu beru k srdci</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-[#FF6F6D] w-8 h-8 rounded-full flex items-center justify-center">
                      <Clock className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">Osobně odpovídám na každý dotaz do 24 hodin</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h4 className="text-xl font-bold text-[#FF6F6D] mb-4 text-center">
                  Důvěra zákazníků
                </h4>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="flex justify-center gap-1 mb-2">
                      {[1,2,3,4,5].map(i => (
                        <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-2xl font-bold text-[#FF6F6D]">98% spokojenost</p>
                    <p className="text-gray-600 text-sm">z více než 1,200 rodin</p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-700 italic text-center">
                      "Martin není jen vývojář, je to člověk s obrovským srdcem, 
                      který skutečně rozumí tomu, co prožíváme."
                    </p>
                    <p className="text-xs text-gray-500 text-center mt-2">- Anežka, Praha</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Závěrečná zpráva */}
        <div className="text-center bg-gradient-to-r from-[#ffddd8] to-[#ffe8e5] rounded-2xl p-12">
          <Heart className="w-16 h-16 text-[#FF6F6D] mx-auto mb-6" />
          <h3 className="text-3xl font-bold text-[#FF6F6D] mb-6">
            Společně zachráníme vzpomínky
          </h3>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-6">
            Poslední Vzkaz není jen služba - je to můj způsob, jak zajistit, 
            aby se nikomu nestalo to, co se stalo mně. Je to můj dar světu 
            a možnost, jak zachránit to nejcennější - lidskou lásku.
          </p>
          <p className="text-lg text-gray-600">
            <strong className="text-[#FF6F6D]">Protože láska by nikdy neměla zmizet.</strong>
          </p>
        </div>
      </div>
    </div>
  );
}