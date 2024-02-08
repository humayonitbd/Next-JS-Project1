import getAllPosts from '@/lib/getAllPosts'
import React from 'react'

export default async function Posts() {

    const posts = await getAllPosts();
    console.log("posts",posts);


  return (
    <div className='mt-10'>
        <h1 className='mb-5'>All Posts</h1>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-5'>
            {
                posts.map(post => <><div key={post.id} className='bg-green-500 text-white p-2 '>
                    <h1 className='text-xl font-semibold text-red-600'>{post.title}</h1>
                    <p>{post.body}</p>
                    </div></>)
            }
        </div>
    </div>
  )
}
