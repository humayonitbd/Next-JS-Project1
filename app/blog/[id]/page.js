import { notFound } from 'next/navigation';
import React from 'react'

export default function BlogPage({params}) {
    const {id} = params;
    if(id === '4'){
        notFound();
    }
  return (
    <div>The Blog id is {id}</div>
  )
}
