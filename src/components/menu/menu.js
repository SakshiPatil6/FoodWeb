import './menu.css';

import menu1 from '../images/menu1.jpeg';
import menu2 from '../images/menu2.jpg';
import menu3 from '../images/menu3.jpg';
import menu4 from '../images/menu4.avif';
import menu5 from '../images/menu5.jpg';
import menu6 from '../images/menu6.avif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Menu() {
    return (
        <section id='menu' className='menu'>
            <h3 className="subheading">Our menu</h3>
            <h1 className="heading">Today's speciality</h1>
            <div className='box-container'>
                <div className='boxMenu'>
                    <div className='imageMenu'>
                        <img src={menu6} alt='menu'></img>
                        <FontAwesomeIcon icon="fa-solid fa-heart" className='fa-heart'/>
                    </div>
                    <div className='contentMenu'>
                        <div className='stars'>

                            <FontAwesomeIcon icon="fa-solid fa-heart" />
                            <FontAwesomeIcon icon="fa-solid fa-heart" />
                            <FontAwesomeIcon icon="fa-solid fa-heart" />
                            <FontAwesomeIcon icon="fa-solid fa-heart" />
                            <FontAwesomeIcon icon="fa-regular fa-heart" />
                        </div>
                        <h3>delicious food</h3>
                        <p>Chicken wings are rich in protein as well as natural B vitamins, including B1-B6 and B12, as well as essential fat-soluble vitamins like A, D, K, and E. </p>
                        <button className='btn1'>Add To Cart</button>
                        <span className='price'>$12.99</span>
                    </div>
                </div>


                <div className='boxMenu'>
                    <div className='imageMenu'>
                        <img src={menu1} alt='menu'></img>
                        <FontAwesomeIcon icon="fa-solid fa-heart" />
                    </div>
                    <div className='contentMenu'>
                        <div className='stars'>

                            <FontAwesomeIcon icon="fa-solid fa-heart" />
                            <FontAwesomeIcon icon="fa-solid fa-heart" />
                            <FontAwesomeIcon icon="fa-solid fa-heart" />
                            <FontAwesomeIcon icon="fa-solid fa-heart" />
                            <FontAwesomeIcon icon="fa-regular fa-heart" />
                        </div>
                        <h3>delicious food</h3>
                        <p>Chicken wings are rich in protein as well as natural B vitamins, including B1-B6 and B12, as well as essential fat-soluble vitamins like A, D, K, and E. </p>
                        <button className='btn1'>Add To Cart</button>
                        <span className='price'>$12.99</span>
                    </div>
                </div>



                <div className='boxMenu'>
                    <div className='imageMenu'>
                        <img src={menu2} alt='menu'></img>
                        <FontAwesomeIcon icon="fa-solid fa-heart" />
                    </div>
                    <div className='contentMenu'>
                        <div className='stars'>

                            <FontAwesomeIcon icon="fa-solid fa-heart" />
                            <FontAwesomeIcon icon="fa-solid fa-heart" />
                            <FontAwesomeIcon icon="fa-solid fa-heart" />
                            <FontAwesomeIcon icon="fa-solid fa-heart" />
                            <FontAwesomeIcon icon="fa-regular fa-heart" />
                        </div>
                        <h3>delicious food</h3>
                        <p>Chicken wings are rich in protein as well as natural B vitamins, including B1-B6 and B12, as well as essential fat-soluble vitamins like A, D, K, and E. </p>
                        <button className='btn1'>Add To Cart</button>
                        <span className='price'>$12.99</span>
                    </div>
                </div>


                <div className='boxMenu'>
                    <div className='imageMenu'>
                        <img src={menu3} alt='menu'></img>
                        <FontAwesomeIcon icon="fa-solid fa-heart" />
                    </div>
                    <div className='contentMenu'>
                        <div className='stars'>

                            <FontAwesomeIcon icon="fa-solid fa-heart" />
                            <FontAwesomeIcon icon="fa-solid fa-heart" />
                            <FontAwesomeIcon icon="fa-solid fa-heart" />
                            <FontAwesomeIcon icon="fa-solid fa-heart" />
                            <FontAwesomeIcon icon="fa-regular fa-heart" />
                        </div>
                        <h3>delicious food</h3>
                        <p>Chicken wings are rich in protein as well as natural B vitamins, including B1-B6 and B12, as well as essential fat-soluble vitamins like A, D, K, and E. </p>
                        <button className='btn1'>Add To Cart</button>
                        <span className='price'>$12.99</span>
                    </div>
                </div>



                <div className='boxMenu'>
                    <div className='imageMenu'>
                        <img src={menu4} alt='menu'></img>
                        <FontAwesomeIcon icon="fa-solid fa-heart" />
                    </div>
                    <div className='contentMenu'>
                        <div className='stars'>

                            <FontAwesomeIcon icon="fa-solid fa-heart" />
                            <FontAwesomeIcon icon="fa-solid fa-heart" />
                            <FontAwesomeIcon icon="fa-solid fa-heart" />
                            <FontAwesomeIcon icon="fa-solid fa-heart" />
                            <FontAwesomeIcon icon="fa-regular fa-heart" />
                        </div>
                        <h3>delicious food</h3>
                        <p>Chicken wings are rich in protein as well as natural B vitamins, including B1-B6 and B12, as well as essential fat-soluble vitamins like A, D, K, and E. </p>
                        <button className='btn1'>Add To Cart</button>
                        <span className='price'>$12.99</span>
                    </div>
                </div>

                <div className='boxMenu'>
                    <div className='imageMenu'>
                        <img src={menu5} alt='menu'></img>
                        <FontAwesomeIcon icon="fa-solid fa-heart" />
                    </div>
                    <div className='contentMenu'>
                        <div className='stars'>

                            <FontAwesomeIcon icon="fa-solid fa-heart" />
                            <FontAwesomeIcon icon="fa-solid fa-heart" />
                            <FontAwesomeIcon icon="fa-solid fa-heart" />
                            <FontAwesomeIcon icon="fa-solid fa-heart" />
                            <FontAwesomeIcon icon="fa-regular fa-heart" />
                        </div>
                        <h3>delicious food</h3>
                        <p>Chicken wings are rich in protein as well as natural B vitamins, including B1-B6 and B12, as well as essential fat-soluble vitamins like A, D, K, and E. </p>
                        <button className='btn1'>Add To Cart</button>
                        <span className='price'>$12.99</span>
                    </div>
                </div>


            </div>
        </section>
    );
}