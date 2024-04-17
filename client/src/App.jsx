import { useState } from "react";
import { useMediaQuery } from "react-responsive";

import HeaderNavMobile from "./components/HeaderNavMobile";
import HeaderNavDesktop from "./components/HeaderNavDesktop";
import RecommandedList from "./components/RecommandedList";
import Footer from "./components/Footer";
import SectionPopular from "./components/SectionPopular";
import CardModal from "./components/CardModal";

import destination from "./data/cards";

import "./SectionPopular.scss";

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
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 699px)" });
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 700px)" });
  const [cardModalOpen, setCardModalOpen] = useState(false);

  return (
    <div>
      {isTabletOrMobile && <HeaderNavMobile />}
      {isDesktopOrLaptop && <HeaderNavDesktop />}
      <RecommandedList />
      <SectionPopular destination={destination} />
      <button type="button" onClick={() => setCardModalOpen(true)}>
        Popular
      </button>
      <button type="button" onClick={() => setCardModalOpen(true)}>
        Recommended
      </button>
      {cardModalOpen && <CardModal countryList={countryList[0]} />}
      <Footer />
    </div>
  );
}

export default App;
