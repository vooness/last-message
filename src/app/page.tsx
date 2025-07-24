import Navbar from "@/components/navbar";
import LandingPage from "@/components/landingpage"; 
import Footer from "@/components/footer";
import How from "@/components/how";
import Cenik from "@/components/cenik";  // Import cenik
import InspirationStories from "@/components/pribeh";  // Import příběhů
import FAQ from "@/components/faq";     // Import FAQ

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <LandingPage />
        <How />    {/* Jak to funguje */}
        <Cenik />  {/* Ceník */}
        <InspirationStories />  {/* Příběhy které inspirovaly */}
        <FAQ />    {/* FAQ */}
      </main>
      <Footer />
    </div>
  );
}