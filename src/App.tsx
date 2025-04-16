import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="contaier">
        <h1>Viva experiências gastronômicas no conforto da sua casa</h1>
      </div>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/sobre" element={<div>Sobre</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
