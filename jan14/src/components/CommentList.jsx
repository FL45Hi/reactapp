import axios from "axios";
import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/comments";

function CommentList() {
    const [post, setPost] = React.useState(null);

    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        // invalid url will trigger an 404 error
        axios
            .get(`${baseURL}/`).then((response) => {
                setPost(response.data);
            })
            .catch(error => {
                setError(error);
            });
    }, []);

    // React.useEffect(() => {
    //     axios
    //         .get(`${baseURL}/asdf`).then((response) => {
    //             setPost(response.data);
    //         })
    //         .catch(error => {
    //             setError(error);
    //         });
    // }, []);

    // About get method will trigger 404 error and show msg : "Error: Request failed with status code 404"

    function createPost() {
        axios
            .post(baseURL, {
                title: "Hello World!",
                body: "This is a new post."
            })
            .then((response) => {
                setPost(response.data);
            });
    }

    function updatePost() {
        axios
            .put(`${baseURL}/1`, {
                title: "Hello World!",
                body: "This is an updated post."
            })
            .then((response) => {
                setPost(response.data);
            });
    }

    function deletePost() {
        axios
            .delete(`${baseURL}/1`)
            .then(() => {
                alert("Post deleted!");
                setPost(null)
            });
    }

    function ListComment() {
        return (
            <>
            <h4>List of Comments</h4>

            {
                post.length ?
                    post.map(comment => <div key={comment.id}>
                        <p>{comment.email}</p><p>{comment.body}</p>
                    </div>)
                    :
                    null
            }

            </>
        )
    }


    if (error) return `Error: ${error.message}`;
    if (!post) return "No post!"

    console.log(post)

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <button onClick={createPost}>Create Post</button>
            <button onClick={updatePost}>Update Post</button>

            <button onClick={deletePost}>Delete Post</button>

            <h4>List of Comments</h4>

            {
                post.length ?
                    post.map(comment => <div key={comment.id}>
                        <p>{comment.email}</p><p>{comment.body}</p>
                    </div>)
                    :
                    null
            }
        </div>
    );


}

export default CommentList







