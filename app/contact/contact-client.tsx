"use client"

import type React from "react"

import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import AppointmentForm from "@/components/appointment-form"
import { useState } from "react"

export default function ContactClient() {
  const [contactFormData, setContactFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+91 9862890897",
      subtext: "Call us Mon-Fri, 9 AM - 9 PM",
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@sakthidentalclinic.in",
      subtext: "We'll respond within 24 hours",
    },
    {
      icon: MapPin,
      title: "Address",
      details: "B2/8, SBM Layout, Anthivadi, Hosur",
      subtext: "Tamil Nadu 635109",
    },
    {
      icon: Clock,
      title: "Hours",
      details: "9:00 AM - 9:00 PM",
      subtext: "Open 7 days a week",
    },
  ]

  const validateContactForm = () => {
    const newErrors: Record<string, string> = {}

    if (!contactFormData.name.trim()) newErrors.name = "Name is required"
    if (!contactFormData.email.trim()) newErrors.email = "Email is required"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactFormData.email)) newErrors.email = "Invalid email format"
    if (!contactFormData.phone.trim()) newErrors.phone = "Phone is required"
    else if (!/^\d{10}$/.test(contactFormData.phone.replace(/\D/g, "")))
      newErrors.phone = "Invalid phone number (10 digits required)"
    if (!contactFormData.message.trim()) newErrors.message = "Message is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setContactFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateContactForm()) {
      console.log("Contact form submitted:", contactFormData)
      setSubmitted(true)
      setContactFormData({ name: "", email: "", phone: "", message: "" })
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 pt-20 pb-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Get in Touch
              <span className="block text-blue-600">We're Here to Help</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions or ready to schedule your appointment? Reach out to us today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon
              return (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100 text-center hover:shadow-lg transition-all hover:scale-105"
                >
                  <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-blue-600" size={28} />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{info.title}</h3>
                  <p className="text-gray-900 font-semibold mb-1">{info.details}</p>
                  <p className="text-gray-600 text-sm">{info.subtext}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Two Column Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Message Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={contactFormData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={contactFormData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={contactFormData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="+91 9862890897"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Your Message</label>
                  <textarea
                    name="message"
                    value={contactFormData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Tell us how we can help..."
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>

                {submitted && (
                  <div className="bg-green-50 border border-green-300 text-green-700 px-4 py-3 rounded-lg animate-fade-in-up">
                    <p className="font-semibold">Thank you!</p>
                    <p className="text-sm">We'll get back to you soon.</p>
                  </div>
                )}
              </form>
            </div>

            {/* Location & Hours */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Location & Hours</h2>
              <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3894.5623456789!2d77.82!3d12.74!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6c5f5f5f5f5f%3A0x5f5f5f5f5f5f5f5f!2sHosur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl border border-blue-100">
                <h3 className="font-bold text-lg text-gray-900 mb-4">Business Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Sunday</span>
                    <span className="font-semibold text-gray-900">9:00 AM - 9:00 PM</span>
                  </div>
                  <div className="border-t border-blue-200 pt-3">
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">Emergency Support:</span> Available 24/7
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Form Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Schedule Your Appointment</h2>
            <p className="text-lg text-gray-600">Fill out the form below and our team will confirm your appointment</p>
          </div>
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <AppointmentForm />
          </div>
        </div>
      </section>
    </>
  )
}
