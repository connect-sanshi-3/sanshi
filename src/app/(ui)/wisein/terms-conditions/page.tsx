const Page = () => {
  return (
    <div>
      <div className={`bg-white px-[9%] py-5`}>
        <div className="mx-auto mb-4 flex max-w-screen-lg flex-col ">
          <h2 className="text-center text-lg font-medium">
            WiseIN Terms and Conditions
          </h2>
        </div>
        <div className="mx-auto max-w-7xl rounded-[12px] bg-gray-100 p-8">
          <p className="mb-1 text-sm text-gray-500">
            Last Updated: April 9, 2025
          </p>
          <p className="mb-1 text-sm text-gray-500">
            Effective Date: January 1, 2025
          </p>

          {/* Introduction */}
          <div className="mb-8">
            <h2 className="mb-4 text-lg font-semibold text-gray-900">
              Introduction
            </h2>
            <p className="mb-4 text-base leading-relaxed text-gray-700">
              Welcome to Sanshi Network Tech Private Limited, the company behind
              WiseIN, a next-generation verified connecting platform. These
              Terms and Conditions govern your access and use of our services,
              including our website, mobile applications (Android and iOS), and
              any other platforms, products, or services operated by Sanshi
              Network Tech under WiseIN.
            </p>
            <p className="mb-6 text-base leading-relaxed text-gray-700">
              By accessing or using our platform, you agree to be bound by these
              Terms and Conditions. Please read them carefully before proceeding
              to use our services. If you do not agree with any part of these
              terms, you may not access or use our platform.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="mb-8 rounded-lg bg-white p-4 shadow-sm">
            <h3 className="mb-3 text-base font-medium text-gray-900">
              Table of Contents
            </h3>
            <ol className="list-decimal pl-5 text-sm text-gray-700">
              <li className="mb-2">
                <a href="#section1" className="text-blue-600 hover:underline">
                  Company Registration & Address
                </a>
              </li>
              <li className="mb-2">
                <a href="#section2" className="text-blue-600 hover:underline">
                  Privacy User Agreement
                </a>
              </li>
              <li className="mb-2">
                <a href="#section3" className="text-blue-600 hover:underline">
                  Account and Profile Eligibility
                </a>
                <ul className="list-disc pl-5 pt-1">
                  <li>
                    <a
                      href="#section3-1"
                      className="text-blue-600 hover:underline"
                    >
                      Account Creation & Accuracy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#section3-2"
                      className="text-blue-600 hover:underline"
                    >
                      Account Security & Responsibility
                    </a>
                  </li>
                  <li>
                    <a
                      href="#section3-3"
                      className="text-blue-600 hover:underline"
                    >
                      Username & Profile Guidelines
                    </a>
                  </li>
                  <li>
                    <a
                      href="#section3-4"
                      className="text-blue-600 hover:underline"
                    >
                      Individual & Business Profiles
                    </a>
                  </li>
                  <li>
                    <a
                      href="#section3-5"
                      className="text-blue-600 hover:underline"
                    >
                      Account Deletion & Data Retention
                    </a>
                  </li>
                </ul>
              </li>
              <li className="mb-2">
                <a href="#section4" className="text-blue-600 hover:underline">
                  Usage of this Platform
                </a>
                <ul className="list-disc pl-5 pt-1">
                  <li>
                    <a
                      href="#section4-1"
                      className="text-blue-600 hover:underline"
                    >
                      Availability Slots
                    </a>
                  </li>
                  <li>
                    <a
                      href="#section4-2"
                      className="text-blue-600 hover:underline"
                    >
                      Verified Connections
                    </a>
                  </li>
                </ul>
              </li>
              <li className="mb-2">
                <a href="#section5" className="text-blue-600 hover:underline">
                  Prohibited Activities
                </a>
                <ul className="list-disc pl-5 pt-1">
                  <li>
                    <a
                      href="#section5-1"
                      className="text-blue-600 hover:underline"
                    >
                      Misrepresentation & Fraud
                    </a>
                  </li>
                  <li>
                    <a
                      href="#section5-2"
                      className="text-blue-600 hover:underline"
                    >
                      Unlawful, Abusive, or Harmful Behavior
                    </a>
                  </li>
                  <li>
                    <a
                      href="#section5-3"
                      className="text-blue-600 hover:underline"
                    >
                      Privacy & Confidentiality Violations
                    </a>
                  </li>
                </ul>
              </li>
              <li className="mb-2">
                <a href="#section6" className="text-blue-600 hover:underline">
                  Content Ownership and Use
                </a>
                <ul className="list-disc pl-5 pt-1">
                  <li>
                    <a
                      href="#section6-1"
                      className="text-blue-600 hover:underline"
                    >
                      User Content
                    </a>
                  </li>
                  <li>
                    <a
                      href="#section6-2"
                      className="text-blue-600 hover:underline"
                    >
                      WiseIN Content
                    </a>
                  </li>
                </ul>
              </li>
              <li className="mb-2">
                <a href="#section7" className="text-blue-600 hover:underline">
                  Fees and Payments
                </a>
                <ul className="list-disc pl-5 pt-1">
                  <li>
                    <a
                      href="#section7-1"
                      className="text-blue-600 hover:underline"
                    >
                      Premium Features & Charges
                    </a>
                  </li>
                  <li>
                    <a
                      href="#section7-2"
                      className="text-blue-600 hover:underline"
                    >
                      Taxes & Responsibilities
                    </a>
                  </li>
                </ul>
              </li>
            </ol>
          </div>

          {/* Sections */}
          <section className="space-y-8">
            {/* Section 1: Company Registration & Address */}
            <div id="section1">
              <h2 className="mb-4 text-lg font-semibold text-gray-900">
                1. Company Registration & Address
              </h2>
              <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
                <li>
                  Sanshi Network Tech Pvt. Ltd. is a legally registered company
                  in Hyderabad, India.
                </li>

                <li>
                  Email:{" "}
                  <a
                    href="mailto:connect@sanshinetworktech.com"
                    className="text-blue-600 underline"
                  >
                    connect@sanshinetworktech.com
                  </a>
                </li>

                <li>Support Contact: +91 8008656641</li>

                <li>
                  Book a Call:{" "}
                  <a
                    href="http://www.Sanshinetworktech.com"
                    className="text-blue-600 underline"
                  >
                    www.Sanshinetworktech.com/book-a-call
                  </a>
                </li>
              </ul>
            </div>

            {/* Section 2: Privacy User Agreement */}
            <div id="section2">
              <h2 className="mb-4 text-lg font-semibold text-gray-900">
                2. Privacy User Agreement
              </h2>
              <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
                <li>
                  Our{" "}
                  <a
                    href="wisein/privacy-policy"
                    className="text-blue-600 underline"
                  >
                    Privacy Policy
                  </a>{" "}
                  governs how we collect, protect, and disclose your data.
                </li>

                <li>
                  By using WiseIN, you agree to our{" "}
                  <a
                    href="wisein/terms-conditions"
                    className="text-blue-600 underline"
                  >
                    Terms & Conditions
                  </a>
                  ,{" "}
                  <a
                    href="wisein/privacy-policy"
                    className="text-blue-600 underline"
                  >
                    Privacy Policy
                  </a>{" "}
                  ("Agreements").
                </li>

                <li>If you do not agree, you may not use WiseIN.</li>

                <li>
                  For concerns, contact us at{" "}
                  <a
                    href="mailto:support@wisein.in"
                    className="text-blue-600 underline"
                  >
                    support@wisein.in
                  </a>
                  .
                </li>

                <li>Thank you for being a responsible WiseIN member.</li>
              </ul>
            </div>

            {/* Section 3: Account and Profile Eligibility */}
            <div id="section3">
              <h2 className="mb-4 text-lg font-semibold text-gray-900">
                3. Account and Profile Eligibility
              </h2>

              <p className="mb-4 text-sm text-gray-700">
                The following terms govern how users can create and maintain
                accounts on the WiseIN platform, ensuring a secure and authentic
                environment for all members.
              </p>

              <div className="space-y-4">
                <div id="section3-1" className="rounded-lg p-3 shadow-sm">
                  <h3 className="mb-2 text-base font-medium text-gray-900">
                    3.1 Account Creation & Accuracy
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
                    <li>
                      Users must be at least 14 years old to create an account
                      on WiseIN.
                    </li>

                    <li>
                      The information provided during registration must be
                      accurate, complete, and up to date at all times.
                    </li>

                    <li>
                      Providing false, misleading, or outdated information may
                      result in account suspension or termination.
                    </li>

                    <li>
                      WiseIN reserves the right to verify user identities using
                      government-issued IDs, official email domains, or other
                      authentication methods deemed appropriate to ensure
                      authenticity.
                    </li>
                  </ul>
                </div>

                <div id="section3-2" className="rounded-lg p-3 shadow-sm">
                  <h3 className="mb-2 text-base font-medium text-gray-900">
                    3.2 Account Security & Responsibility
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
                    <li>
                      Users are solely responsible for maintaining the
                      confidentiality of their account credentials, including
                      passwords.
                    </li>

                    <li>
                      Any activity conducted through a user's account is their
                      responsibility, even if unauthorized.
                    </li>

                    <li>
                      If a user suspects a security breach or unauthorized
                      access, they must immediately notify WiseIN at{" "}
                      <a
                        href="mailto:support@wisein.in"
                        className="text-blue-600 underline"
                      >
                        support@wisein.in
                      </a>
                      .
                    </li>

                    <li>
                      WiseIN is not responsible for any loss or damage resulting
                      from compromised account security due to user negligence.
                    </li>
                  </ul>
                </div>

                <div id="section3-3" className="rounded-lg p-3 shadow-sm">
                  <h3 className="mb-2 text-base font-medium text-gray-900">
                    3.3 Username & Profile Guidelines
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
                    <li>
                      Users must use their real names and genuine profile photos
                      to maintain transparency and credibility.
                    </li>

                    <li>
                      Impersonation, misleading usernames, or using a
                      trademarked name without authorization is strictly
                      prohibited.
                    </li>

                    <li>
                      Offensive, vulgar, or obscene usernames will not be
                      allowed and may result in profile suspension.
                    </li>
                  </ul>
                </div>

                <div id="section3-4" className="rounded-lg p-3 shadow-sm">
                  <h3 className="mb-2 text-base font-medium text-gray-900">
                    3.4 Individual & Business Profiles
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
                    <li>
                      WiseIN individual profiles are for personal use only.
                    </li>

                    <li>
                      Companies, organizations, teams, and communities must
                      create dedicated business profiles.
                    </li>

                    <li>
                      WiseIN reserves the right to remove or modify any
                      misclassified profiles.
                    </li>
                  </ul>
                </div>

                <div id="section3-5" className="rounded-lg p-3 shadow-sm">
                  <h3 className="mb-2 text-base font-medium text-gray-900">
                    3.5 Account Deletion & Data Retention
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
                    <li>
                      Users may delete their account or content at any time.
                    </li>

                    <li>
                      WiseIN will make reasonable efforts to remove this data
                      from the platform.
                    </li>

                    <li>
                      However, cached or indexed content (e.g., in Google search
                      results) may remain visible for some time.
                    </li>

                    <li>
                      WiseIN retains the right to store minimal data for
                      security, legal, and compliance purposes.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 4: Usage of this Platform */}
            <div id="section4">
              <h2 className="mb-4 text-lg font-semibold text-gray-900">
                4. Usage of this Platform
              </h2>

              <p className="mb-4 text-sm text-gray-700">
                WiseIN is designed to facilitate professional connections and
                meetings. The following terms outline how users can utilize the
                platform's features and what to expect when engaging with other
                users.
              </p>

              <div className="space-y-4">
                <div id="section4-1" className="rounded-lg p-3 shadow-sm">
                  <h3 className="mb-2 text-base font-medium text-gray-900">
                    4.1 Availability Slots
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
                    <li>
                      Users can share their availability for meetings,
                      consultations, or networking purposes.
                    </li>

                    <li>
                      Scheduling is managed by users, and WiseIN does not
                      guarantee or take responsibility for missed, rescheduled,
                      or unfulfilled appointments between users.
                    </li>

                    <li>
                      It is the responsibility of both parties to confirm and
                      honor their scheduled commitments.
                    </li>
                  </ul>
                </div>

                <div id="section4-2" className="rounded-lg p-3 shadow-sm">
                  <h3 className="mb-2 text-base font-medium text-gray-900">
                    4.2 Verified Connections
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
                    <li>
                      All connections on WiseIN are based on verified profiles
                      to ensure authenticity and credibility.
                    </li>

                    <li>
                      Users are expected to engage professionally and
                      respectfully when interacting with others.
                    </li>

                    <li>
                      Any misuse, harassment, or inappropriate behavior may lead
                      to account suspension or termination as per our Code of
                      Conduct.
                    </li>
                  </ul>
                </div>
              </div>

              <p className="mt-4 text-sm text-gray-700">
                WiseIN strives to create a safe and productive environment for
                professional networking. Users are encouraged to report any
                issues or concerns regarding platform usage to our support team.
              </p>
            </div>

            {/* Section 5: Prohibited Activities */}
            <div id="section5">
              <h2 className="mb-4 text-lg font-semibold text-gray-900">
                5. Prohibited Activities
              </h2>

              <p className="mb-4 text-sm text-gray-700">
                To maintain a safe, professional, and trustworthy environment,
                the following activities are strictly prohibited on the WiseIN
                platform. Violations may result in account suspension or
                termination.
              </p>

              <div className="space-y-4">
                <div id="section5-1" className="rounded-lg p-3 shadow-sm">
                  <h3 className="mb-2 text-base font-medium text-gray-900">
                    5.1 Misrepresentation & Fraud
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
                    <li>
                      Users must not provide false information or impersonate
                      any person, organization, or entity.
                    </li>

                    <li>
                      Creating or using fake profiles or misrepresenting
                      identity, qualifications, or affiliations is strictly
                      forbidden.
                    </li>

                    <li>
                      Falsifying credentials, experience, or expertise is
                      considered a serious violation of our terms.
                    </li>
                  </ul>
                </div>

                <div id="section5-2" className="rounded-lg p-3 shadow-sm">
                  <h3 className="mb-2 text-base font-medium text-gray-900">
                    5.2 Unlawful, Abusive, or Harmful Behavior
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
                    <li>
                      Users must not engage in any activity that is unlawful,
                      abusive, defamatory, harassing, or threatening.
                    </li>

                    <li>
                      Hate speech, discrimination, bullying, or any form of
                      harassment will not be tolerated.
                    </li>

                    <li>
                      Attempting to exploit, deceive, or harm others through
                      scams, fraud, or misleading interactions is strictly
                      prohibited.
                    </li>

                    <li>
                      Sharing or promoting illegal content, services, or
                      activities is forbidden.
                    </li>
                  </ul>
                </div>

                <div id="section5-3" className="rounded-lg p-3 shadow-sm">
                  <h3 className="mb-2 text-base font-medium text-gray-900">
                    5.3 Privacy & Confidentiality Violations
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
                    <li>
                      Users must respect the privacy of others and not share,
                      misuse, or distribute any personal, professional, or
                      confidential information without explicit consent.
                    </li>

                    <li>
                      Unauthorized recording, screenshotting, or sharing of
                      private conversations, meetings, or content from WiseIN
                      without permission is strictly forbidden.
                    </li>

                    <li>
                      Attempting to access, collect, or store other users' data
                      beyond what is publicly available on the platform is
                      prohibited.
                    </li>
                  </ul>
                </div>
              </div>

              <p className="mt-4 text-sm text-gray-700">
                WiseIN actively monitors the platform for prohibited activities
                and encourages users to report any violations they encounter. We
                are committed to maintaining a professional and respectful
                environment for all users.
              </p>
            </div>

            {/* Section 6: Content Ownership and Use */}
            <div id="section6">
              <h2 className="mb-4 text-lg font-semibold text-gray-900">
                6. Content Ownership and Use
              </h2>

              <p className="mb-4 text-sm text-gray-700">
                This section outlines the rights and responsibilities regarding
                content shared on the WiseIN platform, including intellectual
                property considerations for both users and the platform.
              </p>

              <div className="space-y-4">
                <div id="section6-1" className="rounded-lg p-3 shadow-sm">
                  <h3 className="mb-2 text-base font-medium text-gray-900">
                    6.1 User Content
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
                    <li>
                      Users retain full ownership of any content they submit,
                      post, or upload to WiseIN, including but not limited to
                      text, images, videos, and other media.
                    </li>

                    <li>
                      By uploading or submitting content, users grant WiseIN a
                      worldwide, royalty-free, non-exclusive license to use,
                      store, distribute, display, and modify the content as
                      necessary to operate, improve, and promote the platform.
                    </li>

                    <li>
                      This license does not give WiseIN ownership of user
                      content but allows WiseIN to display and distribute it
                      within the platform's ecosystem.
                    </li>

                    <li>
                      Users are responsible for ensuring they have the necessary
                      rights to share any content they post on WiseIN.
                    </li>
                  </ul>
                </div>

                <div id="section6-2" className="rounded-lg p-3 shadow-sm">
                  <h3 className="mb-2 text-base font-medium text-gray-900">
                    6.2 WiseIN Content
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
                    <li>
                      All platform-related elements, including but not limited
                      to designs, user interfaces, algorithms, software code,
                      branding, trademarks, and proprietary features, are the
                      exclusive intellectual property of WiseIN.
                    </li>

                    <li>
                      Users may not copy, distribute, reproduce, modify, or use
                      any part of WiseIN's intellectual property without prior
                      written consent.
                    </li>

                    <li>
                      Unauthorized use of WiseIN's branding, trademarks, or
                      copyrighted materials may result in legal action.
                    </li>

                    <li>
                      The platform's name, logo, and associated branding
                      elements are protected and may not be used in any manner
                      that suggests endorsement or affiliation without explicit
                      permission.
                    </li>
                  </ul>
                </div>
              </div>

              <p className="mt-4 text-sm text-gray-700">
                WiseIN respects intellectual property rights and expects users
                to do the same. If you believe your intellectual property has
                been infringed upon, please contact our support team with the
                relevant details.
              </p>
            </div>

            {/* Section 7: Fees and Payments */}
            <div id="section7">
              <h2 className="mb-4 text-lg font-semibold text-gray-900">
                7. Fees and Payments
              </h2>

              <p className="mb-4 text-sm text-gray-700">
                This section outlines the financial terms and conditions related
                to using premium features and services on the WiseIN platform,
                including payment responsibilities and policies.
              </p>

              <div className="space-y-4">
                <div id="section7-1" className="rounded-lg p-3 shadow-sm">
                  <h3 className="mb-2 text-base font-medium text-gray-900">
                    7.1 Premium Features & Charges
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
                    <li>
                      WiseIN may charge fees for premium features,
                      subscriptions, or additional services.
                    </li>

                    <li>
                      All pricing details, payment terms, and applicable charges
                      will be clearly disclosed before purchase.
                    </li>

                    <li>
                      Users must review the terms before making any payment, as
                      fees may be non-refundable, except where required by law
                      or WiseIN's refund policy.
                    </li>

                    <li>
                      WiseIN reserves the right to modify pricing with
                      reasonable notice to users.
                    </li>
                  </ul>
                </div>

                <div id="section7-2" className="rounded-lg p-3 shadow-sm">
                  <h3 className="mb-2 text-base font-medium text-gray-900">
                    7.2 Taxes & Responsibilities
                  </h3>
                  <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
                    <li>
                      Users are responsible for any applicable taxes, duties, or
                      government-imposed charges related to their purchases on
                      WiseIN.
                    </li>

                    <li>
                      WiseIN does not collect or remit taxes on behalf of users
                      unless legally required.
                    </li>

                    <li>
                      Failure to complete payments or unauthorized chargebacks
                      may result in suspension of services and restricted access
                      to premium features.
                    </li>

                    <li>
                      WiseIN will first notify the user and provide an
                      opportunity to resolve the dispute before initiating any
                      suspension.
                    </li>

                    <li>
                      Users must contact WiseIN support to resolve disputes
                      before initiating a chargeback.
                    </li>
                  </ul>
                </div>
              </div>

              <p className="mt-4 text-sm text-gray-700">
                For any payment-related inquiries, refund requests, or billing
                issues, please contact our support team at{" "}
                <a
                  href="mailto:support@wisein.in"
                  className="text-blue-600 underline"
                >
                  support@wisein.in
                </a>
                . We are committed to addressing your concerns promptly and
                transparently.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Page;
