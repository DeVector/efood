import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Profile from "./pages/Profile"

const Rotas = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile/:tipo" element={<Profile />} />
        </Routes>
    )
}

export default Rotas
