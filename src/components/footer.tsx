import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-[#ffddd8] text-gray-800 py-12">
      <div className="container mx-auto px-6 md:px-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="text-2xl font-extrabold">Last Message</div>
            <p className="text-sm text-center md:text-left">
              Bezpečné místo pro uchovávání vzpomínek a poselství. Moderní a snadno použitelná platforma, která propojuje generace.
            </p>
            <p className="text-sm text-center md:text-left">
              Přidejte svá slova, která budou uchována navždy.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-semibold mb-4">Odkazy</h4>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <a href="#home" className="hover:underline">Domů</a>
              </li>
              <li>
                <a href="#features" className="hover:underline">Funkce</a>
              </li>
              <li>
                <a href="#pricing" className="hover:underline">Ceník</a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">Kontakt</a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold mb-4">Podpora</h4>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <a href="#privacy" className="hover:underline">Ochrana soukromí</a>
              </li>
              <li>
                <a href="#terms" className="hover:underline">Podmínky užití</a>
              </li>
              <li>
                <a href="#faq" className="hover:underline">Časté dotazy</a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h4 className="font-semibold mb-4">Sledujte nás</h4>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-gray-600 transition"
              >
                <FiFacebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-gray-600 transition"
              >
                <FiTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-gray-600 transition"
              >
                <FiInstagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-gray-600 transition"
              >
                <FiLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-400 my-8"></div>

        {/* Bottom Section */}
        <div className="text-center">
          <h4 className="font-semibold mb-4">Důležité informace</h4>
          <p className="text-sm mb-2">
            Máte otázky? Kontaktujte naši zákaznickou podporu:{" "}
            <a href="mailto:support@poslednivzkaz.cz" className="hover:underline">
              support@poslednivzkaz.cz
            </a>
          </p>
          <p className="text-sm mb-2">
            Chcete vědět více? Navštivte naše <a href="#faq" className="hover:underline">Časté dotazy</a>.
          </p>
          <p className="text-sm mt-4">&copy; 2025 Poslední Vzkaz. Všechna práva vyhrazena.</p>
        </div>
      </div>
    </footer>
  );
}
