import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";

export default function Home() {
  return (
    <main className="relative flex flex-col justify-center items-center bg-black-100 mx-auto px-5 sm:px-10 overflow-hidden">
      <div className="w-full max-w-7xl">
        <FloatingNav navItems={[{ name: "Home", link: "/" }]} />
        <Hero />
        <Grid />
      </div>
    </main>
  );
}
