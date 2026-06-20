"use client";

import { motion } from "framer-motion";

const credits = [
  "Writer / Producer",
  "Founder, Maniac Productions",
  "Film & Television",
  "Los Angeles",
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function FounderSection() {
  return (
    <section className="section">
      <motion.div
        className="section-inner"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.12 }}
        style={{
          maxWidth: "760px",
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
          style={{ marginBottom: "1.4rem" }}
        >
          Founder
        </motion.span>

        <motion.h2
          variants={reveal}
          transition={{ duration: 0.7, ease: [0.25, 0, 0, 1] }}
          className="heading"
          style={{ margin: "1rem 0 1.6rem" }}
        >
          Michael Seitzman
        </motion.h2>

        <motion.p
          variants={reveal}
          transition={{ duration: 0.7, ease: [0.25, 0, 0, 1] }}
          className="body-copy"
          style={{ maxWidth: "60ch" }}
        >
          Michael Seitzman is a writer, producer, and founder of Maniac
          Productions. His work spans network television, unscripted series, and
          feature film, with credits across drama, thriller, medical, legal, and
          character-driven storytelling.
        </motion.p>

        <motion.ul
          variants={reveal}
          transition={{ duration: 0.7, ease: [0.25, 0, 0, 1] }}
          style={{
            listStyle: "none",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0.75rem 1.5rem",
            marginTop: "2.4rem",
            paddingTop: "2.4rem",
            borderTop: "1px solid rgba(255,255,255,0.12)",
            width: "100%",
          }}
        >
          {credits.map((credit) => (
            <li
              key={credit}
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.65rem",
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#B8B8B8",
              }}
            >
              {credit}
            </li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}
