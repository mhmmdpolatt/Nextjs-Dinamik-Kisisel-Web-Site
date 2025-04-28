'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="min-h-[85vh] flex items-center justify-center px-6">

      <div className="max-w-3xl text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-32 h-32 rounded-full overflow-hidden  shadow-lg hover:shadow-[0_0_30px_#fff3] transition-all duration-300 flex justify-center items-center mx-auto mb-6"
        >
          <Image
            src="/copadam.png"
            alt="Profil"
            fill
            className="object-cover"
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-white"
        >
          Hoşgeldin  <span className="text-blue-400">Sefa Getirdin</span> 👋
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg md:text-xl text-gray-300"
        >
          Kısaca Ben ?   Full-stack geliştirici & freelancer. Modern web uygulamaları, animasyonlu arayüzler ve etkili çözümler üretiyorum.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <Link
            href="/projeler"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300"
          >
            Projelerimi Gör
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
