import React from 'react';
import './styles.less';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '@Pages/Footer';
import PostForm from '@Components/PostForm';
import Header from '@Pages/Header';

const AdminPanel = () => {
    return (
        <div className="admin-panel">
            <Header></Header>
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
