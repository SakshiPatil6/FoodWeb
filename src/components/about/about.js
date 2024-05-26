import img from '../images/about.jpg';
import './about.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function About() {
    return (
        <>
            <section className="about" id="about">
                <h3 className="subheading">about us</h3>
                <h1 className="heading">why choose us?</h1>
                <div className="row">
                    <div className="imageAbout">
                        <img src={img} alt='ABoutImage'></img>
                    </div>
                    <div className="contentAbout">
                        <h3>Best food in maharashtra</h3>
                        <p>Food is the substance we eat every day for energy and strength. There are many different types of food, such as fruits, vegetables, rice, and pasta. We need to eat a variety of foods to get all the essential nutrients the body needs. Not eating a healthy and balanced diet leads to weakness and deficiency diseases.
                        </p>
                        <div className='icons-container'>
                            <div className='iconsAbout'>
                                <FontAwesomeIcon className="i" icon="fa-solid fa-truck-fast" />
                                <span>Free Delivery</span>
                            </div>
                            <div className='iconsAbout'>
                                <FontAwesomeIcon
                                className="i"    icon="fa-solid fa-dollar-sign" />
                                <span>Easy Payments</span>
                            </div>
                            <div className='iconsAbout'>
                                <FontAwesomeIcon
                                className="i"    icon="fa-brands fa-servicestack" />
                                <span>24/7 services</span>
                            </div>
                        </div>
                        <button href='#' className='btn1'>Learn more</button>
                    </div>
                </div>
            </section>
        </>
    );
}