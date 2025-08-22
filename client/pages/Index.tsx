import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProjectGallery from "@/components/ProjectGallery";
import Footer from "@/components/Footer";

export default function Index() {
  console.log('Index component loaded');
  
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div style={{ padding: '20px', background: 'red', color: 'white' }}>
        DEBUG: App is loading! If you see this, the app is working.
      </div>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProjectGallery />
      </main>
      <Footer />
    </div>
  );
}
