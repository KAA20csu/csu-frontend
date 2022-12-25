import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.less';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from '../Slider';

import TablePage from '@Pages/TablePage';
import Footer from '@Pages/Footer';
import Header from '@Pages/Header';

const Main = () => {
    const navigate = useNavigate();
    const navigateToAuth = () => {
        navigate('/auth');
    };
    return (
        <div className="main-page">
            <Header></Header>
            <Slider></Slider>
            <TablePage></TablePage>
            <Footer></Footer>
        </div>
    );
};

export default Main;
