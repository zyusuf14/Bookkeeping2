import Header from "@/components/Header";

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-950">
      <Header />

      {/* HERO */}
      <section className="mt-[72px] bg-[#FAF8FC] px-5 py-14 sm:px-6 sm:py-16 md:mt-[105px] md:px-10 md:py-28 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#70459A] sm:text-xs">
            About Us
          </p>

          <h1 className="max-w-4xl text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.04em] text-[#4B286D] sm:text-5xl md:text-7xl">
            Modern accounting, built around you.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-[#53616B] sm:text-lg sm:leading-8 md:mt-8 md:text-xl md:leading-9">
            The Bookkeeping Corporation is a modern accounting firm dedicated
            to delivering reliable and efficient financial services to
            businesses and individuals.
          </p>
        </div>
      </section>

      {/* MAIN ABOUT */}
      <section className="px-5 py-14 sm:px-6 sm:py-16 md:px-10 md:py-28 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
          
          {/* LEFT */}
          <div className="min-w-0">
            <div
              className="service-wave service-wave-one mb-8 overflow-hidden"
              aria-hidden="true"
            >
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#70459A] sm:text-sm sm:tracking-[0.2em]">
              Established 2021
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-[#4B286D] sm:text-4xl md:mt-5 md:text-5xl">
              Financial support with clarity and care.
            </h2>
          </div>

          {/* RIGHT */}
          <div className="min-w-0 space-y-5 text-[15px] leading-7 text-[#5D6870] sm:text-base sm:leading-8 md:space-y-6 md:text-lg">
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
      <section className="bg-[#FAF8FC] px-5 py-14 sm:px-6 sm:py-16 md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="mb-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#70459A] sm:text-xs md:mb-12">
            What matters to us
          </p>

          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
            {/* VALUE 01 */}
            <div className="border-t border-[#D7C5E2] pt-5 md:pt-6">
              <p className="text-xs font-semibold text-[#70459A] sm:text-sm">
                01
              </p>

              <h3 className="mt-3 text-xl font-semibold text-[#4B286D] sm:text-2xl md:mt-4">
                Personal service
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#64717A] md:mt-4 md:leading-7">
                We focus on personalised client care and provide support that
                reflects the needs of each business or individual.
              </p>
            </div>

            {/* VALUE 02 */}
            <div className="border-t border-[#D7C5E2] pt-5 md:pt-6">
              <p className="text-xs font-semibold text-[#70459A] sm:text-sm">
                02
              </p>

              <h3 className="mt-3 text-xl font-semibold text-[#4B286D] sm:text-2xl md:mt-4">
                Professional standards
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#64717A] md:mt-4 md:leading-7">
                Accuracy, integrity, professionalism and full compliance sit
                at the heart of the way we work.
              </p>
            </div>

            {/* VALUE 03 */}
            <div className="border-t border-[#D7C5E2] pt-5 sm:col-span-2 md:col-span-1 md:pt-6">
              <p className="text-xs font-semibold text-[#70459A] sm:text-sm">
                03
              </p>

              <h3 className="mt-3 text-xl font-semibold text-[#4B286D] sm:text-2xl md:mt-4">
                Modern approach
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#64717A] md:mt-4 md:leading-7">
                We use modern accounting technology to make financial
                management more efficient, accessible and clear.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 py-14 sm:px-6 sm:py-16 md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[22px] bg-gradient-to-br from-[#4B286D] via-[#245E86] to-[#79AFCF] px-5 py-10 sm:rounded-[28px] sm:px-8 sm:py-12 md:px-12 md:py-16">
          <div className="grid gap-8 md:grid-cols-2 md:items-end">
            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/65 sm:text-xs md:mb-4">
                Work with us
              </p>

              <h2 className="max-w-xl text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-4xl md:text-5xl">
                Looking for accounting support that fits your business?
              </h2>
            </div>

            <div>
              <p className="max-w-lg text-sm leading-7 text-white/80 sm:text-base md:text-lg">
                Speak to our team about the financial support you need.
              </p>

              <a
                href="/contact"
                className="mt-6 inline-flex items-center gap-3 border-b border-white pb-1 text-sm font-semibold text-white transition-all duration-300 hover:gap-5 md:mt-7"
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