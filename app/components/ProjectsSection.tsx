"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/*
 * Poster filenames detected in /public/posters are mapped to projects below.
 * Available files: rainmaker.jpg, quantico.jpg, code-black.jpg,
 * intelligence.jpg, choir.jpg, north-country.jpg.
 */
type Project = {
  title: string;
  type: string;
  copy: string;
  poster: string;
};

const projects: Project[] = [
  {
    title: "The Rainmaker",
    type: "Current Series",
    copy: "A John Grisham adaptation centered on law, power, and the fight inside the system.",
    poster: "/posters/rainmaker.jpg",
  },
  {
    title: "Quantico",
    type: "Television",
    copy: "A high-velocity thriller built around secrets, suspicion, and shifting allegiances.",
    poster: "/posters/quantico.jpg",
  },
  {
    title: "Code Black",
    type: "Television",
    copy: "A medical drama driven by crisis, speed, and the human stakes inside emergency medicine.",
    poster: "/posters/code-black.jpg",
  },
  {
    title: "Intelligence",
    type: "Television",
    copy: "An action drama where technology, power, and national security collide.",
    poster: "/posters/intelligence.jpg",
  },
  {
    title: "Choir",
    type: "Unscripted",
    copy: "An unscripted series about voice, discipline, and collective transformation.",
    poster: "/posters/choir.jpg",
  },
  {
    title: "North Country",
    type: "Feature Film",
    copy: "A feature film shaped by workplace conflict, courage, and consequence.",
    poster: "/posters/north-country.jpg",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function ProjectsSection() {
  return (
    <section className="section" id="selected-work">
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
            Selected Work
          </span>
          <h2 className="heading" style={{ marginTop: "1rem", maxWidth: "18ch" }}>
            A body of work across film and television.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.1 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "clamp(1.25rem, 2.5vw, 2rem)",
          }}
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={reveal}
              transition={{ duration: 0.6, ease: [0.25, 0, 0, 1] }}
              whileHover={{ y: -6 }}
              className="project-card"
            >
              <div className="project-card__media">
                <Image
                  src={project.poster}
                  alt={`Poster artwork for ${project.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="project-card__body">
                <span className="label" style={{ fontSize: "0.6rem" }}>
                  {project.type}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontWeight: 400,
                    fontSize: "clamp(1.4rem, 2.2vw, 1.7rem)",
                    color: "#ffffff",
                    margin: "0.9rem 0 0.7rem",
                    lineHeight: 1.1,
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontWeight: 300,
                    color: "#E5E5E5",
                    fontSize: "0.95rem",
                    lineHeight: 1.6,
                  }}
                >
                  {project.copy}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        .project-card {
          display: flex;
          flex-direction: column;
          background: rgba(255, 255, 255, 0.045);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-top: 2px solid var(--crimson);
          border-radius: 4px;
          overflow: hidden;
          transition: border-color 0.35s ease, box-shadow 0.35s ease,
            background 0.35s ease;
        }
        .project-card:hover {
          border-color: rgba(193, 18, 31, 0.55);
          box-shadow: 0 18px 60px -28px rgba(193, 18, 31, 0.55);
          background: rgba(255, 255, 255, 0.06);
        }
        .project-card__media {
          position: relative;
          width: 100%;
          aspect-ratio: 2 / 3;
          background: #0a0a0a;
        }
        .project-card__body {
          padding: clamp(1.25rem, 2vw, 1.75rem);
        }
      `}</style>
    </section>
  );
}
