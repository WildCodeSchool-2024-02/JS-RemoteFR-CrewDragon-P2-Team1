import { useMediaQuery } from "react-responsive";
import HeaderNavMobile from "./components/HeaderNavMobile";
import HeaderNavDesktop from "./components/HeaderNavDesktop";

function App() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 699px)" });
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 700px)" });

  return (
    <div>
      {isTabletOrMobile && <HeaderNavMobile />}
      {isDesktopOrLaptop && <HeaderNavDesktop />}
    </div>
  );
}

export default App;
