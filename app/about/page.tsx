import Header from "@/components/Header";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Header />

      {/* HERO */}
      <section className="mt-[88px] bg-[#F7FAFC] px-5 py-20 md:mt-[105px] md:px-10 md:py-28 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#4F8EB8]">
            About Us
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.04em] text-[#123B5D] md:text-7xl">
            Modern accounting, built around you.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#53616B] md:text-xl md:leading-9">
            The Bookkeeping Corporation is a modern accounting firm dedicated
            to delivering reliable and efficient financial services to
            businesses and individuals.
          </p>
        </div>
      </section>

      {/* MAIN ABOUT */}
      <section className="px-5 py-20 md:px-10 md:py-28 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
       <div className="service-wave service-wave-one" aria-hidden="true">
  <span />
  <span />
  <span />
  <span />
  <span />
  <span />
  <span />
  <span />
</div>
          {/* LEFT */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#4F8EB8]">
              Established 2021
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#123B5D] md:text-5xl">
              Financial support with clarity and care.
            </h2>
          </div>

          {/* RIGHT */}
          <div className="space-y-6 text-base leading-8 text-[#5D6870] md:text-lg">
            <p>
              Founded in 2021, The Bookkeeping Corporation is a modern
              accounting firm focused on helping clients manage their finances
              with confidence.
            </p>

            <p>
              We provide a full range of services including bookkeeping,
              payroll, tax advice and HMRC compliance, combining professional
              expertise with modern accounting technology.
            </p>
            <p>
              Our team is committed to helping clients maintain accurate
              financial records, navigate complex tax regulations and improve
              their overall financial performance.
            </p>

            <p>
              Whether you are a startup, a growing business or an individual
              looking for greater financial clarity, we provide tailored
              solutions designed around your needs.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-[#F7FAFC] px-5 py-20 md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="mb-12 text-xs font-semibold uppercase tracking-[0.22em] text-[#4F8EB8]">
            What matters to us
          </p>
 
          <div className="grid gap-8 md:grid-cols-3">
            
            <div className="border-t border-[#BFD4E1] pt-6">
              <p className="text-sm font-semibold text-[#4F8EB8]">01</p>
              <h3 className="mt-4 text-2xl font-semibold text-[#123B5D]">
                Personal service
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#64717A]">
                We focus on personalised client care and provide support that
                reflects the needs of each business or individual.
              </p>
            </div>

            <div className="border-t border-[#BFD4E1] pt-6">
              <p className="text-sm font-semibold text-[#4F8EB8]">02</p>
              <h3 className="mt-4 text-2xl font-semibold text-[#123B5D]">
                Professional standards
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#64717A]">
                Accuracy, integrity, professionalism and full compliance sit
                at the heart of the way we work.
              </p>
            </div>

            <div className="border-t border-[#BFD4E1] pt-6">
              <p className="text-sm font-semibold text-[#4F8EB8]">03</p>
              <h3 className="mt-4 text-2xl font-semibold text-[#123B5D]">
                Modern approach
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#64717A]">
                We use modern accounting technology to make financial
                management more efficient, accessible and clear.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 py-20 md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto max-w-7xl rounded-[28px] bg-gradient-to-br from-[#123B5D] via-[#245E86] to-[#79AFCF] px-6 py-12 md:px-12 md:py-16">
          <div className="grid gap-8 md:grid-cols-2 md:items-end">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-white/65">
                Work with us
              </p>

              <h2 className="max-w-xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white md:text-5xl">
                Looking for accounting support that fits your business?
              </h2>
            </div>

            <div>
              <p className="max-w-lg text-base leading-7 text-white/80 md:text-lg">
                Speak to our team about the financial support you need.
              </p>

              <a
                href="/contact"
                className="mt-7 inline-flex items-center gap-3 border-b border-white pb-1 text-sm font-semibold text-white transition-all duration-300 hover:gap-5"
              >
                Get in touch
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}