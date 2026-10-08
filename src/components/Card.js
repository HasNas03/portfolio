import React from 'react'

export default function Card({image, name, paragraph, bgColor}) {
  const skillPills = paragraph
    .replace(/<br\s*\/?>/gi, '|')
    .replace(/<\/?strong>/gi, '')
    .split(/[|,]/)
    .map((skill) => skill.trim())
    .filter(Boolean);

  return (
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
  );
}
