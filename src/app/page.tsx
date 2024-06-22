import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WorkEx from "@/components/ui/WorkExp";
import { HomeProjects } from "@/components/HomeProjects";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.0.2]">
        <HeroSection/>
        <WorkEx/>
        <HomeProjects/>
        <TechStack/>
        <Footer/>
    </main>

  );
}
