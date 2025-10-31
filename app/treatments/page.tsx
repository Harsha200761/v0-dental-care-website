import { Heart, Sparkles, Shield, Award, Zap, Smile, Clock, DollarSign, Users } from "lucide-react"

export const metadata = {
  title: "Dental Treatments - Sakthi Dental Clinic Services",
  description:
    "Explore all our dental treatments: teeth cleaning, fillings, extractions, implants, braces, root canal therapy, whitening, and more. Comprehensive dental care in Hosur.",
  keywords:
    "dental treatments, teeth cleaning, dental implants, braces, teeth whitening, root canal, tooth extraction, dental filling, orthodontics",
}

export default function Treatments() {
  const treatments = [
    {
      id: 1,
      icon: Smile,
      title: "Teeth Cleaning & Scaling",
      description: "Professional cleaning and scaling to remove plaque and tartar buildup.",
      benefits: ["Removes plaque and tartar", "Prevents gum disease", "Fresher breath", "Brighter appearance"],
      duration: "30-45 minutes",
      frequency: "Every 6 months",
      price: "₹500-1000",
    },
    {
      id: 2,
      icon: Sparkles,
      title: "Tooth Filling",
      description: "Expert restoration of decayed or damaged teeth using modern materials.",
      benefits: ["Restores tooth function", "Prevents further decay", "Natural appearance", "Long-lasting results"],
      duration: "30-60 minutes",
      frequency: "As needed",
      price: "₹1000-3000",
    },
    {
      id: 3,
      icon: Shield,
      title: "Tooth Extraction",
      description: "Safe and painless removal of impacted, damaged, or decayed teeth.",
      benefits: ["Relieves pain", "Prevents infection", "Improves oral health", "Professional anesthesia"],
      duration: "20-45 minutes",
      frequency: "As needed",
      price: "₹1500-5000",
    },
    {
      id: 4,
      icon: Award,
      title: "Braces & Aligners",
      description: "Modern orthodontic solutions to straighten and align teeth.",
      benefits: [
        "Improved smile aesthetics",
        "Better bite alignment",
        "Enhanced oral health",
        "Various options available",
      ],
      duration: "18-36 months",
      frequency: "Monthly adjustments",
      price: "₹50000-200000",
    },
    {
      id: 5,
      icon: Heart,
      title: "Teeth Whitening",
      description: "Professional teeth whitening for a brighter, more radiant smile.",
      benefits: ["Removes stains", "Brightens smile", "Quick results", "Safe and effective"],
      duration: "60-90 minutes",
      frequency: "Every 6-12 months",
      price: "₹3000-8000",
    },
    {
      id: 6,
      icon: Zap,
      title: "Dental Implants",
      description: "Advanced implant procedures for permanent replacement of missing teeth.",
      benefits: ["Permanent solution", "Natural appearance", "Improved functionality", "Prevents bone loss"],
      duration: "Multiple appointments",
      frequency: "One-time procedure",
      price: "₹30000-80000",
    },
    {
      id: 7,
      icon: Sparkles,
      title: "Root Canal Treatment",
      description: "Expert treatment to save infected or damaged teeth.",
      benefits: ["Saves the tooth", "Relieves pain", "Prevents infection spread", "Restores function"],
      duration: "90-120 minutes",
      frequency: "As needed",
      price: "₹5000-15000",
    },
    {
      id: 8,
      icon: Award,
      title: "Children's Dental Care",
      description: "Specialized and gentle dental care tailored for children.",
      benefits: ["Preventive care focus", "Friendly environment", "Early problem detection", "Healthy habit formation"],
      duration: "20-30 minutes",
      frequency: "Every 6 months",
      price: "₹300-800",
    },
  ]

  const whyChoose = [
    { icon: Users, title: "Expert Team", description: "Highly qualified and experienced dentists" },
    { icon: Clock, title: "On-Time Service", description: "Respect your time, punctual appointments" },
    { icon: DollarSign, title: "Affordable Pricing", description: "Competitive rates with flexible payment" },
    { icon: Heart, title: "Painless Treatment", description: "Advanced techniques for comfort" },
    { icon: Shield, title: "Sterilization", description: "Highest hygiene and safety standards" },
    { icon: Smile, title: "Quick Recovery", description: "Minimal discomfort and downtime" },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 pt-20 pb-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Our Comprehensive
              <span className="block text-blue-600">Dental Treatments</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From routine care to advanced procedures, we offer a full range of dental services to meet all your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">All Our Services</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto text-lg">
            Explore our range of professional dental treatments
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {treatments.map((treatment) => {
              const Icon = treatment.icon
              return (
                <div
                  key={treatment.id}
                  className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-3 rounded-lg flex-shrink-0">
                      <Icon className="text-white" size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{treatment.title}</h3>
                      <p className="text-gray-600 text-sm mt-1">{treatment.description}</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6 border-t border-gray-200 pt-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Benefits:</h4>
                      <ul className="space-y-1">
                        {treatment.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 p-4 bg-blue-50 rounded-lg">
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Duration</p>
                      <p className="font-semibold text-gray-900 text-sm">{treatment.duration}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Frequency</p>
                      <p className="font-semibold text-gray-900 text-sm">{treatment.frequency}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1">Starting Price</p>
                      <p className="font-semibold text-blue-600 text-sm">{treatment.price}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Why Choose Our Treatments?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {whyChoose.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                  <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-blue-600" size={28} />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Our Treatment Process</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: 1,
                  title: "Initial Consultation",
                  description:
                    "We conduct a thorough examination and discuss your dental concerns and treatment goals.",
                },
                {
                  step: 2,
                  title: "Diagnosis & Planning",
                  description: "Advanced diagnostics help us identify issues and create a personalized treatment plan.",
                },
                {
                  step: 3,
                  title: "Treatment Execution",
                  description: "Our experienced dentists perform the procedure using modern techniques and equipment.",
                },
                {
                  step: 4,
                  title: "Aftercare & Follow-up",
                  description:
                    "We provide detailed care instructions and schedule follow-up appointments for optimal results.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600 text-white font-bold text-lg">
                      {item.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Common Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: "Is the treatment painful?",
                a: "No, we use modern anesthesia and pain management techniques to ensure you're comfortable throughout your treatment.",
              },
              {
                q: "How long do results last?",
                a: "Results vary by treatment. We'll provide detailed information about longevity and maintenance during your consultation.",
              },
              {
                q: "Do you offer payment plans?",
                a: "Yes, we offer flexible payment options to make treatment accessible to everyone.",
              },
              {
                q: "What should I expect after treatment?",
                a: "Most treatments have minimal downtime. We provide aftercare instructions to ensure proper healing.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors"
              >
                <h3 className="font-bold text-lg text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Smile?</h2>
          <p className="text-xl mb-8 opacity-90">
            Schedule a consultation today and discover which treatment is right for you.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Book Your Appointment
          </a>
        </div>
      </section>
    </>
  )
}
