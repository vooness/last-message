import Navbar from "@/components/navbar";
import LandingPage from "@/components/landingpage";
import Footer from "@/components/footer";
import How from "@/components/how"; // Import the how.tsx component

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <LandingPage />
        <How /> {/* Insert the how.tsx component here */}
      </main>
      <Footer />
    </div>
  );
}
