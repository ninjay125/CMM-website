import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
          Who I Am & Why You Need Me
        </h1>
      </section>

      <section className="max-w-3xl mx-auto space-y-6">
        <div className="bg-black text-white p-6 rounded-xl shadow italic font-bold">
          I’m a Mechanical Engineering Technician specializing in Industrial Automation, with hands-on experience in the manufacturing industry (in a srart up). 
        </div>

        <div className="bg-black text-white p-6 rounded-xl shadow italic font-bold">
          I have a proven track record of turning “nothing” into results — helping businesses transform 0$ into revenue through smart automation, process optimization, and strategic thinking.
        </div>

        <div className="bg-black text-white p-6 rounded-xl shadow italic font-bold">
          I provide marketing and networking services that are not just about visibility, but about creating valuable connections that lead to real business growth.
        </div>
      </section>
        <section className="text-center mt-12">
            <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-lg text-gray-700 mb-6">
            Let’s connect and explore how I can help you achieve your business goals.
            </p>
            <a
            href="/contact"
            className="bg-black text-white py-3 px-6 font-semibold rounded-lg shadow hover:bg-[#E50914] hover:text-white transition"
            >
            Contact Me
            </a>
        </section>
        <div className="text-center mt-12 mb-12"></div>
    </div>
  );
}
