import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import "../css/editor.css";
const Editor = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  return (
    <>
      <div className="editor-wrapper">
        <h1 className="editor-heading">Rich Text Editor</h1>
        <div className="container">
          <div className="editor-section">
            <JoditEditor
              ref={editor}
              value={content}
              tabIndex={1} // tabIndex of textarea
              onChange={(newContent) => setContent(newContent)}
            />
          </div>
          <div className="display-content"> {content}</div>
        <div className="btn-section">
          <button onclick="handleSubmit"></button>
        </div>
        </div>
      </div>
    </>
  );
};

export default Editor;
