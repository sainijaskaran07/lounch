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

            <div className="flex w-full flex-col gap-2 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-full border border-[#69443c]/40 bg-[#f6eee7] px-4 py-2 text-sm text-[#4f332d] placeholder:text-[#8a6a61] outline-none focus:border-[#69443c] focus:ring-2 focus:ring-[#69443c]/30"
              />
              <button
                type="button"
                className="w-full rounded-full bg-[#69443c] px-5 py-2 text-sm font-semibold text-[#f6eee7] shadow-md transition hover:bg-[#593a33] sm:w-auto"
              >
                Notify me
              </button>
            </div>

            <p className="text-center text-xs font-medium tracking-wide text-[#7a4f46]">
              Coming soon
            </p>
          </div>
        </div>

      </section>
    </main>
  );
}