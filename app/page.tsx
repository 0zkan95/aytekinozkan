"use client";
import { navItems } from "@/data";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Career from "@/components/Career";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";





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
