export default function LaunchingSoon() {
  return (
    <section className="min-h-screen bg-[#1f232b] px-3 py-3 sm:px-5 sm:py-5">
      <div className="relative flex min-h-[calc(100vh-24px)] items-center justify-center overflow-hidden rounded-[14px] bg-[#f3f1ed] px-6 py-12 sm:min-h-[calc(100vh-40px)] sm:rounded-[18px] sm:px-10">
        {/* paper texture */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:radial-gradient(#000_0.6px,transparent_0.6px)] [background-size:18px_18px]" />

        {/* soft vignette */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.03)_100%)]" />

        {/* star top left */}
        <div className="pointer-events-none absolute left-8 top-14 sm:left-14 sm:top-16">
          <div className="relative h-16 w-16 sm:h-24 sm:w-24 opacity-80">
            <div className="absolute left-1/2 top-0 h-full w-[1.5px] -translate-x-1/2 rounded-full bg-white/80" />
            <div className="absolute left-0 top-1/2 h-[1.5px] w-full -translate-y-1/2 rounded-full bg-white/80" />
            <div className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rotate-45">
              <div className="absolute left-1/2 top-0 h-full w-[1px] -translate-x-1/2 rounded-full bg-white/70" />
              <div className="absolute left-0 top-1/2 h-[1px] w-full -translate-y-1/2 rounded-full bg-white/70" />
            </div>
          </div>
        </div>

        {/* star bottom right large */}
        <div className="pointer-events-none absolute bottom-14 right-8 sm:bottom-16 sm:right-16">
          <div className="relative h-24 w-24 sm:h-36 sm:w-36 opacity-80">
            <div className="absolute left-1/2 top-0 h-full w-[1.5px] -translate-x-1/2 rounded-full bg-white/75" />
            <div className="absolute left-0 top-1/2 h-[1.5px] w-full -translate-y-1/2 rounded-full bg-white/75" />
          </div>
        </div>

        {/* small star bottom right */}
        <div className="pointer-events-none absolute bottom-8 right-4 sm:bottom-10 sm:right-8">
          <div className="relative h-10 w-10 sm:h-14 sm:w-14 opacity-70">
            <div className="absolute left-1/2 top-0 h-full w-[1px] -translate-x-1/2 rounded-full bg-white/70" />
            <div className="absolute left-0 top-1/2 h-[1px] w-full -translate-y-1/2 rounded-full bg-white/70" />
          </div>
        </div>

        {/* content */}
        <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center">
          <p className="mb-8 text-[11px] uppercase tracking-[0.35em] text-[#a8844b]/80 sm:mb-10 sm:text-xs">
            Chithiyan
          </p>

          <h1
            className="font-serif text-[#a8844b] leading-[0.9] tracking-[-0.04em]
            text-6xl sm:text-7xl md:text-8xl lg:text-[7rem]"
            style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
          >
            COMING
            <br />
            SOON
          </h1>

          <p className="mt-8 text-[13px] uppercase tracking-[0.32em] text-[#a8844b]/90 sm:mt-10 sm:text-[15px]">
  chithiyan.com
</p>

          {/* optional subscribe */}
          <form className="mt-8 flex w-full max-w-md flex-col gap-3 sm:mt-10 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="h-12 w-full rounded-full border border-[#a8844b]/25 bg-white/70 px-5 text-sm text-[#6f5733] outline-none placeholder:text-[#a8844b]/55 focus:border-[#a8844b]/50"
            />
            <button
              type="submit"
              className="h-12 rounded-full bg-[#a8844b] px-6 text-sm font-medium text-white transition hover:opacity-90"
            >
              Notify Me
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}