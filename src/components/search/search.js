import '../WebPage1.css';
import './search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
export default function Search()
{
    // const [showActive, setShowActive] = useState(false);
    // document.getElementById('#search').onclick = () =>
    // {
    //     if (showActive)
    //     {
    //         setShowActive(true) ;
    //     }
    //     else
    //     {
    //         setShowActive (false);
    //         }
       
    // }
    return (
        <>
            <form id="search-form" >
                <input type="search" placeholder='search here' name="" id="search-box" />
                <label ><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" id='search-icon'/>
                <FontAwesomeIcon icon="fa-solid fa-xmark"  id='close' /></label>
            </form>
        </>
    );
}