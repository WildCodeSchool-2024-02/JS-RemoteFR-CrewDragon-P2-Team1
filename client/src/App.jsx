import "./App.css";
import PopularCard from "./components/PopularCard";
import RecommendedCard from "./components/RecommendedCard";
import CardModal from "./components/CardModal";

const countryList = [
  {
    key: 0,
    name: "Mexique",
    src: "src/assets/images/Mexico.jpg",
    label: "???",
    text: "Le Mexique : culture vibrante, cuisine épicée, plages paradisiaques.",
    textDesktop:
      "Le Mexique, pays d'Amérique du Nord, est célèbre pour sa riche culture, sa cuisine épicée et ses sites archéologiques impressionnants, tels que les pyramides de Teotihuacan. Ses plages immaculées sur la Riviera Maya attirent les touristes du monde entier, tandis que ses villes colorées comme Mexico et Oaxaca captivent par leur histoire et leur dynamisme.",
  },
  {
    key: 1,
    name: "Japon",
    src: "",
    label: "???",
    text: "Le Japon : harmonie entre tradition et modernité, cuisine exquise, culture riche.",
    textDesktop:
      "Le Japon, pays insulaire d'Asie, allie tradition et modernité avec ses temples millénaires et ses quartiers ultramodernes. Sa cuisine raffinée, comme le sushi et le ramen, est célèbre dans le monde entier. La culture japonaise est marquée par son art délicat, ses jardins zen et sa fascination pour la technologie.",
  },
];

function App() {
  return (
    <>
      <PopularCard />
      <RecommendedCard />
      <CardModal countryList={countryList[0]} />
    </>
  );
}

export default App;
