'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Typewriter from 'typewriter-effect'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import Link from 'next/link'

export default function Hakkimda() {
  return (
    <section id='hakkimda' className=" py-28 px-6 flex flex-col items-center md:flex-row md:items-start  justify-center gap-16 max-w-6xl mx-auto text-white">

      {/* Profil Görseli */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative w-56 h-56 rounded-full overflow-hidden border-4 border-white/20 shadow-lg hover:shadow-[0_0_30px_#fff3] transition-all duration-300"
      >
        <Image
          src="/copadam.png"
          alt="Profil"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Tanıtım Yazısı */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center md:text-left max-w-xl"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Merhaba, ben <span className="text-purple-400">Muhammed Polat</span>
        </h2>

        <div className="text-lg text-gray-300 mb-4 h-10">
          <Typewriter
            options={{
              strings: [
                'Full-stack geliştiriciyim.',
                'Modern web uygulamaları geliştiriyorum.',
                'Kod yazmayı ve tasarımı birleştirmeyi seviyorum.',
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        <ul className="text-sm text-gray-400 leading-relaxed mb-4 space-y-4">
          <li>
            <strong>2020 yılında yazılım dünyasına adım attım</strong> ve o günden beri teknolojiye olan ilgim beni sürekli olarak yeni şeyler öğrenmeye ve geliştirmeye itti.
          </li>
          <li>
            <strong>İnönü Üniversitesi'nden mezun olduktan sonra,</strong> öğrendiklerimi gerçek projelere uygulayarak daha fazla tecrübe kazandım ve yazılım dünyasında adım atmak için heyecanlıyım.
          </li>
          <li>
            <strong>MERN Stack (MongoDB, Express.js, React, Node.js) ile modern web uygulamaları geliştirme</strong> konusunda çalıştım ve bu alanda projeler ürettim.
            Bunun dışında SEO, Redis, Docker gibi teknolojileri keşfetmek ve bu araçlarla verimli çözümler üretmek konusunda kendimi geliştiriyorum.
          </li>
          <li>
            <strong>Sürekli öğrenmeye olan tutkum</strong> ve yeni teknolojilere olan ilgim, beni her gün daha iyi bir yazılımcı yapma yolunda motive ediyor. Hedefim, kullanıcı deneyimini ön planda tutarak gerçek dünyadaki sorunlara çözüm getiren projeler geliştirmek.
          </li>
          <li>
            <strong>Şu ana kadar çeşitli projelerde yer aldım</strong> ve öğrendiklerimi her geçen gün daha fazla uygulama fırsatı buluyorum. Bu yolculukta, kullanıcı odaklı ve yenilikçi çözümler üretmeye devam edeceğim.
          </li>
        </ul>




        {/* Deneyim & Bilgiler */}
        <div className="mb-6">
          <ul className="text-sm text-gray-300 space-y-2">
            <li>👨‍💻 3+ Yıl Yazılım Deneyimi</li>
            <li>🚀 MERN Stack | Next.js | Tailwind</li>
            <li>🔐 Siber Güvenlik & Ağ Güvenliği Stajyeri</li>
            <li>   <button className='bg-purple-700/10 rounded-lg backdrop-blur-lg border border-white/20 shadow-md py-1 px-3 mb-1  hover:scale-105 transition-all duration-300 ' > Daha Fazla</button></li>
          </ul>
        </div>

        {/* Sosyal Medya */}
        <div className="flex gap-5 justify-center md:justify-start mt-4">
          <Link
            href="https://github.com/mhmmdpolatt?tab=repositories"
            target="_blank"
          >
            <FaGithub size={26} color="white" className="hover:scale-110 transition-transform cursor-pointer" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/muhammed-polat-27242a234/"
            target="_blank"
          >
            <FaLinkedin size={26} color="#0A66C2" className="hover:scale-110 transition-transform cursor-pointer" />
          </Link>

          <Link
            href="https://www.instagram.com/md.polatt?utm_source=qr&igsh=aHdkYzhkZW11a2lj"
            target="_blank"
          >
            <FaInstagram size={26} color="#E1306C" className="hover:scale-110 transition-transform cursor-pointer" />
          </Link>
        </div>

      </motion.div>
    </section>
  )
}
