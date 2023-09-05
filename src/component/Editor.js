import React, { useState } from "react";
import JoditEditor from "jodit-react";
import "../css/editor.css";
import axios from "axios";
import { Link } from "react-router-dom";
const Editor = () => {
  const [content, setContent] = useState("");
  const handleSubmit = () => {
    axios.post("http://localhost:5000/post", content);
    setContent("")
  };

  return (
    <>
      <div className="editor-wrapper">
        <h1 className="editor-heading">Rich Text Editor</h1>
        <div className="container">
          <div className="editor-section">
            <JoditEditor
              value={content}
              tabIndex={1} // tabIndex of textarea
              onChange={(newContent) => setContent(newContent)}
            />
          </div>
          <div className="display-content"> {content}</div>
          <div className="btn-section">
            <button onClick={handleSubmit}>Submit</button>
            <Link to="/post">Go to Post</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Editor;
