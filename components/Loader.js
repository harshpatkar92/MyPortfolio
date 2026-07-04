"use client";

import { useEffect, useState } from "react";

export default function Loader() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);

  }, []);

  if (!loading) return null;

  return (

    <div className="fixed inset-0 bg-black z-[99999] flex flex-col items-center justify-center">

      <h1 className="text-6xl md:text-8xl font-black text-[#00ff87] tracking-[10px] animate-pulse">
        <img 
    src="/harsh.png" 
    alt="HP Logo" 
    className="h-16 md:h-24 w-auto object-contain inline-block" 
  />
      </h1>

      <div className="w-[220px] h-[3px] bg-[#111] mt-10 overflow-hidden rounded-full">

        <div className="h-full bg-[#00ff87] animate-[loading_2s_linear_forwards]"></div>

      </div>

      <p className="text-gray-500 uppercase tracking-[4px] text-xs mt-6">
        Loading Portfolio
      </p>

    </div>

  );
}