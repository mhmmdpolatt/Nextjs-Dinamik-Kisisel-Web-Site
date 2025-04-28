// components/Footer/Footer.jsx

'use client'
import React from 'react'
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="py-8 px-6 bg-gradient-to-br from-[#0e0e25] via-[#190a33] to-[#2a1040] text-white text-center">
            <div className="text-sm mb-6">
                <p>© {new Date().getFullYear()} MHD.dev - </p>
                <p className="text-gray-400">Kişisel yazılım portföyüm. Freelance projelerle ilgili iletişim için yukarıdaki butonları kullanabilirsiniz.</p>
            </div>

            <div className="flex justify-center gap-6 text-2xl">
                <Link href="https://www.instagram.com/md.polatt?utm_source=qr&igsh=aHdkYzhkZW11a2lj" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition transform hover:scale-110">
                    <FaInstagram />
                </Link>
                <Link href="https://www.linkedin.com/in/muhammed-polat-27242a234/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition transform hover:scale-110">
                    <FaLinkedin />
                </Link>
                <Link href="https://github.com/mhmmdpolatt?tab=repositories" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition transform hover:scale-110">
                    <FaGithub />
                </Link>
                <Link href="https://twitter.com/seninprofilin" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition transform hover:scale-110">
                    <FaTwitter />
                </Link>
            </div>
        </footer>
    )
}
