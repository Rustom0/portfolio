import React from 'react'

export default function ContactIsland({ contact, collectedSkills }){
  const locked = collectedSkills.length < 10
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gold">Treasure Island</h2>
      {locked ? (
        <div className="mt-3 text-gray-300">
          <p>The treasure chest is locked. Collect more Devil Fruits to reveal contact treasure.</p>
          <p className="mt-2">Progress: {collectedSkills.length}/10</p>
        </div>
      ) : (
        <div className="mt-3 text-gray-300">
          <p>You've unlocked the treasure! Here are my channels:</p>
          <ul className="mt-3 space-y-2">
            <li>Email: <a className="text-gold underline" href={`mailto:${contact.email}`}>{contact.email}</a></li>
            <li>GitHub: <a className="text-gold underline" href={contact.github} target="_blank" rel="noreferrer">{contact.github}</a></li>
            <li>LinkedIn: <a className="text-gold underline" href={contact.linkedin} target="_blank" rel="noreferrer">{contact.linkedin}</a></li>
          </ul>
        </div>
      )}
    </div>
  )
}
