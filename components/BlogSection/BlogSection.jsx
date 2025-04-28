'use client'
import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import BLogSkeleton from '../BlogSkeleton/BLogSkeleton'




export default function BlogSection() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const getBlogs = async () => {
            try {
                setLoading(true);
                const response = await fetch("https://mern-stack-server-czfb.onrender.com/users/user/67408c6fc21e4dba1121b215");
                const data = await response.json();

                // Blogları state'e atıyoruz
                setBlogs(data.blogs); // Son iki blogu alıyoruz
            } catch (error) {
                console.error("Hata:", error);
            } finally {
                setLoading(false);
            }
        };
        getBlogs();
    }, []);

    // console.log("İLK BLOG", blogs[0]);


    // Yükleniyor durumu

    return (

        <>

            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full  mx-auto" />

            {loading ? (
                <div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
                    >
                        Belki Yazılarıma da Bakmak İstersin
                    </motion.h2>
                    <BLogSkeleton />

                </div>
            ) : (<section className="py-28 px-6 text-center ">

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl md:text-4xl font-bold text-white mb-12"
                >
                    Belki Yazılarıma da Bakmak İstersin
                </motion.h2>

                <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
                    {blogs.map((post, index) => (
                        <motion.div
                            key={post.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="w-full sm:w-1/2 md:w-1/3 max-w-xs bg-white/10 rounded-lg backdrop-blur-lg border border-white/20 shadow-md p-6 hover:scale-105 transition-all duration-300"
                        >
                            {/* <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded-lg mb-4" /> */}
                            <h3 className="text-xl font-semibold text-white mb-2">{post.title}</h3>
                            <p className="text-sm text-gray-300 mb-4">{post.description}</p>
                            {/* <p className="text-xs text-gray-500">{post.date}</p> */}
                            <Link
                                target="_blank"
                                href={`https://myblog-react-mdpol.netlify.app/#/blog/${post._id}`}
                                passHref
                            >
                                <span className="text-blue-400 hover:underline">Devamını Oku</span>
                            </Link>
                        </motion.div>
                    ))}
                </div>


                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.7 }}
                    className="mt-12"
                >
                    <Link
                        href="/blog"
                        className="px-6 py-3 rounded-full text-white bg-purple-500 hover:bg-purple-600 transition-colors duration-300"
                    >
                        Tüm Yazılarımı Oku
                    </Link>
                </motion.div>
            </section>)}
        </>

    )
}
