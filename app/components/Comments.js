export default async function Comments(promise) {
    try {
        const comments = await promise;
        const commetss = comments.promise;
        console.log("Comments received:", comments.promise);

        if (!Array.isArray(commetss)) {
            throw new Error("Comments is not an array");
        }

        return (
            <div className='mt-10'>
                <h1>Comments</h1>
                <ul>
                    {commetss?.map((comment) => (
                        <li className='mb-2' key={comment.id}>{comment.body}</li>
                    ))}
                </ul>
            </div>
        );
    } catch (error) {
        console.error("Error rendering Comments:", error);
        return <div>Error rendering comments</div>;
    }
}
