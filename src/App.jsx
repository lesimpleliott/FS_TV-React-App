import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./assets/pages/Home";
import Favorite from "./assets/pages/Favorite";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/favorite" element={<Favorite />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
