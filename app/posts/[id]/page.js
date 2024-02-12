import getPost from "@/lib/getPost";

export async function generateMetadata({ params, searchParams }, parent) {
  const {id} = params;
    const post = await getPost(id);
 
  return {
    title: post.title,
    description:post.body
  }
}
 

export default async function PostSingle({params}) {
    const {id} = params;
    const post = await getPost(id);

  return (
    <div className="bg-orange-300 mx-20 mt-10 text-black p-2">
        <h2>Single Page Post Id {post.id}</h2>
        <p className="text-xl font-semibold">{post.title}</p>
        <p>{post.body}</p>
    </div>
  )
}
