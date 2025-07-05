import React from 'react'

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
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
                Welcome to psmedia.ke. These Terms of Service (&quot;Terms&quot;) govern your use of
                our website and services. By accessing or using our website, you agree to be bound
                by these Terms. If you disagree with any part of these terms, you may not access our
                service.
              </p>
            </div>

            {/* Acceptance of Terms */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-[#0763fe]/10 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-[#0763fe] font-bold">1</span>
                </div>
                Acceptance of Terms
              </h2>

              <p className="text-gray-700 mb-4">
                By accessing and using this website, you accept and agree to be bound by the terms
                and provision of this agreement.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>You must be at least 13 years old to use this service</li>
                <li>You agree to use the service only for lawful purposes</li>
                <li>You acknowledge that you have read and understood these Terms</li>
              </ul>
            </section>

            {/* Description of Service */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-[#0763fe]/10 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-[#0763fe] font-bold">2</span>
                </div>
                Description of Service
              </h2>

              <p className="text-gray-700 mb-4">
                We provide a news and information website that offers:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Breaking news and current events coverage</li>
                <li>
                  Articles across various categories (News, Sports, Business, Entertainment,
                  Technology)
                </li>
                <li>Search functionality for finding specific content</li>
                <li>Newsletter subscription services</li>
                <li>Comment sections for user engagement</li>
                <li>Social media integration</li>
              </ul>
            </section>

            {/* User Accounts */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-[#0763fe]/10 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-[#0763fe] font-bold">3</span>
                </div>
                User Accounts and Registration
              </h2>

              <p className="text-gray-700 mb-4">
                When you create an account with us, you must provide information that is accurate,
                complete, and current at all times.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>You are responsible for safeguarding your account password</li>
                <li>You must notify us immediately of any unauthorized use of your account</li>
                <li>
                  We reserve the right to refuse service or terminate accounts at our discretion
                </li>
                <li>One person or legal entity may maintain only one account</li>
              </ul>
            </section>

            {/* User Content and Conduct */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-[#0763fe]/10 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-[#0763fe] font-bold">4</span>
                </div>
                User Content and Conduct
              </h2>

              <p className="text-gray-700 mb-4">
                You are responsible for any content you post, including comments, feedback, and
                other submissions. You agree not to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Post content that is illegal, harmful, threatening, abusive, or defamatory</li>
                <li>Violate any intellectual property rights</li>
                <li>Transmit spam, malware, or other malicious code</li>
                <li>Impersonate another person or entity</li>
                <li>Engage in harassment or hate speech</li>
                <li>Post false or misleading information</li>
                <li>Interfere with the proper working of the website</li>
              </ul>
            </section>

            {/* Intellectual Property */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-[#0763fe]/10 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-[#0763fe] font-bold">5</span>
                </div>
                Intellectual Property Rights
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-3">Our Content</h3>
                  <p className="text-gray-700">
                    All content on this website, including text, images, logos, and software, is
                    owned by us or our licensors and is protected by copyright, trademark, and other
                    intellectual property laws.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-3">Your Content</h3>
                  <p className="text-gray-700">
                    By posting content on our website, you grant us a non-exclusive, royalty-free,
                    perpetual, and worldwide license to use, modify, and display your content in
                    connection with our service.
                  </p>
                </div>
              </div>
            </section>

            {/* Privacy and Data */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-[#0763fe]/10 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-[#0763fe] font-bold">6</span>
                </div>
                Privacy and Data Protection
              </h2>

              <p className="text-gray-700">
                Your privacy is important to us. Our collection and use of personal information is
                governed by our Privacy Policy, which is incorporated into these Terms by reference.
                By using our service, you consent to the collection and use of your information as
                outlined in our Privacy Policy.
              </p>
            </section>

            {/* Disclaimers */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-[#0763fe]/10 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-[#0763fe] font-bold">7</span>
                </div>
                Disclaimers and Limitation of Liability
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-3">Service Disclaimer</h3>
                  <p className="text-gray-700">
                    Our website is provided &quot;as is&quot; without warranties of any kind, either
                    express or implied. We do not guarantee the accuracy, completeness, or
                    timeliness of the information on our website.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-3">
                    Limitation of Liability
                  </h3>
                  <p className="text-gray-700">
                    We shall not be liable for any indirect, incidental, special, consequential, or
                    punitive damages resulting from your use of our website or services.
                  </p>
                </div>
              </div>
            </section>

            {/* Third-Party Content */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-[#0763fe]/10 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-[#0763fe] font-bold">8</span>
                </div>
                Third-Party Content and Links
              </h2>

              <p className="text-gray-700 mb-4">
                Our website may contain links to third-party websites or services that are not owned
                or controlled by us.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>
                  We have no control over third-party websites and assume no responsibility for
                  their content
                </li>
                <li>
                  We do not endorse or assume responsibility for third-party products or services
                </li>
                <li>
                  Your interactions with third-party sites are governed by their own terms and
                  policies
                </li>
              </ul>
            </section>

            {/* Termination */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-[#0763fe]/10 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-[#0763fe] font-bold">9</span>
                </div>
                Termination
              </h2>

              <p className="text-gray-700 mb-4">
                We may terminate or suspend your account and access to our service immediately,
                without prior notice or liability, for any reason, including:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Breach of these Terms of Service</li>
                <li>Violation of applicable laws or regulations</li>
                <li>Fraudulent, abusive, or illegal activity</li>
                <li>Extended periods of inactivity</li>
              </ul>
            </section>

            {/* Governing Law */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-[#0763fe]/10 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-[#0763fe] font-bold">10</span>
                </div>
                Governing Law
              </h2>

              <p className="text-gray-700">
                These Terms shall be governed by and construed in accordance with the laws of [Your
                Jurisdiction], without regard to its conflict of law provisions. Any disputes
                arising under these Terms shall be subject to the exclusive jurisdiction of the
                courts in [Your Jurisdiction].
              </p>
            </section>

            {/* Changes to Terms */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-[#0763fe]/10 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-[#0763fe] font-bold">11</span>
                </div>
                Changes to Terms
              </h2>

              <p className="text-gray-700">
                We reserve the right to modify or replace these Terms at any time. If a revision is
                material, we will provide at least 30 days notice prior to any new terms taking
                effect. Your continued use of the service after any changes constitutes acceptance
                of the new Terms.
              </p>
            </section>

            {/* Contact Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-[#0763fe]/10 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-[#0763fe] font-bold">12</span>
                </div>
                Contact Information
              </h2>

              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>

              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#0763fe]">
                <div className="space-y-2">
                  <p className="text-gray-700">
                    <strong>Email:</strong> legal@yournewssite.com
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

            {/* Severability */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-[#0763fe]/10 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-[#0763fe] font-bold">13</span>
                </div>
                Severability
              </h2>

              <p className="text-gray-700">
                If any provision of these Terms is held to be invalid or unenforceable, the
                remaining provisions will remain in full force and effect. The invalid or
                unenforceable provision will be replaced with a valid provision that most closely
                matches the intent of the original provision.
              </p>
            </section>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12 text-gray-500">
          <p>
            By using our website, you acknowledge that you have read, understood, and agree to be
            bound by these Terms of Service.
          </p>
        </div>
      </div>
    </div>
  )
}
