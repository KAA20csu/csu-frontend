import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.less';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from '../Slider';
import Header from '../../components/Header';
import logo from '../../assets/images/logo.png';
import phone from '../../assets/images/phone.png';

const Main = () => {
    const navigate = useNavigate();
    const navigateToAuth = () => {
        navigate('/auth');
    };
    return (
        <div className="main-page">
            <Header>
                <div className="header-content-inner-main">
                    <div className="header-content-inner-logo">
                        <img className="header-content-logo" src={logo}></img>
                    </div>
                    <div className="header-content-inner-title">
                        <span className="header-content-inner-title-sep">|</span>
                        <span className="header-content-inner-title-text">
                            Служба курьерской доставки
                        </span>
                    </div>
                </div>
                <div className="header-content-inner-right">
                    <div className="header-content-inner-phone">
                        <div className="header-content-inner-phone-logo">
                            <img
                                className="header-content-logo"
                                src={phone}
                            ></img>
                        </div>
                        <div className="header-content-inner-phone-title">
                            <span>8 (909) 023-12-51</span>
                        </div>
                    </div>
                    <div className="header-content-inner-auth">
                        <button onClick={navigateToAuth}>Вход</button>
                    </div>
                </div>
            </Header>
            <Slider></Slider>
            <footer></footer>
        </div>
    );
};

export default Main;
