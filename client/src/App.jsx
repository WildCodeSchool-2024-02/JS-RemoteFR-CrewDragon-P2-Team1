import "./App.css";
import PopularCard from "./components/PopularCard";
import RecommendedCard from "./components/RecommendedCard";
import CardModal from "./components/CardModal";

function App() {
  return (
    <>
      <PopularCard />
      <RecommendedCard />
      <CardModal />
    </>
  );
}

export default App;
