
import HeaderNavMobile from "./components/HeaderNavMobile";
import RecommandedList from "./components/RecommandedList";
import Footer from "./components/Footer";
import "./SectionPopular.scss";
import SectionPopular from "./components/SectionPopular";
import destination from "./data/cards";


function App() {
  return (
    <div>
      <HeaderNavMobile />
      <RecommandedList />
      <SectionPopular destination={destination} />
      <Footer />
    </div>

  );
}

export default App;
