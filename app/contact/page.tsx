import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Header />

      {/* HERO */}
      <section className="mt-[88px] bg-[#F7FAFC] px-5 py-20 md:mt-[105px] md:px-10 md:py-28 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#4F8EB8]">
            Contact Us
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.04em] text-[#123B5D] md:text-7xl">
            Let&apos;s talk about your finances.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#53616B] md:text-xl md:leading-9">
            Whether you need ongoing accounting support or have a specific
            question, get in touch with our team.
          </p>
        </div>
      </section>
{/* PLANS */}
<section className="bg-white px-5 py-20 md:px-10 md:py-28 lg:px-16">
  <div className="mx-auto max-w-7xl">

    <div className="mb-12">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#4F8EB8]">
        Our Plans
      </p>

      <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-[#123B5D] md:text-6xl">
        Choose the level of support that suits you.
      </h2>

      <p className="mt-5 max-w-2xl text-base leading-7 text-[#66737C] md:text-lg">
        From essential bookkeeping support to more comprehensive accounting
        guidance, our plans are designed to suit different business needs.
      </p>
    </div>

    <div className="grid gap-6 lg:grid-cols-3">

      {/* BASIC */}
      <div className="flex flex-col rounded-[28px] border border-[#DCE7EE] bg-white p-7 md:p-8">

        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#6B7780]">
          Basic
        </p>

        <div className="mt-7 flex items-end gap-2">
          <span className="mb-2 text-2xl text-[#6B7780]">£</span>

          <span className="text-6xl font-semibold tracking-[-0.05em] text-[#123B5D]">
            2.99
          </span>

          <span className="mb-2 text-sm text-[#8A969E]">
            / month
          </span>
        </div>

        <p className="mt-6 text-base leading-7 text-[#66737C]">
          A simple starting point for individuals and smaller businesses
          looking for reliable financial support.
        </p>

        <div className="mt-8 border-t border-slate-200 pt-6">
          <p className="mb-5 text-sm font-semibold text-[#123B5D]">
            Includes
          </p>

          <ul className="space-y-4 text-sm leading-6 text-[#66737C]">
            <li>✓ Essential bookkeeping support</li>
            <li>✓ Basic financial record organisation</li>
            <li>✓ General accounting guidance</li>
          </ul>
        </div>

        <a
          href="#contact-form"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#123B5D]"
        >
          Enquire below
          <span>↓</span>
        </a>
      </div>

      {/* STANDARD */}
      <div className="relative flex flex-col rounded-[28px] border-2 border-[#4F8EB8] bg-[#F7FAFC] p-7 md:p-8">

        <span className="absolute right-6 top-6 rounded-full bg-[#DCECF5] px-4 py-2 text-xs font-semibold text-[#123B5D]">
          Popular
        </span>

        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#6B7780]">
          Standard
        </p>

        <div className="mt-7 flex items-end gap-2">
          <span className="mb-2 text-2xl text-[#6B7780]">£</span>

          <span className="text-6xl font-semibold tracking-[-0.05em] text-[#123B5D]">
            4.99
          </span>

          <span className="mb-2 text-sm text-[#8A969E]">
            / month
          </span>
        </div>

        <p className="mt-6 text-base leading-7 text-[#66737C]">
          Designed for growing businesses that need more regular accounting
          and bookkeeping support.
        </p>

        <div className="mt-8 border-t border-slate-200 pt-6">
          <p className="mb-5 text-sm font-semibold text-[#123B5D]">
            Includes
          </p>

          <ul className="space-y-4 text-sm leading-6 text-[#66737C]">
            <li>✓ Ongoing bookkeeping support</li>
            <li>✓ Payroll and HMRC assistance</li>
            <li>✓ Financial record management</li>
            <li>✓ Priority support</li>
          </ul>
        </div>

        <a
          href="#contact-form"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#123B5D]"
        >
          Enquire below
          <span>↓</span>
        </a>
      </div>

      {/* PREMIUM */}
      <div className="flex flex-col rounded-[28px] border border-[#DCE7EE] bg-white p-7 md:p-8">

        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#6B7780]">
          Premium
        </p>

        <div className="mt-7 flex items-end gap-2">
          <span className="mb-2 text-2xl text-[#6B7780]">£</span>

          <span className="text-6xl font-semibold tracking-[-0.05em] text-[#123B5D]">
            12.99
          </span>

          <span className="mb-2 text-sm text-[#8A969E]">
            / month
          </span>
        </div>

        <p className="mt-6 text-base leading-7 text-[#66737C]">
          Tailored support for larger businesses with more complex financial
          and accounting requirements.
        </p>

        <div className="mt-8 border-t border-slate-200 pt-6">
          <p className="mb-5 text-sm font-semibold text-[#123B5D]">
            Includes
          </p>

          <ul className="space-y-4 text-sm leading-6 text-[#66737C]">
            <li>✓ Comprehensive bookkeeping support</li>
            <li>✓ Tax planning and HMRC support</li>
            <li>✓ Payroll assistance</li>
            <li>✓ Cloud accounting guidance</li>
            <li>✓ Priority client support</li>
          </ul>
        </div>

        <a
          href="#contact-form"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#123B5D]"
        >
          Enquire below
          <span>↓</span>
        </a>
      </div>

    </div>
  </div>
</section>
      {/* CONTACT */}
      <section
  id="contact-form"
  className="scroll-mt-32 px-5 py-20 md:px-10 md:py-28 lg:px-16"
>
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">

          {/* DETAILS */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#4F8EB8]">
              Get in touch
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#123B5D] md:text-5xl">
              We&apos;re here to help.
            </h2>

            <p className="mt-6 max-w-md text-base leading-8 text-[#66737C]">
              Tell us a little about what you need and we&apos;ll help you find
              the right accounting or financial support.
            </p>

            <div className="mt-10 border-t border-slate-200 pt-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8A969E]">
                Email
              </p>

              <a
                href="mailto:info@thebookkeepingcorporation.com"
                className="mt-3 block break-all text-lg font-semibold text-[#123B5D] transition-colors hover:text-[#4F8EB8]"
              >
                info@thebookkeepingcorporation.com
              </a>
            </div>
          </div>

          <ContactForm/>
        </div>
      </section>
    </main>
  );
}