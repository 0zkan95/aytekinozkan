"use client";
import { navItems } from "@/data";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Career from "@/components/Career";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";

const Grid = dynamic(() => import('@/components/Grid'), {
  ssr: false,
})



export default function Home() {
  return (
    <main className="main-page">
      <div className="main-container">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Career />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
