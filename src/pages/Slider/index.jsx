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
                        <div className="slide-content__text">
                            <span className="slide-content__text__title">
                                Срочная доставка день в день
                            </span>
                            <span className="slide-content__text__subtitle">
                                Для тех, кто не может ждать, у нас есть услуга
                                cрочной курьерской доставки корреспонденции и
                                видов отправлений.
                            </span>
                            <button className="slide-content__text__button">
                                Заказать доставку
                            </button>
                        </div>
                        <div className="slide-content__image">
                            <img
                                className="slide-content__image__car"
                                src={car}
                            ></img>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="slide-content">
                        <div className="slide-content__text">
                            <span className="slide-content__text__title">
                                Подписание договора за 1 час
                            </span>
                            <span className="slide-content__text__subtitle">
                                В течение часа наш курьер заберет вашу посылку и
                                подпишет с Вами<br></br> договор о
                                предоставлении услуг.
                            </span>
                            <button className="slide-content__text__button">
                                Заказать доставку
                            </button>
                        </div>
                        <div className="slide-content__image">
                            <img
                                className="slide-content__image__doc"
                                src={doc}
                            ></img>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;
