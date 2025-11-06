import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import MapView from './components/MapView'
import Navbar from './components/Navbar'
import data from './data'
import FishBackground from './components/FishBackground'

export default function App(){
  const [selected, setSelected] = useState('home')
  const [collected, setCollected] = useState([])

  function toggleSkill(id){
    setCollected(prev => prev.includes(id) ? prev.filter(x=>x!==id) : [...prev, id])
  }

  return (
    <div className="min-h-screen flex flex-col">
      <FishBackground />
      <Navbar onNavigate={setSelected} selected={selected} />
      <main className="flex-1 p-6 max-w-6xl mx-auto w-full">
        <AnimatePresence mode="wait">
          <motion.div 
          key={selected}
          initial={{ opacity: 0, y: 40, scale: 0.98, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -40, scale: 0.98, filter: "blur(6px)" }}
          transition={{
            duration: 0.8,
            ease: [0.25, 1, 0.5, 1],
          }}
          className="transition-all duration-100">
            <MapView selected={selected} onNavigate={setSelected} collectedSkills={collected} onToggleSkill={toggleSkill} data={data} />
          </motion.div>
        </AnimatePresence>
      </main>
      <footer className="py-4 text-center text-sm text-gray-400">© {new Date().getFullYear()} Rustom Dewan — Captain of Code Pirates</footer>
    </div>
  )
}
