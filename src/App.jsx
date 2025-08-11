import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import SingleArticlePage from "./components/SingleArticlePage";

function App() {
  return (
    <>
      <Header />
      <SingleArticlePage />
{/*       <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/articles/:article_id" element={<SingleArticlePage />} />
      </Routes> */}
    </>
  );
}
export default App;