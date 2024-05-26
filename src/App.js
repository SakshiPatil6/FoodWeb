
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home';
import Login from './components/login/Login';
import Signup from "./components/login/signup";
import Page1 from "./Page1";
import Browse from "./components/browse/Browse";
import WebPage1 from "./components/WebPage";
import { library } from '@fortawesome/fontawesome-svg-core'
import Navbar from './components/navbar/navbar'
import Search from "./components/search/search";
import HomeWeb from "./components/home/home";
import Dishes from './components/dishes/dishes';
import About from "./components/about/about";
import Menu from "./components/menu/menu";
import Orders from "./components/order/orders";

// import your icons
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

function App() {

  return (
    <>
      <BrowserRouter>
      {/* <Navbar /> */}
        <Routes>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/Signup' element={<Signup />}></Route>
          <Route path="/Page1" element={<Page1 />}></Route>
          <Route path="/browse" element={<Browse />}></Route>
          <Route path="/" element={<WebPage1 />}></Route>
          <Route path="/navbar" element={<Navbar />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/home" element={<HomeWeb />}></Route>
          <Route path="/Dishes" element={<Dishes />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/orders" element={<Orders/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
library.add(fab, fas, far)
