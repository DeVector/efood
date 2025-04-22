import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { GlobalCss } from "./styles";

import Rotas from "./routes";
import Footer from "./components/Footer";
import store from "./components/store";
import Cart from "./components/Cart";
import Delivery from "./components/Delivery";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <Rotas />
        <Footer />
        <Cart />
        <Delivery />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
