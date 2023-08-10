import React from 'react';
import './NewSkillListItem.css';

export default function NewSkillListItem({ skill }) {
  return (
    <li className="SkillListItem">
      {skill.name} <div className="level">LEVEL {skill.level}</div>
    </li>
  );
}