import React from 'react'

export default function Cookie() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
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
                This Cookie Policy explains how <strong>psmedia.ke</strong>, a digital news and
                media platform, uses cookies and similar tracking technologies when you access or
                interact with our services. It outlines what cookies are, how they enhance your news
                experience, and the options available to manage them.
              </p>
            </div>

            {/* What Are Cookies */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-[#0763fe]/10 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-[#0763fe] font-bold">1</span>
                </div>
                What Are Cookies?
              </h2>

              <p className="text-gray-700 mb-4">
                Cookies are small text files that are placed on your device (computer, smartphone,
                or tablet) when you visit our website. They help us remember your preferences,
                improve your browsing experience, and personalize news content.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Store user preferences and regional settings</li>
                <li>Maintain login sessions</li>
                <li>Deliver personalized news and content recommendations</li>
                <li>Measure website performance and readership patterns</li>
              </ul>
            </section>

            {/* Types of Cookies */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-[#0763fe]/10 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-[#0763fe] font-bold">2</span>
                </div>
                Types of Cookies We Use
              </h2>

              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-medium text-gray-800 mb-3">Essential Cookies</h3>
                  <p className="text-gray-700 mb-3">
                    Necessary for core site functionality and cannot be disabled.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Authentication and login sessions</li>
                    <li>Security and fraud prevention</li>
                    <li>Basic navigation and content delivery</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-medium text-gray-800 mb-3">Performance Cookies</h3>
                  <p className="text-gray-700 mb-3">
                    Help us understand how readers interact with our content.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Google Analytics for traffic insights</li>
                    <li>Page load time and site performance analysis</li>
                    <li>Error logging and debugging</li>
                    <li>Popular articles and reading habits</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-medium text-gray-800 mb-3">Functionality Cookies</h3>
                  <p className="text-gray-700 mb-3">
                    Enable personalized features and user experience.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Language and region preferences</li>
                    <li>Font size and display settings</li>
                    <li>Newsletter signup preferences</li>
                    <li>Customized news recommendations</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-medium text-gray-800 mb-3">
                    Targeting/Advertising Cookies
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Used for relevant sponsored content and ad effectiveness.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Sponsored content personalization and delivery</li>
                    <li>Audience segmentation for news recommendations</li>
                    <li>Retargeting campaigns</li>
                    <li>Advertising performance measurement</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Third-Party Cookies */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-[#0763fe]/10 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-[#0763fe] font-bold">3</span>
                </div>
                Third‑Party Cookies
              </h2>

              <p className="text-gray-700 mb-4">
                We use third-party services that may set cookies when you engage with certain
                features on our site:
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-[#0763fe] pl-6">
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Google Analytics</h3>
                  <p className="text-gray-700 text-sm">
                    Used to analyze site traffic and improve reader experience.
                  </p>
                </div>

                <div className="border-l-4 border-[#0763fe] pl-6">
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Social Media Plugins</h3>
                  <p className="text-gray-700 text-sm">
                    Platforms like Meta (Facebook) and Twitter may set cookies when you interact
                    with embedded content or share articles.
                  </p>
                </div>

                <div className="border-l-4 border-[#0763fe] pl-6">
                  <h3 className="text-lg font-medium text-gray-800 mb-2">
                    Content Recommendation Networks
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Services like Outbrain or Taboola may use cookies to suggest news relevant to
                    your interests.
                  </p>
                </div>
              </div>
            </section>

            {/* Managing Cookies */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-[#0763fe]/10 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-[#0763fe] font-bold">4</span>
                </div>
                Managing Your Cookie Preferences
              </h2>

              <div className="space-y-6">
                <p className="text-gray-700 mb-3">
                  psmedia.ke displays a cookie consent banner on your first visit. You can adjust
                  your choices anytime via the “Cookie Settings” link in the footer.
                </p>

                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-3">Browser Settings</h3>
                  <p className="text-gray-700 mb-3">
                    Most browsers let you manage cookies. You can:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Block all or only third‑party cookies</li>
                    <li>Delete existing cookies</li>
                    <li>Receive notifications when cookies are set</li>
                    <li>Use private/incognito browsing</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-3">
                    Browser-Specific Instructions
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>
                        <strong>Chrome:</strong> Settings &gt; Privacy and security &gt; Cookies and
                        other site data
                      </li>
                      <li>
                        <strong>Firefox:</strong> Settings &gt; Privacy &amp; Security &gt; Cookies
                        and Site Data
                      </li>
                      <li>
                        <strong>Safari:</strong> Preferences &gt; Privacy &gt; Cookies and website
                        data
                      </li>
                      <li>
                        <strong>Edge:</strong> Settings &gt; Cookies and site permissions &gt;
                        Cookies and site data
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-3">Opt-Out Options</h3>
                  <p className="text-gray-700 mb-3">You can opt out of some tracking services:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Google Analytics: via the Google Analytics Opt‑out Browser Add‑on</li>
                    <li>Google Ads: via Google Ad Settings</li>
                    <li>Meta (Facebook): via Ad Preferences</li>
                    <li>Digital Advertising Alliance: visit optout.aboutads.info</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Impact of Disabling Cookies */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-[#0763fe]/10 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-[#0763fe] font-bold">5</span>
                </div>
                Impact of Disabling Cookies
              </h2>

              <p className="text-gray-700 mb-4">Disabling cookies may affect your experience:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Some site features may stop working properly</li>
                <li>You might need to sign in repeatedly</li>
                <li>You won’t receive personalized news recommendations</li>
                <li>We cannot measure readership accurately</li>
                <li>Ads may be less relevant to your interests</li>
              </ul>
            </section>

            {/* Data Protection */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-[#0763fe]/10 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-[#0763fe] font-bold">6</span>
                </div>
                Data Protection and Privacy
              </h2>

              <p className="text-gray-700 mb-4">We are committed to protecting your data:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>We use HTTPS to secure data transmission</li>
                <li>Cookie data is stored securely and accessed only as needed</li>
                <li>
                  We comply with Kenya’s <strong>Data Protection Act, 2019</strong> and other
                  applicable laws
                </li>
                <li>
                  Personal data collected via cookies is processed according to our Privacy Policy
                </li>
                <li>We regularly review and update our cookie practices</li>
              </ul>
            </section>

            {/* Changes to Policy */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-[#0763fe]/10 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-[#0763fe] font-bold">7</span>
                </div>
                Changes to This Cookie Policy
              </h2>

              <p className="text-gray-700">
                We may update this policy occasionally to reflect changes to our practices or legal
                requirements. Significant updates will be indicated by a new “Last updated” date.
                Please review this policy periodically.
              </p>
            </section>

            {/* Contact Us */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-[#0763fe]/10 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-[#0763fe] font-bold">8</span>
                </div>
                Contact Us
              </h2>

              <p className="text-gray-700 mb-4">
                If you have any questions about this Cookie Policy or our practices, please get in
                touch:
              </p>

              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#0763fe]">
                <div className="space-y-2">
                  <p className="text-gray-700">
                    <strong>Email:</strong> privacy@psmedia.ke
                  </p>
                  <p className="text-gray-700">
                    <strong>Website:</strong> www.psmedia.ke
                  </p>
                  <p className="text-gray-700">
                    <strong>Address:</strong> PS Media, Nairobi, Kenya
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12 text-gray-500">
          <p>
            By continuing to use psmedia.ke, you consent to our use of cookies as described in this
            Cookie Policy.
          </p>
        </div>
      </div>
    </div>
  )
}
