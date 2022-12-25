import React from 'react';
import { useNavigate } from 'react-router-dom';

import './styles.less';
import logo from '../../assets/images/logo.png';
import phone from '../../assets/images/phone.png';

const Header = () => {
    const navigate = useNavigate();
    const navigateToAuth = () => {
        navigate('/auth');
    };
    return (
        <div className="header-content">
            <div className="header-content__inner-main">
                <div className="header-content__inner-main__logo">
                    <img className="header-content-logo" src={logo}></img>
                </div>
                <div className="header-content__inner-main__title">
                    <span className="header-content__inner-main__title-sep">
                        |
                    </span>
                    <span className="header-content__inner-main__title-text">
                        Служба курьерской доставки
                    </span>
                </div>
            </div>
            <div className="header-content__inner-right">
                <div className="header-content__inner-right__phone">
                    <div className="header-content__inner-right__phone-logo">
                        <img className="header-content-logo" src={phone}></img>
                    </div>
                    <div className="header-content__inner-right__phone-title">
                        <span>8 (909) 023-12-51</span>
                    </div>
                </div>
                <div className="header-content__inner-right__auth">
                    <button onClick={navigateToAuth}>Вход</button>
                </div>
            </div>
        </div>
    );
};

export default Header;
