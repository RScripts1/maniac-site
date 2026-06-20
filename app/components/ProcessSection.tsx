"use client";

import { motion } from "framer-motion";

const rows: { label: string; description: string }[] = [
  { label: "Development", description: "Finding the engine inside the idea." },
  { label: "World", description: "Building rules, pressure, and atmosphere." },
  {
    label: "Character",
    description: "Designing people who break, adapt, and reveal themselves.",
  },
  { label: "Pilot", description: "Turning premise into propulsion." },
  { label: "Room", description: "Pressure-testing story across season arcs." },
  {
    label: "Production",
    description: "Translating tension into images, rhythm, and performance.",
  },
  { label: "Post", description: "Cutting for pace, silence, impact, and release." },
  { label: "Launch", description: "Delivering the work with identity and intent." },
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function ProcessSection() {
  return (
    <section className="section">
      <div className="section-inner">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={reveal}
          transition={{ duration: 0.7, ease: [0.25, 0, 0, 1] }}
          style={{ marginBottom: "clamp(2.5rem, 5vw, 4rem)" }}
        >
          <span className="label" style={{ marginBottom: "1.4rem" }}>
            Development to Delivery
          </span>
          <h2 className="heading" style={{ marginTop: "1rem" }}>
            The architecture of a story.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.07 }}
          role="list"
        >
          {rows.map((row) => (
            <motion.div
              key={row.label}
              role="listitem"
              variants={reveal}
              transition={{ duration: 0.55, ease: [0.25, 0, 0, 1] }}
              className="process-row"
            >
              <span className="process-row__label">{row.label}</span>
              <span className="process-row__desc">{row.description}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        .process-row {
          display: grid;
          grid-template-columns: minmax(180px, 0.4fr) 1fr;
          gap: 1.5rem;
          align-items: baseline;
          padding: clamp(1.1rem, 2vw, 1.6rem) 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.07);
        }
        .process-row__label {
          font-family: var(--font-inter);
          font-weight: 500;
          font-size: 0.8rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--crimson);
        }
        .process-row__desc {
          font-family: var(--font-inter);
          font-weight: 300;
          color: #e5e5e5;
          font-size: clamp(1.05rem, 1.6vw, 1.3rem);
          line-height: 1.5;
        }
        @media (max-width: 768px) {
          .process-row {
            grid-template-columns: 1fr;
            gap: 0.5rem;
          }
        }
      `}</style>
    </section>
  );
}
