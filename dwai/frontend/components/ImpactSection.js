"use client";

export default function StatsSection() {
  return (
    <section
      className="relative overflow-hidden bg-purple-900 py-24"
      aria-labelledby="stats-h2"
    >
      {/* decorative circles (same as ::before and ::after) */}
      <div className="pointer-events-none absolute -top-[60px] -right-[60px] h-[300px] w-[300px] rounded-full border border-white/10" />
      <div className="pointer-events-none absolute -bottom-[80px] -left-[80px] h-[400px] w-[400px] rounded-full border border-white/5" />

      <div className="mx-auto max-w-7xl px-6">

        {/* HEADER */}
        <div className="mb-16 text-center">
          <div className="relative inline-block text-pink-400 text-sm font-semibold uppercase tracking-[0.14em]">
            Our Impact
            <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-pink-400"></span>
          </div>

          <h2
            id="stats-h2"
            className="mt-4 text-[clamp(2rem,3vw,2.8rem)] font-serif font-medium leading-tight text-white"
          >
            Measuring What Matters
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-[2px]">

          {/* CARD 1 */}
          <div className="bg-white/5 border border-white/10 p-12 text-center transition hover:bg-white/10">
            <div className="mx-auto mb-5 flex h-11 w-11 items-center justify-center border border-pink-500/30">
              <svg viewBox="0 0 24 24" className="h-5 w-5 stroke-pink-400 fill-none">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>

            <div className="text-5xl font-semibold text-white">
              10<span className="text-pink-400 font-serif font-medium leading-tight">+</span>
            </div>
            <div className="mt-2 text-[0.78rem] uppercase tracking-[0.14em] text-white/60">
              States Reached
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-white/5 border border-white/10 p-12 text-center transition hover:bg-white/10">
            <div className="mx-auto mb-5 flex h-11 w-11 items-center justify-center border border-pink-500/30">
              <svg viewBox="0 0 24 24" className="h-5 w-5 stroke-pink-400 fill-none">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>

            <div className="text-5xl font-semibold text-white">
              2,000<span className="text-pink-400 font-serif font-medium leading-tight">+</span>
            </div>
            <div className="mt-2 text-[0.78rem] uppercase tracking-[0.14em] text-white/60">
              Deaf Women Trained
            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-white/5 border border-white/10 p-12 text-center transition hover:bg-white/10">
            <div className="mx-auto mb-5 flex h-11 w-11 items-center justify-center border border-pink-500/30">
              <svg viewBox="0 0 24 24" className="h-5 w-5 stroke-pink-400 fill-none">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>

            <div className="text-5xl font-semibold text-white">
              20<span className="text-pink-400 font-serif font-medium leading-tight">+</span>
            </div>
            <div className="mt-2 text-[0.78rem] uppercase tracking-[0.14em] text-white/60">
              Community Projects
            </div>
          </div>

          {/* CARD 4 */}
          <div className="bg-white/5 border border-white/10 p-12 text-center transition hover:bg-white/10">
            <div className="mx-auto mb-5 flex h-11 w-11 items-center justify-center border border-pink-500/30">
              <svg viewBox="0 0 24 24" className="h-5 w-5 stroke-pink-400 fill-none">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>

            <div className="text-5xl font-semibold text-white">
              6<span className="text-pink-400 font-serif font-medium leading-tight">+</span>
            </div>
            <div className="mt-2 text-[0.78rem] uppercase tracking-[0.14em] text-white/60">
              Partnerships Formed
            </div>
          </div>
        </div>

        {/* FOOTNOTE */}
        <p className="mt-14 text-center font-self font-medium text-sm italic text-white/50">
          Together, we're not just making numbers — we're building opportunities,
          changing lives, and amplifying Deaf voices across Nigeria.
        </p>
      </div>
    </section>
  );
}