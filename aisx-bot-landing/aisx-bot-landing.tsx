"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Check, Menu, X } from "lucide-react"
import BotLogo from "./components/bot-logo"

export default function AISXBotLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formError, setFormError] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Simple validation
    if (!formState.name || !formState.email || !formState.message) {
      setFormError("Please fill in all fields")
      return
    }

    if (!/^\S+@\S+\.\S+$/.test(formState.email)) {
      setFormError("Please enter a valid email address")
      return
    }

    // Form submission would go here
    console.log("Form submitted:", formState)
    setFormSubmitted(true)
    setFormError("")
  }

  const features = [
    {
      title: "Robotic intimacy & companionship",
      description: "Next-generation AI companions designed for emotional connection",
    },
    {
      title: "AI-powered relationship assistants",
      description: "Smart algorithms that understand human emotions and needs",
    },
    {
      title: "Sex tech and virtual partners",
      description: "Cutting-edge technology for personal well-being and fulfillment",
    },
    {
      title: "Smart devices for adult well-being",
      description: "Innovative products that enhance quality of life and connection",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1A1A] to-[#2A2520] flex flex-col text-[#E5E5E5]">
      {/* Header/Navigation */}
      <header className="w-full py-4 px-6 bg-[#0F0F0F]/90 backdrop-blur-sm fixed top-0 z-50 shadow-md border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-bold text-[#E5E5E5] flex items-center"
          >
            <span className="mr-2">AISX</span>
            <span className="text-[#D4AF37]">Bot</span>
          </motion.div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="text-[#D4AF37] hover:text-[#E5E5E5] hover:bg-[#2A2520]"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            {["About", "Features", "Market", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[#D4AF37] hover:text-[#E5E5E5] transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0F0F0F] mt-2 py-4 px-6 rounded-lg shadow-lg border border-[#D4AF37]/20"
          >
            <nav className="flex flex-col space-y-4">
              {["About", "Features", "Market", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-[#D4AF37] hover:text-[#E5E5E5] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section className="flex flex-1 items-center justify-center text-center px-6 py-24 mt-16 bg-gradient-to-b from-[#1A1A1A] to-[#2A2520]">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 max-w-3xl"
        >
          <BotLogo size="large" className="mx-auto" />

          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] to-[#B8860B]">
            The Future of Intimacy is Intelligent
          </h1>
          <p className="text-lg sm:text-xl text-[#E5E5E5]/80 max-w-2xl mx-auto">
            AISXBot is your gateway to the coming age of AI-powered companionship and robotic intimacy.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="text-base xl:text-lg px-8 py-6 rounded-2xl shadow-lg bg-[#D4AF37] hover:bg-[#B8860B] text-[#0F0F0F]">
              Inquire About This Domain
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Vision Section */}
      <section id="about" className="px-6 py-20 bg-[#0F0F0F]">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold"
          >
            What Is <span className="text-[#D4AF37]">AISXBot</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[#E5E5E5]/80 text-lg max-w-3xl mx-auto"
          >
            AISXBot.com is a premium domain at the crossroads of AI, robotics, and human connection. As the world moves
            toward personal robots and emotional AI, AISXBot is positioned to become a leading brand in:
          </motion.p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-16 bg-[#1A1A1A]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="rounded-2xl shadow-md h-full overflow-hidden border-t-4 border-[#D4AF37] bg-[#2A2520]">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2 text-[#D4AF37]">{feature.title}</h3>
                    <p className="text-[#E5E5E5]/80">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Market Trend Section */}
      <section id="market" className="px-6 py-20 bg-gradient-to-b from-[#1A1A1A] to-[#0F0F0F]">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold"
          >
            Why Now?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[#E5E5E5]/80 leading-relaxed text-lg"
          >
            Analysts project the AI companionship and sex tech industry to reach billions in valuation over the next
            decade. As AI becomes personal, intimate, and emotionally intelligent, the brands leading this revolution
            will need names that are memorable, brandable, and future-proof.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-[#2A2520] p-6 rounded-2xl border border-[#D4AF37]/30 mt-8"
          >
            <p className="text-xl font-semibold text-[#D4AF37]">
              AISXBot.com checks every box for a premium domain in this emerging market.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { number: "$8.7B", text: "Projected market size by 2030" },
              { number: "127%", text: "Annual growth in AI companion sector" },
              { number: "3.2M", text: "Monthly searches for AI relationships" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * idx }}
                viewport={{ once: true }}
                className="bg-[#2A2520] p-6 rounded-xl shadow-md border border-[#D4AF37]/20"
              >
                <p className="text-3xl font-bold text-[#D4AF37] mb-2">{stat.number}</p>
                <p className="text-[#E5E5E5]/80">{stat.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-20 bg-[#1A1A1A]">
        <div className="max-w-xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center"
          >
            Make an Offer or Inquire
          </motion.h2>

          {formSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-8 p-6 bg-[#2A2520] rounded-2xl text-center border border-[#D4AF37]/30"
            >
              <div className="mx-auto w-16 h-16 bg-[#D4AF37]/20 rounded-full flex items-center justify-center mb-4">
                <Check className="h-8 w-8 text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-semibold text-[#D4AF37] mb-2">Thank You!</h3>
              <p className="text-[#E5E5E5]">Your inquiry has been received. We'll get back to you shortly.</p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-8 space-y-4"
              onSubmit={handleSubmit}
            >
              {formError && (
                <div className="p-3 bg-[#3A2A20] border border-[#8B4513] text-[#E5E5E5] rounded-lg text-sm">
                  {formError}
                </div>
              )}

              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-[#E5E5E5]">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  className="rounded-xl bg-[#2A2520] border-[#8B4513] text-[#E5E5E5] focus:border-[#D4AF37] focus:ring-[#D4AF37]/50"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-[#E5E5E5]">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  className="rounded-xl bg-[#2A2520] border-[#8B4513] text-[#E5E5E5] focus:border-[#D4AF37] focus:ring-[#D4AF37]/50"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-[#E5E5E5]">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleInputChange}
                  placeholder="Your inquiry or offer details"
                  rows={4}
                  className="rounded-xl bg-[#2A2520] border-[#8B4513] text-[#E5E5E5] focus:border-[#D4AF37] focus:ring-[#D4AF37]/50"
                />
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  className="w-full py-3 rounded-2xl shadow-lg bg-[#D4AF37] hover:bg-[#B8860B] text-[#0F0F0F]"
                >
                  Submit Inquiry
                </Button>
              </motion.div>

              <p className="text-xs text-[#E5E5E5]/60 text-center mt-4">
                Your information is secure and will only be used to respond to your inquiry.
              </p>
            </motion.form>
          )}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#0F0F0F] text-[#E5E5E5]/80 py-8 px-6 border-t border-[#D4AF37]/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <BotLogo size="small" className="mr-2" />
                <span>
                  AISX<span className="text-[#D4AF37]">Bot</span>
                </span>
              </h3>
              <p className="text-[#E5E5E5]/60 max-w-md">
                A premium domain at the intersection of artificial intelligence, robotics, and human connection.
              </p>
            </div>
            <div className="md:text-right">
              <h3 className="text-lg font-semibold mb-4 text-[#D4AF37]">Secure Transaction</h3>
              <p className="text-[#E5E5E5]/60">Escrow services available via Escrow.com</p>
              <p className="text-[#E5E5E5]/60 mt-2">Domain ownership verified</p>
            </div>
          </div>
          <div className="border-t border-[#D4AF37]/20 pt-6 text-center text-sm text-[#E5E5E5]/60">
            <p>
              &copy; {new Date().getFullYear()} AISXBot.com &bull; All rights reserved &bull; Serious inquiries only
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
