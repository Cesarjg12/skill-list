import React from 'react'
import './NewSkillForm.css'

export default function SkillList({ skills }) {
    return (
      <div className='NewSkillForms'>
        <h2>Skills List</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index} className='level'>
              {skill.name} Level {skill.level}
            </li>
          ))}
        </ul>
      </div>
    );
  }
