"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
  "https://images.unsplash.com/photo-1517705008128-361805f42e86",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
];

export default function GalleryPage() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <main className="bg-black min-h-screen text-white">
      <Navbar />

      <section className="pt-40 px-6 md:px-20">
        <h1 className="text-7xl mb-20">
          Gallery
        </h1>

        <div className="grid md:grid-cols-2 gap-10">
          {images.map((img, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden rounded-3xl cursor-pointer"
              onClick={() => setSelected(img)}
            >
              <img
                src={img}
                className="w-full h-[600px] object-cover hover:scale-110 transition duration-700"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* FULLSCREEN IMAGE */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/95 z-[999] flex items-center justify-center"
          onClick={() => setSelected(null)}
        >
          <img
            src={selected}
            className="max-w-[90%] max-h-[90%] object-contain"
          />
        </div>
      )}
    </main>
  );
}