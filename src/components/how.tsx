export default function ServiceDescription() {
    return (
      <section className="bg-[#ffddd8] py-20 px-6 text-gray-800">
        {/* Úvodní sekce */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold mb-6 text-[#FF6F6D]">
            Poslední Vzkaz
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Uchovávejte své poslední myšlenky, rady nebo vzpomínky pro své
            nejbližší bezpečně a diskrétně. Tato inovativní služba zajišťuje, že
            vaše slova budou uchována i pro budoucí generace.
          </p>
        </div>
  
        {/* Jak to funguje */}
        <div className="py-16 px-8 max-w-7xl mx-auto mb-16">
          <h3 className="text-4xl font-bold mb-12 text-center text-[#FF6F6D]">
            Jak to funguje?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Krok 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-[#FF6F6D] text-white w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-6 text-2xl font-bold">
                1
              </div>
              <h4 className="text-xl font-semibold mb-4">Vytvořte si účet</h4>
              <p className="text-sm">
                Zaregistrujte se snadno pomocí e-mailu a aktivujte svůj účet.
              </p>
            </div>
  
            {/* Krok 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-[#FF6F6D] text-white w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-6 text-2xl font-bold">
                2
              </div>
              <h4 className="text-xl font-semibold mb-4">Nahrajte zprávu</h4>
              <p className="text-sm">
                Natočte krátké video nebo zanechte textovou zprávu, která bude
                uchována pro vaše nejbližší.
              </p>
            </div>
  
            {/* Krok 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-[#FF6F6D] text-white w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-6 text-2xl font-bold">
                3
              </div>
              <h4 className="text-xl font-semibold mb-4">Magnetka s QR kódem</h4>
              <p className="text-sm">
                Obdržíte unikátní magnetku s QR kódem, kterou můžete umístit
                například na lednici.
              </p>
            </div>
  
            {/* Krok 4 */}
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-[#FF6F6D] text-white w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-6 text-2xl font-bold">
                4
              </div>
              <h4 className="text-xl font-semibold mb-4">Zabezpečený přístup</h4>
              <p className="text-sm">
                Při skenu QR kódu obdržíte notifikaci a máte 3 dny na potvrzení
                přístupu. Pokud neodpovíte, zpráva se automaticky zpřístupní.
              </p>
            </div>
          </div>
        </div>
  
        {/* Pro koho je služba určena */}
        <div className=" py-16 px-8 rounded-xl  max-w-7xl mx-auto mb-16 text-center">
          <h3 className="text-4xl font-bold mb-6 text-[#FF6F6D]">
            Pro koho je služba určena?
          </h3>
          <p className="text-lg max-w-3xl mx-auto">
            Tato služba je ideální pro rodiče, kteří chtějí zanechat zprávu svým
            dětem, prarodiče, kteří chtějí předat vzpomínky svým vnoučatům, nebo
            kohokoliv, kdo chce zajistit, že jeho poslední slova budou uchována a
            dostupná těm, kteří na nich nejvíce záleží.
          </p>
        </div>
  
        {/* Nabídka služeb */}
        <div className="py-16 px-8 max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold mb-12 text-center text-[#FF6F6D]">
            Naše služby
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Základní služba */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h4 className="text-2xl font-semibold mb-4 text-center">
                Základní služba
              </h4>
              <ul className="list-disc list-inside text-gray-700">
                <li>Jednorázová zpráva za 500 Kč.</li>
                <li>Maximální délka zprávy: 5 minut (500 MB).</li>
                <li>Fyzická magnetka s unikátním QR kódem.</li>
              </ul>
            </div>
  
            {/* Prémiová služba */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h4 className="text-2xl font-semibold mb-4 text-center">
                Prémiová služba
              </h4>
              <ul className="list-disc list-inside text-gray-700">
                <li>Pokročilé šifrování pro maximální zabezpečení.</li>
                <li>Možnost ukládat více zpráv (každá za 500 Kč).</li>
                <li>Personalizovaný chatbot trénovaný na vašem hlasu.</li>
                <li>Jednorázová platba 5 000 Kč.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
  