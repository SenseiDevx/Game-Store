import './App.css';
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import Header from "./components/Header/Header";
import OrderPage from "./pages/OrderPage/OrderPage";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route index element={<MainPage/>}/>
                <Route path="/about/:title" element={<AboutPage/>}/>
                <Route path="/order/" element={<OrderPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
