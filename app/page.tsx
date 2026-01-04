import Hero from "@/components/landing/Hero";
import TechSpecs from "@/components/landing/TechSpecs";
import ProductCarousel from "@/components/landing/ProductCarousel";
import DropCounter from "@/components/landing/DropCounter";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <TechSpecs />
      <ProductCarousel />
      <DropCounter />
      <Footer />
    </div>
  );
}
