import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import car from '../../assets/images/car.png';
import doc from '../../assets/images/doc.png';
import './styles.less';

const Slider = () => {
    return (
        <div>
            <Carousel controls={false}>
                <Carousel.Item>
                    <div className="slide-content">
                        <div className="carousel-slide text">
                            <p className="slide-title">
                                Срочная доставка день в день
                            </p>
                            <p className="slide-subtitle">
                                Для тех, кто не может ждать, у нас есть услуга
                                cрочной курьерской доставки корреспонденции и
                                видов отправлений.
                            </p>
                            <button className="slide-button">
                                Заказать доставку
                            </button>
                        </div>
                        <div className="carousel-slide image">
                            <img className="car" src={car}></img>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="slide-content">
                        <div className="carousel-slide text">
                            <p className="slide-title">
                                Подписание договора за 1 час
                            </p>
                            <p className="slide-subtitle">
                                В течение часа наш курьер заберет вашу посылку и
                                подпишет с Вами<br></br> договор о
                                предоставлении услуг.
                            </p>
                            <button className="slide-button">
                                Заказать доставку
                            </button>
                        </div>
                        <div className="carousel-slide image">
                            <img className="doc" src={doc}></img>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;
