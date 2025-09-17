"use client";
import React from "react";


// This component uses an iframe to embed Google Calendar. For full API integration, OAuth and backend setup are required.
// Replace 'your_calendar_id' with your actual Google Calendar ID (usually your Gmail address).
// You can get the embed link from Google Calendar > Settings > Integrate calendar > Public URL to this calendar.

const GOOGLE_CALENDAR_EMBED_URL = "https://calendar.google.com/calendar/embed?src=8ba032c571b6b15d50ec4873a9786823e8ba8990a7581bab91a31c4e4d08cc28%40group.calendar.google.com&ctz=America%2FEdmonton";

import { useState } from "react";

export default function GoogleCalendar() {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="w-full h-[600px] flex justify-center items-center bg-white rounded-lg shadow">
      {!error ? (
        <iframe
          src={GOOGLE_CALENDAR_EMBED_URL}
          style={{ border: 0 }}
          width="100%"
          height="600"
          frameBorder="0"
          scrolling="no"
          title="Google Calendar"
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
        ></iframe>
      ) : (
        <div className="text-center text-red-500 font-semibold w-full">Could not load calendar. It may be private or unavailable.</div>
      )}
      {!loaded && !error && (
        <div className="absolute text-gray-500">Loading calendar...</div>
      )}
    </div>
  );
}
