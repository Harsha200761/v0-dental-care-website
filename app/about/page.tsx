import { Award, Heart, Smile, Users, CheckCircle } from "lucide-react"

export const metadata = {
  title: "About Sakthi Dental Clinic - Our Story, Team & Values",
  description:
    "Learn about Sakthi Dental Clinic's mission, expert team of dentists, core values, and commitment to providing compassionate dental care in Hosur.",
  keywords: "about dental clinic, expert dentists, Dr. Priya Sharma, dental team, dental care mission, Hosur dental",
}

export default function About() {
  const team = [
    {
      name: "Dr. Priya Sharma",
      role: "Chief Dentist & Founder",
      specialization: "General Dentistry, Cosmetic Dentistry",
      experience: "15+ years",
    },
    {
      name: "Dr. Rajesh Kumar",
      role: "Orthodontist",
      specialization: "Braces, Aligners, Teeth Alignment",
      experience: "12+ years",
    },
    {
      name: "Dr. Meera Patel",
      role: "Pedodontist",
      specialization: "Children's Dental Care",
      experience: "10+ years",
    },
    {
      name: "Dr. Arun Verma",
      role: "Oral Surgeon",
      specialization: "Implants, Extractions, Advanced Procedures",
      experience: "14+ years",
    },
  ]

  const values = [
    {
      icon: Heart,
      title: "Patient Care",
      description: "Your comfort and health are our top priority in every procedure.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards of dental care and professionalism.",
    },
    {
      icon: Smile,
      title: "Trust",
      description: "We build lasting relationships based on transparency and reliability.",
    },
    {
      icon: Users,
      title: "Community",
      description: "We serve our community with compassion and dedication.",
    },
  ]

  const achievements = [
    { number: "5000+", label: "Happy Patients" },
    { number: "15+", label: "Years Experience" },
    { number: "50+", label: "Monthly Appointments" },
    { number: "4.9★", label: "Patient Rating" },
  ]

  const specialities = [
    {
      icon: CheckCircle,
      title: "General Dentistry",
      description: "Routine check-ups, cleaning, and preventive care for the whole family.",
    },
    {
      icon: CheckCircle,
      title: "Orthodontics",
      description: "Modern braces and aligner solutions for a perfectly aligned smile.",
    },
    {
      icon: CheckCircle,
      title: "Pediatric Dentistry",
      description: "Specialized care and gentle approach for children's dental health.",
    },
    {
      icon: CheckCircle,
      title: "Cosmetic Dentistry",
      description: "Teeth whitening, veneers, and smile design for aesthetic excellence.",
    },
    {
      icon: CheckCircle,
      title: "Oral Surgery",
      description: "Advanced procedures including implants and complex extractions.",
    },
    {
      icon: CheckCircle,
      title: "Women's Dental Health",
      description: "Specialized care addressing unique dental needs during different life stages.",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 pt-20 pb-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              About
              <span className="block text-blue-600">Sakthi Dental Clinic</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Delivering compassionate, expert-led dental care to families and individuals in Hosur since 2010.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                At Sakthi Dental Clinic, our mission is to provide comprehensive, high-quality dental care that
                transforms smiles and improves lives. We believe that exceptional dental health should be accessible to
                everyone, regardless of age or background.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We are committed to creating a warm, welcoming environment where patients feel safe, heard, and
                respected throughout their dental journey.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-8 text-white">
              <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg mb-4 leading-relaxed">
                To be the most trusted and patient-centric dental clinic in Hosur, known for excellence, innovation, and
                compassionate care.
              </p>
              <p className="text-lg leading-relaxed">
                We envision a community where dental health is prioritized, preventive care is embraced, and every smile
                radiates confidence and wellness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">{achievement.number}</div>
                <p className="text-gray-600 font-semibold">{achievement.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Our Core Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-blue-600" size={32} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Our Specialities</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto text-lg">
            Comprehensive dental services covering all aspects of your oral health
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {specialities.map((specialty, index) => {
              const Icon = specialty.icon
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <Icon className="text-blue-600 flex-shrink-0" size={28} />
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-gray-900">{specialty.title}</h3>
                      <p className="text-gray-600">{specialty.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Meet Our Expert Team</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto text-lg">
            Highly qualified professionals dedicated to your oral health and wellness
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl border border-blue-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold">Specialization:</span> {member.specialization}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Experience:</span> {member.experience}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Why Choose Sakthi Dental Clinic?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <CheckCircle className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Advanced Technology</h3>
                  <p className="text-gray-600">Latest diagnostic tools and treatment equipment for precision care.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <CheckCircle className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Personalized Treatment Plans</h3>
                  <p className="text-gray-600">Customized care tailored to your unique needs and goals.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <CheckCircle className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Comfortable Environment</h3>
                  <p className="text-gray-600">Relaxing ambiance designed to ease dental anxiety.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <CheckCircle className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Affordable Care</h3>
                  <p className="text-gray-600">Competitive pricing with flexible payment options.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <CheckCircle className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Emergency Support</h3>
                  <p className="text-gray-600">Round-the-clock assistance for dental emergencies.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <CheckCircle className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Proven Track Record</h3>
                  <p className="text-gray-600">Years of successful treatments and satisfied patients.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Start Your Smile Journey Today</h2>
          <p className="text-xl mb-8 opacity-90">
            Schedule a consultation with our expert team and experience the Sakthi difference.
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
