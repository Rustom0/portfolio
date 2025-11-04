import React from 'react'
import HeroIsland from './HeroIsland'
import AboutIsland from './AboutIsland'
import SkillsIsland from './SkillsIsland'
import ProjectsIsland from './ProjectsIsland'
import ContactIsland from './ContactIsland'

export default function MapView({ selected, onNavigate, collectedSkills, onToggleSkill, data }){
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="md:col-span-2 space-y-4">
        <div className="bg-gradient-to-b from-black/20 to-transparent rounded-xl p-6">
          {selected === 'home' && <HeroIsland onNavigate={onNavigate} meta={data.meta} />}
          {selected === 'about' && <AboutIsland meta={data.meta} />}
          {selected === 'skills' && <SkillsIsland skills={data.skills} onToggleSkill={onToggleSkill} collected={collectedSkills} />}
          {selected === 'projects' && <ProjectsIsland projects={data.projects} />}
          {selected === 'contact' && <ContactIsland contact={data.meta.contact} collectedSkills={collectedSkills} />}
        </div>
      </div>
      <aside className="space-y-4">
        <div className="rounded-xl p-4 bg-gradient-to-b from-black/20 to-transparent">
          <h3 className="text-gold font-semibold">Compass</h3>
          <p className="text-sm mt-2">Navigate the islands using the navbar or buttons. Collect all Devil Fruits to unlock the Treasure Island.</p>
          <div className="mt-4 flex gap-2">
            <button className="btn" onClick={()=>onNavigate('home')}>Return to Ship</button>
            <button className="px-3 py-2 rounded-md border border-white/5" onClick={()=>onNavigate('skills')}>Hunt Devil Fruits</button>
          </div>
        </div>
        <div className="rounded-xl p-4 bg-gradient-to-b from-black/20 to-transparent">
          <h4 className="font-semibold text-gold">Quick Info</h4>
          <p className="text-sm mt-2">Rustom — Frontend Developer / Computer Engineering Student</p>
          <p className="text-xs text-gray-400 mt-2">Built with React, Vite, TailwindCSS, and Framer Motion.</p>
        </div>
      </aside>
    </div>
  )
}
