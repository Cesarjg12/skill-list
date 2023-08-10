import React from 'react'
import './NewSkillListItem.css'

export default function NewSkillListItem({ skills, setSkills }) {
  return (
    <li className="SkillListItem">{skill.name} <div className="level">LEVEL {skill.level}</div></li>
  );
}
   
