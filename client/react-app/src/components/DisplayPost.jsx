import { useEffect, useState } from "react"
import Post from "./Post"
const DisplayPost = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function getPosts() {
            let headersList = {
                "Accept": "*/*"
            }
            let response = await fetch("http://localhost:3000/getposts", {
                method: "GET",
                headers: headersList
            });

            let data = await response.json();
            return data
        }
        getPosts().then((res) => {
            setPosts(res)
        }).catch((err) => console.log(err))
    }, [posts])

    return (
        <>
            {
                posts.map((post) => {
                    return <Post key={post._id} title={post.title} description={post.description} likes={post.likes} id={post._id}/>
                })
            }

        </>
    )
}
export default DisplayPost