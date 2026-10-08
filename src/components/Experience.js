import { motion, useReducedMotion } from 'framer-motion';
import interac from '../assets/interac.webp';
import rbc from '../assets/rbc.png';

function Experience() {
  const shouldReduceMotion = useReducedMotion();
  const experiences = [
    {
      role: 'DevSecOps & Cloud Co-op',
      company: 'Interac Corporation',
      dates: 'Jan. 2025 - Aug. 2025',
      image: interac,
      accent: '#e7ca72',
      skills: ['AWS', 'Terraform', 'Kubernetes', 'Docker', 'GitHub Copilot', 'Agile/Scrum', 'GitHub Actions'],
      bullets: [],
    },
    {
      role: 'Technical Systems Analyst Co-op',
      company: 'Royal Bank of Canada',
      dates: 'Sep. 2024 - Dec. 2024',
      image: rbc,
      accent: '#83bdc3',
      skills: ['Python', 'RESTful APIs', 'CI/CD', 'Site Reliability Engineering'],
      bullets: [],
    },
    {
      role: 'Platform & Cloud Co-op',
      company: 'Interac Corporation',
      dates: 'May 2024 - Aug. 2024',
      image: interac,
      accent: '#eead78',
      skills: ['AWS', 'Kubernetes','Agile/Scrum'],
      bullets: [],
    },
  ];

  return (
    <section className='experience' id='experience'>
      <h1 className="sectiontitle othertitle">Experience</h1>
      <div className='experience-timeline'>
        {experiences.map((experience, index) => (
          <motion.article
            className='timeline-item'
            key={experience.role}
            initial={shouldReduceMotion
              ? { opacity: 0 }
              : { opacity: 0, scale: 0.84, y: 22, rotate: index % 2 === 0 ? 2.5 : -2.5 }}
            whileInView={shouldReduceMotion
              ? { opacity: 1 }
              : { opacity: 1, scale: 1, y: 0, rotate: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              type: 'spring',
              stiffness: 170,
              damping: 20,
              mass: 0.8,
              delay: index * 0.04,
            }}
            style={{ '--timeline-accent': experience.accent, transformOrigin: 'center bottom' }}
          >
            <div className='timeline-marker' aria-hidden='true'>
            </div>

            <div className='timeline-card'>
              <div className='timeline-logo-wrap'>
                <img className='timeline-logo' src={experience.image} alt={`${experience.company} logo`} />
              </div>

              <div className='timeline-content'>
                <p className='timeline-date'>{experience.dates}</p>
                <h2>{experience.role}</h2>
                <h3>{experience.company}</h3>

                {/* Edit the skills array above to replace these placeholder chips with the exact tools used. */}
                <div className='timeline-skills' aria-label={`${experience.role} skills`}>
                  {experience.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>

                {/* Edit the bullets array above when you want real resume-style details for each role. */}
                <ul className='timeline-bullets'>
                  {experience.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
