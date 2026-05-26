import React from 'react'

export default function DestructuringProps({name,age,city}) {
  return (
    <div className='destructure'>
      <h2>name:{name}</h2>
      <h2>age:{age}</h2>
      <h2>City:{city}</h2>
    </div>
  )
}