import React from 'react'

export default function AboutIsland({ meta }){
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gold">My Journey</h2>
      <p className="mt-3 text-gray-300 max-w-2xl">{meta.about}</p>

      <div className="mt-6 grid gap-3">
        <div>
          <h4 className="font-semibold">Education</h4>
          <p className="text-sm text-gray-300">BSc. Computer Engineering — Cyprus West University</p>
        </div>
        <div>
          <h4 className="font-semibold">Languages</h4>
          <p className="text-sm text-gray-300">Nepali, Turkish, English, Hindi, Urdu</p>
        </div>
        <div>
          <h4 className="font-semibold">Work</h4>
          <p className="text-sm text-gray-300">Worked in a restaurant — experience in teamwork and guest communication.</p>
          <p className="text-sm text-gray-300 mt-1">
          CarbonTech Intern — Built and connected real-world APIs, improving app performance and user experience.
          </p>
          <p className="text-sm text-gray-300 mt-1">
            Completed practical projects from Frontend Mentor to strengthen real-world development skills.
          </p>
        </div>
      </div>
    </div>
  )
}
