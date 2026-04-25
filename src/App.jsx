import { Camera } from "lucide-react";
import soonBackground from "./assest/pic/lounchingsoon.png";

export default function App() {
  return (
    <main className="min-h-screen">
      <section className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden px-4 sm:px-6">

        {/* Background */}
        <img
          src={soonBackground}
          alt="Launching soon poster"
          className="absolute inset-0 h-full w-full object-cover [object-position:38%_28%] sm:[object-position:center]"
        />

        {/* Readable copy */}
        <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
          <div className="mx-auto w-full max-w-md rounded-2xl p-4 text-center">
            <h1 className="text-5xl font-serif leading-none text-center text-[#69443c] sm:text-7xl md:text-8xl">
              Launching Soon
            </h1>
            <p className="mt-4 text-center text-lg leading-snug text-[#69443c]">
              We are currently making some improvements to our website!
            </p>
          </div>
        </div>

        {/* Bottom social + notify */}
        <div className="absolute inset-x-0 bottom-8 z-10 flex justify-center px-4 sm:bottom-12 sm:px-6">
          <div className="flex w-full max-w-sm flex-col items-center gap-3 sm:max-w-md">
            <a
              href="https://www.instagram.com/chithiyan.in?igsh=MTNiaHAwZG1la3Bjbw=="
              target="_blank"
              className="text-[#7a4f46] transition hover:scale-110"
            >
              <Camera size={26} />
            </a>

            
          </div>
        </div>

      </section>
    </main>
  );
}