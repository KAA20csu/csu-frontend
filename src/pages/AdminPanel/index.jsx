import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.less';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../components/Header';
import Footer from '@Pages/Footer';
import logo from '../../assets/images/logo.png';
import phone from '../../assets/images/phone.png';
import PostForm from '@Components/PostForm';

const AdminPanel = () => {
    const navigate = useNavigate();
    const navigateToAuth = () => {
        navigate('/auth');
    };
    const navigateToMain = () => {
        navigate('/auth');
    };
    return (
        <div className="admin-panel">
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
            <PostForm
                title="Добавить новость"
                description="Введите текст новости, а также приложите изображение (размер: 270х270px)"
                placeholder="Введите текст новости"
            ></PostForm>
            <Footer></Footer>
        </div>
    );
};

export default AdminPanel;
