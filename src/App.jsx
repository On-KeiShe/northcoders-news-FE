import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import SingleArticlePage from "./components/SingleArticlePage";
import Footer from "./components/Footer"
import BackToTopButton from "./components/BackToTopButton";
import TopicsPage from "./components/TopicsPage"
import TopicArticlesPage from "./components/TopicArticlePage";

function App() {
  return (
    <>
      <Header />
      <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/articles/:article_id" element={<SingleArticlePage />} />
        <Route path="/topics" element={<TopicsPage />} />
        <Route path="/topics/:topic" element={<TopicArticlesPage />} /> 
      </Routes>
      </main>
      <BackToTopButton />
  <Footer />
    </>
  );
}
export default App;