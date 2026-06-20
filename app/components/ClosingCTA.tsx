"use client";

import { motion } from "framer-motion";

/*
 * No public contact email exists in the repo content or on the current
 * maniacprods.com site, so the contact button falls back to href="#".
 * Swap to a mailto: link once an official address is provided.
 */

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function ClosingCTA() {
  return (
    <section className="section" style={{ overflow: "hidden" }}>
      {/* Radial glow behind the button */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 50% 60% at 50% 70%, rgba(193,18,31,0.16) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <motion.div
        className="section-inner"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.12 }}
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "780px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <motion.span
          variants={reveal}
          transition={{ duration: 0.6, ease: [0.25, 0, 0, 1] }}
          className="label"
          style={{ marginBottom: "1.6rem" }}
        >
          Enter the slate
        </motion.span>

        <motion.h2
          variants={reveal}
          transition={{ duration: 0.75, ease: [0.25, 0, 0, 1] }}
          style={{
            fontFamily: "var(--font-playfair)",
            fontWeight: 400,
            fontSize: "clamp(2.2rem, 5.5vw, 4rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            color: "#ffffff",
            margin: "1rem 0 1.6rem",
          }}
        >
          The story starts in the dark.
          <br />
          <span style={{ fontStyle: "italic", color: "#E5E5E5" }}>
            Then it cuts through.
          </span>
        </motion.h2>

        <motion.p
          variants={reveal}
          transition={{ duration: 0.7, ease: [0.25, 0, 0, 1] }}
          className="body-copy"
          style={{ maxWidth: "52ch", marginBottom: "2.6rem" }}
        >
          Maniac Productions builds film and television for the charged space
          between control and chaos.
        </motion.p>

        <motion.a
          href="#"
          variants={reveal}
          transition={{ duration: 0.7, ease: [0.25, 0, 0, 1] }}
          whileHover={{ y: -2, scale: 1.02 }}
          whileTap={{ scale: 0.99 }}
          className="btn btn-outline"
        >
          Contact Maniac Productions
        </motion.a>
      </motion.div>
    </section>
  );
}
