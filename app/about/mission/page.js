
import Button from '@/app/components/Button';
import Image from 'next/image';
import React from 'react'
import thum from '@/public/Images/tree-img.jpg'

export default function Mission() {
  
  return (
    <div>
      <h2>Misson Page</h2>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus in libero ullam voluptates blanditiis quo earum, ipsam reiciendis magni. Sint nostrum a, commodi laborum doloribus corporis quo quidem numquam quia.</div>
      <Image placeholder="blur" src={thum}  alt='thum image'/>
      <Button />
    </div>
  )
}
