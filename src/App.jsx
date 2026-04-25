import { Camera } from "lucide-react";
import soonBackground from "./assest/pic/soon.png";

export default function App() {
  return (
    <main className="min-h-screen bg-[#eee8dd]">
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">

        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${soonBackground})`,
          }}
        />
            <button
              type="button"
              className="rounded-full bg-[#69443c] px-5 py-2 text-sm font-semibold text-[#f6eee7] shadow-md transition hover:bg-[#593a33]"
            >
              Notify me
            </button>

        

        {/* Bottom social + notify */}
        <div className="absolute bottom-40 z-10 flex w-full justify-center">
          <div className="flex flex-col items-center gap-3">
            <a
              href="https://instagram.com"
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