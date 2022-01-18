
import React, { useState, useEffect } from 'react';

import axios from 'axios'

function AxiosCall() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const axiosPosts = async () => {
      const response = await axios('https://reqres.in/api/users/');
      // https://jsonplaceholder.typicode.com/users
      // const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      console.log(response.data);
      setPosts(response.data.data);  //for reqres rest api
      // setPosts(response.data)  // its for jsonplaceholder.typicode.com/users
    };
    axiosPosts();
  }, []);

  const useaxiosPosts = posts.map((post) => {
    return (
      <div key={post.id}>
        <h4><strong>{post.first_name}</strong></h4>
        <p>Email : {post.email}</p>
        <img style={{ hight: "80px", width: "120px" }} key={post.avatar} src={post.avatar} />
      </div>
    );
  })
  console.log(posts)
  return (
    <>
      <h1>Axios With UseState and UseEffect</h1>
      <h2>Dummy API  - https://reqres.in/api/users/ </h2>
      <div className="axioscontainer">
        {posts && useaxiosPosts}
      </div>
    </>
  );
}

export default AxiosCall
