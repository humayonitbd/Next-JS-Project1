import getPost from "@/lib/getPost";


export default async function PostSingle({params}) {
    const {id} = params;
    const post = await getPost(id);
  return (
    <div>
        <h2>Single Page Post Id {post.id}</h2>
        <p>{post.title}</p>
    </div>
  )
}
