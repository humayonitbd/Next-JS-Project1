import Link from 'next/link'
import React from 'react'

export default function Aboutlayout({children}) {
  return (
    <div>
        <nav className='mt-6'><ul className="flex gap-6">
            <li> <Link href="/about/mission">Mission</Link></li>
            <li> <Link href="/about/vission">Vission</Link></li>
            <li> <Link href="/">Service</Link></li>
          </ul></nav> 
        <hr />
        {children}
        </div>
  )
}
