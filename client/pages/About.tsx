import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-7xl mx-auto px-6 lg:px-[150px] py-24">
        <div className="text-center">
          <h1 className="text-4xl lg:text-64 font-medium text-foreground mb-6">
            About Lemuria
          </h1>
          <p className="text-lg lg:text-24 text-foreground-muted mb-8">
            Coming soon! Please continue prompting to fill in this page content.
          </p>
          <div className="text-foreground-light">
            This page will tell Lemuria's story, background, and design philosophy.
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
