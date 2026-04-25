import { Camera } from "lucide-react";
import soonBackground from "./assest/pic/soon.png";

export default function App() {
  return (
    <main className="min-h-screen bg-[#eee8dd]">
      <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-4 sm:px-6">

        {/* Background */}
        <div
          className="absolute inset-0 bg-contain bg-center bg-no-repeat sm:bg-cover"
          style={{
            backgroundImage: `url(${soonBackground})`,
          }}
        />

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