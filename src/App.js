import { BrowserRouter, Routes, Route } from "react-router-dom";
import Editor from "./component/Editor";
import Post from "./component/Post";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Editor />}></Route>
          <Route exact path="/post" element={<Post />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
