import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.less';
import 'bootstrap/dist/css/bootstrap.min.css';

import TablePage from '@Pages/TablePage';
import Footer from '@Pages/Footer';
import Header from '@Pages/Header';
import Slider from '@Components/Slider/Slider';
import car from '../../assets/images/car.png';
import doc from '../../assets/images/doc.png';

const Main = () => {
    const navigate = useNavigate();
    const navigateToAuth = () => {
        navigate('/auth');
    };
    let slides = [
        {
            image: car,
            title: 'Срочная доставка день в день',
            description:
                'Для тех, кто не может ждать у нас есть услуга срочной курьерской доставки корреспондеции и других видов отправлений.',
        },
        {
            image: doc,
            title: 'Подписание договора за 1 час',
            description:
                'В течение часа наш курьер заберет вашу посылку и подпишет с Вами договор о предоставлении услуг.',
        },
    ];
    return (
        <div className="main-page">
            <Header></Header>
            <Slider autoPlay={true} autoPlayTime={7000} allSlides={slides} />
            <TablePage></TablePage>
            <Footer></Footer>
        </div>
    );
};

export default Main;
