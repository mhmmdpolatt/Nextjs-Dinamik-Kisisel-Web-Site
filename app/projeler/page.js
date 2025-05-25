'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'

const liveProjects = [
    {
        title: 'My Movies App',
        description: 'TMDB API kullanarak film ve dizi arama uygulaması. Kullanıcıların favori içeriklerini kaydedebileceği bir sistem.',

        image: '/MyMoviesNew.PNG',
        tech: ["Nextjs", "Tailwind CSS", "TMDB API"],
        url: 'https://nextjs-movie-app-mauve.vercel.app/',
    },
    {
        title: 'MYB SOCİAL APP',
        description: 'Profil Oluşturup Gönderi Oluşturabileceğiniz İnsanları Takip Edebileceğiniz Gönderileri Kaydedebileceğiniz Özelleiştirilmiş Ana Sayfa Akışı Oluşturabileceğiniz Web Projesi.',
        image: '/MYBGUNCEL.webp',
        tech: ['React', "Express", "MongoDB", 'Tailwind', 'Vercel', "NodeJS"],
        url: 'https://myblog-react-mdpol.netlify.app/#/',
    },
    {
        title: 'TOURS APP',
        description: 'Next js ile yapılmış, gezilecek yerleri listeleyen ve detaylarını gösteren bir uygulama. Geliştrilmiş Filtreleme Seçenekleri Sunar.',
        image: '/ToursApp1.webp',
        tech: ['NextJS', 'Framer Motion', "Tailwind CSS"],
        url: 'https://next-js-project-psi-green.vercel.app/',
    },
    {
        title: 'İnşaat Firması Web Sitesi',
        description: 'Kurumsal bir inşaat firması için yapılmış web sitesi. Tam İçerik Yönetim Sistemi.Modern Ve Responsive Tasarım.',
        image: '/Ameda1.webp',
        tech: ['NextJS', 'Framer Motion', "Tailwind CSS"],
        url: 'https://amedainsaat.com/projeler',
    },
    
]

const githubProjects = [
    
    {
        title: 'Web Socket Chat App',
        description: 'Gerçek zamanlı sohbet uygulaması. Kullanıcılar arasında anlık mesajlaşma.',
        url: 'https://github.com/mhmmdpolatt/ChatApp',
    },
    {
        title: 'FUll Rest Api',

        description: 'Baştan Sona REST API. Kullanıcı yönetimi, ürün yönetimi, yorum sistemi.',
        url: 'https://github.com/mhmmdpolatt/restapi',
    },
    {
        title: 'OOP Music Player',
        description: 'OOP ile yapılmış müzik çalar uygulaması. Kullanıcı arayüzü ve temel müzik çalma özellikleri.',
        url: 'https://github.com/mhmmdpolatt/MusicPlayer',
    },
    {
        title:"JavaScript Kart Çevirme Oyunu",
        description:"JavaScript ile yapılmış basit bir kart çevirme oyunu. Kullanıcı arayüzü ve temel oyun mekaniği.",
        url:"https://github.com/mhmmdpolatt/FlipCard"
    }
]

export default function ProjelerSection() {
    return (
        <section className="relative z-10 px-6 py-28 min-h-screen text-white bg-gradient-to-br from-[#06061738] via-[#0f0c2924] to-[#2c003e26]">
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-extrabold text-center mb-6"
            >
                Projelerim
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-center text-gray-400 max-w-2xl mx-auto mb-16"
            >
                Uygulanabilir projeler ve GitHub açık kaynak işlerimiz burada 👇
            </motion.p>

            {/* Live Projects */}
            <div className="mb-24">
                <h3 className="text-2xl font-bold text-purple-300 mb-10 text-center">🌐 Gezinebileceğiniz Projeler</h3>

                <div className="flex flex-col lg:flex-row gap-10 flex-wrap justify-center items-center">
                    {liveProjects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2, duration: 0.6 }}
                            className="relative bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-5 w-full sm:w-[80%] md:w-[45%] lg:w-1/3 shadow-xl group hover:border-purple-400/30 transition-all duration-300"
                        >
                            <div className="overflow-hidden rounded-lg mb-4">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={500} // uygun bir genişlik belirle
                                    height={200} // uygun bir yükseklik belirle
                                    className="w-full h-52 object-cover rounded-md"
                                />

                            </div>
                            <h4 className="text-xl font-semibold text-purple-300 mb-2">{project.title}</h4>
                            <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 text-xs text-purple-400 mb-4">
                                {project.tech.map((tech) => (
                                    <span key={tech} className="bg-purple-900/30 px-2 py-1 rounded-full border border-purple-500/30">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className='flex justify-between items-center'>
                                <Link
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block text-sm text-blue-400 hover:text-blue-300  bg-white/10 border border-white/10 rounded-lg py-2 px-4 transition duration-300 shadow-lg transform hover:scale-105"
                                >
                                    Projeye Git →
                                </Link>
                                <Link
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block text-sm text-purple-800 font-extrabold hover:text-blue-300  bg-white border border-white/10 rounded-lg py-2 px-4 transition duration-300 shadow-lg transform hover:scale-105"
                                >
                                    Detayları Gör →
                                </Link>
                            </div>

                        </motion.div>
                    ))}
                </div>

                <div className="flex justify-center mt-10">
                    <button className="flex items-center gap-2 backdrop-blur-md bg-white/10 border mt-8 border-white/10 text-white font-bold py-2 px-6 rounded-lg hover:bg-purple-600 transition duration-300 shadow-lg transform hover:scale-105">
                        <FaGithub size={20} />
                        <Link href="https://github.com/mhmmdpolatt?tab=repositories" target='_blank' rel="noopener noreferrer">
                            <span>Daha Fazla Proje İçin GitHub’a Git</span>

                        </Link>
                    </button>
                </div>
            </div>



            {/* GitHub Projects */}
            <div>
                <h3 className="text-2xl font-bold text-purple-300 mb-10 text-center">💾 GitHub Mini Projeler</h3>
                <div className="space-y-6 max-w-2xl mx-auto">
                    {githubProjects.map((repo, i) => (
                        <motion.a
                            key={i}
                            href={repo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.15, duration: 0.5 }}
                            className="block bg-white/5 border border-white/10 rounded-lg p-5 backdrop-blur-md hover:border-blue-400/30 hover:shadow-lg transition-all duration-300"
                        >
                            <div className="flex items-center gap-3 mb-2 text-blue-300 font-semibold">
                                <FaGithub size={20} />
                                {repo.title}
                            </div>
                            <p className="text-gray-300 text-sm">{repo.description}</p>
                        </motion.a>
                    ))}
                </div>
                <div className="flex justify-center mt-10">
                    <button className="flex items-center gap-2 bg-purple-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-purple-600 transition duration-300 shadow-lg transform hover:scale-105">
                        <FaGithub size={20} /> {/* GitHub ikonu */}
                        <Link href="https://github.com/mhmmdpolatt?tab=repositories" target='_blank' rel="noopener noreferrer">
                            <span>Daha Fazla Proje İçin GitHub’a Git</span>
                        </Link>
                    </button>

                </div>
            </div>
        </section>
    )
}
