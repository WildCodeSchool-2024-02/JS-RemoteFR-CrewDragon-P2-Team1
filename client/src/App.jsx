import { Outlet } from "react-router-dom";

import Footer from "./components/Footer";

function App() {
  return (
    <div className="root">
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
