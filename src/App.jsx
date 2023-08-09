import React from 'react'
import './App.css'
import './NewSkillForm.css'
import './NewSkillListItem.css'
import SkillList from './SkillList'
import NewSkillListItem from './NewSkillListItem'

const skills = [
  { name: "HTML", level: 5 },
  { name: "CSS", level: 3 },
  { name: "JavaScript", level: 4 },
  { name: "Python", level: 2 },
];

export default function App() {
  return (
    <>
    <h1>React Dev Skills</h1>

    <SkillList skills={skills} />
    <hr></hr>
    <ul><NewSkillListItem></NewSkillListItem></ul>
    </>
  )
}