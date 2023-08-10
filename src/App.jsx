import React, {useState} from 'react'
import './App.css'
import SkillList from './SkillList'
import NewSkillForm from './NewSkillForm'

export default function App() {
const initialSkills= [
  { name: "HTML", level: 5 },
  { name: "CSS", level: 3 },
  { name: "JavaScript", level: 4 },
  { name: "Python", level: 2 },
];

const [skills, setSkills] = useState(initialSkills);

return (
    <div className='App'>
    <h1>React Dev Skills</h1>
    <SkillList skills={skills} />
    <br></br>
    <NewSkillForm skills={skills} setSkills={setSkills} />
    </div>
  );
}