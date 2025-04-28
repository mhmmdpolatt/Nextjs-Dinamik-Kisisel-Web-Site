'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'
// import LoadingSection from '@/components/LoadingSection/LoadingSection'
import BLogSkeleton from '@/components/BlogSkeleton/BLogSkeleton'

export default function BlogSection() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);


    // Default resim
    const defaultImage = '/Soru.webp'; // Buraya default resmin yolu



    useEffect(() => {
        const getBlogs = async () => {
            try {
                setLoading(true);
                const response = await fetch("https://mern-stack-server-czfb.onrender.com/users/user/67408c6fc21e4dba1121b215");
                const data = await response.json();

                // Blogları state'e atıyoruz
                setBlogs(data.blogs);
            } catch (error) {
                console.error("Hata:", error);
            } finally {
                setLoading(false);
            }
        };
        getBlogs();
    }, []);

    console.log("BLOGLAR", blogs);


    // Yükleniyor durumu



    return (


        <>
            {loading ?
                (

                    <div className='mt-16'>


                        <div className=''></div>
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-4xl font-bold text-purple-300 mb-4">Blog Yazılarım</h2>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                Yazılarımı kendi oluşturduğum web sitesinde paylaşıyorum. Sizler de orada hesap oluşturup geliştirici içerikler paylaşabilirsiniz.
                            </p>
                            <Link href="https://your-blog-platform.com" passHref>
                                <button className="mt-6 bg-yellow-400 text-black font-bold py-2 px-6 rounded-lg hover:bg-yellow-500 transition duration-300">
                                    Uygulamaya Git
                                </button>
                            </Link>
                        </motion.div>


                        <BLogSkeleton />
                    </div>
                )
                :
                (<section className=" py-20 px-6 mt-12 text-white">
                    {/* Başlık ve Açıklama */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold text-purple-400 mb-4">Blog Yazılarım</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Yazılarımı kendi oluşturduğum web sitesinde paylaşıyorum. Sizler de orada hesap oluşturup geliştirici içerikler paylaşabilirsiniz.
                        </p>
                        <Link href="https://myblog-react-mdpol.netlify.app/#/" passHref>
                            <button className="mt-6 bg-yellow-600 rounded-lg backdrop-blur-lg border border-white/20 text-white font-bold py-2 px-6  hover:bg-yellow-500 transition duration-300">
                                Uygulamaya Git
                            </button>
                        </Link>
                    </motion.div>

                    {/* Blog Yazıları Listesi */}
                    <div className="space-y-12 flex justify-center items-center flex-col lg:flex-row lg:space-x-10 lg:space-y-0">
                        {blogs?.map((post, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="bg-white/15 backdrop-blur-sm border border-white/20  p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
                            >
                                {/* Resim kısmı */}
                                <Image
                                    src={defaultImage} // Resim yoksa default resim kullanılır
                                    alt="Blog Post"
                                    width={400}
                                    height={300}
                                    className="w-full h-48 object-cover rounded-lg mb-4"
                                    priority
                                />


                                <h3 className="text-xl font-semibold text-amber-400 mb-4">{post.title}</h3>
                                <p
                                    className="text-white/70 mb-4"
                                    dangerouslySetInnerHTML={{
                                        __html: post.content.length > 100 ? post.content.slice(0, 100) + '...' : post.content
                                    }}
                                />
                                <button>
                                    <Link target='_blank' href={`https://myblog-react-mdpol.netlify.app/#/blog/${post._id}`} passHref>
                                        <span className="text-blue-400 hover:underline">Devamını Oku</span>
                                    </Link>
                                </button>
                            </motion.div>

                        ))}

                    </div>
                </section>)}
        </>
    );
}
