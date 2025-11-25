"use client";

export default function RouteLoader() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative flex items-center justify-center">
        {/* Outer Ring */}
        <div className="h-16 w-16 rounded-full border-4 border-blue-300 border-t-transparent animate-spin" />

        {/* Inner Pulse */}
        <div className="absolute h-5 w-5 rounded-full bg-blue-600 animate-ping" />
      </div>

      <p className="mt-4 text-blue-600 font-medium animate-fade">Loading...</p>
    </div>
  );
}
