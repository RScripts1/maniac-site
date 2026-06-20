"use client";

import { motion } from "framer-motion";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const principles = [
  "Character first",
  "Pressure reveals truth",
  "Every frame earns the next",
];

export default function StudioSection() {
  return (
    <section className="section">
      <motion.div
        className="section-inner"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.12 }}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "clamp(2.5rem, 6vw, 5rem)",
          alignItems: "center",
        }}
      >
        {/* Left column */}
        <motion.div
          variants={reveal}
          transition={{ duration: 0.7, ease: [0.25, 0, 0, 1] }}
        >
          <span className="label" style={{ marginBottom: "1.5rem" }}>
            Founded by Michael Seitzman
          </span>
          <h2
            className="heading"
            style={{ margin: "1.2rem 0 1.6rem", maxWidth: "16ch" }}
          >
            Built for the moment before everything changes.
          </h2>
          <p className="body-copy" style={{ maxWidth: "52ch" }}>
            Maniac Productions develops film and television with a focus on
            tension, character, propulsion, and emotional consequence. The work
            moves between network drama, premium streaming, unscripted
            storytelling, and feature film.
          </p>
        </motion.div>

        {/* Right column — glass card with principles */}
        <motion.div
          variants={reveal}
          transition={{ duration: 0.7, ease: [0.25, 0, 0, 1] }}
          className="glass-card"
          style={{
            padding: "clamp(2rem, 4vw, 3rem)",
          }}
        >
          <span className="label" style={{ marginBottom: "2rem" }}>
            Operating Principles
          </span>
          <ul style={{ listStyle: "none", marginTop: "1.8rem" }}>
            {principles.map((principle, i) => (
              <li
                key={principle}
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "1rem",
                  padding: "1.25rem 0",
                  borderTop:
                    i === 0 ? "none" : "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.7rem",
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                    color: "var(--crimson)",
                    minWidth: "1.6rem",
                  }}
                >
                  0{i + 1}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "clamp(1.15rem, 2vw, 1.5rem)",
                    fontWeight: 400,
                    color: "#ffffff",
                    lineHeight: 1.2,
                  }}
                >
                  {principle}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
