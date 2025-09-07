'use client'
import Link from "next/link"; // ✅ Added Link import
// import Image from "next/image"; // ❌ Remove if unused
import { motion } from "motion/react"
 import Rot from "./components/rot"; 

 export default function Home() {
  return (
    
    <div className="font-sans bg-white min-h-screen text-black px-6 py-12">
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
          “Don’t Just Get Noticed — Get Remembered.”
        </h1>
        <p className="text-lg text-black leading-relaxed mb-10">
          We are <strong className="text-[#E50914]">CMM</strong>, a next-generation marketing and networking agency built for a hyper-connected age. We combine strategic branding, social media mastery, lead generation, and high-impact networking to not just get you seen — but remembered.
          <br />
          <br />
          We’re not just about visibility. We’re about{" "}
          <strong className="text-[#E50914]">valuable visibility</strong> — helping businesses get in front of the right people, at the right time, with the right message. Whether you&apos re launching a startup, scaling a service, or just tired of the noise, we bring clarity, creativity, and connections that convert.
          <br />
          <br />
          Our difference? We bridge the gap between{" "}
          <strong className="text-[#E50914]">people and potential</strong>. Through exclusive events, curated introductions, and personalized marketing strategies, we empower our clients to build lasting relationships that drive real ROI.
        </p>
      </section>

      <section className="max-w-3xl mx-auto space-y-6">
        <div className="bg-black text-white p-6 rounded-xl shadow italic font-bold">
          You waste your time on advertising when you should be focusing on your business &apos s growth.
        </div>
        <div className="bg-black text-white p-6 rounded-xl shadow italic font-bold">
          You pay a big firm for advertising, but they give you an out-of-the-box solution that doesn &apos t deliver results.
        </div>
        <div className="bg-black text-white p-6 rounded-xl shadow italic font-bold">
          Hiring someone to advertise your business is a process — and not everyone is competent.
        </div>
      </section>

      <section className="text-center mt-12">
      <Link
          href="/contact"
          className="mt-6 bg-black text-white py-3 px-6 font-semibold rounded-lg shadow hover:bg-[#E50914] hover:text-white transition"
        >
          Let’s Talk Strategy
        </Link>
        
      </section>
     
    </div>
  );
}
