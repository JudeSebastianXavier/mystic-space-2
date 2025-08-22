import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProjectGallery from "@/components/ProjectGallery";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProjectGallery />
      </main>
      <Footer />
    </div>
  );
}
