import React from 'react'

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-600 text-lg">
            Last updated:{' '}
            {new Date().toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="mb-8">
              <p className="text-gray-700 leading-relaxed">
                Welcome to psmedia.ke. We are committed to protecting your personal information and
                your right to privacy. This Privacy Policy explains how we collect, use, disclose,
                and safeguard your information when you visit our website.
              </p>
            </div>

            {/* Information We Collect */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-[#0763fe]/10 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-[#0763fe] font-bold">1</span>
                </div>
                Information We Collect
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-3">Personal Information</h3>
                  <p className="text-gray-700 mb-3">
                    We may collect the following personal information:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Name and contact information when you subscribe to our newsletter</li>
                    <li>Email address for account creation and communication</li>
                    <li>Comments and feedback you provide on our articles</li>
                    <li>Information you provide when contacting us</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-3">
                    Automatically Collected Information
                  </h3>
                  <p className="text-gray-700 mb-3">
                    When you visit our website, we automatically collect:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>IP address and browser information</li>
                    <li>Device type and operating system</li>
                    <li>Pages visited and time spent on our site</li>
                    <li>Referring website and search terms used</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-[#0763fe]/10 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-[#0763fe] font-bold">2</span>
                </div>
                How We Use Your Information
              </h2>

              <p className="text-gray-700 mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Provide and maintain our news service</li>
                <li>Send you newsletters and updates (with your consent)</li>
                <li>Respond to your comments and inquiries</li>
                <li>Improve our website and user experience</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Prevent fraud and enhance security</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            {/* Information Sharing */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-[#0763fe]/10 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-[#0763fe] font-bold">3</span>
                </div>
                Information Sharing and Disclosure
              </h2>

              <p className="text-gray-700 mb-4">
                We do not sell, trade, or rent your personal information. We may share your
                information in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>With your explicit consent</li>
                <li>To comply with legal requirements or court orders</li>
                <li>To protect our rights, property, or safety</li>
                <li>With trusted service providers who assist in operating our website</li>
                <li>In connection with a business transfer or merger</li>
              </ul>
            </section>

            {/* Cookies and Tracking */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-[#0763fe]/10 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-[#0763fe] font-bold">4</span>
                </div>
                Cookies and Tracking Technologies
              </h2>

              <p className="text-gray-700 mb-4">
                We use cookies and similar tracking technologies to enhance your browsing
                experience. Cookies are small data files stored on your device that help us:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and performance</li>
                <li>Provide personalized content recommendations</li>
                <li>Enable social media features</li>
              </ul>
              <p className="text-gray-700 mt-4">
                You can control cookies through your browser settings, but disabling cookies may
                affect website functionality.
              </p>
            </section>

            {/* Data Security */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-[#0763fe]/10 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-[#0763fe] font-bold">5</span>
                </div>
                Data Security
              </h2>

              <p className="text-gray-700">
                We implement appropriate technical and organizational security measures to protect
                your personal information against unauthorized access, alteration, disclosure, or
                destruction. However, no method of transmission over the internet is 100% secure,
                and we cannot guarantee absolute security.
              </p>
            </section>

            {/* Your Rights */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-[#0763fe]/10 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-[#0763fe] font-bold">6</span>
                </div>
                Your Privacy Rights
              </h2>

              <p className="text-gray-700 mb-4">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Access and receive a copy of your personal information</li>
                <li>Rectify inaccurate or incomplete information</li>
                <li>Delete your personal information</li>
                <li>Restrict or object to processing of your information</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            {/* Third-Party Links */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-[#0763fe]/10 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-[#0763fe] font-bold">7</span>
                </div>
                Third-Party Links
              </h2>

              <p className="text-gray-700">
                Our website may contain links to third-party websites. We are not responsible for
                the privacy practices or content of these external sites. We encourage you to review
                the privacy policies of any third-party sites you visit.
              </p>
            </section>

            {/* Children's Privacy */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-[#0763fe]/10 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-[#0763fe] font-bold">8</span>
                </div>
                Children{"'"}s Privacy
              </h2>

              <p className="text-gray-700">
                Our website is not intended for children under 13 years of age. We do not knowingly
                collect personal information from children under 13. If you believe we have
                collected information from a child under 13, please contact us immediately.
              </p>
            </section>

            {/* Updates to Policy */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-[#0763fe]/10 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-[#0763fe] font-bold">9</span>
                </div>
                Updates to This Policy
              </h2>

              <p className="text-gray-700">
                We may update this Privacy Policy from time to time. We will notify you of any
                changes by posting the new Privacy Policy on this page and updating the &quot;Last
                updated&quot; date. We encourage you to review this Privacy Policy periodically.
              </p>
            </section>

            {/* Contact Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-[#0763fe]/10 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-[#0763fe] font-bold">10</span>
                </div>
                Contact Us
              </h2>

              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy or our privacy practices, please
                contact us:
              </p>

              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#0763fe]">
                <div className="space-y-2">
                  <p className="text-gray-700">
                    <strong>Email:</strong> privacy@yournewssite.com
                  </p>
                  <p className="text-gray-700">
                    <strong>Address:</strong> [Your Company Address]
                  </p>
                  <p className="text-gray-700">
                    <strong>Phone:</strong> [Your Phone Number]
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12 text-gray-500">
          <p>
            This privacy policy is effective as of the date stated above and applies to all users of
            our website.
          </p>
        </div>
      </div>
    </div>
  )
}
