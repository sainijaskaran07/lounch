import { Camera } from "lucide-react";
import soonBackground from "./assest/pic/soon.png";

export default function App() {
  return (
    <main className="min-h-screen bg-[#eee8dd]">
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 sm:px-6">

        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${soonBackground})`,
          }}
        />

        {/* Bottom social + notify */}
        <div className="absolute bottom-10 z-10 flex w-full justify-center sm:bottom-16">
          <div className="flex w-full max-w-md flex-col items-center gap-3">
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