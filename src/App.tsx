import { BrowserRouter } from "react-router-dom";
import Rotas from "./routes";
import { GlobalCss } from "./styles";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Header />
      <Rotas />
    </BrowserRouter>
  );
}

export default App;
