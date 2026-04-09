"use client";
import { useState } from "react";

const engines = ["SkyVerse","Optima 360","AION","SonicLynk","QLens","ProAug"];

export default function EngineInteractive() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-32 px-10 md:px-20">
      <h2 className="text-4xl mb-10">Performance Engines</h2>
      <div className="flex gap-4">
        {engines.map((e, i) => (
          <div key={i} onMouseEnter={() => setActive(i)}
            className={`p-6 rounded-xl transition ${active === i ? "bg-white/10" : "bg-white/5"}`}>
            {e}
          </div>
        ))}
      </div>
    </section>
  );
}