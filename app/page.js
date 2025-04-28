import BlogSection from "@/components/BlogSection/BlogSection";
import GecisBasligi from "@/components/GecisBasligi/GecisBasligi";
import Hakkimda from "@/components/Hakkimda/Hakkimda";
import HangiTeknolojiler from "@/components/HangiTeknolojiler/HangiTeknolojiler";
import HeroSection from "@/components/HeroSection/HeroSection";
import Projelerimiz from "@/components/Projeler/Projeler";
import Image from "next/image";

export default function Home() {
  return (
    <>
    
      <HeroSection />
      <HangiTeknolojiler/>
      <Projelerimiz/>
      <BlogSection/>
      <GecisBasligi/>
      <Hakkimda/>

    </>
  );
}
