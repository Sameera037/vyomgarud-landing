import React from "react";
import { motion } from "framer-motion";

// Fade-up animation preset
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.8, ease: "easeOut" }
};

// Soft floating animation (Hero image)
const floatAnim = {
  animate: { y: [0, -10, 0] },
  transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
};

// Drone icon (minimal)
const DroneSvg = ({ className = "w-20 h-20" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
    <rect x="3" y="11" width="18" height="4" rx="1.5" fill="currentColor" />
    <path
      d="M7 7v3M17 7v3M12 4v3"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Data
const features = [
  {
    title: "Military-grade Reliability",
    desc: "Engineered for precision and guaranteed stability in critical missions."
  },
  {
    title: "Autonomous Navigation",
    desc: "Advanced autonomy powered by multi-sensor fusion and AI."
  },
  {
    title: "Secure Telemetry",
    desc: "Encrypted, tamper-resistant communication pipeline."
  }
];

const products = [
  {
    title: "Edge Recon UAV",
    desc: "Compact ISR system offering 6+ hours endurance for surveillance ops."
  },
  {
    title: "Payload Suite",
    desc: "Modular payload bay supporting optics, sensors, comms packages."
  },
  {
    title: "C2 Command Platform",
    desc: "Advanced ground control system for mission planning & fleet oversight."
  }
];

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white font-body">

      {/* NAVIGATION */}
      <header className="max-w-7xl mx-auto w-full px-8 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-vyomOrange w-10 h-10 rounded-lg flex items-center justify-center text-black font-bold">
            V
          </div>
          <div>
            <div className="font-semibold tracking-wide text-lg">VyomGarud</div>
            <div className="text-xs text-gray-400">Precision UAV Systems</div>
          </div>
        </div>

        <nav className="hidden md:flex gap-8 text-sm text-gray-300">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#products" className="hover:text-white transition">Products</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex-1 flex items-center"
      >
        <div className="max-w-7xl mx-auto w-full px-8 py-20 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

          {/* TEXT */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-heading font-extrabold leading-tight tracking-tight"
            >
              Advanced UAV  
              <br /> Systems for  
              <span className="text-vyomOrange"> Mission-Critical </span>  
              Operations
            </motion.h1>

            <motion.p
              {...fadeUp}
              transition={{ delay: 0.15 }}
              className="text-gray-300 mt-6 max-w-xl text-lg leading-relaxed"
            >
              Built for precision, endurance, and reliability. VyomGarud delivers  
              next-generation unmanned aviation platforms trusted by defense  
              and enterprise.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              {...fadeUp}
              transition={{ delay: 0.25 }}
              className="mt-10 flex gap-5"
            >
              <motion.a
                whileHover={{ scale: 1.08, boxShadow: "0 0 18px #ff7b00" }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-8 py-4 bg-vyomOrange text-black font-semibold rounded-lg shadow-xl"
              >
                Request Demo
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                href="#products"
                className="px-8 py-4 border border-gray-700 rounded-lg text-gray-300 hover:text-white"
              >
                Explore Systems
              </motion.a>
            </motion.div>
          </div>

          {/* IMAGE */}
          <motion.div
            {...floatAnim}
            className="flex justify-center md:justify-end"
          >
            <div className="w-80 h-80 md:w-[460px] md:h-[460px] bg-[#0b0b0b] rounded-2xl flex items-center justify-center shadow-2xl">
              <svg viewBox="0 0 200 200" className="w-3/4 opacity-90">
                <defs>
                  <linearGradient id="heroGrad" x1="0" x2="1">
                    <stop offset="0" stopColor="#2b2b2b" />
                    <stop offset="1" stopColor="#0b0b0b" />
                  </linearGradient>
                </defs>
                <rect width="100%" height="100%" rx="18" fill="url(#heroGrad)" />
                <g transform="translate(50,40)" fill="none" stroke="#ff7b00" strokeWidth="2">
                  <path d="M0 20 L40 0 L80 20 L40 40 Z" strokeLinejoin="round" />
                  <circle cx="40" cy="20" r="7" fill="#ff7b00" />
                </g>
              </svg>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* ABOUT SECTION */}
      <motion.section id="about" {...fadeUp} className="px-8 max-w-7xl mx-auto py-24">
        <h2 className="text-3xl font-heading tracking-tight">About VyomGarud</h2>
        <p className="text-gray-400 mt-6 text-lg leading-relaxed max-w-3xl">
          We engineer high-reliability unmanned systems designed for tough  
          tactical environments. Our UAVs integrate advanced autonomy,  
          secure telemetry, and modular payload systems built for both  
          defense and enterprise operations.
        </p>
      </motion.section>

      {/* CAPABILITIES */}
      <section id="products" className="px-8 max-w-7xl mx-auto py-24">
        <motion.h3 {...fadeUp} className="text-2xl font-heading mb-10">
          Capabilities
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {products.map((p, i) => (
            <motion.div
              key={p.title}
              {...fadeUp}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-[#0d0d0d] p-8 rounded-xl border border-gray-800"
            >
              <DroneSvg className="w-10 h-10 text-vyomOrange mb-6" />
              <h4 className="text-xl font-semibold">{p.title}</h4>
              <p className="text-gray-400 mt-3 text-sm">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="px-8 max-w-7xl mx-auto py-24">
        <motion.h3 {...fadeUp} className="text-2xl font-heading mb-10">
          Highlights
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((f, idx) => (
            <motion.div
              key={f.title}
              {...fadeUp}
              whileHover={{ scale: 1.03 }}
              className="p-8 rounded-xl bg-[#0d0d0d] border border-gray-800"
            >
              <div className="text-vyomOrange text-3xl font-bold">✓</div>
              <h4 className="text-lg font-semibold mt-3">{f.title}</h4>
              <p className="text-gray-400 mt-2 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <motion.section id="contact" {...fadeUp} className="px-8 max-w-7xl mx-auto py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">

          {/* FORM */}
          <div>
            <h3 className="text-2xl font-heading">Contact & Demo Request</h3>
            <p className="text-gray-400 mt-4 leading-relaxed">
              Reach out to schedule a demo or request more information.
            </p>

            <form
              className="mt-8 flex flex-col gap-5 max-w-md"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Demo request sent!");
              }}
            >
              <input
                className="bg-[#0b0b0b] border border-gray-700 px-4 py-3 rounded-lg"
                placeholder="Full name"
                required
              />
              <input
                className="bg-[#0b0b0b] border border-gray-700 px-4 py-3 rounded-lg"
                placeholder="Email address"
                required
                type="email"
              />
              <textarea
                className="bg-[#0b0b0b] border border-gray-700 px-4 py-3 rounded-lg"
                placeholder="Message / requirements"
                rows="4"
              ></textarea>

              <motion.button
                whileHover={{ scale: 1.08, boxShadow: "0 0 18px #ff7b00" }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-3 bg-vyomOrange text-black font-semibold rounded-lg w-fit"
              >
                Request Demo
              </motion.button>
            </form>
          </div>

          {/* OFFICE INFO */}
          <div>
            <h4 className="font-semibold text-xl">Office</h4>
            <p className="text-gray-300 mt-3">Contact: +91 8881444693</p>
            <p className="text-gray-400 mt-1">Email: contact@vyomgarud.example</p>

            <div className="mt-8">
              <h4 className="font-semibold text-lg">Quick Links</h4>
              <ul className="text-gray-400 mt-4 space-y-3">
                <li><a href="#products" className="hover:text-white">Products</a></li>
                <li><a href="#about" className="hover:text-white">About</a></li>
                <li><a href="#contact" className="hover:text-white">Privacy</a></li>
              </ul>
            </div>
          </div>

        </div>
      </motion.section>

      {/* FOOTER */}
      <footer className="px-8 py-10 border-t border-gray-900 text-gray-500 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-4">
          <div>© {new Date().getFullYear()} VyomGarud — All Rights Reserved</div>

          <div className="flex gap-4">
            <a className="hover:text-white" href="#">LinkedIn</a>
            <a className="hover:text-white" href="#">GitHub</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

