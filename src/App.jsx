import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import SingleArticlePage from "./components/SingleArticlePage";
import Footer from "./components/Footer"
import BackToTopButton from "./components/BackToTopButton";

function App() {
  return (
    <>
      <Header />
      <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/articles/:article_id" element={<SingleArticlePage />} />
      </Routes>
      </main>
      <BackToTopButton />
  <Footer />
    </>
  );
}
export default App;