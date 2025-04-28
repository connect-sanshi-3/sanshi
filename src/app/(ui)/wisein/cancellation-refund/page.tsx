import React from "react";

const Page = () => {
  return (
    <div>
      <div className={`bg-white px-[9%] py-5`}>
        <div className="mx-auto">
          <div className="mx-auto mb-4 flex max-w-screen-lg flex-col ">
            <h2 className="text-center text-lg font-medium">
              WiseIn refund-policy
            </h2>
          </div>
          <div className="rounded-[12px] bg-gray-100 p-8">
            <p className="mb-2 text-sm text-gray-500">
              Effective Date: January 1, 2025
            </p>

            <p className="mb-10 text-base leading-relaxed text-gray-700">
              At WiseIN, our mission is to foster meaningful mentorship
              connections that empower personal and professional growth. We
              understand that plans can change unexpectedly, which is why we
              have established a Refund Policy that reflects our commitment to
              transparency, fairness, and respect for your time. This document
              outlines how we handle cancellations, no-shows, and rescheduling
              requests, ensuring that every interaction is managed with care and
              clarity. Our goal is to provide you with a seamless experience,
              even when adjustments are necessary.
            </p>

            {/* Refund Policy Sections */}
            <section className="space-y-8">
              {/* Table of Contents */}
              <div>
                <h2 className="mb-4 text-lg font-semibold text-gray-900">
                  Table of Contents
                </h2>
                <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
                  <li>Introduction</li>
                  <li>Refund Eligibility & Conditions</li>
                  <li>Rescheduling Guidelines</li>
                  <li>Refund Request Process</li>
                  <li>Non-Refundable Scenarios</li>
                  <li>Refund Processing</li>
                  <li>Policy Updates and Changes</li>
                  <li>Contact Information and Support</li>
                </ul>
              </div>

              {/* Introduction Section */}
              <div>
                <h2 className="mb-4 text-lg font-semibold text-gray-900">
                  1. Introduction
                </h2>
                <div className="space-y-4">
                  <div className="rounded-lg p-3 shadow-sm">
                    <h3 className="mb-2 text-base font-medium text-gray-900">
                      1.1 Purpose and Scope
                    </h3>
                    <p className="text-sm text-gray-700">
                      This Refund Policy establishes the guidelines and
                      procedures for managing refunds related to WiseIN
                      Mentorship Calls. It is designed to ensure a transparent
                      and fair process for both mentors and mentees. This policy
                      applies to all users of WiseIN’s mentorship services and
                      governs cancellations, no-shows, and rescheduling
                      requests.
                    </p>
                  </div>
                  <div className="rounded-lg p-3 shadow-sm">
                    <h3 className="mb-2 text-base font-medium text-gray-900">
                      1.2 Overview of the Refund Process
                    </h3>
                    <p className="text-sm text-gray-700">
                      The refund process at WiseIN is structured to be
                      straightforward and efficient. Users who require a refund
                      or wish to reschedule a session should submit a request as
                      outlined in this policy. Upon receipt, WiseIN will review
                      the request based on the conditions specified herein.
                      Approved requests will be processed using the original
                      payment method, ensuring a timely and clear resolution.
                    </p>
                  </div>
                </div>
              </div>

              {/* Refund Eligibility & Conditions Section */}
              <div>
                <h2 className="mb-4 text-lg font-semibold text-gray-900">
                  2. Refund Eligibility & Conditions
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      title: "2.1 No Show by Mentee",
                      content:
                        "If a mentee fails to attend a scheduled call without providing prior notice, the call is considered a 'no-show.' In such instances, the mentor retains the full payment, and no refund will be issued. This policy ensures that mentors are fairly compensated for their time.",
                    },
                    {
                      title:
                        "2.2 Last-Minute Cancellations (Less Than 24 Hours)",
                      content:
                        "Cancellations made within 24 hours of the scheduled call are classified as last-minute cancellations. Under these conditions, the mentor is entitled to retain the full fee, and no refund will be granted. We understand that unforeseen circumstances may arise, but timely notice is essential to respect the mentor’s schedule.",
                    },
                    {
                      title: "2.3 Cancellations More Than 24 Hours in Advance",
                      content:
                        "When a call is canceled more than 24 hours prior to the scheduled time, the mentee is eligible for a full refund. Early notice allows the mentor to adjust their schedule, and ensures that the time slot can be reallocated accordingly.",
                    },
                    {
                      title: "2.4 Mentor-Initiated Cancellations",
                      content:
                        "If a mentor cancels the call for any reason, the mentee will have the option to either receive a full refund or reschedule the call at a mutually convenient time. This policy ensures that mentees are not adversely affected by changes outside their control.",
                    },
                  ].map((item, index) => (
                    <div key={index} className="rounded-lg p-3 shadow-sm">
                      <h3 className="mb-2 text-base font-medium text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-700">{item.content}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rescheduling Guidelines Section */}
              <div>
                <h2 className="mb-4 text-lg font-semibold text-gray-900">
                  3. Rescheduling Guidelines
                </h2>
                <div className="space-y-4">
                  <div className="rounded-lg p-3 shadow-sm">
                    <h3 className="mb-2 text-base font-medium text-gray-900">
                      3.1 Mentee Rescheduling Requirements
                    </h3>
                    <p className="text-sm text-gray-700">
                      If a mentee needs to change the scheduled time for their
                      mentorship call, they must request a reschedule at least
                      24 hours before the original appointment. This advance
                      notice helps minimize disruption and allows the mentor to
                      adjust their schedule accordingly.
                    </p>
                    <p className="mt-2 text-sm text-gray-700">
                      <span className="font-medium">Rescheduling Options:</span>
                    </p>
                    <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
                      <li>
                        Select a New Time: Work collaboratively with the mentor
                        to agree on an alternative time slot.
                      </li>
                      <li>
                        Request a Refund: If rescheduling isn’t feasible or
                        preferred, the mentee may opt for a full refund, subject
                        to the conditions outlined in the Refund Eligibility &
                        Conditions section.
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-lg p-3 shadow-sm">
                    <h3 className="mb-2 text-base font-medium text-gray-900">
                      3.2 Mentor Rescheduling Requirements
                    </h3>
                    <p className="text-sm text-gray-700">
                      Mentors are equally responsible for maintaining clear
                      communication when changes arise. If a mentor needs to
                      reschedule a call, they must notify the affected mentee at
                      least 24 hours in advance of the scheduled time.
                    </p>
                    <p className="mt-2 text-sm text-gray-700">
                      <span className="font-medium">Mentee Options:</span>
                    </p>
                    <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
                      <li>
                        Reschedule: Agree on a new, mutually convenient time, or
                      </li>
                      <li>
                        Request a Full Refund: Opt for a refund if the proposed
                        alternatives do not suit their schedule.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Refund Request Process Section */}
              <div>
                <h2 className="mb-4 text-lg font-semibold text-gray-900">
                  4. Refund Request Process
                </h2>
                <div className="space-y-4">
                  <div className="rounded-lg p-3 shadow-sm">
                    <h3 className="mb-2 text-base font-medium text-gray-900">
                      4.1 How to Submit a Request
                    </h3>
                    <p className="text-sm text-gray-700">
                      To initiate a refund or rescheduling request, users must
                      utilize the official submission channels. Requests can be
                      submitted by:
                    </p>
                    <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
                      <li>
                        Email: Send your refund or rescheduling request to{" "}
                        <a
                          href="mailto:support@wisein.in"
                          className="text-blue-600 hover:underline"
                        >
                          support@wisein.in
                        </a>
                        .
                      </li>
                      <li>
                        Online: Use the dedicated request form available on the
                        WiseIN website.
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-lg p-3 shadow-sm">
                    <h3 className="mb-2 text-base font-medium text-gray-900">
                      4.2 Required Information and Documentation
                    </h3>
                    <p className="text-sm text-gray-700">
                      To ensure a smooth and timely resolution, every refund or
                      rescheduling request should include:
                    </p>
                    <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
                      <li>Booking Details: Booking ID, date, and time.</li>
                      <li>Reason for Request: Explanation for cancellation.</li>
                      <li>
                        Supporting Documentation: Attach relevant documents if
                        applicable.
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-lg p-3 shadow-sm">
                    <h3 className="mb-2 text-base font-medium text-gray-900">
                      4.3 Response Timelines
                    </h3>
                    <p className="text-sm text-gray-700">
                      Once your request is submitted, WiseIN follows a
                      structured timeline to ensure prompt resolution:
                    </p>
                    <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
                      <li>Acknowledgment: Within 24 hours of submission.</li>
                      <li>
                        Review and Decision: Final decision within 1-2 business
                        days.
                      </li>
                      <li>
                        Processing: Refunds are processed promptly upon
                        approval.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Non-Refundable Scenarios Section */}
              <div>
                <h2 className="mb-4 text-lg font-semibold text-gray-900">
                  5. Non-Refundable Scenarios
                </h2>
                <div className="space-y-4">
                  <div className="rounded-lg p-3 shadow-sm">
                    <h3 className="mb-2 text-base font-medium text-gray-900">
                      5.1 Situations Not Eligible for Refunds
                    </h3>
                    <p className="text-sm text-gray-700">
                      Refunds will not be granted under the following
                      circumstances:
                    </p>
                    <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
                      <li>Attended Sessions.</li>
                      <li>No-Show Without Notice.</li>
                      <li>Last-Minute Cancellations.</li>
                    </ul>
                  </div>
                  <div className="rounded-lg p-3 shadow-sm">
                    <h3 className="mb-2 text-base font-medium text-gray-900">
                      5.2 Terms and Violations Affecting Refunds
                    </h3>
                    <p className="text-sm text-gray-700">
                      Refund eligibility may be impacted by:
                    </p>
                    <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
                      <li>Breach of Terms.</li>
                      <li>Non-Compliant Requests.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Refund Processing Section */}
              <div>
                <h2 className="mb-4 text-lg font-semibold text-gray-900">
                  6. Refund Processing
                </h2>
                <div className="space-y-4">
                  <div className="rounded-lg p-3 shadow-sm">
                    <h3 className="mb-2 text-base font-medium text-gray-900">
                      6.1 Timeline for Processing Refunds
                    </h3>
                    <p className="text-sm text-gray-700">
                      Once a refund request has been approved, WiseIN will
                      initiate the refund process promptly. Refunds are
                      typically credited within 7-10 business days.
                    </p>
                  </div>
                  <div className="rounded-lg p-3 shadow-sm">
                    <h3 className="mb-2 text-base font-medium text-gray-900">
                      6.2 Method of Refund (Original Payment Method)
                    </h3>
                    <p className="text-sm text-gray-700">
                      All approved refunds are credited back to the original
                      payment method used for the transaction. If the original
                      payment method is no longer active, WiseIN will arrange an
                      alternative method.
                    </p>
                  </div>
                </div>
              </div>

              {/* Policy Updates and Changes Section */}
              <div>
                <h2 className="mb-4 text-lg font-semibold text-gray-900">
                  7. Policy Updates and Changes
                </h2>
                <div className="space-y-4">
                  <div className="rounded-lg p-3 shadow-sm">
                    <h3 className="mb-2 text-base font-medium text-gray-900">
                      7.1 How Updates Will Be Communicated
                    </h3>
                    <p className="text-sm text-gray-700">
                      Any updates or amendments to this policy will be
                      communicated via email to registered users and will also
                      be posted on the WiseIN website.
                    </p>
                  </div>
                  <div className="rounded-lg p-3 shadow-sm">
                    <h3 className="mb-2 text-base font-medium text-gray-900">
                      7.2 Effective Date of Revisions
                    </h3>
                    <p className="text-sm text-gray-700">
                      All revisions become effective on the date specified in
                      the update notice. WiseIN will provide clear guidance on
                      how and when the updated policy will take effect.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Information and Support Section */}
              <div>
                <h2 className="mb-4 text-lg font-semibold text-gray-900">
                  8. Contact Information and Support
                </h2>
                <div className="space-y-4">
                  <div className="rounded-lg p-3 shadow-sm">
                    <h3 className="mb-2 text-base font-medium text-gray-900">
                      8.1 Customer Support Details
                    </h3>
                    <p className="text-sm text-gray-700">
                      For any inquiries or assistance, please contact us at:
                    </p>
                    <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
                      <li>
                        Email:{" "}
                        <a
                          href="mailto:support@wisein.in"
                          className="text-blue-600 hover:underline"
                        >
                          support@wisein.in
                        </a>
                      </li>
                      <li>Support Portal: Access via the WiseIN website.</li>
                      <li>
                        Operating Hours: Monday through Friday, 9:00 AM to 6:00
                        PM (local time).
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-lg p-3 shadow-sm">
                    <h3 className="mb-2 text-base font-medium text-gray-900">
                      8.2 Escalation and Dispute Resolution
                    </h3>
                    <p className="text-sm text-gray-700">
                      If you are unable to resolve your issue through the
                      standard support channels, you may escalate your concern
                      via the support portal or email. WiseIN is dedicated to
                      resolving disputes fairly and amicably.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
