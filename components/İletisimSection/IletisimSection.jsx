// components/Iletisim/IletisimSection.jsx

'use client'
import React from 'react'
import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function IletisimSection() {
    return (
        <section className="py-28 px-6 bg-gradient-to-br from-[#0e0e25] via-[#1c1033] to-[#2a1040] text-white relative">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <h2 className="text-4xl font-bold text-purple-300 mb-4">İletişimde Kalalım</h2>
                <p className="text-gray-400 max-w-xl mx-auto">
                    Bir projen mi var? Freelancer olarak destek almak mı istiyorsun?
                    Ya da sadece merhaba demek mi? Her zaman ulaşabilirsin!
                </p>
            </motion.div>

            <div className="flex flex-col items-center gap-6">
                <Link
                    href="https://wa.me/905540235027"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-full transition shadow-md"
                >
                    WhatsApp’tan Ulaş
                </Link>

                <div className="flex gap-6 mt-4 text-2xl">
                    <Link href="hhttps://www.instagram.com/md.polatt
                    " target="_blank" rel="noopener noreferrer"
                        className="text-pink-500 hover:text-pink-400 transition transform hover:scale-110"
                    >
                        <FaInstagram />
                    </Link>
                    <Link href="https://linkedin.com/in/seninprofilin" target="_blank" rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition transform hover:scale-110"
                    >
                        <FaLinkedin />
                    </Link>
                    <Link href="https://github.com/seninprofilin" target="_blank" rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition transform hover:scale-110"
                    >
                        <FaGithub />
                    </Link>
                </div>
            </div>
        </section>
    )
}
