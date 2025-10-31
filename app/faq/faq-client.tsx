"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function FAQClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      category: "General Questions",
      items: [
        {
          q: "How often should I visit the dentist?",
          a: "We recommend visiting the dentist at least twice a year for routine check-ups and cleanings. However, if you have specific dental issues or conditions, more frequent visits may be necessary. Our team will advise you based on your individual needs.",
        },
        {
          q: "What should I do in case of a dental emergency?",
          a: "If you experience a dental emergency, please contact us immediately at +91 9862890897. Our clinic provides 24/7 emergency support. In case of severe pain or trauma, seek immediate medical attention at the nearest hospital.",
        },
        {
          q: "Do you treat patients of all ages?",
          a: "Yes! We provide specialized dental care for women, children, and families. Our pediatric dentists are specially trained to handle children with care and patience, creating a comfortable experience for young patients.",
        },
        {
          q: "Is dental treatment covered by insurance?",
          a: "Coverage depends on your insurance plan. We recommend checking with your insurance provider before your appointment. We can also assist you with the paperwork and billing process.",
        },
      ],
    },
    {
      category: "Treatment Questions",
      items: [
        {
          q: "Is teeth whitening safe?",
          a: "Yes, professional teeth whitening performed by our dentists is safe and effective. We use approved whitening agents and techniques to ensure optimal results without damaging your teeth or gums.",
        },
        {
          q: "How long do dental implants last?",
          a: "With proper care and maintenance, dental implants can last 20-30 years or even a lifetime. Regular brushing, flossing, and dental check-ups are essential for implant longevity.",
        },
        {
          q: "What is the recovery time after tooth extraction?",
          a: "Initial recovery takes about 1-2 weeks. However, complete bone healing can take 3-6 months. We provide detailed aftercare instructions to minimize discomfort and promote faster healing.",
        },
        {
          q: "Are braces painful?",
          a: "Braces are not painful, though you may experience some discomfort or pressure, especially after adjustments. This typically subsides within a few days. Modern orthodontic techniques minimize discomfort significantly.",
        },
      ],
    },
    {
      category: "Cost & Payment",
      items: [
        {
          q: "What payment methods do you accept?",
          a: "We accept cash, credit cards, debit cards, and digital payment methods. We also offer flexible installment plans for major procedures to make dental care more affordable.",
        },
        {
          q: "Do you offer any discounts or packages?",
          a: "Yes! We offer family packages and seasonal discounts. Please contact our clinic for current offers and special rates on various treatments.",
        },
        {
          q: "How much does a routine check-up cost?",
          a: "A routine check-up typically costs ₹300-500 and includes examination and consultation. Specific prices depend on additional diagnostic tests or procedures needed.",
        },
        {
          q: "Can I get a cost estimate before treatment?",
          a: "We provide detailed cost estimates after diagnosis. You'll have a complete understanding of the treatment plan and associated costs before proceeding.",
        },
      ],
    },
    {
      category: "Before & After Care",
      items: [
        {
          q: "What should I do before my appointment?",
          a: "Brush and floss your teeth before your appointment. Avoid eating sticky or hard foods for a few hours prior. Bring any relevant medical history or medication information.",
        },
        {
          q: "What should I avoid after a dental procedure?",
          a: "Avoid hot or hard foods for 24-48 hours. Don't smoke or drink alcohol. Avoid strenuous physical activity. Follow the specific aftercare instructions provided by your dentist.",
        },
        {
          q: "How do I maintain my teeth after treatment?",
          a: "Brush twice daily, floss regularly, use fluoride mouthwash, and avoid sugary foods and drinks. Attend regular check-ups every 6 months and follow any specific care instructions given by our dentists.",
        },
        {
          q: "What if I experience pain after treatment?",
          a: "Some mild discomfort is normal and usually subsides within a few days. If you experience severe or persistent pain, contact us immediately. We can provide pain management advice or schedule a follow-up appointment.",
        },
      ],
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  let globalIndex = 0

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 pt-20 pb-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Frequently Asked
              <span className="block text-blue-600">Questions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our services, treatments, and dental care.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {faqs.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-blue-600">
                  {section.category}
                </h2>
                <div className="space-y-4">
                  {section.items.map((faq, itemIdx) => {
                    const currentIndex = globalIndex++
                    return (
                      <div
                        key={itemIdx}
                        className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-blue-300 transition-colors"
                      >
                        <button
                          onClick={() => toggleFAQ(currentIndex)}
                          className="w-full px-6 py-4 flex items-center justify-between hover:bg-blue-50 transition-colors"
                        >
                          <h3 className="text-lg font-semibold text-gray-900 text-left">{faq.q}</h3>
                          <ChevronDown
                            size={24}
                            className={`text-blue-600 flex-shrink-0 transition-transform ${
                              openIndex === currentIndex ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {openIndex === currentIndex && (
                          <div className="px-6 py-4 bg-blue-50 border-t border-gray-200">
                            <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
          <p className="text-lg text-gray-600 mb-8">
            We're here to help! Get in touch with our team for personalized assistance.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Book Your Appointment?</h2>
          <p className="text-xl mb-8 opacity-90">Schedule your visit today and experience professional dental care.</p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Book Appointment
          </a>
        </div>
      </section>
    </>
  )
}
