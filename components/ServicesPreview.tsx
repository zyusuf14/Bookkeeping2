"use client";

import { useState } from "react";

const services = [
  {
    number: "01",
    title: "Annual Accounts",
    short:
      "Clear, accurate annual accounts for companies and charities, prepared with compliance and financial clarity in mind.",
    href: "/services#annual-accounts",
  },
  {
    number: "02",
    title: "Payroll",
    short:
      "Reliable payroll support including payslips, P60s, CIS, P11d reporting, refunds and pension administration.",
    href: "/services#payroll",
  },
  {
    number: "03",
    title: "HMRC Enquiries",
    short:
      "Professional support with HMRC enquiries, reviews and investigations across self assessment, VAT and company accounts.",
    href: "/services#hmrc-enquiries",
  },
  {
    number: "04",
    title: "Tax Advice & Planning",
    short:
      "Tailored tax planning designed to improve efficiency, support long-term goals and keep you fully compliant.",
    href: "/services#tax-planning",
  },
  {
    number: "05",
    title: "Bookkeeping",
    short:
      "Flexible onsite and offsite bookkeeping that keeps your records accurate, up to date and easy to understand.",
    href: "/services#bookkeeping",
  },
  {
    number: "06",
    title: "Cloud Accounting",
    short:
      "Modern cloud accounting setup, migration and system reviews to make your financial processes more efficient.",
    href: "/services#cloud-accounting",
  },
];

export default function ServicesPreview() {
  const [activeService, setActiveService] = useState(0);

  const active = services[activeService];

  return (
    <section id="services" className="bg-white px-5 py-20 md:px-10 md:py-28 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 md:mb-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#4F8EB8]">
            What we do
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-[#123B5D] md:text-6xl">
            Our Services
          </h2>
        </div>

        <div className="overflow-hidden rounded-[28px] bg-[#F4F8FB] md:grid md:grid-cols-[180px_1fr]">
          
          {/* LEFT SELECTOR */}
          <div className="flex overflow-x-auto border-b border-[#DCE7EE] bg-white md:flex-col md:border-b-0 md:border-r">
            {services.map((service, index) => {
              const isActive = activeService === index;

              return (
                <button
                  key={service.title}
                  onClick={() => setActiveService(index)}
                  className={`group flex min-w-[90px] flex-1 items-center justify-center border-r border-[#E6EDF2] px-4 py-5 transition-all duration-300 last:border-r-0 md:min-w-0 md:border-b md:border-r-0 md:px-6 md:py-7 md:last:border-b-0 ${
                    isActive ? "bg-[#123B5D] text-white" : "bg-white text-[#123B5D]"
                  }`}
                >
                  <div className="flex flex-col items-center gap-2">
                    <span
                      className={`text-xs font-medium tracking-[0.15em] ${
                        isActive ? "text-white/70" : "text-[#6EA4C7]"
                      }`}
                    >
                      {service.number}
                    </span>

                    <span
                      className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                        isActive
                          ? "scale-125 bg-[#A9D0E8]"
                          : "bg-[#D8E8F2] group-hover:bg-[#8EB7D2]"
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* ACTIVE SERVICE CONTENT */}
          <div className="relative min-h-[430px] overflow-hidden px-6 py-10 md:min-h-[520px] md:px-14 md:py-14 lg:px-16">
            
            {/* DECORATIVE SHAPE */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border-[42px] border-[#E6F1F7]" />
            <div className="pointer-events-none absolute bottom-[-90px] right-[80px] h-56 w-56 rounded-full border-[38px] border-[#EDF5F9]" />

            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <p className="mb-5 text-sm font-semibold tracking-[0.18em] text-[#6EA4C7]">
                  {active.number}
                </p>

                <h3 className="max-w-2xl text-3xl font-semibold tracking-[-0.035em] text-[#15191D] md:text-5xl">
                  {active.title}
                </h3>

                <p className="mt-7 max-w-2xl text-base leading-7 text-[#53616B] md:text-lg md:leading-8">
                  {active.short}
                </p>
              </div>

              <div className="mt-14">
                <a
                  href={active.href}
                  className="inline-flex items-center gap-3 border-b border-[#123B5D] pb-1 text-sm font-semibold text-[#123B5D] transition-all duration-300 hover:gap-5"
                >
                  Learn more
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <a
            href="/services"
            className="inline-flex items-center gap-3 text-sm font-semibold text-[#123B5D] transition-all duration-300 hover:gap-5"
          >
            View all services
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}