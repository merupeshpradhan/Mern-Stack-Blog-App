import { Route, Routes } from "react-router-dom";
import Header from "./components/header/index.jsx";
import Home from "./pages/home/index.jsx";
import AddNewBlog from "./pages/add-blog/index.jsx";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/add-blog" element={<AddNewBlog />} />
      </Routes>
    </div>
  );
}

export default App;
