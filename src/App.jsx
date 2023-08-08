import React from 'react'
import './App.css'
import SkillList from './SkillList'
import NewSkillListItem from './NewSkillListItem'

export default function App() {
  return (
    <>
    <h1>React Dev Skills</h1>

    <ul><SkillList></SkillList></ul>
    <hr></hr>
    <ul><NewSkillListItem></NewSkillListItem></ul>
    </>
  )
}