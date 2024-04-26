import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import HomePage from "./Pages/HomePage/HomePage";
import Footer from "./Components/Footer/Footer";
import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop';
import CategoryPage from "./Pages/Category/CategoryPage";
import CategoryContainer from "./Components/Category/CategoryContainer";
import NewsContents from "./Components/News/NewsContents";
import AddCategory from "./Components/Admin/AddCategory";
import AddSubCategory from "./Components/Admin/AddSubCategory";
import AddNews from "./Components/Admin/AddNews";
import NotFoundPage from "./Pages/NotFoundPage";
import AdminLogin from "./Components/Admin/AdminLogin";
import AdminDashBoard from './Components/Admin/AdminDashBoard';
import AdminRegister from "./Components/Admin/AdminRegister";

    function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route index exact element={<HomePage/>}/>
                    <Route path="/admin/addCategory" element={<AddCategory/>}/>
                    <Route path="/admin/addSubCategory" element={<AddSubCategory/>}/>
                    <Route path="/admin/addNews" element={<AddNews/>}/>
                    <Route path="/admin/login" element={<AdminLogin/>}/>
                    <Route path="/admin/signUp" element={<AdminRegister/>}/>
                    <Route path="/admin/dashboard" element={<AdminDashBoard/>}/>
                    <Route path="/category/:id" element={<CategoryPage/>}/>
                    <Route path="/category/:cat/subcategory/:id" element={<CategoryContainer/>}/>
                    <Route path="/news/:id" element={<NewsContents />} />
                    <Route path="*" element={<NotFoundPage/>} />
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