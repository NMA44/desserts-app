import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Section } from "./components/Section";
import { Cakes } from "./components/Cakes";
import { Favorite } from "./components/Favorite";
import { Chefs } from "./components/Chefs";
import { Footer } from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Section />
        <Cakes id="menu" />
        <Favorite />
        <Chefs id="staff" />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
