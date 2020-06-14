import React, { useState } from 'react'

export default function Exercise1() {
  // your code here
  const [name, setName] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')

  const countries = ['united states', 'china', 'united kingdom', 'australia']
  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 1</h4>
      <div className="exercise" id="ex-1">
        <input type="text" name="name" onChange={e => setName(e.target.value)} placeholder="name" value={name} />
        <input type="text" name="city" onChange={e => setCity(e.target.value)} placeholder="city" value={city} />
        <select name="" id="" onChange={e => setCountry(e.target.value)}>
          {countries.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>
    </div>
  )
}