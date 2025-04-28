'use client'
import React from 'react'
import { motion } from 'framer-motion'
import {
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiJavascript,
    SiNodedotjs,
    SiMongodb,
    SiTypescript
} from 'react-icons/si'
import { CiCirclePlus } from "react-icons/ci";


const techStack = [
    { name: 'React', icon: SiReact, color: 'text-cyan-400' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-black' },
    { name: 'Tailwind', icon: SiTailwindcss, color: 'text-sky-400' },
    { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-400' },
    { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-400' },
    { name: 'Ve Daha Fazlası', icon: CiCirclePlus, color: 'text-green-400' },

]

export default function HangiTeknolojiler() {
    return (
        <section className="py-2 px-6 flex flex-col items-center justify-center text-center relative z-10">
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mb-8" />

            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold text-white mb-10"
            >
                Kullandığım Teknolojiler
            </motion.h2>

            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl shadow-xl p-8 flex flex-wrap justify-center gap-12 max-w-[1560px] w-full relative group">
                {techStack.map((tech, index) => {
                    const IconComponent = tech.icon
                    return (
                        <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="relative w-28 h-32 bg-white/5 border border-white/10 rounded-xl flex flex-col items-center justify-center space-y-3 shadow-lg hover:shadow-[0_0_20px_#fff2] transition-all duration-300 overflow-hidden hover:scale-105"
                        >
                            {/* Neon hover glow */}
                            <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute w-64 h-64 -top-1/2 -left-1/2 bg-gradient-radial from-white/20 to-transparent rounded-full pointer-events-none blur-2xl animate-pulse" />
                            </div>

                            <IconComponent size={48} className={`${tech.color} z-10`} />
                            <p className="text-sm text-gray-300 z-10">{tech.name}</p>
                        </motion.div>
                    )
                })}
            </div>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-sm text-gray-400 mt-12 italic"
            >
                Şu an <span className="text-purple-400 font-medium">Her Zamankinden </span>
                <span className="text-teal-400 font-medium">Daha iyisini</span> öğreniyorum...
            </motion.p>
        </section>
    )
}
