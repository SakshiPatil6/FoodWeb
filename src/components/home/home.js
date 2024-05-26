import pizza from '../images/pizzaa.jpg';
import noodles from '../images/noodles.jpg'
import chicken from '../images/chicken.avif';
import './home.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


export default function Home() {
    return (
        <>
            <div className="homePage" id="homePage">
                <div className=" HomeSilder">
                    <div className="HomeWrapper">


                        <Swiper
                            //spaceBetween={30}
                            //centeredSlides={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper"
                        >

                            <SwiperSlide>
                                <div className="slide">
                                    <div className="HomeContent">
                                        <span>our special dish</span>
                                        <h3>Sizzling Pizza</h3>
                                        <p>Spicy Noodles eat chinese noodles Spicy Noodles eat chinese noodles</p>
                                        <button className="btn1">Order Now</button>
                                    </div>
                                    <div className="HomeImage">
                                        <img src={pizza} alt="Food" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="slide">
                                    <div className="HomeContent">
                                        <span>our special dish</span>
                                        <h3>Spicy Noodles</h3>
                                        <p>Spicy Noodles eat chinese noodles Spicy Noodles eat chinese noodles</p>
                                        <button className="btn1">Order Now</button>
                                    </div>
                                    <div className="HomeImage">
                                        <img src={noodles} alt="Food" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="slide">
                                    <div className="HomeContent">
                                        <span>our special dish</span>
                                        <h3>Chicken Wings</h3>
                                        <p>Spicy Noodles eat chinese noodles Spicy Noodles eat chinese noodles</p>
                                        <button className="btn1">Order Now</button>
                                    </div>
                                    <div className="HomeImage">
                                        <img src={chicken} alt="Food" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>

                    </div>
                </div>
            </div>
        </>
    );
}