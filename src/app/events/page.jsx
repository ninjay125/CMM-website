import GoogleCalendar from "../components/GoogleCalendar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">Events</h1>
      <GoogleCalendar />
      <Link href="/contact" className="mt-6 bg-black text-white py-3 px-6 font-semibold rounded-lg shadow hover:bg-[#E50914] hover:text-white transition">
        Let’s Talk events
      </Link>
    </div>
  );
}
