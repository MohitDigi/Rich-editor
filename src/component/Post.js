import axios from "axios";
import React, { useEffect, useState } from "react";
import "../css/post.css";
import { Link } from "react-router-dom";

const Post = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/post")
      .then((response) => setData(response.data));
    console.log(data);
  }, []);
  return (
    <>
      <div className="post-container">
        {!data.length ? (
          <>loading...</>
        ) : (
          data.map((post, key) => (
            <>
              <div className="post-wrapper">
                <div className="post-heading"> Post {key + 1}</div>
                <div
                  className="post"
                  key={key}
                  dangerouslySetInnerHTML={{ __html: post.data }}
                ></div>
              </div>
            </>
          ))
        )}
      </div>
      <div className="back-btn">
        <Link to={"/"}>Back to Editor</Link>
      </div>
    </>
  );
};

export default Post;
