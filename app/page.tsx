import HeroBanner from "./components/hero/HeroBanner";
import Navbar from "./components/navbar/Navbar";

export default function Home() {
  return (
    <div className="bg-[#163031] min-h-screen relative overflow-hidden">
      {/* grid lines */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 bottom-0 left-[0%] w-px bg-[#225456] opacity-50"></div>
        <div className="absolute top-0 bottom-0 left-[25%] w-px bg-[#225456] opacity-50"></div>
        <div className="absolute top-0 bottom-0 left-[50%] w-px bg-[#225456] opacity-50"></div>
        <div className="absolute top-0 bottom-0 left-[75%] w-px bg-[#225456] opacity-50"></div>
        <div className="absolute top-0 bottom-0 right-[0%] w-px bg-[#225456] opacity-50"></div>
      </div>

      {/* main content */}
      <main className="relative z-10 container mx-auto">
        <Navbar />
        {/* hero */}
        <HeroBanner/>
        {/*  */}
        <h2 className="text-2xl text-red-600 mt-10">
          This site is under construction now wait some time
        </h2>
      </main>
    </div>
  );
}

