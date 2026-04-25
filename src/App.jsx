import { Camera, Menu, MessageCircle, Plus, Search } from "lucide-react";

export default function App() {
  return (
    <main className="min-h-screen bg-[#eee8dd]">
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-10">
        
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1618220252344-8ec99ec624b1?q=80&w=1600')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#eee4d6]/40 backdrop-blur-[1px]" />

        {/* Top Icons */}
        <div className="absolute left-6 top-6 z-10 flex gap-4 text-[#765047]">
          <Menu size={24} />
          <MessageCircle size={22} />
          <Plus size={22} />
        </div>

        {/* Search */}
        <div className="absolute top-6 z-10 flex items-center gap-2 rounded-full bg-black/10 px-4 py-2 text-[#765047]">
          <Search size={16} />
          <span className="text-sm">chithiyan</span>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-[#765047]">
          <p className="mb-10 text-xs tracking-widest font-semibold">
            CHITHIYAN GIFTS
          </p>

          <h1 className="text-6xl font-serif leading-tight">
            Launching <br /> soon!
          </h1>

          <p className="mt-6 max-w-md mx-auto">
            We are currently making some improvements to our website!
          </p>

          <button className="mt-8 px-10 py-3 bg-white rounded-full text-sm hover:scale-105 transition">
            Notify Me
          </button>

          <div className="mt-10 flex justify-center">
            <Camera />
          </div>
        </div>

      </section>
    </main>
  );
}