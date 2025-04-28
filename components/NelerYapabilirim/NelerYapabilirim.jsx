// components/Freelancer/NelerYapabilirim.jsx

'use client'
import React from 'react'
import { motion } from 'framer-motion'
import {
    FaCode, FaMobileAlt, FaServer, FaSearch, FaPaintBrush, FaDatabase,
} from 'react-icons/fa'

const cards = [
    {
        icon: <FaCode size={28} />,
        title: 'Web Uygulamaları',
        desc: 'Modern ve hızlı web uygulamaları geliştiriyorum. Next.js, React, Tailwind stack’iyle sıfırdan kurumsal sistemler.',
    },
    {
        icon: <FaMobileAlt size={28} />,
        title: 'Mobil Uygulamalar',
        desc: 'React Native ile iOS & Android uygulamaları. Tek codebase, native deneyim.',
    },
    {
        icon: <FaServer size={28} />,
        title: 'REST API & Backend',
        desc: 'Node.js, Express, MongoDB ile güçlü ve güvenli backend mimarileri oluşturuyorum.',
    },
    {
        icon: <FaSearch size={28} />,
        title: 'SEO & Performans',
        desc: 'Site hızından, meta optimizasyona kadar teknik SEO’yu kodla birleştiriyorum.',
    },
    {
        icon: <FaPaintBrush size={28} />,
        title: 'CMS Sistemleri',
        desc: 'Admin paneli olan içerik yönetim sistemleri: Blog, ürün yönetimi, özel dashboardlar.',
    },
    {
        icon: <FaDatabase size={28} />,
        title: 'Veri Tabanı Tasarımı',
        desc: 'MongoDB, PostgreSQL gibi veritabanlarını performanslı ve ölçeklenebilir şekilde kurguluyorum.',
    },
]

export default function NelerYapabilirim() {
    return (
        <section className="py-28 px-6 text-white bg-transparent relative z-10">
            <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl text-center font-bold text-purple-300 mb-12"
            >
                Neler Yapabilirim?
            </motion.h2>

            <div className="flex flex-wrap justify-center gap-10 max-w-6xl mx-auto">
                {cards.map((card, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-xl w-80 min-h-[220px] text-center shadow-lg"
                    >
                        <div className="text-purple-300 mb-4 flex justify-center">{card.icon}</div>
                        <h3 className="text-lg font-semibold text-purple-200 mb-2">{card.title}</h3>
                        <p className="text-sm text-gray-300">{card.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
