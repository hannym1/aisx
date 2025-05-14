"use client"
import { motion } from "framer-motion"

export default function BotLogo({ className = "", size = "medium" }) {
  const sizeClasses = {
    small: "w-12 h-12",
    medium: "w-24 h-24",
    large: "w-32 h-32",
  }

  const sizeClass = sizeClasses[size] || sizeClasses.medium

  return (
    <motion.div
      className={`relative ${sizeClass} ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Bot head - vintage style */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-[#D4AF37] to-[#B8860B] border-2 border-[#000000] shadow-lg overflow-hidden">
        {/* Bot face plate */}
        <div className="absolute inset-x-0 top-1/4 bottom-1/4 bg-[#1A1A1A] rounded-md mx-2">
          {/* Bot eyes */}
          <div className="flex justify-center items-center h-full space-x-4">
            <motion.div
              className="w-3 h-3 rounded-full bg-[#D4AF37]"
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, repeatType: "reverse" }}
            />
            <motion.div
              className="w-3 h-3 rounded-full bg-[#D4AF37]"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2.5, repeatType: "reverse", delay: 0.5 }}
            />
          </div>
        </div>

        {/* Bot antenna */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4">
          <div className="w-1 h-3 bg-[#8B4513]"></div>
          <div className="w-3 h-3 rounded-full bg-[#D4AF37] mx-auto -mt-1"></div>
        </div>

        {/* Decorative elements - vintage style */}
        <div className="absolute bottom-2 left-2 right-2 h-1 bg-[#8B4513] rounded-full opacity-70"></div>
        <div className="absolute top-2 left-2 right-2 h-1 bg-[#D4AF37] rounded-full opacity-50"></div>
      </div>
    </motion.div>
  )
}
