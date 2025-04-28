// components/Freelancer/FreelancerSection.jsx

'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaTools, FaLightbulb } from 'react-icons/fa'
import NelerYapabilirim from '@/components/NelerYapabilirim/NelerYapabilirim'
import IletisimSection from '@/components/İletisimSection/IletisimSection'

export default function FreelancerSection() {
    return (
        <section className="py-24 px-6 text-white bg-gradient-to-br from-[#0a0a1f] via-[#190a2d] to-[#2e0e3f] animate-gradient">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl font-bold text-purple-300">Freelancer & Mühendislik</h2>
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                    Yazılım geliştirmenin ötesinde, mühendislik bakış açısı ile projelerinizi hayata geçiriyorum.
                </p>
            </motion.div>

            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-xl w-full max-w-md"
                >
                    <FaCode size={30} className="text-purple-300 mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-purple-200">Freelance Geliştirme</h3>
                    <p className="text-gray-300 text-sm">
                        UI/UX&apos;ten backend&apos;e kadar projelerinizi uçtan uca hayata geçiriyorum.
                    </p>

                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-xl w-full max-w-md"
                >
                    <FaTools size={30} className="text-purple-300 mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-purple-200">Mühendislik Yaklaşımı</h3>
                    <p className="text-gray-300 text-sm">
                        Temiz kod, ölçeklenebilirlik, test ve sürdürülebilir çözümlerle projeye katkı sağlıyorum.
                    </p>
                </motion.div>
            </div>

            <NelerYapabilirim />
            <IletisimSection />
        </section>
    )
}
