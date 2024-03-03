import AboutUS from "@/components/home/About";
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="max-w-screen-2xl mx-auto">
        <AboutUS />
      </div>
    </>
  );
}
