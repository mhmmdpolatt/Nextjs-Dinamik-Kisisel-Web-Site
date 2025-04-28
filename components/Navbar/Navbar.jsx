'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

const navItems = [
    { label: 'Anasayfa', href: '/' },
    { label: 'Hakkımda', href: '/#hakkimda' },
    { label: 'Projeler', href: '/projeler' },
    { label: 'Freelancer & Mühendislik', href: '/freelancer' },
    { label: 'İletişim', href: '/iletisim' },
    { label: 'Blog', href: '/Blog' },
]

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const pathname = usePathname()

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/70 backdrop-blur-md shadow-md">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <div className="text-lg font-bold text-blue-400">MHD.dev</div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-300">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className={`transition-colors duration-300 ${pathname === item.href
                                    ? 'text-purple-400 border-b border-gray-300'
                                    : 'hover:text-blue-400'
                                    }`}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-gray-300 focus:outline-none"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed top-0 left-0 w-full h-screen bg-slate-900/90 text-white transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-500`}
            >
                <div className="flex justify-between items-center p-6">
                    <div className="text-lg font-bold text-blue-400">kankam.dev</div>
                    <button
                        onClick={toggleMenu}
                        className="text-gray-300 focus:outline-none"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                <ul className="flex flex-col items-center gap-6 text-xl font-medium">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className={`transition-colors duration-300 ${pathname === item.href
                                    ? 'text-yellow-400 border-b-2 border-yellow-400'
                                    : 'hover:text-blue-400'
                                    }`}
                                onClick={toggleMenu}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}
