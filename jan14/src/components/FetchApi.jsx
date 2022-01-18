import React, { useState, useEffect } from 'react'


function FetchApi() {

    const [posts, setPosts] = useState([]);

    let headers = new Headers();

    // headers.append('Origin','http://localhost:3000');
    headers.append('X-Content-Type-Options', 'nosniff');
    headers.append('Access-Control-Allow-Origin', '*');



    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('https://api.instantwebtools.net/v1/airlines',
                { headers: headers });
            const postsData = await response.json();
            console.log(postsData);
            setPosts(postsData);
        };
        fetchPosts();
    }, []);


    const usePosts = posts.map((post) => {
        return <div>
            <h3>{post.id}</h3>
            <h4>{post.name}</h4>
            <p>{post.country}</p>
            <img style={{ hight: "80px", width: "120px" }} key={post.logo} src={post.logo} />
            <p>{post.established}</p>
        </div>
    })

    return (
        <>
            <h1>Fetch API With UseState and UseEffect</h1>
            <h2>Dummy API - https://api.instantwebtools.net/v1/airlines </h2>
            <div className="container">
                {posts && usePosts}
            </div>

        </>
    );
}

export default FetchApi
