import UploadAndDisplayImage from '@Components/Uploading';
import React from 'react';
import './styles.less';

const PostForm = ({ title, description, placeholder }) => {
    const maxlength = 150;

    function onInput(event) {
        event.target.value = event.target.value.substr(0, maxlength); // обрезаем текст до 360 символов
        const length = event.target.value.length;
        const counter = document.querySelector('.current');
        counter.textContent = 'Символов: ' + length;
    }
    return (
        <div className="postform-block">
            <div className="postform-title-block">
                <h1 className="form-title">{title}</h1>
            </div>
            <div className="postform-description-block">
                <span className="form-description">{description}</span>
            </div>
            <div className="postform-text-block">
                <textarea
                    className="text-area"
                    placeholder={placeholder}
                    onChange={onInput}
                ></textarea>
                <div class="counter">
                    <span className="current">Символов: 0</span>
                    &nbsp;/
                    <span class="total">150</span>
                </div>
            </div>
            <div className="postform-add-img-block">
                <a>
                    <UploadAndDisplayImage></UploadAndDisplayImage>
                </a>
            </div>
            <button className="post-btn">Применить</button>
        </div>
    );
};
export default PostForm;
