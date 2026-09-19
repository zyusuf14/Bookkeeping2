import Header from "@/components/Header";
import Reveal from "@/components/Reveal";

export default function ServicesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-950">
      <Header />

      {/* HERO */}
      <section className="mt-[72px] bg-[#FAF8FC] px-5 py-14 sm:px-6 sm:py-16 md:mt-[105px] md:px-10 md:py-28 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#70459A] sm:text-xs md:mb-4 md:tracking-[0.22em]">
            Our Services
          </p>

          <h1 className="max-w-5xl text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.04em] text-[#4B286D] sm:text-5xl md:text-7xl">
            Financial support built around your needs.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-[#53616B] sm:text-lg sm:leading-8 md:mt-8 md:text-xl md:leading-9">
            From everyday bookkeeping and payroll to tax planning, HMRC
            enquiries and cloud accounting, we provide reliable support for
            businesses and individuals.
          </p>
        </div>
      </section>

      {/* DECORATIVE WAVE */}
      <div
        className="service-wave service-wave-one overflow-hidden"
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
        <span />
        <span />
      </div>

      {/* 01 ANNUAL ACCOUNTS */}
      <Reveal>
        <section
          id="annual-accounts"
          className="scroll-mt-24 border-b border-slate-200 px-5 py-14 sm:px-6 sm:py-16 md:scroll-mt-32 md:px-10 md:py-28 lg:px-16"
        >
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.55fr_1.45fr] md:gap-20">
            <div>
              <p className="text-xs font-semibold text-[#70459A] sm:text-sm">
                01
              </p>

              <h2 className="mt-3 text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-[#4B286D] sm:text-4xl md:mt-4 md:text-5xl">
                Annual Accounts
              </h2>
            </div>

            <div>
              <p className="text-base leading-7 text-[#53616B] sm:text-lg sm:leading-8">
                We provide comprehensive annual accounts services for both
                companies and charities, preparing accurate financial
                statements in line with the relevant regulatory standards.
              </p>

              <p className="mt-5 text-[15px] leading-7 text-[#66737C] sm:mt-6 sm:text-base sm:leading-8">
                For companies, this includes statutory accounts such as the
                balance sheet, profit and loss statement and cash flow
                statement, alongside support with tax calculations and
                financial efficiency.
              </p>

              <p className="mt-5 text-[15px] leading-7 text-[#66737C] sm:mt-6 sm:text-base sm:leading-8">
                For charities, we prepare charity-specific accounts and ensure
                the correct presentation of restricted and unrestricted funds
                in line with the relevant reporting requirements.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* 02 PAYROLL */}
      <Reveal>
        <section
          id="payroll"
          className="scroll-mt-24 bg-[#FAF8FC] px-5 py-14 sm:px-6 sm:py-16 md:scroll-mt-32 md:px-10 md:py-28 lg:px-16"
        >
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.55fr_1.45fr] md:gap-20">
            <div>
              <p className="text-xs font-semibold text-[#7950A0] sm:text-sm">
                02
              </p>

              <h2 className="mt-3 text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-[#4B286D] sm:text-4xl md:mt-4 md:text-5xl">
                Payroll
              </h2>
            </div>

            <div>
              <p className="text-base leading-7 text-[#53616B] sm:text-lg sm:leading-8">
                Our payroll services are designed to simplify payroll
                management and help businesses stay compliant with HMRC
                requirements.
              </p>

              <div className="mt-7 grid gap-4 sm:mt-8 sm:grid-cols-2">
                {[
                  "Payslips",
                  "P60s",
                  "CIS returns",
                  "Payroll refunds",
                  "P11d reporting",
                  "Pension administration",
                ].map((item) => (
                  <div
                    key={item}
                    className="border-t border-[#DACBE4] pt-4 text-sm font-medium text-[#53616B]"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <p className="mt-7 text-[15px] leading-7 text-[#66737C] sm:mt-8 sm:text-base sm:leading-8">
                We aim to reduce the administrative burden on your business
                while ensuring payroll is processed accurately and efficiently.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* 03 HMRC ENQUIRIES */}
      <Reveal>
        <section
          id="hmrc-enquiries"
          className="scroll-mt-24 border-b border-slate-200 px-5 py-14 sm:px-6 sm:py-16 md:scroll-mt-32 md:px-10 md:py-28 lg:px-16"
        >
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.55fr_1.45fr] md:gap-20">
            <div>
              <p className="text-xs font-semibold text-[#825AA6] sm:text-sm">
                03
              </p>

              <h2 className="mt-3 text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-[#4B286D] sm:text-4xl md:mt-4 md:text-5xl">
                HMRC Enquiries
              </h2>
            </div>

            <div>
              <p className="text-base leading-7 text-[#53616B] sm:text-lg sm:leading-8">
                We provide professional support for HMRC enquiries involving
                both companies and individuals, helping manage communications,
                submissions and compliance requirements.
              </p>

              <div className="mt-7 space-y-5 sm:mt-8">
                <div>
                  <h3 className="font-semibold text-[#4B286D]">
                    Self Assessment
                  </h3>

                  <p className="mt-2 text-[15px] leading-7 text-[#66737C] sm:text-base">
                    Support with HMRC queries and investigations relating to
                    self-assessment tax returns.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-[#4B286D]">VAT</h3>

                  <p className="mt-2 text-[15px] leading-7 text-[#66737C] sm:text-base">
                    Assistance with VAT registration, compliance checks, audits
                    and resolving discrepancies or disputes.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-[#4B286D]">
                    Company Accounts
                  </h3>

                  <p className="mt-2 text-[15px] leading-7 text-[#66737C] sm:text-base">
                    Support with enquiries relating to company accounts and
                    tax-related investigations or reviews.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* 04 TAX ADVICE */}
      <Reveal>
        <section
          id="tax-planning"
          className="scroll-mt-24 bg-[#FAF8FC] px-5 py-14 sm:px-6 sm:py-16 md:scroll-mt-32 md:px-10 md:py-28 lg:px-16"
        >
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.55fr_1.45fr] md:gap-20">
            <div>
              <p className="text-xs font-semibold text-[#8C64AC] sm:text-sm">
                04
              </p>

              <h2 className="mt-3 text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-[#4B286D] sm:text-4xl md:mt-4 md:text-5xl">
                Tax Advice & Planning
              </h2>
            </div>

            <div>
              <p className="text-base leading-7 text-[#53616B] sm:text-lg sm:leading-8">
                We offer tax advice and planning for individuals and businesses,
                helping clients navigate the tax system, improve efficiency and
                remain compliant.
              </p>

              <div className="mt-7 grid gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-5">
                {[
                  "Tax Efficiency",
                  "Tax Planning",
                  "Corporate Tax",
                  "Personal Tax",
                  "VAT & Indirect Taxes",
                ].map((item, index) => (
                  <Reveal
                    key={item}
                    direction={index % 2 === 0 ? "left" : "right"}
                  >
                    <div className="h-full rounded-2xl border border-[#DCE8EF] bg-white p-4 sm:p-5">
                      <h3 className="font-semibold text-[#4B286D]">
                        {item}
                      </h3>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* 05 BOOKKEEPING */}
      <Reveal>
        <section
          id="bookkeeping"
          className="scroll-mt-24 border-b border-slate-200 px-5 py-14 sm:px-6 sm:py-16 md:scroll-mt-32 md:px-10 md:py-28 lg:px-16"
        >
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.55fr_1.45fr] md:gap-20">
            <div>
              <p className="text-xs font-semibold text-[#A17FBC] sm:text-sm">
                05
              </p>

              <h2 className="mt-3 text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-[#4B286D] sm:text-4xl md:mt-4 md:text-5xl">
                Bookkeeping
              </h2>
            </div>

            <div>
              <p className="text-base leading-7 text-[#53616B] sm:text-lg sm:leading-8">
                We provide both onsite and offsite bookkeeping services,
                designed to keep financial records accurate, current and
                compliant.
              </p>

              <div className="mt-7 grid gap-5 sm:mt-8 md:grid-cols-2 md:gap-6">
                {/* ONSITE */}
                <Reveal direction="left">
                  <div className="h-full rounded-2xl bg-[#F8F5FA] p-5 sm:p-6">
                    <h3 className="text-lg font-semibold text-[#4B286D] sm:text-xl">
                      Onsite Bookkeeping
                    </h3>

                    <p className="mt-3 text-[15px] leading-7 text-[#66737C] sm:mt-4 sm:text-base">
                      Support provided directly at your business location,
                      allowing closer integration with your day-to-day
                      financial operations.
                    </p>
                  </div>
                </Reveal>

                {/* OFFSITE */}
                <Reveal direction="right">
                  <div className="h-full rounded-2xl bg-[#F8F5FA] p-5 sm:p-6">
                    <h3 className="text-lg font-semibold text-[#4B286D] sm:text-xl">
                      Offsite Bookkeeping
                    </h3>

                    <p className="mt-3 text-[15px] leading-7 text-[#66737C] sm:mt-4 sm:text-base">
                      Secure remote bookkeeping using cloud-based accounting
                      systems with regular communication and up-to-date records.
                    </p>
                  </div>
                </Reveal>
              </div>

              <p className="mt-7 text-[15px] leading-7 text-[#66737C] sm:mt-8 sm:text-base sm:leading-8">
                Our bookkeeping support also includes transaction recording and
                bank reconciliation to help keep your financial records in
                order.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* 06 CLOUD ACCOUNTING */}
      <Reveal>
        <section
          id="cloud-accounting"
          className="scroll-mt-24 bg-[#FAF8FC] px-5 py-14 sm:px-6 sm:py-16 md:scroll-mt-32 md:px-10 md:py-28 lg:px-16"
        >
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.55fr_1.45fr] md:gap-20">
            <div>
              <p className="text-xs font-semibold text-[#B89DCC] sm:text-sm">
                06
              </p>

              <h2 className="mt-3 max-w-md text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-[#4B286D] sm:text-4xl md:mt-4 md:text-5xl">
                System Modernisation & Cloud Accounting
              </h2>
            </div>

            <div>
              <p className="text-base leading-7 text-[#53616B] sm:text-lg sm:leading-8">
                We support businesses moving towards digital and cloud-based
                accounting systems, helping improve efficiency, flexibility and
                access to financial information.
              </p>

              <p className="mt-5 text-[15px] leading-7 text-[#66737C] sm:mt-6 sm:text-base sm:leading-8">
                Cloud accounting can provide easier access to balances, sales,
                upcoming bills, bank connections, purchase orders and other
                financial information from anywhere with an internet
                connection.
              </p>

              <p className="mt-5 text-[15px] leading-7 text-[#66737C] sm:mt-6 sm:text-base sm:leading-8">
                We can also help review existing systems and identify areas
                where outdated processes or software may be limiting
                efficiency.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* CONTACT CTA */}
      <section className="px-5 py-14 sm:px-6 sm:py-16 md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[22px] bg-gradient-to-br from-[#4B286D] via-[#245E86] to-[#79AFCF] px-5 py-10 sm:rounded-[28px] sm:px-8 sm:py-12 md:px-12 md:py-16">
          <div className="grid gap-8 md:grid-cols-2 md:items-end">
            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/65 sm:text-xs md:mb-4 md:tracking-[0.22em]">
                Need support?
              </p>

              <h2 className="max-w-xl text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-4xl md:text-5xl">
                Let&apos;s find the right service for you.
              </h2>
            </div>

            <div>
              <p className="max-w-lg text-sm leading-7 text-white/80 sm:text-base md:text-lg">
                Speak to our team about your accounting, bookkeeping or tax
                requirements.
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