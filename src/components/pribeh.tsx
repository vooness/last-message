import React from 'react';
import { Heart, Clock, Users, Car, Stethoscope, Flame } from 'lucide-react';

export default function InspirationStories() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hlavní nadpis */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#FF6F6D] to-[#ff8f8d] rounded-2xl mb-6 shadow-lg">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#FF6F6D] mb-6 leading-tight">
            Příběhy, které daly vzniknout<br />
            <span className="text-gray-800">této platformě</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-6">
            Myslel jsem si, že jsem jediný, komu zemřel někdo blízký, aniž by stačil říct to nejdůležitější. 
            Pak jsem poznal tyto lidi. Jejich příběhy mě zlomily a zároveň mi daly sílu vytvořit tohle.
          </p>
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-8 h-1 bg-[#FF6F6D] rounded-full"></div>
            <div className="w-2 h-2 bg-[#FF6F6D] rounded-full"></div>
            <div className="w-8 h-1 bg-[#FF6F6D] rounded-full"></div>
          </div>
        </div>

        {/* Šest příběhů v mřížce */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          
          {/* Příběh 1 */}
          <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
            <div className="flex items-center gap-4 mb-5">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-3 rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300">
                <Car className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">Autonehoda</div>
                <h3 className="text-xl font-bold text-gray-800 leading-tight">
                  &ldquo;Mami, už si nevzpomínám, jak zněl táta&rdquo;
                </h3>
              </div>
            </div>
            
            <div className="space-y-3 text-gray-700 mb-5">
              <p className="leading-relaxed text-sm">
                Pavel (32 let) zemřel při autohavárii, když se vracel z noční směny ve fabrice. 
                Jeho syn Kuba měl tehdy šest let a nejvíc se těšil, až se táta vrátí domů a půjdou spolu ven kopat s míčem.
              </p>

              <p className="leading-relaxed text-sm">
                Dnes je Kubovi patnáct let. Před měsícem seděli s mámou Lindou večer u televize, 
                když z ní zazněl hlas podobný Pavlovu - hlubší, klidný, něžný. 
                Kuba se najednou zastavil uprostřed věty a dlouho ztichl.
              </p>

              <p className="leading-relaxed font-medium text-gray-800 text-sm">
                Po chvíli řekl: <em>&ldquo;Mami, já si už nevzpomínám, jak zněl táta. 
                Myslím, že takhle, ale nejsem si jistý. A bojím se, že si na něj postupně úplně zapomenu.&rdquo;</em>
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 via-blue-50 to-blue-100 rounded-xl p-4 border-l-3 border-blue-400">
              <blockquote className="text-gray-700 italic leading-relaxed mb-3 text-sm">
                &ldquo;Zlomilo mě to. Kuba tehdy plakal poprvé za těch devět let. Říkal, že si pamatuje, 
                jak ho táta učil jezdit na kole a jak spolu stavěli věže z kostek, ale už si nevzpomíná na jeho smích. 
                Že má pocit, jako by zrazoval tátu tím, že na něj zapomíná.&rdquo;
              </blockquote>
              <cite className="text-xs text-blue-600 font-bold">— Linda, Kubova máma</cite>
            </div>
          </div>

          {/* Příběh 2 */}
          <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-red-200">
            <div className="flex items-center gap-4 mb-5">
              <div className="bg-gradient-to-br from-red-400 to-red-600 p-3 rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="text-xs font-bold text-red-600 uppercase tracking-wider mb-1">Rodinná hádka</div>
                <h3 className="text-xl font-bold text-gray-800 leading-tight">
                  Nevyřčená omluva za dvacet let mlčení
                </h3>
              </div>
            </div>
            
            <div className="space-y-3 text-gray-700 mb-5">
              <p className="leading-relaxed text-sm">
                Václav (45 let) a jeho otec Karel (73 let) spolu nemluvili dvacet let kvůli hádce o rodinném domě. 
                Oba byli tvrdohlaví, oba čekali, že ten druhý udělá první krok. 
                &ldquo;Až se uklidní, zavolám mu,&rdquo; říkal si Václav každý rok.
              </p>

              <p className="leading-relaxed text-sm">
                Karel dostal infarkt při práci na zahradě, kde pěstoval rajčata - stejná, jaká učil Václava 
                pěstovat jako malého. Sousedé ho našli vedle záhonu s rukama plnýma hlíny.
              </p>

              <p className="leading-relaxed font-medium text-gray-800 text-sm">
                Václav přijel na pohřeb a našel v otcově nočním stolku nedokončený dopis. 
                Začínal slovy: <em>&ldquo;Václave, vím, že jsem byl hrdý blázen. 
                Chci ti říct, že mě mrzí každý den, kdy jsme si nemluvili...&rdquo;</em> Zbytek byla jen škrtanina.
              </p>
            </div>

            <div className="bg-gradient-to-r from-red-50 via-red-50 to-red-100 rounded-xl p-4 border-l-3 border-red-400">
              <blockquote className="text-gray-700 italic leading-relaxed mb-3 text-sm">
                &ldquo;Dvacet let jsem mu nedokázal odpustit. A on mi dvacet let nemohl říct, že mu to líto. 
                Teď už to nikdy nenapravíme. Žiju s tím, že jsem byl stejně hrdý blázen jako on. 
                A že naše poslední slova byla vztek, ne láska.&rdquo;
              </blockquote>
              <cite className="text-xs text-red-600 font-bold">— Václav, Karlův syn</cite>
            </div>
          </div>

          {/* Příběh 3 */}
          <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200">
            <div className="flex items-center gap-4 mb-5">
              <div className="bg-gradient-to-br from-purple-400 to-purple-600 p-3 rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300">
                <Users className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="text-xs font-bold text-purple-600 uppercase tracking-wider mb-1">Válečné tajemství</div>
                <h3 className="text-xl font-bold text-gray-800 leading-tight">
                  Rodinná historie, která zmizela s babičkou
                </h3>
              </div>
            </div>
            
            <div className="space-y-3 text-gray-700 mb-5">
              <p className="leading-relaxed text-sm">
                Anna (28 let) věděla, že její babička Marie prožila něco strašného za války, 
                ale nikdy o tom mluvit nechtěla. Když se Anna ptala, babička vždycky řekla: 
                &ldquo;Až budu starší a ty dospělejší, povím ti všechno.&rdquo; Anna trpělivě čekala.
              </p>

              <p className="leading-relaxed text-sm">
                Marie zemřela náhle ve 84 letech při nakupování - srdce jí vypovědělo službu 
                přímo v uličce se zeleninou. Anna měla pocit, že jí někdo ukradl čas na důležité rozhovory.
              </p>

              <p className="leading-relaxed font-medium text-gray-800 text-sm">
                Po pohřbu Anna našla v babiččině bytě starou fotografii ukrytou v kuchařce - 
                mladá žena s malým dítětem v náručí, kterou nikdy neviděla. 
                Na zadní straně bylo napsáno: <em>&ldquo;Můj první syn František, 1943.&rdquo;</em> 
                Anna netušila, že má někde strýčka.
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 via-purple-50 to-purple-100 rounded-xl p-4 border-l-3 border-purple-400">
              <blockquote className="text-gray-700 italic leading-relaxed mb-3 text-sm">
                &ldquo;Celý život jsem si myslela, že táta je jedináček. Teď zjišťujem, že babička měla 
                ještě jednoho syna, kterého jí vzali během války. Možná přežil, možná má rodinu. 
                Možná máme příbuzné, o kterých nevíme. A já se už nikdy nedozvím pravdu.&rdquo;
              </blockquote>
              <cite className="text-xs text-purple-600 font-bold">— Anna, Mariina vnučka</cite>
            </div>
          </div>

          {/* Příběh 4 */}
          <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200">
            <div className="flex items-center gap-4 mb-5">
              <div className="bg-gradient-to-br from-green-400 to-green-600 p-3 rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300">
                <Stethoscope className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="text-xs font-bold text-green-600 uppercase tracking-wider mb-1">Rakovina</div>
                <h3 className="text-xl font-bold text-gray-800 leading-tight">
                  &ldquo;Máma nikdy neřekla, že mě má ráda&rdquo;
                </h3>
              </div>
            </div>
            
            <div className="space-y-3 text-gray-700 mb-5">
              <p className="leading-relaxed text-sm">
                Jitka (54 let) bojovala s rakovinou prsu tři dlouhé roky. Chemoterapie, ozařování, operace - 
                celou dobu tvrdila, že to zvládne, že je silná. Se svou dcerou Terezou (29 let) 
                mluvila o všem - o léčbě, o práci, o tom, co uvařit k večeři. Jen ne o citech.
              </p>

              <p className="leading-relaxed text-sm">
                V jejich rodině se o lásce prostě nemluvilo - projevovala se činy, ne slovy. 
                Jitka si říkala: &ldquo;To přece ví, jak ji miluju. Proč bych to musela říkat nahlas?&rdquo; 
                Tereza věděla, že máma ji miluje, ale nikdy to neslyšela.
              </p>

              <p className="leading-relaxed font-medium text-gray-800 text-sm">
                Jitka zemřela ve spánku po poslední chemoterapii. Její tělo to už nevydrželo. 
                Tereza u ní seděla a čekala, že se probudí a řekne jí ta slova. Nikdy se neprobudila.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 via-green-50 to-green-100 rounded-xl p-4 border-l-3 border-green-400">
              <blockquote className="text-gray-700 italic leading-relaxed mb-3 text-sm">
                &ldquo;Tři roky jsme věděly, že může umřít. Tři roky jsme o tom mluvily každý den. 
                A přitom jsme si nikdy neřekly &apos;mám tě ráda&apos;. Teď budu celý život pochybovat, 
                jestli věděla, jak moc pro mě znamenala.&rdquo;
              </blockquote>
              <cite className="text-xs text-green-600 font-bold">— Tereza, Jitkina dcera</cite>
            </div>
          </div>

          {/* Příběh 5 */}
          <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200">
            <div className="flex items-center gap-4 mb-5">
              <div className="bg-gradient-to-br from-orange-400 to-orange-600 p-3 rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300">
                <Flame className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="text-xs font-bold text-orange-600 uppercase tracking-wider mb-1">Hasič</div>
                <h3 className="text-xl font-bold text-gray-800 leading-tight">
                  Prázdný dopis pro děti
                </h3>
              </div>
            </div>
            
            <div className="space-y-3 text-gray-700 mb-5">
              <p className="leading-relaxed text-sm">
                Radek (42 let) byl profesionální hasič už 15 let. Každé ráno, když odcházel do práce 
                a líbal na rozloučenou manželku Petru a děti, si říkal, že večer napíše Martinovi (16) 
                a Lucce (12) dopis pro případ, že by se něco stalo.
              </p>

              <p className="leading-relaxed text-sm">
                &ldquo;Zítra,&rdquo; říkal si vždycky. &ldquo;Dnes nemám náladu na takové těžké věci. 
                Zítra si sednu, v klidu si to promyslím a napíšu jim, co by měli vědět.&rdquo; 
                To zítra ale nikdy nepřišlo.
              </p>

              <p className="leading-relaxed font-medium text-gray-800 text-sm">
                Při zásahu v továrně na chemikálie se zřítil strop. Radek zachránil dva kolegy, 
                ale sám se už nedostal ven. V jeho šatně našli kolegové založený papír 
                s nadpisem &ldquo;Pro Martina a Lucku&rdquo;. Pod tím byla prázdná stránka.
              </p>
            </div>

            <div className="bg-gradient-to-r from-orange-50 via-orange-50 to-orange-100 rounded-xl p-4 border-l-3 border-orange-400">
              <blockquote className="text-gray-700 italic leading-relaxed mb-3 text-sm">
                &ldquo;Děti se mě stále ptají, co by jim táta napsal. Martin říká, že by chtěl vědět, 
                jestli na něj táta byl hrdý, když vyhrál soutěž v programování. Lucka se ptá, 
                jestli si táta myslel, že bude dobrá máma. A já jim nemůžu odpovědět, protože nevím.&rdquo;
              </blockquote>
              <cite className="text-xs text-orange-600 font-bold">— Petra, Radkova manželka</cite>
            </div>
          </div>

          {/* Příběh 6 */}
          <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-indigo-200">
            <div className="flex items-center gap-4 mb-5">
              <div className="bg-gradient-to-br from-indigo-400 to-indigo-600 p-3 rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-1">Alzheimer</div>
                <h3 className="text-xl font-bold text-gray-800 leading-tight">
                  Děda, který zapomněl na svou vnučku
                </h3>
              </div>
            </div>
            
            <div className="space-y-3 text-gray-700 mb-5">
              <p className="leading-relaxed text-sm">
                Josef (78 let) si vždycky pamatoval všechno - jména spolužáků ze základky, data, 
                příběhy z mládí, recepty od své mámy. S vnučkou Klárou (22 let) měl speciální vztah. 
                Učil ji hrát šachy, vyprávěl jí pohádky, které si vymýšlel, a každou neděli spolu pekli koláčky.
              </p>

              <p className="leading-relaxed text-sm">
                Když Kláře bylo 15, děda začal zapomínat jména. Nejdřív jména sousedů, 
                pak vzdálených příbuzných. O rok později už nepoznával ani Kláru. 
                Díval se na ni jako na milou cizí slečnu, která ho přišla navštívit.
              </p>

              <p className="leading-relaxed font-medium text-gray-800 text-sm">
                Nejvíc Kláru bolelo, když se při poslední návštěvě zeptal: &ldquo;A kdo jste vy, slečno? 
                Jste velmi milá.&rdquo; Ukázala mu jejich společnou fotografii z jejích osmnáctin. 
                Josef se podíval a řekl: &ldquo;To je hezká holčička. Škoda, že ji neznám.&rdquo;
              </p>
            </div>

            <div className="bg-gradient-to-r from-indigo-50 via-indigo-50 to-indigo-100 rounded-xl p-4 border-l-3 border-indigo-400">
              <blockquote className="text-gray-700 italic leading-relaxed mb-3 text-sm">
                &ldquo;Děda byl můj nejlepší kamarád. Věděl o mně všechno a já o něm. 
                Měli jsme spolu tisíc vzpomínek a sdílených chvil. A teď je to, jako bychom se nikdy nepotkali. 
                Alzheimer mi vzal nejen dědu, ale i všechny naše společné příběhy.&rdquo;
              </blockquote>
              <cite className="text-xs text-indigo-600 font-bold">— Klára, Josefova vnučka</cite>
            </div>
          </div>
        </div>

        {/* Závěrečná zpráva */}
        <div className="bg-gradient-to-r from-[#FF6F6D] to-[#ff8f8d] rounded-2xl p-8 text-white text-center shadow-xl">
          <div className="max-w-4xl mx-auto">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-6">
              Proto existuje Poslední Vzkaz
            </h3>
            <p className="text-lg leading-relaxed mb-6">
              Po těchto rozhovorech jsem pochopil, že nedokončená slova nejsou výjimka - jsou všude kolem nás. 
              V nemocnicích, na pohřbech, v domovech důchodců. Většina z nás prostě věří, 
              že bude čas říct to důležité &ldquo;zítra&rdquo;. A často ten čas už nepřijde.
            </p>
            <div className="bg-white/10 rounded-xl p-5 mb-6">
              <p className="text-base font-medium leading-relaxed">
                <strong>Kuba ztratil tátu hlas. Václav nedostal tatovu omluvu. 
                Anna nepozná svou rodinu. Tereza neví, jestli byla milovaná. 
                Martin a Lucka nevědí, na co byl táta hrdý. Klára ztratila nejlepšího kamaráda.</strong>
              </p>
            </div>
            <p className="text-lg font-bold">
              Poslední Vzkaz vznikl proto, aby se tento příběh už nikdy neopakoval.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}