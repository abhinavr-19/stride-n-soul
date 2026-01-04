import Hero from "@/components/landing/Hero";
import TechSpecs from "@/components/landing/TechSpecs";
import ProductCarousel from "@/components/landing/ProductCarousel";
import DropCounter from "@/components/landing/DropCounter";
import Footer from "@/components/landing/Footer";

import About from '@/components/landing/About'

export default function Home() {
  return (
    <main className="relative bg-charcoal text-vapor overflow-x-hidden selection:bg-lime selection:text-black">
      <Hero />
      <ProductCarousel />
      <About />
      <TechSpecs />
      <DropCounter />
      <Footer />
    </main>
  )
}
