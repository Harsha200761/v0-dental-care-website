export const metadata = {
  title: "Privacy Policy - Sakthi Dental Clinic",
  description:
    "Read our privacy policy to understand how Sakthi Dental Clinic collects, uses, and protects your personal and medical information.",
  keywords: "privacy policy, data protection, patient privacy, HIPAA",
}

export default function Privacy() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 pt-20 pb-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">Privacy Policy</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your privacy is important to us. Learn how we protect your personal information.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-sm max-w-none">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
                <p className="text-gray-600 leading-relaxed">
                  We collect personal information that you voluntarily provide to us through our website, contact forms,
                  appointment bookings, and in-person visits. This includes:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
                  <li>Name, email address, and phone number</li>
                  <li>Medical and dental history</li>
                  <li>Appointment information and preferences</li>
                  <li>Payment information for billing purposes</li>
                  <li>Any additional information you choose to share with us</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
                <p className="text-gray-600 leading-relaxed">We use the information we collect to:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
                  <li>Provide, maintain, and improve our dental services</li>
                  <li>Schedule and manage your appointments</li>
                  <li>Process payments and billing</li>
                  <li>Send appointment reminders and follow-up communications</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Comply with legal and regulatory obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Data Security</h2>
                <p className="text-gray-600 leading-relaxed">
                  We implement appropriate technical, administrative, and physical security measures to protect your
                  personal information against unauthorized access, alteration, disclosure, or destruction. Our systems
                  use encryption and secure protocols to safeguard sensitive data.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Sharing Your Information</h2>
                <p className="text-gray-600 leading-relaxed">
                  We do not sell, trade, or rent your personal information to third parties. We may share information
                  only with:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
                  <li>Healthcare providers directly involved in your care</li>
                  <li>Insurance companies for billing and coverage verification</li>
                  <li>Authorized service providers who assist us in operations</li>
                  <li>When required by law or legal process</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Rights</h2>
                <p className="text-gray-600 leading-relaxed">You have the right to:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
                  <li>Access your personal information</li>
                  <li>Request corrections to inaccurate data</li>
                  <li>Request deletion of your information (subject to legal obligations)</li>
                  <li>Opt-out of marketing communications</li>
                  <li>File a complaint if you believe your privacy has been violated</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies and Tracking</h2>
                <p className="text-gray-600 leading-relaxed">
                  Our website may use cookies and similar tracking technologies to enhance your browsing experience.
                  These tools help us understand site usage patterns and improve functionality. You can control cookie
                  settings through your browser preferences.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Children's Privacy</h2>
                <p className="text-gray-600 leading-relaxed">
                  Our website is not intended for children under 13 years old. We do not knowingly collect personal
                  information from children without parental consent. For pediatric patients, we collect information
                  from parents or guardians only.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Changes to This Policy</h2>
                <p className="text-gray-600 leading-relaxed">
                  We may update this privacy policy from time to time to reflect changes in our practices or applicable
                  laws. We will notify you of significant changes by posting the updated policy on our website with a
                  revised effective date.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Us</h2>
                <p className="text-gray-600 leading-relaxed">
                  If you have questions about our privacy practices or wish to exercise your privacy rights, please
                  contact us at:
                </p>
                <div className="mt-4 bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <p className="font-semibold text-gray-900">Sakthi Dental Clinic</p>
                  <p className="text-gray-600">B2/8, SBM Layout, Anthivadi, Hosur, Tamil Nadu 635109</p>
                  <p className="text-gray-600">Phone: +91 9862890897</p>
                  <p className="text-gray-600">Email: info@sakthidentalclinic.in</p>
                </div>
              </div>

              <div>
                <p className="text-gray-600 text-sm mt-8 pt-8 border-t border-gray-200">
                  <strong>Last Updated:</strong> October 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
