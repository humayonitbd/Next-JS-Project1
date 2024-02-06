

export default function Blogs() {
  const blogs = [
    {
      title:"Blog 1",
      description:"Blog 1 Description"
    },
    {
      title:"Blog 2",
      description:"Blog 2 Description"
    },
    {
      title:"Blog 3",
      description:"Blog 3 Description"
    },
  ]
  return (
    <main className="my-10">
      <div className="text-center text-2xl">Blogs</div>
      <div className="grid md:grid-cols-3 grid-cols-1 mt-10 gap-10 mx-10">
        {
          blogs.map(blog => <div className="bg-blue-400 p-3 text-white" key={blog.title}>
            <h2>{blog.title}</h2>
            <p>{blog.description}</p>
          </div>)
        }
      </div>
    </main>
  );
}
