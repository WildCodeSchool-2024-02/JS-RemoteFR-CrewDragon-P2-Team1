import "./SectionPopular.scss";
import SectionPopular from "./components/SectionPopular";
import destination from "./data/cards";

function App() {
  return (
    <article>
      <h1 className="titre">Populaires</h1>
      <SectionPopular destination={destination} />
    </article>
  );
}

export default App;
