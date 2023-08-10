import React, { useState } from 'react';
import './NewSkillForm.css'

export default function NewSkillForm({ skills, setSkills }) {
    const [formData, setFormData] = useState({
      name: '',
      level: 3,
    });
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      if (formData.name.trim() !== '') {
        setSkills((prevSkills) => [
          ...prevSkills,
          { name: formData.name, level: parseInt(formData.level) },
        ]);
  
        setFormData({
          name: '',
          level: 3,
        });
      }
    };
  
    return (
      <form onSubmit={handleSubmit} className="NewSkillForm">
        <label htmlFor="input">Skill</label>
        <input
          type="text"
          id="input"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <label htmlFor="select">Level</label>
        <select
          id="select"
          name="level"
          value={formData.level}
          onChange={handleInputChange}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <button type="submit">ADD SKILL</button>
      </form>
    );
  }