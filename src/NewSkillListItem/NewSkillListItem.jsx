import React from 'react'
import './NewSkillListItem.css'

export default function NewSkillListItem({ skills, setSkills }) {
  return (
    <>
    <form className='NewSkillForm'>
    <div>NewSkillListItem</div>
    <label>Skill</label>
        <input></input>
    <label>Level</label>
    <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button type="submit">ADD SKILL</button>
    </form>
    </>
  )
}
