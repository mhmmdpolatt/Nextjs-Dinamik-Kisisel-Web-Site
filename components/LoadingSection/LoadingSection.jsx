'use client';
import { useEffect, useState } from 'react';

export default function LoadingSection() {
  const [messageIndex, setMessageIndex] = useState(0);

  const messages = [
    'Yükleniyor... ',
    'Sunucu Uyuyor Herhalde',
    'Veriler rüyadan uyanıyor...',
    'Sunucu kahvesini içiyor ☕',
    'Birazdan buradayız, bekle bizi...',
    'Backend yavaşladı, dua et hızlı toparlasın 🙏',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 2500); // 2.5 saniyede bir değiştir

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-[#0e0e25] via-[#190a33] to-[#2a1040] text-white flex flex-col gap-4 justify-center items-center h-screen">
      {/* Spinner */}
      <div className="w-12 h-12 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>

      {/* Dinamik yazı */}
      <p className="text-lg font-medium">{messages[messageIndex]}</p>
    </section>
  );
}
