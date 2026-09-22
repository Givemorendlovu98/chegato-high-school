import Navbar from "@/app/components/layout/Navbar";;
import HeroSection from "@/app/components/home/HeroSection";
import Statistics from "@/app/components/home/Statistics";
import WhyChooseUs from "./components/home/WhyChooseUs";
import PrincipalMessage from "./components/home/PrincipalMessage";
import GalleryPreview from "./components/home/GalleryPreview";
import NewsSection from "./components/home/NewsSection";
import Footer from "./components/layout/Footer";
import AdmissionCTA from "./components/home/AdmissionCTA";
import Testimonials from "./components/home/Testimonials";
import AcademicPrograms from "./components/home/AcademicPrograms";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Statistics />
      <WhyChooseUs />
      <PrincipalMessage />
      <Testimonials />
      <AcademicPrograms />
      <NewsSection />
      <GalleryPreview />
      <AdmissionCTA />
      <Footer />
    </main>
  );
}
