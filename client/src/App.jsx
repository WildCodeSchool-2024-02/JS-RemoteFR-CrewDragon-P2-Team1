import HeaderNavMobile from "./components/HeaderNavMobile";
import RecommandedList from "./components/RecommandedList";
import Footer from "./components/Footer";
import PopularList from "./components/PopularList";
import destination from "./data/cards";

function App() {
  return (
    <div>
      <HeaderNavMobile />
      <RecommandedList />
      <PopularList destination={destination} />
      <Footer />
    </div>
  );
}

export default App;
