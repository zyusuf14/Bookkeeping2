"use client";

import { useEffect, useRef, useState } from "react";

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

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const fromLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`flex transition-all duration-1000 ease-out ${
        fromLeft ? "justify-start" : "justify-end"
      } ${
        visible
          ? "translate-x-0 translate-y-0 opacity-100"
          : fromLeft
          ? "-translate-x-16 translate-y-8 opacity-0"
          : "translate-x-16 translate-y-8 opacity-0"
      }`}
    >
      <div className="group w-full overflow-hidden rounded-[26px] border border-[#E9DFEE] bg-[#FAF8FC] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#9FC1D6] md:w-[78%] md:p-10 lg:w-[68%]">

        <div className="flex items-start justify-between gap-6">
          <p className="text-sm font-semibold tracking-[0.15em] text-[#70459A]">
            {service.number}
          </p>

          <span className="h-3 w-3 rounded-full bg-[#7950A0] transition-transform duration-500 group-hover:scale-[1.6]" />
        </div>

        <h3 className="mt-8 max-w-2xl text-3xl font-semibold tracking-[-0.04em] text-[#4B286D] md:text-4xl lg:text-5xl">
          {service.title}
        </h3>

        <p className="mt-5 max-w-xl text-base leading-7 text-[#66737C] md:text-lg md:leading-8">
          {service.short}
        </p>

        <a
          href={service.href}
          className="mt-8 inline-flex items-center gap-3 border-b border-[#4B286D] pb-1 text-sm font-semibold text-[#4B286D]"
        >
          Learn more
          <span className="transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </a>
      </div>
    </div>
  );
}

export default function ServicesPreview() {
  return (
    <section
      id="services"
      className="services-wave-bg relative overflow-hidden bg-white px-5 py-20 md:px-10 md:py-28 lg:px-16"
    >
        {/* Decorative flowing lines */}
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

<div className="service-wave service-wave-two" aria-hidden="true">
  <span />
  <span />
  <span />
  <span />
  <span />
  <span />
  <span />
  <span />
</div>
      <div className="mx-auto max-w-7xl">

        {/* HEADING */}
        <div className="mb-14 md:mb-20">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#70459A]">
            What we do
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-[#4B286D] md:text-6xl">
            Our Services
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-[#66737C] md:text-lg">
            Reliable financial support designed around the needs of businesses
            and individuals.
          </p>
        </div>

        {/* SERVICE CARDS */}
        <div className="space-y-8 md:space-y-10">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
            />
          ))}
        </div>

        {/* VIEW ALL */}
        <div className="mt-14 flex justify-center md:justify-end">
          <a
            href="/services"
            className="group inline-flex items-center gap-3 text-sm font-semibold text-[#4B286D]"
          >
            View all services
            <span className="transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}