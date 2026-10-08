import React from 'react'
import { motion, useReducedMotion } from 'framer-motion';

export default function Card({image, name, paragraph, bgColor, revealDelay = 0}) {
  const shouldReduceMotion = useReducedMotion();
  const skillPills = paragraph
    .replace(/<br\s*\/?>/gi, '|')
    .replace(/<\/?strong>/gi, '')
    .split(/[|,]/)
    .map((skill) => skill.trim())
    .filter(Boolean);

  return (
    <motion.div
      className="project-reveal"
      initial={shouldReduceMotion
        ? { opacity: 0 }
        : { opacity: 0, scale: 0.84, y: 22, rotate: 2.5 }}
      whileInView={shouldReduceMotion
        ? { opacity: 1 }
        : { opacity: 1, scale: 1, y: 0, rotate: 0 }}
      whileHover={shouldReduceMotion ? undefined : { scale: 1.015, rotate: -0.25 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        type: 'spring',
        stiffness: 170,
        damping: 20,
        mass: 0.8,
        delay: revealDelay,
      }}
      style={{ transformOrigin: 'center bottom' }}
    >
      <div
        className='projectItem'
        style={{
          '--project-accent': bgColor || '#83bdc3',
        }}
      >
        <div style={{ backgroundImage: `url(${image})` }} className='bgImage' />
        <div className="content">
          <h1 className='projtitle'>{name}</h1>
          <div className='project-skills' aria-label={`${name} skills`}>
            {skillPills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
