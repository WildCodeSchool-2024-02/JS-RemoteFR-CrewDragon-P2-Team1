import "./App.css";
import PopularCard from "./components/PopularCard";
import RecommendedCard from "./components/RecommendedCard";
import CardModal from "./components/CardModal";

const countryData = {
  key: 0,
  name: "Mexique",
  src: "src/assets/images/Mexico.jpg",
  label: "???",
  text: "Le Mexique : culture vibrante, cuisine épicée, plages paradisiaques.",
  textDesktop:
    "Le Mexique, pays d'Amérique du Nord, est célèbre pour sa riche culture, sa cuisine épicée et ses sites archéologiques impressionnants, tels que les pyramides de Teotihuacan. Ses plages immaculées sur la Riviera Maya attirent les touristes du monde entier, tandis que ses villes colorées comme Mexico et Oaxaca captivent par leur histoire et leur dynamisme.",
};

function App() {
  return (
    <>
      <PopularCard />
      <RecommendedCard />
      <CardModal destination={countryData} />
    </>
  );
}

export default App;
