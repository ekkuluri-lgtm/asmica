import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import GoalsSection from "@/components/GoalsSection";
import StatsSection from "@/components/StatsSection";
import VisionSection from "@/components/VisionSection";
import GallerySection from "@/components/GallerySection";
import TeamSection from "@/components/TeamSection";
import MembershipSection from "@/components/MembershipSection";
import JoinSection from "@/components/JoinSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <GoalsSection />
    <StatsSection />
    <VisionSection />
    <JoinSection />
    <GallerySection />
    <TeamSection />
    <MembershipSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
