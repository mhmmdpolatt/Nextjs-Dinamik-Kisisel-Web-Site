'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const projects = [
  {
    title: 'E-Ticaret Platformu',
    description: 'Ürün listeleme, sepet, ödeme, admin paneli ile tam fonksiyonel e-ticaret.',
    techs: ['Next.js', 'Stripe', 'MongoDB', 'Tailwind'],
  },
  {
    title: 'Sohbet Uygulaması',
    description: 'Gerçek zamanlı mesajlaşma, socket.io & redis destekli.',
    techs: ['React', 'Node.js', 'Socket.io', 'Redis'],
  },
  {
    title: 'Blog CMS',
    description: 'Dinamik içerik yönetimi, kullanıcı rolleri ve markdown destekli yazılar.',
    techs: ['Next.js', 'Prisma', 'PostgreSQL', 'Shadcn/UI'],
  },
]

export default function Projelerimiz() {
  return (
    <>
      <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full  mt-8  mx-auto" />
      <section className="py-28 px-6 flex flex-col items-center text-center">

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-white mb-14"
        >
          Biraz Projelerrrr
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-10 max-w-6xl">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              className="relative bg-white/5 border border-white/10 rounded-2xl backdrop-blur-lg shadow-lg p-6 w-full max-w-sm hover:shadow-[0_0_20px_#fff2] transition-all duration-300 hover:scale-105 text-left"
            >
              <h3 className="text-xl font-semibold text-white mb-3">
                {project.title}
              </h3>
              <p className="text-sm text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.techs.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-sm text-gray-400 mt-12 italic"
          >
            Daha fazlası için <Link href="/projeler" className="text-purple-400"><p>Projeler Sayfasına Git</p></Link> sayfasına göz atabilirsin.
          </motion.div>
        </div>
      </section>

    </>

  )
}
