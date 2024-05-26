import Navbar from './navbar/navbar';
import Search from './search/search';
import './WebPage1.css';
import Home from './home/home';
import Dishes from './dishes/dishes';
import About from './about/about';
import Menu from './menu/menu';
import Orders from './order/orders';
export default function WebPage1() {

    return (
        <>
            <Navbar menu1="Home" menu2="Dishes" menu3="About" menu4="Menu" menu5="Orders"/>
            <Search />
            <Home />
            <Dishes />
            <About />
            <Menu />
            <Orders/>
        </>
    );
}
