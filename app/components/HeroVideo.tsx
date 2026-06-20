"use client";

import { motion } from "framer-motion";

/*
 * Future upgrade: convert hero video into a frame sequence and scrub on
 * scroll with canvas.
 *
 * Version 1 plays the uploaded video directly as a fullscreen background.
 */

export default function HeroVideo() {
  return (
    <section
      aria-label="Maniac Productions introduction"
      style={{
        position: "relative",
        height: "100svh",
        minHeight: "640px",
        width: "100%",
        overflow: "hidden",
        background: "#000000",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Background video — decorative, muted, looping */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          background: "#000000",
        }}
      >
        <source src="/video/logo-hero-4k.mp4" type="video/mp4" />
      </video>

      {/* Dark gradient overlay for legibility */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.25) 100%), linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.15) 55%)",
        }}
      />

      {/* Subtle crimson radial glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          background:
            "radial-gradient(ellipse 60% 50% at 20% 60%, rgba(193,18,31,0.18) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      {/* Hero content */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.25, 0, 0, 1] }}
        style={{
          position: "relative",
          zIndex: 3,
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 clamp(1.25rem, 6vw, 6rem)",
        }}
      >
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0, 0, 1] }}
          className="label"
          style={{ marginBottom: "1.6rem" }}
        >
          Maniac Productions · Los Angeles
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.2, ease: [0.25, 0, 0, 1] }}
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(2.8rem, 7vw, 6.5rem)",
            fontWeight: 400,
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
            maxWidth: "900px",
            color: "#ffffff",
            margin: "1.2rem 0 1.8rem",
          }}
        >
          Stories with a pulse.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.32, ease: [0.25, 0, 0, 1] }}
          style={{
            fontFamily: "var(--font-inter)",
            fontWeight: 300,
            color: "#E5E5E5",
            fontSize: "clamp(1rem, 1.4vw, 1.25rem)",
            lineHeight: 1.65,
            maxWidth: "540px",
            marginBottom: "2.4rem",
          }}
        >
          Film and television from Michael Seitzman — built for tension,
          character, and the moment everything turns.
        </motion.p>

        <motion.a
          href="#selected-work"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.25, 0, 0, 1] }}
          whileHover={{ y: -2 }}
          className="btn btn-solid"
        >
          View Selected Work
        </motion.a>
      </motion.div>
    </section>
  );
}
