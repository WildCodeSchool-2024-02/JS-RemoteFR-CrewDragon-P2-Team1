
import { useMediaQuery } from "react-responsive";
import HeaderNavMobile from "./components/HeaderNavMobile";
import HeaderNavDesktop from "./components/HeaderNavDesktop";
import RecommandedList from "./components/RecommandedList";
import Footer from "./components/Footer";
import "./SectionPopular.scss";
import SectionPopular from "./components/SectionPopular";
import destination from "./data/cards";


function App() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 699px)" });
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 700px)" });

  return (
    <div>
      {isTabletOrMobile && <HeaderNavMobile />}
      {isDesktopOrLaptop && <HeaderNavDesktop />}
      <RecommandedList />
      <SectionPopular destination={destination} />
      <Footer />
    </div>
  );
}

export default App;
