'use client'
import Link from "next/link"; // ✅ Added Link import

 export default function Home() {
  return (
    
    <div className="font-sans bg-white min-h-screen text-black px-6 py-12">
      <section className="max-w-4xl mx-auto text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-[#E50914] mb-4">
          Marketing built for the trades
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
          More of the right jobs. Less time wondering where the next one is coming from.
        </h1>
        <p className="text-lg text-black leading-relaxed mb-10">
          You’re great at the work. But when the phone goes quiet, referrals slow down, or a job falls through, being great isn’t enough to keep the schedule full.
          <br />
          <br />
          <strong className="text-[#E50914]">CMM helps trades businesses attract and win more local customers</strong> with practical marketing that makes it easier for people to find you, trust you, and get in touch. Whether you’re a plumber, electrician, roofer, builder, or another hands-on pro, we’ll help turn your online presence into a clearer path from “I need this fixed” to “When can you come out?”
          <br />
          <br />
          No one-size-fits-all playbook. No confusing marketing talk. Just a focused plan for getting your business in front of the customers you want—and helping you take the next step toward more consistent enquiries.
        </p>
      </section>

      <section className="max-w-3xl mx-auto my-12 rounded-xl border-2 border-[#E50914] p-8 text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-[#E50914] mb-3">
          Pay as you go
        </p>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          No new client from us? You don’t pay us for one.
        </h2>
        <p className="text-lg leading-relaxed">
          Our fee is linked to the work we help bring in—not a one-size-fits-all price. The amount is tailored to the value and size of the jobs, as well as the volume and consistency of the work we generate for you. We’ll agree the arrangement with you upfront, with the final terms subject to discussion and negotiation, so you know exactly what to expect.
        </p>
      </section>

      <section className="max-w-3xl mx-auto space-y-6">
        <div className="bg-black text-white p-6 rounded-xl shadow italic font-bold">
          You didn’t start a trade business to spend your evenings chasing leads, posting online, or trying to figure out what marketing is supposed to work.
        </div>
        <div className="bg-black text-white p-6 rounded-xl shadow italic font-bold">
          You shouldn’t have to rely on word of mouth alone—or pay for ads that bring calls from people who aren’t a fit.
        </div>
        <div className="bg-black text-white p-6 rounded-xl shadow italic font-bold">
          Your next customer is looking for a reliable local tradesperson right now. Make sure they can find you, see why they should trust you, and request a quote.
        </div>
      </section>

      <section className="max-w-3xl mx-auto text-center mt-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Let’s make winning your next customer simpler.
        </h2>
        <p className="text-lg leading-relaxed mb-6">
          Tell us what work you want more of and where you want to grow. We’ll talk through what’s holding your marketing back and map out practical next steps for your business.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block bg-black text-white py-3 px-6 font-semibold rounded-lg shadow hover:bg-[#E50914] hover:text-white transition"
        >
          Get More Local Clients
        </Link>
      </section>
    </div>
  );
}
