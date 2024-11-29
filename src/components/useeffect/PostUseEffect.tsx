import { wait } from "@testing-library/user-event/dist/utils";
import React, {useEffect, useState} from "react";

interface Post{
    id:number,
    title: string,
    body: string
}

const PostUseEffect:React.FC = () => {
    const [posts, setPost] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(()=>{
        let isMounted = true;
        
        const fetchPost = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data: Post[] = await response.json();
                if(isMounted){
                    setPost(data);
                    setLoading(false);
                }
            } catch (error) {
                console.error("Error fetching post:", error);
            }
        }

        fetchPost();

        return () => {
            isMounted = false;
        }

    },[]);

  return (
    <div>
        <h2>Tesing UseEffect Hook</h2>
        {
        loading 
            ? (<p>Loading ...</p>)
            : (
                <ul>
                    {
                        posts.map( (post) => {
                            return(
                                <li key={post.id}>
                                    <h3>{post.title}</h3>
                                    <p>{post.body}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            )
        }
    </div>);
}

export default PostUseEffect;
