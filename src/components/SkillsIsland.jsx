import React from 'react'

export default function SkillsIsland({ skills, onToggleSkill, collected }){
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gold">Devil Fruits I’ve Mastered</h2>
      <p className="mt-2 text-sm text-gray-300">Check the fruits you've picked. Collect all to unlock the Treasure Island.</p>
      <div className="mt-4 flex flex-wrap gap-3">
        {skills.map(s => (
          <label key={s.id} className={`px-3 py-2 rounded-full text-sm border ${collected.includes(s.id) ? 'bg-white/5' : 'bg-transparent'} cursor-pointer`}>
            <input type="checkbox" checked={collected.includes(s.id)} onChange={()=>onToggleSkill(s.id)} className="mr-2" /> {s.name}
          </label>
        ))}
      </div>
    </div>
  )
}
