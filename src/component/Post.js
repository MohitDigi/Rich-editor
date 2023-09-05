import axios from "axios";
import React, { useEffect, useState } from "react";
import "../css/post.css"

const Post = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const res = axios
      .get("http://localhost:5000/post")
      .then((response) => setData(response.data));
    console.log(data);
  }, []);
  return (
    <div>
      {!data.length ? (
        <>loading...</>
      ) : (
        data.map((post, key) => (
            <div className="post"
              key={key}
              dangerouslySetInnerHTML={{ __html: post.data }}
            ></div>
        ))
      )}
    </div>
  );
};

export default Post;
