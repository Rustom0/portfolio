import React from 'react'

export default function ProjectsIsland({ projects }){
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gold">Crew & Bounty Posters</h2>
      <div className="mt-4 grid gap-4">
        {projects.map(p => (
          <div key={p.id} className="p-4 rounded-lg bg-gradient-to-b from-white/2 to-transparent border border-white/5">
            <div className="flex justify-between items-center">
              <strong>{p.title}</strong>
              <div className="text-xs text-gray-400">{p.tech.join(' • ')}</div>
            </div>
            <p className="text-sm text-gray-300 mt-2">{p.desc}</p>
            <div className="mt-3 flex gap-3">
              <a className="text-gold underline" href={p.repo} target="_blank" rel="noreferrer">GitHub</a>
              <a className="text-gold underline" href={p.demo} target="_blank" rel="noreferrer">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
