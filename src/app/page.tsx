import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import AnimatedBackground from "@/components/AnimatedBackground";
import SplashLoader from "@/components/SplashLoader";
import Competencies from "@/components/Competencies";
import Skills from "@/components/Skills";
import LeadershipMandate from "@/components/LeadershipMandate";
import ImpactStrip from "@/components/ImpactStrip";

export default function Portfolio() {
  return (
    <main className="relative min-h-screen text-slate-100 selection:bg-cyan-500/30">
      <SplashLoader />
      <AnimatedBackground />

      <div className="relative z-10">
        <Hero />
        <ImpactStrip />
        <LeadershipMandate />
        <Competencies />
        <Experience />
        <Skills />

        <footer className="border-t border-white/[0.06] py-20 text-center text-sm text-slate-500">
          <p className="tracking-wide">
            Vivek Bhandari · Technology Director · Portfolio 2026
          </p>
        </footer>
      </div>
    </main>
  );
}