import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './styles.less';

const Auth = () => {
    const navigate = useNavigate();
    const navigateToMain = () => {
        navigate('/');
    };
    return (
        <form className="auth-form">
            <button onClick={navigateToMain} className="close">
                <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M13 0.25C5.9875 0.25 0.25 5.9875 0.25 13C0.25 20.0125 5.9875 25.75 13 25.75C20.0125 25.75 25.75 20.0125 25.75 13C25.75 5.9875 20.0125 0.25 13 0.25ZM18.5781 16.3469L16.3469 18.5781L13 15.2313L9.65313 18.5781L7.42188 16.3469L10.7687 13L7.42188 9.65313L9.65313 7.42188L13 10.7687L16.3469 7.42188L18.5781 9.65313L15.2313 13L18.5781 16.3469Z"
                        fill="#D0C9D6"
                    />
                </svg>
            </button>
            <div className="auth-form__content">
                <h1 className="title">Авторизация</h1>
                <h2 className="subtitle">
                    Введите логин и пароль, чтобы войти в личный кабинет
                </h2>
                <p className="input-place">
                    <input
                        type="text"
                        className="auth-input"
                        placeholder="Логин"
                    ></input>
                </p>
                <p>
                    <input
                        type="text"
                        className="auth-input"
                        placeholder="Пароль"
                    ></input>
                </p>
                <button className="auth-input__sub" type="submit">
                    Войти
                </button>
            </div>
        </form>
    );
};

export default Auth;
