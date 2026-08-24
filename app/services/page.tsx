import Header from "@/components/Header";
import Reveal from "@/components/Reveal";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Header />

      {/* HERO */}
      <section className="mt-[88px] bg-[#F7FAFC] px-5 py-20 md:mt-[105px] md:px-10 md:py-28 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#4F8EB8]">
            Our Services
          </p>

          <h1 className="max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.04em] text-[#123B5D] md:text-7xl">
            Financial support built around your needs.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#53616B] md:text-xl md:leading-9">
            From everyday bookkeeping and payroll to tax planning, HMRC
            enquiries and cloud accounting, we provide reliable support for
            businesses and individuals.
          </p>
        </div>
      </section>

      {/* DECORATIVE WAVE */}
      <div className="service-wave service-wave-one" aria-hidden="true">
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
          className="scroll-mt-32 border-b border-slate-200 px-5 py-20 md:px-10 md:py-28 lg:px-16"
        >
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.55fr_1.45fr] md:gap-20">
            <div>
              <p className="text-sm font-semibold text-[#4F8EB8]">01</p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#123B5D] md:text-5xl">
                Annual Accounts
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-[#53616B]">
                We provide comprehensive annual accounts services for both
                companies and charities, preparing accurate financial
                statements in line with the relevant regulatory standards.
              </p>

              <p className="mt-6 text-base leading-8 text-[#66737C]">
                For companies, this includes statutory accounts such as the
                balance sheet, profit and loss statement and cash flow
                statement, alongside support with tax calculations and
                financial efficiency.
              </p>

              <p className="mt-6 text-base leading-8 text-[#66737C]">
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
          className="scroll-mt-32 bg-[#F7FAFC] px-5 py-20 md:px-10 md:py-28 lg:px-16"
        >
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.55fr_1.45fr] md:gap-20">
            <div>
              <p className="text-sm font-semibold text-[#5D98BF]">02</p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#123B5D] md:text-5xl">
                Payroll
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-[#53616B]">
                Our payroll services are designed to simplify payroll
                management and help businesses stay compliant with HMRC
                requirements.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
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
                    className="border-t border-[#C7DCE8] pt-4 text-sm font-medium text-[#53616B]"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <p className="mt-8 text-base leading-8 text-[#66737C]">
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
          className="scroll-mt-32 border-b border-slate-200 px-5 py-20 md:px-10 md:py-28 lg:px-16"
        >
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.55fr_1.45fr] md:gap-20">
            <div>
              <p className="text-sm font-semibold text-[#6CA4C8]">03</p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#123B5D] md:text-5xl">
                HMRC Enquiries
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-[#53616B]">
                We provide professional support for HMRC enquiries involving
                both companies and individuals, helping manage communications,
                submissions and compliance requirements.
              </p>

              <div className="mt-8 space-y-5">
                <div>
                  <h3 className="font-semibold text-[#123B5D]">
                    Self Assessment
                  </h3>
                  <p className="mt-2 leading-7 text-[#66737C]">
                    Support with HMRC queries and investigations relating to
                    self-assessment tax returns.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-[#123B5D]">VAT</h3>
                  <p className="mt-2 leading-7 text-[#66737C]">
                    Assistance with VAT registration, compliance checks, audits
                    and resolving discrepancies or disputes.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-[#123B5D]">
                    Company Accounts
                  </h3>
                  <p className="mt-2 leading-7 text-[#66737C]">
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
          className="scroll-mt-32 bg-[#F7FAFC] px-5 py-20 md:px-10 md:py-28 lg:px-16"
        >
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.55fr_1.45fr] md:gap-20">
            <div>
              <p className="text-sm font-semibold text-[#7DAFD0]">04</p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#123B5D] md:text-5xl">
                Tax Advice & Planning
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-[#53616B]">
                We offer tax advice and planning for individuals and businesses,
                helping clients navigate the tax system, improve efficiency and
                remain compliant.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
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
                    <div className="h-full rounded-2xl border border-[#DCE8EF] bg-white p-5">
                      <h3 className="font-semibold text-[#123B5D]">
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
          className="scroll-mt-32 border-b border-slate-200 px-5 py-20 md:px-10 md:py-28 lg:px-16"
        >
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.55fr_1.45fr] md:gap-20">
            <div>
              <p className="text-sm font-semibold text-[#91BCD8]">05</p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#123B5D] md:text-5xl">
                Bookkeeping
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-[#53616B]">
                We provide both onsite and offsite bookkeeping services,
                designed to keep financial records accurate, current and
                compliant.
              </p>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {/* ONSITE — LEFT */}
                <Reveal direction="left">
                  <div className="h-full rounded-2xl bg-[#F4F8FB] p-6">
                    <h3 className="text-xl font-semibold text-[#123B5D]">
                      Onsite Bookkeeping
                    </h3>

                    <p className="mt-4 leading-7 text-[#66737C]">
                      Support provided directly at your business location,
                      allowing closer integration with your day-to-day
                      financial operations.
                    </p>
                  </div>
                </Reveal>

                {/* OFFSITE — RIGHT */}
                <Reveal direction="right">
                  <div className="h-full rounded-2xl bg-[#F4F8FB] p-6">
                    <h3 className="text-xl font-semibold text-[#123B5D]">
                      Offsite Bookkeeping
                    </h3>

                    <p className="mt-4 leading-7 text-[#66737C]">
                      Secure remote bookkeeping using cloud-based accounting
                      systems with regular communication and up-to-date records.
                    </p>
                  </div>
                </Reveal>
              </div>

              <p className="mt-8 text-base leading-8 text-[#66737C]">
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
          className="scroll-mt-32 bg-[#F7FAFC] px-5 py-20 md:px-10 md:py-28 lg:px-16"
        >
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.55fr_1.45fr] md:gap-20">
            <div>
              <p className="text-sm font-semibold text-[#A7C9DE]">06</p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#123B5D] md:text-5xl">
                System Modernisation & Cloud Accounting
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-[#53616B]">
                We support businesses moving towards digital and cloud-based
                accounting systems, helping improve efficiency, flexibility and
                access to financial information.
              </p>

              <p className="mt-6 text-base leading-8 text-[#66737C]">
                Cloud accounting can provide easier access to balances, sales,
                upcoming bills, bank connections, purchase orders and other
                financial information from anywhere with an internet
                connection.
              </p>
              

              <p className="mt-6 text-base leading-8 text-[#66737C]">
                We can also help review existing systems and identify areas
                where outdated processes or software may be limiting
                efficiency.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* CONTACT CTA */}
      <section className="px-5 py-20 md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto max-w-7xl rounded-[28px] bg-gradient-to-br from-[#123B5D] via-[#245E86] to-[#79AFCF] px-6 py-12 md:px-12 md:py-16">
          <div className="grid gap-8 md:grid-cols-2 md:items-end">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-white/65">
                Need support?
              </p>

              <h2 className="max-w-xl text-4xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
                Let&apos;s find the right service for you.
              </h2>
            </div>

            <div>
              <p className="max-w-lg text-base leading-7 text-white/80 md:text-lg">
                Speak to our team about your accounting, bookkeeping or tax
                requirements.
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