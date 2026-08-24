import Header from "@/components/Header";
import ServicesPreview from "@/components/ServicesPreview";
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-950">

      {/* FIXED WHITE HEADER */}
     <Header />

      {/* HERO */}
      <section className="relative mt-[88px] min-h-[calc(100vh-88px)] overflow-hidden md:mt-[105px] md:min-h-[calc(100vh-105px)]">

        {/* HERO IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2200&q=85')",
          }}
        />

        {/* BLUE IMAGE OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#123B5D]/85 via-[#123B5D]/45 to-transparent md:from-[#123B5D]/80 md:via-[#123B5D]/35" />

        {/* HERO CONTENT */}
        <div className="relative z-10 flex min-h-[calc(100vh-88px)] items-end px-5 pb-12 pt-20 md:min-h-[calc(100vh-105px)] md:px-10 md:pb-20 lg:px-16">

          <div className="max-w-3xl text-white">

            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.2em] text-white/80 md:mb-5 md:text-sm md:tracking-[0.22em]">
              Accounting & Financial Support
            </p>

            <h1 className="max-w-[330px] text-[46px] font-semibold leading-[0.94] tracking-[-0.04em] sm:max-w-md sm:text-6xl md:max-w-3xl md:text-7xl lg:text-8xl">
              Accounting Infrastructure for your business.
            </h1>

            <p className="mt-6 max-w-[320px] text-base leading-7 text-white/85 md:mt-7 md:max-w-xl md:text-xl md:leading-8">
              Clear advice. Reliable support. Better financial decisions.
            </p>

            <a
              href="#services"
              className="mt-8 inline-flex items-center gap-3 border-b border-white pb-1 text-sm font-medium transition-all duration-300 hover:gap-5 md:mt-9 md:text-base"
            >
              Explore our services
              <span>→</span>
            </a>

          </div>
        </div>

      </section>
<ServicesPreview />
{/* WHY US */}
<section className="bg-white px-5 py-20 md:px-10 md:py-28 lg:px-16">
  <div className="mx-auto max-w-7xl">

    <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">

      {/* IMAGE */}
      <div className="order-2 overflow-hidden rounded-[24px] md:order-1">
        <img
          src="/laptop.png"
          alt=""
          className="h-[300px] w-full object-contain md:h-[460px] lg:h-[500px]"
        />
      </div>

      {/* TEXT */}
      <div className="order-1 md:order-2">

        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#4F8EB8]">
          Why us
        </p>

        <h2 className="max-w-xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#123B5D] md:text-5xl lg:text-6xl">
          Why The Bookkeeping Corporation?
        </h2>

        <p className="mt-7 max-w-xl text-lg leading-8 text-[#53616B] md:text-xl md:leading-9">
          We combine professional expertise with a personal approach, providing
          reliable financial support tailored to you and your business.
        </p>

        <p className="mt-5 max-w-xl text-base leading-7 text-[#6B7780]">
          From everyday bookkeeping to tax planning and cloud accounting, we
          focus on accuracy, efficiency and clear advice — giving you confidence
          in your finances and more time to focus on what matters.
        </p>

        <a
          href="/about"
          className="mt-8 inline-flex items-center gap-3 border-b border-[#123B5D] pb-1 text-sm font-semibold text-[#123B5D] transition-all duration-300 hover:gap-5"
        >
          Discover more about us
          <span>→</span>
        </a>

      </div>

    </div>

  </div>
</section>
{/* CONTACT CTA */}
<section className="bg-white px-5 pb-20 pt-6 md:px-10 md:pb-28 md:pt-10 lg:px-16">
  <div className="mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-gradient-to-br from-[#123B5D] via-[#245E86] to-[#79AFCF] px-6 py-12 md:px-12 md:py-16 lg:px-16 lg:py-20">

    <div className="grid gap-12 md:grid-cols-2 md:items-end">

      {/* LEFT SIDE */}
      <div>
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-white/65">
          Let&apos;s Talk
        </p>

        <h2 className="max-w-xl text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-white md:text-5xl lg:text-6xl">
          Need clarity with your finances?
        </h2>
      </div>

      {/* RIGHT SIDE */}
      <div className="md:pb-1">
        <p className="max-w-lg text-base leading-7 text-white/80 md:text-lg md:leading-8">
          Whether you&apos;re looking for ongoing accounting support or simply
          need some advice, our team is here to help.
        </p>

        <a
          href="/contact"
          className="mt-8 inline-flex items-center gap-3 border-b border-white pb-1 text-sm font-semibold text-white transition-all duration-300 hover:gap-5"
        >
          Get in touch
          <span>→</span>
        </a>

        <a
          href="mailto:info@thebookkeepingcorporation.com"
          className="mt-7 block break-all text-sm text-white/65 transition-colors hover:text-white"
        >
          info@thebookkeepingcorporation.com
        </a>
      </div>

    </div>
  </div>
</section>
{/* FOOTER */}
<footer className="border-t border-slate-200 bg-white px-5 py-14 md:px-10 md:py-16 lg:px-16">
  <div className="mx-auto max-w-7xl">

    <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr_1.2fr] md:gap-10">

      {/* BRAND */}
      <div>
        <img
          src="/logo.jpg"
          alt="The Bookkeeping Corporation"
          className="h-20 w-auto object-contain"
        />

        <p className="mt-5 max-w-sm text-sm leading-6 text-slate-500">
          Reliable accounting, bookkeeping and financial support for businesses
          and individuals.
        </p>
      </div>

      {/* NAVIGATION */}
      <div>
        <h3 className="text-sm font-semibold text-[#123B5D]">
          Navigation
        </h3>

        <div className="mt-5 flex flex-col gap-3 text-sm text-slate-500">
          <a href="/" className="transition-colors hover:text-[#123B5D]">
            Home
          </a>

          <a href="/services" className="transition-colors hover:text-[#123B5D]">
            Services
          </a>

          <a href="/about" className="transition-colors hover:text-[#123B5D]">
            About Us
          </a>

          <a href="/contact" className="transition-colors hover:text-[#123B5D]">
            Contact
          </a>
        </div>
      </div>

      {/* LEGAL */}
      <div>
        <h3 className="text-sm font-semibold text-[#123B5D]">
          Legal
        </h3>

        <div className="mt-5 flex flex-col gap-3 text-sm text-slate-500">
          <a
            href="/terms"
            className="transition-colors hover:text-[#123B5D]"
          >
            Terms & Conditions
          </a>

          <a
            href="/privacy"
            className="transition-colors hover:text-[#123B5D]"
          >
            Privacy Policy
          </a>
        </div>
      </div>

      {/* CONTACT */}
      <div>
        <h3 className="text-sm font-semibold text-[#123B5D]">
          Contact
        </h3>

        <div className="mt-5 flex flex-col gap-3 text-sm text-slate-500">
          <a
            href="mailto:info@thebookkeepingcorporation.com"
            className="break-all transition-colors hover:text-[#123B5D]"
          >
            info@thebookkeepingcorporation.com
          </a>

        </div>
      </div>

    </div>

    {/* BOTTOM BAR */}
    <div className="mt-14 flex flex-col gap-4 border-t border-slate-200 pt-6 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
      <p>
        © 2026 The Bookkeeping Corporation. All rights reserved.
      </p>

      <p>
        Professional accounting support, built around your business.
      </p>
    </div>

  </div>
</footer>
    </main>
  );
}
