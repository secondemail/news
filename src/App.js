import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import HomePage from "./Pages/HomePage/HomePage";
import Footer from "./Components/Footer/Footer";
import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop';
import CategoryPage from "./Pages/Category/CategoryPage";
import CategoryContainer from "./Components/Category/CategoryContainer";
import NewsContents from "./Components/News/NewsContents";

    function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route index element={<HomePage/>}/>
                    <Route path="/:id" element={<CategoryPage/>}/>
                    <Route path="/:cat/:subcat" element={<CategoryContainer/>}/>
                    <Route path="/news/:news" element={<NewsContents/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
            <a className="toTop" href="#top">
                <VerticalAlignTopIcon fontSize="large"/>
            </a>
        </div>
    );
    }

    export default App;