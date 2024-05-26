import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './dishes.css'
import fries from '../images/fries.avif';
import burger from '../images/burger.jpg';
import brownie from '../images/brownie.jpg';
import chicken from '../images/chick.jpg';
import coffee from '../images/coffee.jpg';
import ice from '../images/icecream.jpg';
//import { Link } from 'react-router-dom';
export default function Dishes() {
    return (
        <>
            <section className="dishes" id="dishes">
                <h3 className="subheading">Our Dishes</h3>
                <h1 className="heading">Popular Dishes</h1>
                
                <div className="Dishes-box-container">
                    <div className="box">
                        <FontAwesomeIcon icon="fa-regular fa-heart" className='heart'/>
                        <FontAwesomeIcon icon="fa-regular fa-eye" className='eye'/>
                        <img src={burger} alt='' className='imagedish'/>
                        <h3>Burger</h3>
                        <div className='stars'>
                            <FontAwesomeIcon icon="fa-solid fa-star" />
                            <FontAwesomeIcon icon="fa-solid fa-star" />
                            <FontAwesomeIcon icon="fa-solid fa-star" />
                            <FontAwesomeIcon icon="fa-solid fa-star" />
                            <FontAwesomeIcon icon="fa-regular fa-star" />
                        </div>
                        <span>$15.99</span>
                        <button className='btn1'>Add to cart</button>
                    </div>

                    <div className="box">
                        <FontAwesomeIcon icon="fa-regular fa-heart" className='heart'/>
                        <FontAwesomeIcon icon="fa-regular fa-eye" className='eye'/>
                        <img src={fries} alt='' className='imagedish'/>
                        <h3>French Fries</h3>
                        <div className='stars'>
                            <FontAwesomeIcon icon="fa-solid fa-star" />
                            <FontAwesomeIcon icon="fa-solid fa-star" />
                            <FontAwesomeIcon icon="fa-solid fa-star" />
                            <FontAwesomeIcon icon="fa-solid fa-star" />
                            <FontAwesomeIcon icon="fa-solid fa-star" />
                        </div>
                        <span>$15.99</span>
                        <button className='btn1'>Add to cart</button>
                    </div>

                    <div className="box">
                        <FontAwesomeIcon icon="fa-regular fa-heart" className='heart'/>
                        <FontAwesomeIcon icon="fa-regular fa-eye" className='eye'/>
                        <img src={brownie} alt='' className='imagedish' />
                        <h3>Brownie</h3>
                        <div className='stars'>
                            <FontAwesomeIcon icon="fa-solid fa-star" />
                            <FontAwesomeIcon icon="fa-solid fa-star" />
                            <FontAwesomeIcon icon="fa-solid fa-star" />
                            <FontAwesomeIcon icon="fa-regular fa-star" />
                            <FontAwesomeIcon icon="fa-regular fa-star" />
                        </div>
                        <span>$15.99</span>
                        <button className='btn1'>Add to cart</button>
                    </div>


                    <div className="box">
                        <FontAwesomeIcon icon="fa-regular fa-heart" className='heart'/>
                        <FontAwesomeIcon icon="fa-regular fa-eye" className='eye'/>
                        <img src={ice} alt='' className='imagedish'/>
                        <h3>Ice Cream</h3>
                        <div className='stars'>
                            <FontAwesomeIcon icon="fa-solid fa-star" />
                            <FontAwesomeIcon icon="fa-solid fa-star" />
                            <FontAwesomeIcon icon="fa-regular fa-star" />
                            <FontAwesomeIcon icon="fa-regular fa-star" />
                            <FontAwesomeIcon icon="fa-regular fa-star" />
                        </div>
                        <span>$15.99</span>
                        <button className='btn1'>Add to cart</button>
                    </div>

                    <div className="box">
                        <FontAwesomeIcon icon="fa-regular fa-heart" className='heart'/>
                        <FontAwesomeIcon icon="fa-regular fa-eye" className='eye'/>
                        <img src={coffee} alt='' className='imagedish'/>
                        <h3>Cold Coffee</h3>
                        <div className='stars'>
                            <FontAwesomeIcon icon="fa-solid fa-star" />
                            <FontAwesomeIcon icon="fa-solid fa-star" />
                            <FontAwesomeIcon icon="fa-solid fa-star" />
                            <FontAwesomeIcon icon="fa-solid fa-star" />
                            <FontAwesomeIcon icon="fa-regular fa-star" />
                        </div>
                        <span>$15.99</span>
                        <button className='btn1'>Add to cart</button>
                    </div>

                    <div className="box">
                        <FontAwesomeIcon icon="fa-regular fa-heart" className='heart'/>
                        <FontAwesomeIcon icon="fa-regular fa-eye" className='eye'/>
                        <img src={chicken} alt='' className='imagedish'/>
                        <h3>Chicken Wings</h3>
                        <div className='stars'>
                            <FontAwesomeIcon icon="fa-solid fa-star" />
                            <FontAwesomeIcon icon="fa-solid fa-star" />
                            <FontAwesomeIcon icon="fa-solid fa-star" />
                            <FontAwesomeIcon icon="fa-regular fa-star" />
                            <FontAwesomeIcon icon="fa-regular fa-star" />
                        </div>
                        <span>$15.99</span>
                        <button className='btn1'>Add to cart</button>
                    </div>
                </div>
            </section>
        </>
    );
}