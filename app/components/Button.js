"use client";
import React from 'react'

export default function Button() {
  return (
    <div><button onClick={()=>console.log("client site hite hoase")} className='btn px-4 py-1 bg-green-500 text-white text-lg'>Click Here</button></div>
  )
}
