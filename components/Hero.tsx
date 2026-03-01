const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center overflow-hidden px-6 pb-16 pt-28 text-center sm:min-h-screen sm:pb-0 sm:pt-40">
      {/* Decorative floating orbs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-[10%] top-[20%] h-4 w-4 animate-float rounded-full bg-accent-pink opacity-60" />
        <div className="absolute right-[15%] top-[30%] h-3 w-3 animate-float-delayed rounded-full bg-accent-blue opacity-50" />
        <div className="absolute left-[20%] bottom-[30%] h-2 w-2 animate-pulse-glow rounded-full bg-accent-purple opacity-70" />
        <div className="absolute right-[10%] bottom-[40%] h-5 w-5 animate-float rounded-full bg-accent-cyan opacity-30" />
        <div className="absolute left-[50%] top-[15%] h-2 w-2 animate-float-delayed rounded-full bg-accent-pink opacity-40" />
        {/* Background radial glow */}
        <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-accent-pink/5 via-accent-purple/5 to-accent-blue/5 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-4xl">
        <h1 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="gradient-text">THE BEST WEBSITE EVER</span>
          <br />
          <span className="text-text-primary">Scalable.</span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
          Our technology performing fast blockchain (120K TPS) and it has
          guaranteed AI-based data security. Proof of Stake, its consensus
          algorithm enables unlimited speeds.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#benefits"
            className="btn-gradient-border cursor-pointer rounded-full px-8 py-3 text-sm font-medium tracking-wide transition-all duration-300"
          >
            Get started
          </a>
          <a
            href="#reviews"
            className="btn-gradient-border cursor-pointer rounded-full px-8 py-3 text-sm font-medium tracking-wide transition-all duration-300"
          >
            Read more
          </a>
        </div>
      </div>

      {/* Illustration — full-width, overlapping behind content like the mockup */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 hidden sm:block">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${basePath}/illustration.png`}
          alt="Futuristic blockchain illustration"
          width={1440}
          height={700}
          className="h-auto w-full object-cover object-top"
          fetchPriority="high"
        />
        {/* Bottom gradient fade into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-dark-900 to-transparent" />
      </div>

      {/* Bottom gradient fade (mobile fallback) */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-900 to-transparent sm:hidden" aria-hidden="true" />
    </section>
  );
}
