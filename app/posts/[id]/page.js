import getPost from "@/lib/getPost";


export default async function PostSingle({params}) {
    const {id} = params;
    const post = await getPost(id);
  return (
    <div className="bg-orange-300 text-black p-2">
        <h2>Single Page Post Id {post.id}</h2>
        <p>{post.title}</p>
        <p>{post.body}</p>
    </div>
  )
}
