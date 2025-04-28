const Page = () => {
  return (
    <div>
      <div className={`bg-white px-[9%] py-5`}>
        <div className="mx-auto mb-4 flex max-w-screen-lg flex-col ">
          <h2 className="text-center text-lg font-bold uppercase">
            WISEIN PRIVACY POLICY
          </h2>
        </div>
        <div className="mx-auto max-w-7xl rounded-[12px] bg-gray-100 p-8">
          <p className="mb-1 text-sm text-gray-500">
            Effective Date: January 1, 2025
          </p>
          <p className="mb-1 text-sm text-gray-500">
            Last Updated Date: January 1, 2025
          </p>
          <p className="mb-10 text-base leading-relaxed text-gray-700">
            This Privacy Policy explains how WiseIN collects, uses, discloses,
            and safeguards your information when you use our platform. Please
            read this policy carefully to understand our practices regarding
            your personal data and how we will treat it.
          </p>

          {/* Sections */}
          <section className="space-y-8">
            {/* Table of Contents */}
            <div>
              <h2 className="mb-4 text-lg font-semibold text-gray-900">
                Table of Contents
              </h2>
              <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
                <li>1. Introduction</li>
                <li>
                  2. Information We Collect
                  <ul className="mt-2 space-y-2 pl-5">
                    <li>2.1 Information You Provide Directly</li>
                    <li>2.2 Information Collected Automatically</li>
                  </ul>
                </li>
                <li>
                  3. How We Use Your Information
                  <ul className="mt-2 space-y-2 pl-5">
                    <li>3.1 To Provide and Improve WiseIN Services</li>
                    <li>3.2 To Ensure Security and Prevent Fraud</li>
                    <li>3.3 To Communicate with You</li>
                    <li>3.4 To Comply with Legal and Regulatory Obligations</li>
                  </ul>
                </li>
                <li>
                  4. How Long We Keep Your Information (Data Retention)
                  <ul className="mt-2 space-y-2 pl-5">
                    <li>4.1 General Retention Periods</li>
                    <li>4.2 Data Deletion & User Control</li>
                  </ul>
                </li>
                <li>
                  5. Do We Use Cookies and Other Tracking Technologies?
                  <ul className="mt-2 space-y-2 pl-5">
                    <li>5.1 What Are Cookies?</li>
                    <li>5.2 Types of Cookies We Use</li>
                    <li>5.3 How You Can Control Cookies</li>
                    <li>5.4 Third-Party Tracking Technologies</li>
                  </ul>
                </li>
                <li>
                  6. Information Sharing and Disclosure
                  <ul className="mt-2 space-y-2 pl-5">
                    <li>6.1 When We Share Your Information</li>
                    <li>6.2 Data Shared Within WiseIN</li>
                    <li>6.3 How We Protect Your Shared Information</li>
                  </ul>
                </li>
                <li>
                  7. Your Rights and Choices
                  <ul className="mt-2 space-y-2 pl-5">
                    <li>7.1 Your Data Rights</li>
                    <li>7.2 How to Exercise Your Rights</li>
                    <li>7.3 Data Retention and Deletion</li>
                  </ul>
                </li>
                <li>
                  8. Data Security
                  <ul className="mt-2 space-y-2 pl-5">
                    <li>8.1 How We Protect Your Data</li>
                    <li>8.2 How You Can Protect Your Data</li>
                    <li>8.3 Data Breach Response</li>
                  </ul>
                </li>
                <li>
                  9. International Data Transfers
                  <ul className="mt-2 space-y-2 pl-5">
                    <li>
                      9.1 Why Your Data May Be Transferred Internationally
                    </li>
                    <li>9.2 How We Protect International Data Transfers</li>
                    <li>9.3 Your Rights Regarding International Transfers</li>
                  </ul>
                </li>
                <li>
                  10. Children's Privacy
                  <ul className="mt-2 space-y-2 pl-5">
                    <li>10.1 How We Handle Data from Minors</li>
                    <li>10.2 Age Restrictions for Certain Features</li>
                  </ul>
                </li>
                <li>
                  11. Notification of Changes to This Privacy Policy
                  <ul className="mt-2 space-y-2 pl-5">
                    <li>11.1 How We Notify You About Changes</li>
                    <li>11.2 Your Continued Use of WiseIN</li>
                  </ul>
                </li>
                <li>12. Contact Us</li>
              </ul>
            </div>
            {/* Introduction Section */}
            <div>
              <h2 className="mb-4 text-lg font-semibold text-gray-900">
                1. Introduction
              </h2>
              <div className="space-y-4">
                <div className="rounded-lg p-3 shadow-sm">
                  <p className="text-sm text-gray-700">
                    <strong>WiseIN</strong> ("we," "our," or "the Company") is a
                    verified networking platform designed to help professionals
                    connect, collaborate, and grow in a secure and trusted
                    environment. Because trust is at the core of our platform,
                    we take privacy and security seriously to protect our users.
                  </p>
                  <p className="mt-4 text-sm text-gray-700">
                    To maintain the integrity of WiseIN, we only collect the
                    necessary information required for verification, security,
                    and platform functionality. Our approach ensures that you
                    can confidently network, apply for opportunities, and engage
                    with other professionals without concerns about unauthorized
                    access or misuse of your personal data.
                  </p>
                  <p className="mt-4 text-sm text-gray-700">
                    We employ strict security measures to protect your personal
                    data. All sensitive information is encrypted and securely
                    stored with access controls in place to prevent unauthorized
                    access. Additionally, WiseIN gives you complete control over
                    your data—you can access, update, or request deletion of
                    your information at any time.
                  </p>
                  <p className="mt-4 text-sm text-gray-700">
                    This Privacy Policy explains:
                  </p>
                  <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-gray-700">
                    <li>
                      What types of information we collect and why we collect
                      it.
                    </li>
                    <li>How we use, store, and protect your data.</li>
                    <li>Your rights and how you can control your data.</li>
                  </ul>
                  <p className="mt-4 text-sm text-gray-700">
                    If you have any concerns or questions about how WiseIN
                    handles your personal information, please feel free to reach
                    out to us at{" "}
                    <a
                      href="mailto:support@wisein.in"
                      className="text-blue-600 underline"
                    >
                      support@wisein.in
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
            {/* Information We Collect Section */}
            <div>
              <h2 className="mb-4 text-lg font-semibold text-gray-900">
                2. Information We Collect
              </h2>
              <div className="space-y-4">
                <div className="rounded-lg p-3 shadow-sm">
                  <p className="text-sm text-gray-700">
                    <strong>WiseIN</strong> collects information to provide a
                    secure, verified, and efficient networking experience. We
                    only collect the necessary data to help you connect with
                    professionals, find opportunities, and maintain a trusted
                    environment.
                  </p>
                  <p className="mt-4 text-sm text-gray-700">
                    We collect information in three ways:
                  </p>
                  <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-gray-700">
                    <li>
                      <strong>Information You Provide Directly</strong> – Data
                      you enter when creating an account or interacting with the
                      platform.
                    </li>
                    <li>
                      <strong>Information Collected Automatically</strong> –
                      Data we collect when you use WiseIN, such as device
                      details and browsing activity.
                    </li>
                    <li>
                      <strong>Information from Third Parties</strong> – Data
                      received from external sources when you connect
                      third-party services to WiseIN.
                    </li>
                  </ul>
                  <div className="mt-4">
                    <h3 className="mb-2 text-base font-medium text-gray-900">
                      2.1 Information You Provide Directly
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-700">
                          When you sign up for WiseIN or engage with our
                          platform, you may provide:
                        </p>
                        <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-gray-700">
                          <li>
                            <strong>Account Details</strong> – User name, email
                            address, phone number, and profile information
                          </li>
                          <li>
                            <strong>Verification Data</strong> –
                            Government-issued IDs to confirm your identity
                            (including Aadhaar details and Stripe Identity
                            verification)
                          </li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          Aadhar Information:
                        </p>
                        <p className="text-sm text-gray-700">
                          <strong>Purpose:</strong> We collect Aadhaar
                          information solely for identity verification to
                          maintain a trusted professional network.
                        </p>
                        <p className="text-sm text-gray-700">
                          <strong>Storage:</strong> All Aadhaar data is
                          encrypted and stored securely with strict access
                          controls.
                        </p>
                        <p className="text-sm text-gray-700">
                          We collect and store only:
                        </p>
                        <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-gray-700">
                          <li>The last 4 digits of your Aadhaar number</li>
                          <li>
                            The care-of name (as mentioned in your Aadhaar
                            records)
                          </li>
                          <li>Your full address (as per Aadhaar records)</li>
                          <li>Your date of birth (in DD-MM-YYYY format)</li>
                          <li>Your gender (as specified in Aadhaar)</li>
                          <li>
                            Your full name (exactly as it appears on your
                            Aadhaar card)
                          </li>
                          <li>Your photograph from the Aadhaar card</li>
                        </ul>
                        <p className="mt-4 text-sm text-gray-700">
                          What we do NOT store:
                        </p>
                        <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-gray-700">
                          <li>Your full 12-digit Aadhaar number</li>
                          <li>Your Aadhaar PIN or any biometric data</li>
                          <li>Any OTP received during verification</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          Stripe Identity:
                        </p>
                        <p className="text-sm text-gray-700">
                          <strong>First line:</strong> We use Stripe Identity
                          for secure identity verification to prevent fraud and
                          maintain platform integrity.
                        </p>
                        <p className="text-sm text-gray-700">
                          <strong>Purpose:</strong> To verify user identities,
                          prevent fraudulent accounts, and comply with security
                          requirements.
                        </p>
                        <p className="text-sm text-gray-700">
                          <strong>Storage:</strong> Verification data is stored
                          securely with Stripe and only necessary information is
                          retained on our systems.
                        </p>
                        <p className="text-sm text-gray-700">
                          We collect through Stripe:
                        </p>
                        <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-gray-700">
                          <li>Full Name (First and Last Name)</li>
                          <li>Your full address</li>
                          <li>Issuing Country</li>
                          <li>Verification Status</li>
                          <li>Your year of birth</li>
                          <li>Face Images (captured during verification)</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          Video:
                        </p>
                        <p className="text-sm text-gray-700">
                          <strong>Purpose:</strong> As part of the verification
                          process, users are required to submit a video
                          recording in which they recite AI-generated text. This
                          process validates the identity of the user.
                        </p>
                        <p className="mt-2 text-sm text-gray-700">
                          <strong>Retention:</strong> Stored securely and
                          utilized exclusively for verification purposes.
                        </p>
                        <p className="mt-2 text-sm text-gray-700">
                          From Video, We Take a Frame and add it to the Profile
                          Picture of the user account.
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-700">
                          Other information you may provide:
                        </p>
                        <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-gray-700">
                          <li>
                            <strong>Profile Information</strong> – You may
                            choose to add details like your professional bio,
                            skills, experience, education, projects, or social
                            links to enhance your profile.
                          </li>
                          <li>
                            <strong>Content You Share</strong> – This includes
                            posts, messages, booking a call, job postings,
                            comments, and any other content you upload or
                            interact with on the platform.
                          </li>
                          <li>
                            <strong>Payment Information</strong> – If you
                            purchase services or subscribe to paid features,
                            billing details (such as name and payment method)
                            are processed securely through third-party payment
                            providers.
                          </li>
                        </ul>
                        <p className="mt-4 text-sm text-gray-700">
                          You always have the option to edit or delete certain
                          information through your account settings. However,
                          some verification details may be required to maintain
                          the security and integrity of WiseIN.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="mb-2 text-base font-medium text-gray-900">
                      2.2 Information Collected Automatically
                    </h3>
                    <div className="space-y-4">
                      <p className="text-sm text-gray-700">
                        When you use WiseIN, we automatically collect certain
                        technical and usage data to improve platform security
                        and user experience. This includes:
                      </p>
                      <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
                        <li>
                          <strong>Device Information</strong> – We may collect
                          details about your device, such as its model,
                          operating system, browser type, and IP address to
                          optimize performance and security.
                        </li>
                        <li>
                          <strong>Usage Data</strong> – We track how you
                          interact with WiseIN, including pages visited,
                          features used, and time spent on the platform to
                          improve user experience.
                        </li>
                        <li>
                          <strong>Log Data</strong> – Our system records logs of
                          login attempts, session activity, and error reports to
                          detect and prevent security threats.
                        </li>
                        <li>
                          <strong>Cookies and Tracking Technologies</strong> –
                          We use cookies and analytics tools to personalize
                          content, remember preferences, and track platform
                          performance. You can manage your cookie preferences
                          through your browser settings.
                        </li>
                      </ul>
                      <p className="text-sm text-gray-700">
                        This data is collected anonymously where possible and is
                        used only to enhance security, prevent fraud, and
                        improve WiseIN's features.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* How We Use Your Information */}
            <div>
              <h2 className="mb-4 text-lg font-semibold text-gray-900">
                3. How We Use Your Information
              </h2>
              <div className="space-y-4">
                <div className="rounded-lg p-3 shadow-sm">
                  <p className="text-sm text-gray-700">
                    <strong>WiseIN</strong> uses the information we collect to
                    provide, improve, and secure our platform while ensuring a
                    trusted and efficient networking experience. We only use
                    your data for the purposes outlined in this policy and never
                    sell your personal information.
                  </p>
                  <p className="mt-4 text-sm text-gray-700">
                    We use your information in the following ways:
                  </p>

                  <div className="mt-4">
                    <h3 className="mb-2 text-base font-medium text-gray-900">
                      3.1 To Provide and Improve WiseIN Services
                    </h3>
                    <p className="text-sm text-gray-700">
                      We use your data to:
                    </p>
                    <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-gray-700">
                      <li>
                        Create and manage your WiseIN account and profile.
                      </li>
                      <li>
                        Enable user verification to ensure a secure and
                        professional networking environment.
                      </li>
                      <li>
                        Allow you to connect with professionals, schedule
                        meetings, and participate in discussions.
                      </li>
                      <li>
                        Process payments for premium features, job postings, and
                        other WiseIN services (handled securely through
                        third-party payment providers).
                      </li>
                      <li>
                        Personalize your WiseIN feed, job recommendations, and
                        connection suggestions based on your profile and
                        activity.
                      </li>
                    </ul>
                  </div>

                  <div className="mt-4">
                    <h3 className="mb-2 text-base font-medium text-gray-900">
                      3.2 To Ensure Security and Prevent Fraud
                    </h3>
                    <p className="text-sm text-gray-700">
                      Protecting our users and platform is a top priority. We
                      may use your data to:
                    </p>
                    <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-gray-700">
                      <li>
                        Detect and prevent fraudulent accounts, suspicious
                        activity, and security threats.
                      </li>
                      <li>
                        Monitor login attempts and analyze activity patterns to
                        prevent unauthorized access.
                      </li>
                      <li>
                        Investigate policy violations and take necessary action
                        against misuse of the platform.
                      </li>
                      <li>
                        Store verification data securely to maintain the
                        integrity of WiseIN's verified networking system.
                      </li>
                    </ul>
                  </div>

                  <div className="mt-4">
                    <h3 className="mb-2 text-base font-medium text-gray-900">
                      3.3 To Communicate with You
                    </h3>
                    <p className="text-sm text-gray-700">
                      We use your contact details to:
                    </p>
                    <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-gray-700">
                      <li>
                        Send important account updates, such as login
                        notifications, security alerts, or changes to our
                        policies.
                      </li>
                      <li>
                        Notify you about new features, professional
                        opportunities, and community updates.
                      </li>
                      <li>
                        Provide customer support and respond to your inquiries.
                      </li>
                      <li>
                        Send marketing emails and newsletters (you can opt out
                        at any time).
                      </li>
                    </ul>
                  </div>

                  <div className="mt-4">
                    <h3 className="mb-2 text-base font-medium text-gray-900">
                      3.4 To Comply with Legal and Regulatory Obligations
                    </h3>
                    <p className="text-sm text-gray-700">
                      We may process your data when necessary to:
                    </p>
                    <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-gray-700">
                      <li>
                        Comply with legal requirements related to identity
                        verification and fraud prevention.
                      </li>
                      <li>
                        Respond to law enforcement requests or regulatory
                        inquiries when required.
                      </li>
                      <li>
                        Enforce WiseIN's Terms of Service and protect the
                        rights, safety, and security of our users.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* How Long We Keep Your Information */}
            <div>
              <h2 className="mb-4 text-lg font-semibold text-gray-900">
                4. How Long We Keep Your Information (Data Retention)
              </h2>
              <div className="space-y-4">
                <div className="rounded-lg p-3 shadow-sm">
                  <p className="text-sm text-gray-700">
                    <strong>WiseIN</strong> retains your personal data only for
                    as long as necessary to fulfill the purposes outlined in
                    this Privacy Policy. The length of time we store your data
                    depends on the type of information and how it is used.
                  </p>

                  <div className="mt-4">
                    <h3 className="mb-2 text-base font-medium text-gray-900">
                      4.1 General Retention Periods
                    </h3>
                    <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
                      <li>
                        <strong>Account Information</strong> – Stored as long as
                        your WiseIN account is active. If you delete your
                        account, we remove or anonymize your data, except where
                        retention is legally required.
                      </li>
                      <li>
                        <strong>
                          Verification Data (Government ID, Aadhaar, Stripe
                          Identity Checks)
                        </strong>{" "}
                        – Retained for security purposes only as long as
                        necessary to confirm authenticity. Some details (such as
                        the last 4 digits of Aadhaar) may be stored in a hashed
                        format.
                      </li>
                      <li>
                        <strong>Posts, Messages, and Content</strong> – Retained
                        until you delete them or close your account. Some
                        deleted content may remain temporarily in backups for
                        technical or legal reasons.
                      </li>
                      <li>
                        <strong>Payment Information</strong> – WiseIN does not
                        store full payment details; these are handled securely
                        by our third-party payment providers. Transaction
                        records are kept for tax and compliance purposes.
                      </li>
                    </ul>
                  </div>

                  <div className="mt-4">
                    <h3 className="mb-2 text-base font-medium text-gray-900">
                      4.2 Data Deletion & User Control
                    </h3>
                    <p className="text-sm text-gray-700">
                      You can request deletion of your personal data at any time
                      through your account settings or by contacting{" "}
                      <a
                        href="mailto:support@wisein.in"
                        className="text-blue-600 underline"
                      >
                        support@wisein.in
                      </a>
                      . However, some data may be retained:
                    </p>
                    <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-gray-700">
                      <li>
                        If required for legal, tax, or compliance reasons.
                      </li>
                      <li>To prevent fraud, abuse, or account misuse.</li>
                      <li>
                        If data is stored in secure backups, it may take
                        additional time for full removal.
                      </li>
                    </ul>
                    <p className="mt-4 text-sm text-gray-700">
                      Once your data is no longer needed, WiseIN ensures that it
                      is securely deleted, anonymized, or encrypted to protect
                      your privacy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Do We Use Cookies and Other Tracking Technologies? */}
            <div>
              <h2 className="mb-4 text-lg font-semibold text-gray-900">
                5. Do We Use Cookies and Other Tracking Technologies?
              </h2>
              <div className="space-y-4">
                <div className="rounded-lg p-3 shadow-sm">
                  <p className="text-sm text-gray-700">
                    <strong>WiseIN</strong> uses cookies and similar tracking
                    technologies to improve your browsing experience, analyze
                    platform performance, and enhance security. These
                    technologies help us personalize content, remember user
                    preferences, and detect fraudulent activity.
                  </p>

                  <div className="mt-4">
                    <h3 className="mb-2 text-base font-medium text-gray-900">
                      5.1 What Are Cookies?
                    </h3>
                    <p className="text-sm text-gray-700">
                      Cookies are small text files stored on your device when
                      you visit WiseIN. They allow us to recognize you and
                      provide a smoother experience. Some cookies are essential
                      for WiseIN to function, while others help us improve
                      platform performance and analytics.
                    </p>
                  </div>

                  <div className="mt-4">
                    <h3 className="mb-2 text-base font-medium text-gray-900">
                      5.2 Types of Cookies We Use
                    </h3>
                    <p className="text-sm text-gray-700">
                      WiseIN uses different types of cookies:
                    </p>
                    <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-gray-700">
                      <li>
                        <strong>Essential Cookies</strong> – Required for key
                        platform functions, such as login authentication,
                        maintaining sessions, and remembering security settings.
                        These cannot be disabled.
                      </li>
                      <li>
                        <strong>Performance & Analytics Cookies</strong> – Help
                        us understand user interactions, track platform
                        performance, and optimize features (e.g., Google
                        Analytics).
                      </li>
                      <li>
                        <strong>Functionality Cookies</strong> – Store user
                        preferences, such as language settings and display
                        choices, to improve usability.
                      </li>
                      <li>
                        <strong>Security Cookies</strong> – Protect your account
                        by detecting suspicious activity, preventing
                        unauthorized logins, and enforcing security settings.
                      </li>
                    </ul>
                  </div>

                  <div className="mt-4">
                    <h3 className="mb-2 text-base font-medium text-gray-900">
                      5.3 How You Can Control Cookies
                    </h3>
                    <p className="text-sm text-gray-700">
                      You have the option to manage, disable, or delete cookies
                      through your browser settings. Most browsers allow you to:
                    </p>
                    <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-gray-700">
                      <li>Block all cookies or specific types.</li>
                      <li>Clear existing cookies from your device.</li>
                      <li>Set up alerts before cookies are stored.</li>
                    </ul>
                    <p className="mt-4 text-sm text-gray-700">
                      However, if you disable essential cookies, some WiseIN
                      features may not work correctly (e.g., login sessions,
                      authentication, and security protections).
                    </p>
                  </div>

                  <div className="mt-4">
                    <h3 className="mb-2 text-base font-medium text-gray-900">
                      5.4 Third-Party Tracking Technologies
                    </h3>
                    <p className="text-sm text-gray-700">
                      WiseIN may work with trusted third-party services (such as
                      Google Analytics, Stripe for payments, or cloud services)
                      that use their own cookies or tracking tools. These
                      services collect anonymous usage statistics to help us
                      improve the platform.
                    </p>
                    <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-gray-700">
                      <li>
                        <strong>Google Analytics</strong> – Tracks user behavior
                        and platform performance to help us optimize WiseIN.
                      </li>
                      <li>
                        <strong>
                          Payment Providers (e.g., Stripe, PhonePe)
                        </strong>{" "}
                        – Use tracking technologies to prevent fraud and ensure
                        secure transactions.
                      </li>
                      <li>
                        <strong>Advertising or Marketing Tools</strong> – If
                        WiseIN implements targeted promotions, third-party
                        services may use tracking pixels or cookies to measure
                        effectiveness.
                      </li>
                    </ul>
                    <p className="mt-4 text-sm text-gray-700">
                      Each third-party service has its own privacy policy, and
                      their data collection practices are governed by those
                      policies. You can review their policies for more details
                      on how they handle cookies and tracking.
                    </p>
                    <p className="mt-4 text-sm text-gray-700">
                      For more information about how to manage cookies, visit
                      your browser's help section.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Information Sharing and Disclosure */}
            <div>
              <h2 className="mb-4 text-lg font-semibold text-gray-900">
                6. Information Sharing and Disclosure
              </h2>
              <div className="space-y-4">
                <div className="rounded-lg p-3 shadow-sm">
                  <p className="text-sm text-gray-700">
                    <strong>WiseIN</strong> values your privacy and does not
                    sell or rent your personal data to third parties. However,
                    in some cases, we may share your information with trusted
                    entities under strict security and privacy controls.
                  </p>

                  <div className="mt-4">
                    <h3 className="mb-2 text-base font-medium text-gray-900">
                      6.1 When We Share Your Information
                    </h3>
                    <p className="text-sm text-gray-700">
                      We may share your data in the following situations:
                    </p>
                    <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-gray-700">
                      <li>
                        <strong>With Service Providers</strong> – We work with
                        trusted third-party vendors (e.g., cloud hosting,
                        identity verification, payment processors) who assist in
                        running WiseIN efficiently. These providers are
                        contractually obligated to protect your data and cannot
                        use it for their own purposes.
                      </li>
                      <li>
                        <strong>For Legal Compliance & Security</strong> – If
                        required by law or to protect WiseIN and its users, we
                        may disclose information to:
                        <ul className="mt-2 list-disc space-y-2 pl-5">
                          <li>
                            Comply with legal obligations, court orders, or
                            government requests.
                          </li>
                          <li>
                            Investigate fraud, security threats, or policy
                            violations.
                          </li>
                          <li>
                            Enforce our Terms of Service and protect the rights
                            and safety of users.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>For Business Transfers</strong> – In the event
                        of a merger, acquisition, or company restructuring, your
                        data may be transferred to a new owner, subject to this
                        Privacy Policy.
                      </li>
                      <li>
                        <strong>With Your Consent</strong> – In some cases, we
                        may share your data with third parties if you explicitly
                        consent (e.g., integrating a third-party service with
                        WiseIN).
                      </li>
                    </ul>
                  </div>

                  <div className="mt-4">
                    <h3 className="mb-2 text-base font-medium text-gray-900">
                      6.2 Data Shared Within WiseIN
                    </h3>
                    <p className="text-sm text-gray-700">
                      Some of your information may be visible to other WiseIN
                      users based on your privacy settings:
                    </p>
                    <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-gray-700">
                      <li>
                        <strong>Public Profile Information</strong> – Your name,
                        professional details, and skills may be visible to
                        others on WiseIN.
                      </li>
                      <li>
                        <strong>Connections & Engagements</strong> – When you
                        interact with posts, join meetings, or participate in
                        discussions, your activity may be visible to your
                        network.
                      </li>
                    </ul>
                    <p className="mt-4 text-sm text-gray-700">
                      You can control the visibility of your profile and data
                      through WiseIN's privacy settings.
                    </p>
                  </div>
                  <div className="mt-4">
                    <h3 className="mb-2 text-base font-medium text-gray-900">
                      6.3 How We Protect Your Shared Information
                    </h3>

                    <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-gray-700">
                      <li>
                        We limit data access to only those who need it for
                        legitimate purposes.
                      </li>
                      <li>
                        We require third parties to follow strict data
                        protection policies.
                      </li>
                      <li>
                        Any data shared for legal compliance follows
                        industry-standard encryption and security protocols.
                      </li>
                    </ul>
                    <p className="mt-4 text-sm text-gray-700">
                      WiseIN is committed to ensuring that your personal data
                      remains private and secure, even when shared under
                      necessary circumstances.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Your Rights and Choices */}
            <div>
              <h2 className="mb-4 text-lg font-semibold text-gray-900">
                7. Your Rights and Choices
              </h2>
              <div className="space-y-4">
                <div className="rounded-lg p-3 shadow-sm">
                  <p className="text-sm text-gray-700">
                    At <strong>WiseIN</strong>, we believe in giving users
                    control over their personal data. Depending on your location
                    and applicable laws, you may have certain rights regarding
                    your personal information. Below are the rights you have and
                    how you can exercise them.
                  </p>

                  <div className="mt-4">
                    <h3 className="mb-2 text-base font-medium text-gray-900">
                      7.1 Your Data Rights
                    </h3>
                    <p className="text-sm text-gray-700">
                      You have the following rights regarding your personal
                      information:
                    </p>
                    <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-gray-700">
                      <li>
                        <strong>Access Your Data</strong> – You can request a
                        copy of the personal information WiseIN holds about you.
                      </li>
                      <li>
                        <strong>Edit or Update Your Information</strong> – You
                        can modify your account details, profile information,
                        and preferences at any time through your account
                        settings.
                      </li>
                      <li>
                        <strong>Delete Your Account and Data</strong> – You have
                        the right to request the deletion of your personal data,
                        subject to legal or security obligations. Some data may
                        be retained in secure backups for a limited time before
                        full removal.
                      </li>
                      <li>
                        <strong>Restrict or Object to Processing</strong> – In
                        certain cases, you can request that we limit the use of
                        your data or object to how it is being processed (e.g.,
                        for marketing purposes).
                      </li>
                      <li>
                        <strong>Opt-Out of Marketing Communications</strong> –
                        If you no longer wish to receive promotional emails from
                        WiseIN, you can unsubscribe using the link in our emails
                        or adjust your communication settings in your account.
                      </li>
                      <li>
                        <strong>Withdraw Consent</strong> – If you previously
                        gave consent for data collection (e.g., linking
                        third-party services), you can withdraw it at any time.
                      </li>
                    </ul>
                  </div>

                  <div className="mt-4">
                    <h3 className="mb-2 text-base font-medium text-gray-900">
                      7.2 How to Exercise Your Rights
                    </h3>
                    <p className="text-sm text-gray-700">
                      You can manage most of your data and privacy settings
                      directly in the WiseIN account settings. If you wish to
                      make a formal request for data access, modification, or
                      deletion, you can contact us at:
                      <a
                        href="mailto:support@wisein.in"
                        className="text-blue-600 underline"
                      >
                        {" "}
                        support@wisein.in
                      </a>
                    </p>
                    <p className="mt-2 text-sm text-gray-700">
                      We will process requests in accordance with applicable
                      laws and may require identity verification for security
                      purposes. In some cases, certain requests may be limited
                      by legal, regulatory, or security obligations.
                    </p>
                  </div>

                  <div className="mt-4">
                    <h3 className="mb-2 text-base font-medium text-gray-900">
                      7.3 Data Retention and Deletion
                    </h3>
                    <p className="text-sm text-gray-700">
                      If you delete your WiseIN account, we will remove or
                      anonymize your data unless retention is required for
                      legal, tax, security, or fraud prevention purposes.
                    </p>
                    <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-gray-700">
                      <li>
                        Some technical logs and backups may retain minimal data
                        for security monitoring but will be securely erased
                        within a reasonable timeframe.
                      </li>
                      <li>Once deleted, data recovery is not possible.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-lg font-semibold text-gray-900">
                8. Data Security
              </h2>
              <div className="space-y-4">
                <div className="rounded-lg p-3 shadow-sm">
                  <p className="text-sm text-gray-700">
                    WiseIN takes data security seriously and implements strict
                    measures to protect your personal information from
                    unauthorized access, loss, misuse, or alteration. We use
                    industry-standard security practices to ensure that your
                    data remains safe at all times.
                  </p>
                  <div className="mt-4">
                    <h3 className="mb-2 text-base font-medium text-gray-900">
                      8.1 How We Protect Your Data
                    </h3>
                    <p className="text-sm text-gray-700">
                      We implement the following security measures to keep your
                      data secure:
                    </p>
                    <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-gray-700">
                      <li>
                        <strong>Encryption</strong> – Sensitive data, including
                        passwords and verification details, is stored using
                        encryption techniques to prevent unauthorized access.
                      </li>
                      <li>
                        <strong>Secure Storage</strong> – Personal information
                        is stored in protected servers with access controls and
                        firewall protection.
                      </li>
                      <li>
                        <strong>Limited Access Controls</strong> – Only
                        authorized personnel with security clearance can access
                        sensitive data.
                      </li>
                      <li>
                        <strong>Regular Security Audits</strong> – WiseIN
                        performs ongoing security assessments to identify and
                        address vulnerabilities.
                      </li>
                      <li>
                        <strong>Anonymization & Hashing</strong> – Where
                        possible, data (such as Aadhaar details) is hashed or
                        anonymized to enhance privacy.
                      </li>
                    </ul>
                  </div>
                  <div className="mt-4">
                    <h3 className="mb-2 text-base font-medium text-gray-900">
                      8.2 How You Can Protect Your Data
                    </h3>
                    <p className="text-sm text-gray-700">
                      While we take every possible step to secure your
                      information, you also play a role in keeping your account
                      safe:
                    </p>
                    <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-gray-700">
                      <li>
                        <strong>Use a Strong Password</strong> – Choose a unique
                        and complex password for your WiseIN account and update
                        it regularly.
                      </li>
                      <li>
                        <strong>Be Cautious of Phishing Attempts</strong> –
                        WiseIN will never ask for your password or sensitive
                        information via email. If you receive suspicious
                        messages, report them immediately.
                      </li>
                      <li>
                        <strong>Log Out from Public Devices</strong> – Always
                        log out after using WiseIN on shared or public devices.
                      </li>
                    </ul>
                  </div>
                  <div className="mt-4">
                    <h3 className="mb-2 text-base font-medium text-gray-900">
                      8.3 Data Breach Response
                    </h3>
                    <p className="text-sm text-gray-700">
                      Despite strict security measures, no platform is
                      completely immune to security threats. In the event of a
                      data breach, WiseIN will:
                    </p>
                    <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-gray-700">
                      <li>
                        Immediately investigate the issue and take necessary
                        action to secure accounts.
                      </li>
                      <li>
                        Notify affected users and authorities (as required by
                        law) if a significant breach occurs.
                      </li>
                      <li>
                        Provide guidance on how to protect your data and prevent
                        further risks.
                      </li>
                    </ul>
                    <p className="mt-4 text-sm text-gray-700">
                      Your privacy and security are our top priorities, and we
                      continuously improve our security practices to protect
                      your data.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="mb-4 text-lg font-semibold text-gray-900">
                9. International Data Transfers
              </h2>
              <div className="space-y-4">
                <div className="rounded-lg p-3 shadow-sm">
                  <p className="text-sm text-gray-700">
                    WiseIN operates globally, which means your personal
                    information may be stored, processed, or transferred to
                    locations outside your country of residence. We ensure that
                    such transfers are carried out securely and in compliance
                    with applicable data protection laws.
                  </p>
                  <div className="mt-4">
                    <h3 className="mb-2 text-base font-medium text-gray-900">
                      9.1 Why Your Data May Be Transferred Internationally
                    </h3>
                    <p className="text-sm text-gray-700">
                      Your data may be transferred to other countries for the
                      following reasons:
                    </p>
                    <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-gray-700">
                      <li>
                        <strong>Cloud Storage & Hosting</strong> – WiseIN uses
                        global cloud service providers to store and manage data
                        securely.
                      </li>
                      <li>
                        <strong>Third-Party Services</strong> – Some of our
                        trusted third-party providers (e.g., payment processors,
                        analytics services) operate in multiple countries.
                      </li>
                      <li>
                        <strong>User Access & Connectivity</strong> – If you
                        connect with professionals or businesses from different
                        regions, data may be exchanged across borders.
                      </li>
                    </ul>
                  </div>
                  <div className="mt-4">
                    <h3 className="mb-2 text-base font-medium text-gray-900">
                      9.2 How We Protect International Data Transfers
                    </h3>
                    <p className="text-sm text-gray-700">
                      To ensure your data remains secure when transferred
                      internationally, we implement the following safeguards:
                    </p>
                    <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-gray-700">
                      <li>
                        <strong>Encryption & Secure Protocols</strong> – Data is
                        transmitted using secure encryption methods to prevent
                        interception.
                      </li>
                      <li>
                        <strong>Legal Compliance</strong> – We follow applicable
                        data protection regulations for international transfers.
                      </li>
                      <li>
                        <strong>Third-Party Agreements</strong> – Any external
                        service provider handling user data must comply with
                        WiseIN’s strict security and privacy standards.
                      </li>
                    </ul>
                  </div>
                  <div className="mt-4">
                    <h3 className="mb-2 text-base font-medium text-gray-900">
                      9.3 Your Rights Regarding International Transfers
                    </h3>
                    <p className="text-sm text-gray-700">
                      If required by law, we will inform you when your data is
                      transferred outside your country.
                    </p>
                    <p className="text-sm text-gray-700">
                      You have the right to request details about international
                      data transfers and the security measures in place.
                    </p>
                    <p className="text-sm text-gray-700">
                      WiseIN ensures that your personal data remains protected,
                      regardless of where it is processed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="mb-4 text-lg font-semibold text-gray-900">
                10. Children’s Privacy
              </h2>
              <div className="space-y-4">
                <div className="rounded-lg p-3 shadow-sm">
                  <p className="text-sm text-gray-700">
                    WiseIN is not intended for children under the age of 14. We
                    do not knowingly collect, store, or process personal data
                    from anyone under this age. If you are under 14, you should
                    not use WiseIN or provide any personal information on the
                    platform.
                  </p>
                  <div className="mt-4">
                    <h3 className="mb-2 text-base font-medium text-gray-900">
                      10.1 How We Handle Data from Minors
                    </h3>
                    <p className="text-sm text-gray-700">
                      If we discover that a user under 14 has provided personal
                      data, we will delete the information immediately.
                    </p>
                    <p className="text-sm text-gray-700">
                      Parents or legal guardians who believe their child has
                      provided personal information to WiseIN can contact us at
                      support@wisein.in to request removal.
                    </p>
                  </div>
                  <div className="mt-4">
                    <h3 className="mb-2 text-base font-medium text-gray-900">
                      10.2 Age Restrictions for Certain Features
                    </h3>
                    <p className="text-sm text-gray-700">
                      Some WiseIN features, such as video networking, job
                      applications, and business interactions, may have
                      additional age restrictions based on local laws and
                      regulations.
                    </p>
                    <p className="text-sm text-gray-700">
                      We are committed to maintaining a safe and professional
                      environment and take necessary measures to prevent
                      unauthorized access by minors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="mb-4 text-lg font-semibold text-gray-900">
                11. Notification of Changes to This Privacy Policy
              </h2>
              <div className="space-y-4">
                <div className="rounded-lg p-3 shadow-sm">
                  <p className="text-sm text-gray-700">
                    WiseIN may update this Privacy Policy from time to time to
                    reflect changes in legal requirements, security updates, or
                    improvements to our services. We encourage you to review
                    this policy periodically to stay informed about how we
                    protect your information.
                  </p>
                  <div className="mt-4">
                    <h3 className="mb-2 text-base font-medium text-gray-900">
                      11.1 How We Notify You About Changes
                    </h3>
                    <p className="text-sm text-gray-700">
                      If we make any significant changes to this Privacy Policy,
                      we will notify users through one or more of the following
                      methods:
                    </p>
                    <ul className="list-disc pl-5 text-sm text-gray-700">
                      <li>
                        Sending an email notification to registered users.
                      </li>
                      <li>
                        Posting an announcement on the WiseIN website or app.
                      </li>
                      <li>
                        Updating the "Last Updated" date at the top of this
                        policy.
                      </li>
                    </ul>
                  </div>
                  <div className="mt-4">
                    <h3 className="mb-2 text-base font-medium text-gray-900">
                      11.2 Your Continued Use of WiseIN
                    </h3>
                    <p className="text-sm text-gray-700">
                      If you continue using WiseIN after any updates to this
                      Privacy Policy, it means that you accept the revised
                      terms. If you do not agree with the changes, you may
                      choose to delete your account or adjust your privacy
                      settings.
                    </p>
                    <p className="text-sm text-gray-700">
                      We are committed to keeping you informed and in control of
                      your data at all times.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="mb-4 text-lg font-semibold text-gray-900">
                12. Contact Us
              </h2>
              <div className="space-y-4">
                <div className="rounded-lg p-3 shadow-sm">
                  <p className="text-sm text-gray-700">
                    If you have any questions, concerns, or requests regarding
                    this Privacy Policy or how WiseIN handles your personal
                    data, you can reach out to us using the following contact
                    details:
                  </p>
                  <p className="text-sm font-medium text-gray-700">
                    Email:{" "}
                    <a
                      href="mailto:support@wisein.in"
                      className="text-blue-600 hover:underline"
                    >
                      support@wisein.in
                    </a>
                  </p>

                  <p className="text-sm text-gray-700">
                    Sanshi Network Tech is a legally registered company in
                    Hyderabad, India.
                  </p>
                  <p className="text-sm font-medium text-gray-700">
                    Company Name: Sanshi Network Tech Pvt. Ltd.
                  </p>
                  <p className="text-sm font-medium text-gray-700">
                    Registered Address:
                  </p>
                  <p className="text-sm text-gray-700">
                    H No. 5-8-50/207, Sreepuram Colony Bn Reddy, Vanasthalipuram
                    Hayathnagar Rangareddy, Telangana, 500070 India.
                  </p>
                  <p className="text-sm font-medium text-gray-700">
                    Corporate Identification Number (CIN):
                  </p>
                  <p className="text-sm text-gray-700">U80300TS2024PTC180971</p>
                  <p className="text-sm font-medium text-gray-700">
                    Additional Contact:
                  </p>
                  <p className="text-sm text-gray-700">
                    Email: connect@sanshinetworktech.com
                  </p>
                  {/* <p className="text-sm text-gray-700">
                    Book a call with us at{" "}
                    <a
                      href="https://www.sanshinetworktech.com/bookacall"
                      className="text-blue-600 underline"
                    >
                      www.sanshinetworktech.com/bookacall
                    </a>
                  </p> */}
                  <p className="text-sm text-gray-700">
                    Support Contact: +91 8008656641
                  </p>
                  <p className="text-sm text-gray-700">
                    We take privacy and security seriously and will do our best
                    to respond to inquiries in a timely manner.
                  </p>
                  <p className="text-sm text-gray-700">
                    If you wish to request access to, modify, or delete your
                    personal information, please contact us via email, and we
                    will process your request in accordance with applicable
                    privacy laws.
                  </p>
                  <p className="text-sm text-gray-700">
                    For general support or additional inquiries, you may also
                    visit our Help Center on the WiseIN platform.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Page;
