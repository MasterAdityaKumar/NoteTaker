import { useEffect } from "react";
import "./App.css";
import DesktopView from "./view/DesktopView/DesktopView";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "./context/PocketContext";
import usePocketContext from "./hooks/usePocketContext";

function App() {
  // eslint-disable-next-line
  const { selected, setSelected } = usePocketContext();

  useEffect(() => {
    setSelected(localStorage.getItem("selected") || "");
    // eslint-disable-next-line
  }, []);

  return (
    <Provider>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<DesktopView />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
