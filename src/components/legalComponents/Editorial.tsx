import React from 'react'

export default function EditorialGuidelines() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Editorial Guidelines</h1>
          <p className="text-gray-600 text-lg">
            Our commitment to quality journalism and ethical reporting
          </p>
          <p className="text-gray-500 text-sm mt-2">
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
                At psmedia.ke, we are committed to delivering accurate, fair, and timely news to our
                readers. These editorial guidelines establish the standards that govern our
                journalism and ensure we maintain the highest levels of integrity, professionalism,
                and accountability in our reporting.
              </p>
            </div>

            {/* Mission Statement */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-[#0763fe]/10 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-[#0763fe] font-bold">1</span>
                </div>
                Our Editorial Mission
              </h2>

              <div className="bg-[#0763fe]/5 rounded-lg p-6 border-l-4 border-[#0763fe] mb-6">
                <p className="text-gray-700 font-medium text-lg mb-4">
                  &quot;To inform, educate, and empower our readers through accurate, unbiased, and
                  comprehensive news coverage that serves the public interest.&quot;
                </p>
              </div>

              <p className="text-gray-700 mb-4">
                We strive to be Kenya{"'"}s most trusted source for breaking news, in-depth
                analysis, and diverse perspectives on the issues that matter most to our community.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Prioritize truth and accuracy above all else</li>
                <li>Serve the public interest through responsible journalism</li>
                <li>Maintain editorial independence and integrity</li>
                <li>Foster informed public discourse and democratic participation</li>
              </ul>
            </section>

            {/* Core Editorial Principles */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-[#0763fe]/10 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-[#0763fe] font-bold">2</span>
                </div>
                Core Editorial Principles
              </h2>

              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-medium text-gray-800 mb-3">
                    Accuracy and Verification
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>All facts must be verified through multiple reliable sources</li>
                    <li>Primary sources are preferred over secondary sources</li>
                    <li>Corrections must be published promptly and prominently</li>
                    <li>Unverified information must be clearly labeled as such</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-medium text-gray-800 mb-3">Fairness and Balance</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Present multiple perspectives on controversial issues</li>
                    <li>Avoid bias in news reporting and clearly label opinion content</li>
                    <li>Give subjects of negative coverage opportunity to respond</li>
                    <li>Represent diverse voices and communities fairly</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-medium text-gray-800 mb-3">
                    Independence and Integrity
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Maintain editorial independence from commercial interests</li>
                    <li>Disclose conflicts of interest and potential bias</li>
                    <li>
                      Refuse gifts, favors, or special treatment that could compromise integrity
                    </li>
                    <li>Separate editorial content from advertising and sponsored content</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-medium text-gray-800 mb-3">
                    Transparency and Accountability
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Clearly identify authors and sources when appropriate</li>
                    <li>Explain our editorial process and decision-making</li>
                    <li>Respond to reader feedback and concerns promptly</li>
                    <li>Acknowledge and correct errors quickly and transparently</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Content Standards */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-[#0763fe]/10 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-[#0763fe] font-bold">3</span>
                </div>
                Content Standards and Quality
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-3">Writing Standards</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Use clear, concise, and accessible language</li>
                    <li>Follow AP Style guidelines for consistency</li>
                    <li>Avoid jargon and explain technical terms</li>
                    <li>Write compelling headlines that accurately reflect content</li>
                    <li>Ensure proper grammar, spelling, and punctuation</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-3">Story Structure</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Lead with the most important information</li>
                    <li>Use the inverted pyramid structure for news stories</li>
                    <li>Include relevant context and background information</li>
                    <li>Maintain logical flow and clear transitions</li>
                    <li>End with strong conclusions or calls to action when appropriate</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-3">Multimedia Standards</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Use high-quality, relevant images with proper attribution</li>
                    <li>Include descriptive alt text for accessibility</li>
                    <li>Ensure all multimedia content supports the story</li>
                    <li>Respect copyright and intellectual property rights</li>
                    <li>Consider mobile optimization for all content</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Source Guidelines */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-[#0763fe]/10 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-[#0763fe] font-bold">4</span>
                </div>
                Source Guidelines and Attribution
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-3">Source Verification</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Always verify the credibility and expertise of sources</li>
                    <li>Seek official statements and documented evidence</li>
                    <li>Cross-reference information with multiple independent sources</li>
                    <li>Be skeptical of single-source stories</li>
                    <li>Verify social media content and user-generated material</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-3">Attribution Standards</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Attribute all information to specific sources</li>
                    <li>Use on-the-record sources whenever possible</li>
                    <li>Clearly identify the basis for anonymous sources</li>
                    <li>Provide context about source motivations and potential bias</li>
                    <li>Link to original documents and reports when available</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-3">Anonymous Sources</h3>
                  <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-400">
                    <p className="text-gray-700 mb-2">
                      <strong>Use anonymous sources only when:</strong>
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>The information is newsworthy and in the public interest</li>
                      <li>The source could face harm or retaliation</li>
                      <li>The information cannot be obtained through other means</li>
                      <li>The source has been verified by editorial leadership</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Editorial Process */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-[#0763fe]/10 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-[#0763fe] font-bold">5</span>
                </div>
                Editorial Process and Review
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-3">Story Development</h3>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <ol className="list-decimal list-inside text-gray-700 space-y-2">
                      <li>Story pitch and approval by editorial team</li>
                      <li>Research and source development</li>
                      <li>Writing and initial draft completion</li>
                      <li>Fact-checking and source verification</li>
                      <li>Editorial review and revision</li>
                      <li>Final approval and publication</li>
                    </ol>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-3">Quality Control</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>All articles undergo editorial review before publication</li>
                    <li>Fact-checking is required for all factual claims</li>
                    <li>Legal review for potentially sensitive content</li>
                    <li>Copy editing for grammar, style, and clarity</li>
                    <li>Final approval by senior editorial staff</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Ethical Considerations */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-[#0763fe]/10 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-[#0763fe] font-bold">6</span>
                </div>
                Ethical Considerations
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-3">Privacy and Consent</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Respect individual privacy rights</li>
                    <li>Obtain consent before publishing personal information</li>
                    <li>Consider the impact on families and communities</li>
                    <li>Protect the identity of victims and vulnerable individuals</li>
                    <li>Follow legal guidelines for reporting on minors</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-3">Sensitive Content</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Handle trauma and tragedy with sensitivity</li>
                    <li>Avoid sensationalism and exploitation</li>
                    <li>Consider cultural and religious sensitivities</li>
                    <li>Provide appropriate warnings for disturbing content</li>
                    <li>Offer resources and support information when relevant</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-3">Conflicts of Interest</h3>
                  <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-400">
                    <p className="text-gray-700 mb-2">
                      <strong>All staff must disclose:</strong>
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Financial interests in covered organizations</li>
                      <li>Personal relationships with news subjects</li>
                      <li>Political activities and affiliations</li>
                      <li>Any potential bias or competing interests</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Corrections Policy */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-[#0763fe]/10 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-[#0763fe] font-bold">7</span>
                </div>
                Corrections and Clarifications
              </h2>

              <div className="space-y-4">
                <p className="text-gray-700">
                  We are committed to correcting errors promptly and transparently:
                </p>

                <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-400">
                  <h3 className="text-lg font-medium text-gray-800 mb-3">Correction Process</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Errors are corrected as soon as they are discovered</li>
                    <li>Corrections are made prominently and transparently</li>
                    <li>The original error is acknowledged, not hidden</li>
                    <li>Significant errors may require follow-up stories</li>
                    <li>All corrections are documented and archived</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-3">Types of Corrections</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>
                      <strong>Factual corrections:</strong> Incorrect information, dates, names, or
                      numbers
                    </li>
                    <li>
                      <strong>Clarifications:</strong> Information that was unclear or misleading
                    </li>
                    <li>
                      <strong>Updates:</strong> New information that changes the story context
                    </li>
                    <li>
                      <strong>Retractions:</strong> Complete withdrawal of false or unverifiable
                      stories
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Social Media Guidelines */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-[#0763fe]/10 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-[#0763fe] font-bold">8</span>
                </div>
                Social Media and Digital Standards
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-3">Social Media Reporting</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Verify social media content before reporting</li>
                    <li>Seek permission before using user-generated content</li>
                    <li>Provide proper attribution for social media sources</li>
                    <li>Be aware of fake accounts and manipulated content</li>
                    <li>Consider privacy settings and user intent</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-3">Staff Social Media Use</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Maintain professional standards on personal accounts</li>
                    <li>Avoid posting opinions on controversial topics</li>
                    <li>Disclose affiliation with psmedia.ke when relevant</li>
                    <li>Respect confidentiality and embargo agreements</li>
                    <li>Report any social media conflicts or issues</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-3">Digital Engagement</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Engage respectfully with readers and critics</li>
                    <li>Respond to legitimate questions and concerns</li>
                    <li>Avoid arguments and inflammatory exchanges</li>
                    <li>Moderate comments according to community standards</li>
                    <li>Promote constructive dialogue and debate</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Compliance and Training */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-[#0763fe]/10 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-[#0763fe] font-bold">9</span>
                </div>
                Compliance and Continuous Improvement
              </h2>

              <div className="space-y-4">
                <p className="text-gray-700">
                  We are committed to maintaining and improving our editorial standards:
                </p>

                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Regular training on journalism ethics and best practices</li>
                  <li>Ongoing review and updates of editorial guidelines</li>
                  <li>Feedback collection from readers and community</li>
                  <li>Compliance with media industry standards and regulations</li>
                  <li>Accountability measures for guideline violations</li>
                </ul>

                <div className="bg-[#0763fe]/5 rounded-lg p-6 border-l-4 border-[#0763fe]">
                  <p className="text-gray-700">
                    <strong>All psmedia.ke staff members are required to:</strong>
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 mt-2">
                    <li>Read and understand these editorial guidelines</li>
                    <li>Participate in editorial training and development</li>
                    <li>Report ethical concerns and guideline violations</li>
                    <li>Commit to upholding our editorial standards</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-[#0763fe]/10 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-[#0763fe] font-bold">10</span>
                </div>
                Editorial Contact Information
              </h2>

              <p className="text-gray-700 mb-4">
                For questions about our editorial guidelines, to report errors, or to provide
                feedback:
              </p>

              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#0763fe]">
                <div className="space-y-2">
                  <p className="text-gray-700">
                    <strong>Editor-in-Chief:</strong> editorial@psmedia.ke
                  </p>
                  <p className="text-gray-700">
                    <strong>News Tips:</strong> tips@psmedia.ke
                  </p>
                  <p className="text-gray-700">
                    <strong>Corrections:</strong> corrections@psmedia.ke
                  </p>
                  <p className="text-gray-700">
                    <strong>General Feedback:</strong> feedback@psmedia.ke
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12 text-gray-500">
          <p>
            These guidelines reflect our commitment to ethical journalism and serve as our promise
            to our readers and the communities we serve.
          </p>
        </div>
      </div>
    </div>
  )
}
