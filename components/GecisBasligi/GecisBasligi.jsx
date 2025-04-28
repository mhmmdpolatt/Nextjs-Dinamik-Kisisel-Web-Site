"use client"
import { motion } from 'framer-motion'

export default function GecisBasligi() {
    return (
        <section className="py-32 flex flex-col items-center justify-center text-center px-4">
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
                Sanırım tasarımı beğendin ve buraya kadar geldin demek ✨
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-gray-400 text-sm md:text-base max-w-xl"
            >
                O zaman gel, biraz da beni tanı. Yazılımla nasıl tanıştım, neler yapıyorum, freelance işlerim neler...
            </motion.p>

            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full mt-8" />
        </section>
    )
}
