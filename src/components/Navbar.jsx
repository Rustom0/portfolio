import React from 'react'

export default function Navbar({ onNavigate, selected }){
  const links = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ]
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-transparent to-black/10 border-b border-white/5">
      <div className="flex items-center gap-4">
        <div className="text-gold font-bold text-lg">☠️ Code Pirates</div>
        <nav className="hidden md:flex gap-2">
          {links.map(l=> (
            <button key={l.id} onClick={()=>onNavigate(l.id)} className={`px-3 py-2 rounded-md ${selected===l.id ? 'bg-white/5' : 'hover:bg-white/2'}`}>
              {l.label}
            </button>
          ))}
        </nav>
        <div className="flex md:hidden">
          <button
            onClick={() => onNavigate('contact')}
            className="btn text-sm px-3 py-1"
            >
            Contact
          </button>
        </div>
      </div>
      <div>
        <button className="btn" onClick={()=>onNavigate('projects')}>Set Sail — View Crew</button>
      </div>
    </header>
  )
}
