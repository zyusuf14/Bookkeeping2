"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      plan: formData.get("plan"),
      service: formData.get("service"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send enquiry");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <div className="rounded-[28px] bg-[#F8F5FA] p-6 md:p-10 lg:p-12">
      <form onSubmit={handleSubmit} className="grid gap-6">
        {/* NAME */}
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-semibold text-[#4B286D]"
          >
            Name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-xl border border-[#D4E1E9] bg-white px-4 py-4 text-base outline-none transition focus:border-[#70459A]"
            placeholder="Your name"
          />
        </div>

        {/* EMAIL */}
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-semibold text-[#4B286D]"
          >
            Email
          </label>

          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-xl border border-[#D4E1E9] bg-white px-4 py-4 text-base outline-none transition focus:border-[#70459A]"
            placeholder="you@example.com"
          />
        </div>

        {/* PHONE */}
        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-semibold text-[#4B286D]"
          >
            Phone
            <span className="ml-2 font-normal text-slate-400">
              Optional
            </span>
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full rounded-xl border border-[#D4E1E9] bg-white px-4 py-4 text-base outline-none transition focus:border-[#70459A]"
            placeholder="Your phone number"
          />
        </div>

        {/* PLAN */}
        <div>
          <label
            htmlFor="plan"
            className="mb-2 block text-sm font-semibold text-[#4B286D]"
          >
            Select a plan
            <span className="ml-2 font-normal text-slate-400">
              Optional
            </span>
          </label>

          <select
            id="plan"
            name="plan"
            defaultValue=""
            className="w-full rounded-xl border border-[#D4E1E9] bg-white px-4 py-4 text-base outline-none transition focus:border-[#70459A]"
          >
            <option value="">No plan selected</option>
            <option value="Basic — £2.99 / month">
              Basic — £2.99 / month
            </option>
            <option value="Standard — £4.99 / month">
              Standard — £4.99 / month
            </option>
            <option value="Premium — £12.99 / month">
              Premium — £12.99 / month
            </option>
          </select>
        </div>

        {/* SERVICE */}
        <div>
          <label
            htmlFor="service"
            className="mb-2 block text-sm font-semibold text-[#4B286D]"
          >
            What can we help with?
          </label>

          <select
            id="service"
            name="service"
            defaultValue=""
            className="w-full rounded-xl border border-[#D4E1E9] bg-white px-4 py-4 text-base outline-none transition focus:border-[#70459A]"
          >
            <option value="">Select a service</option>
            <option>Annual Accounts</option>
            <option>Payroll</option>
            <option>HMRC Enquiries</option>
            <option>Tax Advice & Planning</option>
            <option>Bookkeeping</option>
            <option>Cloud Accounting</option>
            <option>Other</option>
          </select>
        </div>

        {/* MESSAGE */}
        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-semibold text-[#4B286D]"
          >
            Message
          </label>

          <textarea
            id="message"
            name="message"
            required
            rows={6}
            className="w-full resize-none rounded-xl border border-[#D4E1E9] bg-white px-4 py-4 text-base outline-none transition focus:border-[#70459A]"
            placeholder="Tell us how we can help..."
          />
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          disabled={status === "sending"}
          className="mt-2 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#4B286D] px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#245E86] disabled:cursor-not-allowed disabled:opacity-60 md:w-fit"
        >
          {status === "sending" ? "Sending..." : "Send enquiry"}
          {status !== "sending" && <span>→</span>}
        </button>

        {/* STATUS */}
        {status === "success" && (
          <div className="rounded-xl border border-[#BFD9C8] bg-[#F1F8F3] px-4 py-4 text-sm text-[#315C3D]">
            Thank you — your enquiry has been sent successfully.
          </div>
        )}

        {status === "error" && (
          <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-4 text-sm text-red-700">
            We couldn&apos;t send your enquiry. Please try again or contact us
            directly by email.
          </div>
        )}
      </form>
    </div>
  );
}