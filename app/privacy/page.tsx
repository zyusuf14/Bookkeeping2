import Header from "@/components/Header";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#f7f5f1] px-6 py-20 text-[#1d1d1b] sm:px-10 lg:px-20">
        <div className="mx-auto max-w-4xl">

          {/* PAGE HEADER */}
          <div className="mb-16 border-b border-black/10 pb-10">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-black/45">
              Legal
            </p>

            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Privacy Policy
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-black/60">
              This policy explains how The Bookkeeping Corporation collects,
              uses, stores and shares personal information.
            </p>

            <p className="mt-4 text-sm text-black/40">
              Last updated: 8 September 2026
            </p>
          </div>

          <div className="space-y-12">

            {/* 1 */}
            <Section title="1. About this policy">
              <p>
                This Privacy Policy explains how The Bookkeeping Corporation
                (“The Bookkeeping Corporation”, “we”, “us” or “our”) collects,
                uses, stores and shares personal information.
              </p>

              <p>It applies when you:</p>

              <BulletList
                items={[
                  "visit our website",
                  "contact us or request a quotation",
                  "become or act on behalf of one of our clients",
                  "use our bookkeeping, accounting, payroll, tax or advisory services",
                  "supply services to us",
                  "otherwise communicate or interact with us",
                ]}
              />

              <p>
                For the purposes of UK data protection law, The Bookkeeping
                Corporation is generally the data controller of your personal
                information. In some circumstances, particularly when processing
                payroll or other information strictly on a client’s instructions,
                we may act as a data processor on behalf of that client.
              </p>

              <div className="mt-6 space-y-1 border-l-2 border-black/10 pl-5">
                <p>Legal entity: The Bookkeeping Corporation</p>
                <p>Company number: 13599261</p>
                <p>Registered office: 1 ENDSLEIGH ROAD, SOUTHALL, UB2 5QL</p>
                <p>Privacy email: info@thebookkeepingcorporation.com</p>
              </div>
            </Section>

            {/* 2 */}
            <Section title="2. Personal information we collect">
              <p>
                Depending on your relationship with us and the services we
                provide, we may collect:
              </p>

              <Subheading>Identity and contact information</Subheading>

              <BulletList
                items={[
                  "Your name, title, date of birth and contact details.",
                  "Your residential, correspondence or business address.",
                  "Copies of passports, driving licences and other identification documents.",
                  "Proof of address and identity-verification information.",
                  "National Insurance numbers, Unique Taxpayer References and tax references.",
                  "Company numbers and details of directors, shareholders and beneficial owners.",
                ]}
              />

              <Subheading>Financial and accounting information</Subheading>

              <BulletList
                items={[
                  "Bank account details and financial transactions.",
                  "Invoices, receipts, expenses and bookkeeping records.",
                  "Income, savings, investments, pensions and property information.",
                  "Business accounts, management accounts and financial statements.",
                  "Tax returns, tax calculations and correspondence with HMRC.",
                  "Payroll, salary, pension, benefits and employment information.",
                  "Credit-control, supplier and customer information.",
                  "Information needed to process payments or collect fees.",
                ]}
              />

              <Subheading>
                Information about employees and other individuals
              </Subheading>

              <p>
                When providing payroll, bookkeeping or related services to a
                business, we may receive information about its employees,
                workers, customers, suppliers, directors or shareholders.
              </p>

              <p>
                This information may include names, addresses, dates of birth,
                pay details, National Insurance numbers, tax codes, pension
                information and other information required to perform the
                relevant service.
              </p>

              <Subheading>
                Special-category and criminal-offence information
              </Subheading>

              <p>
                Where necessary and permitted by law, we may process information
                concerning:
              </p>

              <BulletList
                items={[
                  "Health or disability, particularly where relevant to payroll, benefits or tax.",
                  "Trade-union deductions.",
                  "Criminal convictions or allegations, including information relevant to fraud prevention, professional obligations or anti-money-laundering checks.",
                ]}
              />

              <Subheading>Website and technical information</Subheading>

              <p>When you use our website, we may automatically collect:</p>

              <BulletList
                items={[
                  "Your IP address.",
                  "Browser and device information.",
                  "Website usage and navigation information.",
                  "Cookie identifiers.",
                  "The date, time and source of your visit.",
                ]}
              />

              <Subheading>Communications</Subheading>

              <p>
                We may retain emails, letters, telephone notes, website
                enquiries, messages and other communications between you and us.
              </p>
            </Section>

            {/* 3 */}
            <Section title="3. How we collect personal information">
              <p>We may obtain personal information:</p>

              <BulletList
                items={[
                  "Directly from you.",
                  "From a business or organisation that has appointed us.",
                  "From your employer, employees, representatives or professional advisers.",
                  "From HMRC, Companies House, The Pensions Regulator and other public authorities.",
                  "From banks, pension providers, insurers and financial institutions.",
                  "Through accounting, payroll and identity-verification software.",
                  "From publicly accessible sources.",
                  "From our website, cookies and analytics providers.",
                  "From fraud-prevention, credit-reference or anti-money-laundering service providers.",
                ]}
              />

              <p>
                If you provide personal information about another person, you
                should ensure that you are entitled to provide it to us and,
                where appropriate, that the person has received information
                about how we will use it.
              </p>
            </Section>

            {/* 4 */}
            <Section title="4. How we use personal information">
              <p>We may use personal information to:</p>

              <BulletList
                items={[
                  "Provide bookkeeping, accounting, payroll, VAT, tax and advisory services.",
                  "Prepare and submit accounts, tax returns, payroll reports and statutory filings.",
                  "Communicate with HMRC, Companies House, The Pensions Regulator and other authorities.",
                  "Verify identity and undertake client due-diligence checks.",
                  "Comply with anti-money-laundering and professional obligations.",
                  "Manage our relationship with clients and respond to enquiries.",
                  "Issue invoices, process payments and recover outstanding fees.",
                  "Maintain accurate business and client records.",
                  "Establish, exercise or defend legal claims.",
                  "Detect and prevent fraud, misuse and financial crime.",
                  "Protect our systems, information and business.",
                  "Improve our website and services.",
                  "Manage suppliers and professional advisers.",
                  "Send service information and, where permitted, marketing communications.",
                  "Comply with legal, regulatory, tax and reporting requirements.",
                ]}
              />

              <p>
                We will only use personal information for the purpose for which
                it was collected unless we reasonably consider that it may be
                used for a compatible purpose.
              </p>
            </Section>

            {/* 5 */}
            <Section title="5. Our lawful bases">
              <p>
                Under UK data protection law, we rely on one or more of the
                following lawful bases:
              </p>

              <BulletList
                items={[
                  "Contract: Processing is necessary to enter into or perform a contract with you.",
                  "Legal obligation: Processing is necessary to meet legal, regulatory, tax, accounting, anti-money-laundering or professional requirements.",
                  "Legitimate interests: Processing is necessary for our legitimate business interests, provided those interests do not override your rights.",
                  "Consent: You have given us permission to process information for a particular purpose. You may withdraw consent at any time.",
                  "Legal claims or substantial public interest: Where permitted by law, this may apply when we process special-category or criminal-offence information.",
                ]}
              />

              <p>
                Where we act as a data processor, our client determines the
                lawful basis and purposes of processing, and we handle the
                information in accordance with that client’s documented
                instructions.
              </p>
            </Section>

            {/* 6 */}
            <Section title="6. Anti-money-laundering checks">
              <p>
                As an accountancy service provider, we may be legally required
                to verify the identity of clients, directors, shareholders,
                beneficial owners and other relevant individuals.
              </p>

              <p>
                We may use identity-verification providers and information from
                public or commercial sources to complete these checks. We may
                also be legally required to retain related records and report
                suspicious activity to the appropriate authorities.
              </p>

              <p>
                The law may prevent us from informing you about certain reports
                or investigations.
              </p>
            </Section>

            {/* 7 */}
            <Section title="7. Cookies">
              <p>Our website may use cookies and similar technologies to:</p>

              <BulletList
                items={[
                  "Operate essential website functions.",
                  "Remember your choices.",
                  "Understand how visitors use our website.",
                  "Improve website performance.",
                  "Support marketing where you have provided consent.",
                ]}
              />

              <p>
                Non-essential cookies should only be placed where required
                consent has been obtained. You can manage cookies through our
                cookie banner and your browser settings.
              </p>

              <p>
                Rejecting certain cookies may affect some website functions.
                Further information should be provided in our Cookie Policy or
                cookie-management tool.
              </p>
            </Section>

            {/* 8 */}
            <Section title="8. Marketing communications">
              <p>We may send you information about our services where:</p>

              <BulletList
                items={[
                  "You have consented to receive it.",
                  "You have previously purchased or enquired about similar services and the law permits us to contact you.",
                  "Another lawful basis applies.",
                ]}
              />

              <p>
                You may unsubscribe at any time by using the unsubscribe link in
                an email or contacting us. Opting out of marketing will not
                prevent us from sending important communications about services
                we provide to you.
              </p>

              <p>We do not sell personal information.</p>
            </Section>

            {/* 9 */}
            <Section title="9. When we share personal information">
              <p>
                Where necessary and lawful, we may share information with:
              </p>

              <BulletList
                items={[
                  "HMRC, Companies House, The Pensions Regulator and other public authorities.",
                  "Accounting, bookkeeping, tax, payroll and practice-management software providers.",
                  "Banks, payment processors and pension providers.",
                  "Identity-verification, anti-money-laundering and fraud-prevention providers.",
                  "Cloud hosting, data-storage, email, IT support and cybersecurity providers.",
                  "Auditors, insurers, solicitors, tax specialists and other professional advisers.",
                  "Debt-recovery and legal-service providers.",
                  "Subcontractors assisting us with authorised client work.",
                  "Regulators, law-enforcement agencies, courts and government bodies.",
                  "A purchaser, investor or adviser involved in a proposed sale, merger or restructuring of our business.",
                ]}
              />

              <p>
                Where third parties process information on our behalf, we
                require them to protect it and use it only for the agreed
                purposes.
              </p>

              <p>
                We may disclose information without your consent where required
                or permitted by law.
              </p>
            </Section>

            {/* 10 */}
            <Section title="10. International transfers">
              <p>
                Some of our software providers or other service providers may
                store or process personal information outside the United
                Kingdom.
              </p>

              <p>
                Where information is transferred internationally, we will use
                appropriate safeguards required by law. These may include:
              </p>

              <BulletList
                items={[
                  "Transferring information to a country recognised as providing adequate protection.",
                  "Using the UK International Data Transfer Agreement.",
                  "Using the UK Addendum to approved standard contractual clauses.",
                  "Relying on another lawful transfer mechanism.",
                ]}
              />
            </Section>

            {/* 11 */}
            <Section title="11. Data security">
              <p>
                We use appropriate technical and organisational measures to
                protect personal information against accidental or unlawful
                loss, alteration, disclosure, access or destruction.
              </p>

              <p>
                These measures may include access controls, passwords,
                multi-factor authentication, encryption, secure cloud storage,
                staff training and appropriate confidentiality obligations.
              </p>

              <p>
                No internet transmission or storage system is completely secure.
                You should avoid sending highly sensitive information through
                unsecured channels.
              </p>
            </Section>

            {/* 12 */}
            <Section title="12. How long we retain information">
              <p>
                We retain personal information only for as long as reasonably
                necessary for the purpose for which it was collected and to
                satisfy legal, regulatory, tax, accounting, professional and
                insurance requirements.
              </p>

              <p>
                Retention periods depend on the nature of the information. For
                example:
              </p>

              <BulletList
                items={[
                  "Accounting and tax records will commonly be retained for at least six years after the relevant accounting period or transaction.",
                  "Anti-money-laundering and identity-check records will generally be retained for at least five years after the business relationship ends or the relevant transaction is completed.",
                  "Payroll and employment-related information will be retained for the periods required by tax, employment and pensions legislation.",
                  "Enquiry and marketing information will be retained only while it remains relevant or until consent is withdrawn.",
                  "Information connected with a dispute or legal claim may be kept until the matter and applicable limitation periods have ended.",
                ]}
              />

              <p>
                We may retain information for longer where required by law, a
                regulator, professional guidance, an ongoing investigation or a
                legal claim. When information is no longer required, we will
                securely delete or anonymise it.
              </p>
            </Section>

            {/* 13 */}
            <Section title="13. Your data-protection rights">
              <p>
                Depending on the circumstances, you may have the right to:
              </p>

              <BulletList
                items={[
                  "Request access to your personal information.",
                  "Ask us to correct inaccurate or incomplete information.",
                  "Request deletion of your information.",
                  "Ask us to restrict processing.",
                  "Object to processing based on legitimate interests or direct marketing.",
                  "Receive certain information in a portable format.",
                  "Withdraw consent where processing relies on consent.",
                  "Complain about how we process your information.",
                ]}
              />

              <p>
                These rights are not absolute, and legal or regulatory
                obligations may require us to retain or continue processing
                certain information.
              </p>

              <p>
                We may need to verify your identity before responding. We
                normally respond within one month, although the law allows
                additional time for complex or numerous requests.
              </p>

              <p>
                Where we process information solely on behalf of one of our
                clients, we may refer your request to that client because it is
                responsible for deciding how the information is used.
              </p>

              <p>To exercise your rights, contact us using the details below.</p>
            </Section>

            {/* 14 */}
            <Section title="14. Complaints">
              <p>
                If you have concerns about our use of your information, please
                contact us first so we can investigate.
              </p>

              <p>
                You also have the right to complain to the UK Information
                Commissioner’s Office:
              </p>

              <div className="mt-5 border-l-2 border-black/10 pl-5">
                <p className="font-semibold text-[#1d1d1b]">
                  Information Commissioner’s Office
                </p>
                <p>Wycliffe House</p>
                <p>Water Lane</p>
                <p>Wilmslow</p>
                <p>Cheshire</p>
                <p>SK9 5AF</p>
                <p className="mt-3">Telephone: 0303 123 1113</p>
                <p>Website: ico.org.uk/make-a-complaint</p>
              </div>
            </Section>

            {/* 15 */}
            <Section title="15. Third-party websites">
              <p>
                Our website may contain links to websites operated by third
                parties. We do not control those websites and are not
                responsible for their privacy practices.
              </p>

              <p>
                You should review the privacy policy of any third-party website
                before providing personal information.
              </p>
            </Section>

            {/* 16 */}
            <Section title="16. Children’s information">
              <p>
                Our services are not generally directed at children. We may,
                however, process information about children where it is
                necessary for a client’s tax, payroll, benefits or accounting
                affairs and where the processing is lawful.
              </p>
            </Section>

            {/* 17 */}
            <Section title="17. Changes to this policy">
              <p>
                We may update this Privacy Policy to reflect changes to our
                services, practices or legal obligations.
              </p>

              <p>
                The latest version will be published on our website with an
                updated revision date. Where a change materially affects how we
                use personal information, we will take reasonable steps to
                notify affected individuals.
              </p>
            </Section>

            {/* 18 */}
            <Section title="18. Contact us">
              <p>
                Questions, requests or complaints concerning this Privacy Policy
                or our use of personal information should be sent to:
              </p>

              <div className="mt-5 border-l-2 border-black/10 pl-5">
                <p className="font-semibold text-[#1d1d1b]">
                  The Bookkeeping Corporation
                </p>
                <p>info@thebookkeepingcorporation.com</p>
              </div>
            </Section>

          </div>
        </div>
      </main>
    </>
  );
}

/* -------------------------------------------------------
   REUSABLE COMPONENTS
------------------------------------------------------- */

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="mb-5 text-xl font-semibold tracking-tight text-[#1d1d1b] sm:text-2xl">
        {title}
      </h2>

      <div className="space-y-4 text-[15px] leading-7 text-black/65">
        {children}
      </div>
    </section>
  );
}

function Subheading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="pt-3 text-base font-semibold text-[#1d1d1b]">
      {children}
    </h3>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="ml-5 list-disc space-y-2">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}