import React from 'react'

export default function HeroIsland({ onNavigate, meta }){
  return (
    <div>
      <h1 className="text-3xl font-bold text-gold">Ahoy! I'm {meta.name}</h1>
      <p className="mt-3 text-gray-300 max-w-2xl">{meta.about}</p>
      <div className="mt-6 flex gap-3">
        <button className="btn" onClick={()=>onNavigate('projects')}>Explore Crew</button>
        <button className="px-4 py-2 rounded-md border border-white/5" onClick={()=>onNavigate('skills')}>Hunt Devil Fruits</button>
      </div>
    </div>
  )
}
