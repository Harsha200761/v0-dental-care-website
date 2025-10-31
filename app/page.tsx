import Link from "next/link"
import {
  Heart,
  Shield,
  Zap,
  Users,
  Smile,
  Sparkles,
  Award,
  Clock,
  NavigationIcon,
  Car,
  Accessibility,
} from "lucide-react"

export const metadata = {
  title: "Home - Sakthi Dental Clinic",
  description:
    "Welcome to Sakthi Dental Clinic. Specialized dental care for women, children & families with expert doctors and modern facilities.",
}

export default function Home() {
  const treatments = [
    {
      icon: Smile,
      title: "Teeth Cleaning",
      description: "Professional cleaning and scaling to remove plaque and protect your gums.",
    },
    {
      icon: Sparkles,
      title: "Tooth Filling",
      description: "Expert restoration using high-quality materials for damaged teeth.",
    },
    {
      icon: Shield,
      title: "Tooth Extraction",
      description: "Safe and painless removal of impacted or decayed teeth.",
    },
    {
      icon: Award,
      title: "Braces & Aligners",
      description: "Straighten and align teeth with modern orthodontic treatments.",
    },
    {
      icon: Heart,
      title: "Whitening",
      description: "Professional teeth whitening for a brighter, more radiant smile.",
    },
    {
      icon: Zap,
      title: "Implants",
      description: "Advanced implant procedures for missing tooth replacement.",
    },
  ]

  const testimonials = [
    {
      name: "Patient A",
      text: "The doctors are extremely kind and attentive. My braces treatment is progressing really well. 5/5.",
      rating: 5,
    },
    {
      name: "Patient B",
      text: "I got my teeth cleaned and whitened here, and the results were amazing. The staff is so humble and professional. I've recommended Sakthi Dental Clinic to my entire family.",
      rating: 5,
    },
    {
      name: "Patient C",
      text: "Their attention to detail is outstanding. My daughter needed braces and the entire process from consultation to follow-ups has been so smooth. Really grateful for their care.",
      rating: 5,
    },
  ]

  const amenities = [
    { icon: NavigationIcon, title: "Central Location", description: "Convenient location in Hosur" },
    { icon: Car, title: "Free Parking", description: "Hassle-free parking available" },
    { icon: Clock, title: "Extended Hours", description: "Open 9 AM - 9 PM daily" },
    { icon: Accessibility, title: "Wheelchair Access", description: "Fully accessible for all" },
    { icon: Heart, title: "Pickup & Dropoff", description: "Support available for patients" },
    { icon: Users, title: "Expert Team", description: "Specialized doctors on staff" },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 pt-20 pb-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Specialized Dental Care for
              <span className="block text-blue-600">Women, Children & Families</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Experience compassionate, expert-led dental services tailored to your needs—all in a modern and welcoming
              environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Fix an Appointment
              </Link>
              <Link
                href="/contact"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Emergency Support
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-2">You are always in safe hands.</h2>
          <p className="text-xl">We are ready to help, anytime.</p>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Why Choose Sakthi Dental Clinic?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-blue-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-white" size={28} />
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">All-in-One Care</h3>
              <p className="text-gray-600">
                From general dentistry to specialized treatments, everything under one roof.
              </p>
            </div>
            <div className="bg-cyan-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="bg-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={28} />
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">Experienced Doctors</h3>
              <p className="text-gray-600">Professionally trained and committed to personalized patient care.</p>
            </div>
            <div className="bg-blue-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-white" size={28} />
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">Patient-Centric</h3>
              <p className="text-gray-600">We prioritize comfort, safety, and transparency in every treatment.</p>
            </div>
            <div className="bg-cyan-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="bg-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="text-white" size={28} />
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">Technology-Driven</h3>
              <p className="text-gray-600">Modern tools and equipment ensure precision and safety.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Explore Our Services</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Comprehensive dental care from routine check-ups to advanced procedures
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {treatments.map((treatment, index) => {
              const Icon = treatment.icon
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-3 text-gray-900">{treatment.title}</h3>
                  <p className="text-gray-600">{treatment.description}</p>
                </div>
              )
            })}
          </div>
          <div className="text-center">
            <Link
              href="/treatments"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Full List of Treatments
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">What Our Patients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-900">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Clinic Facilities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => {
              const Icon = amenity.icon
              return (
                <div key={index} className="flex items-start space-x-4 bg-white p-6 rounded-lg">
                  <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                    <Icon className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{amenity.title}</h3>
                    <p className="text-gray-600 text-sm">{amenity.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for Your Smile Transformation?</h2>
          <p className="text-xl mb-8 opacity-90">
            Schedule your appointment today and experience professional dental care
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Book Your Appointment Now
          </Link>
        </div>
      </section>
    </>
  )
}
