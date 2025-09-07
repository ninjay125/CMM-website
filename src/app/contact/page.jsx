import Image from "next/image";
import { Mail } from "lucide-react";
export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 space-y-8">
      
      {/* Promo line */}
      <div className="text-center text-4xl font-extrabold text-gray-800">
        Contact us for a <span className="text-red-500">FREE</span> revamp of your outgoing document!
      </div>
      <div className="text-3xl text-gray-700 font-semibold">
        getting more clients for your business.
      </div>
      <div className="text-3xl text-gray-700 font-semibold">
        Join us for a Networking Event in the CALGARY area.
      </div>

      {/* Contact Form */}
      <div className="bg-black text-white rounded-xl p-10 w-full max-w-md shadow-lg">
        <h2 className="text-4xl font-bold mb-8 text-center">Contact Us</h2>

        <form className="space-y-8">
           <div>
            <label htmlFor="name" className="block mb-3 font-bold text-2xl">
              Name
            </label>
            <input
              id="name"
              type="name"
              className="w-full p-4 rounded-xl border border-black bg-white text-black text-2xl focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-3 font-bold text-2xl">
             <Mail />Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-4 rounded-xl border border-black bg-white text-black text-2xl focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          <div>
            <label htmlFor="number" className="block mb-3 font-bold text-2xl">
              Phone Number
            </label>
            <input
              id="number"
              type="tel"
              className="w-full p-4 rounded-xl border border-black bg-white text-black text-2xl focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black py-4 px-6 text-2xl rounded-xl hover:bg-black hover:text-white border border-white transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
