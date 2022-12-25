import UploadAndDisplayImage from '@Components/Uploading';
import React, { useState } from 'react';
import './styles.less';

const PostForm = ({ title, description, placeholder }) => {
    const [isOverflowed, setOverflow] = useState(false);

    function onInput(event) {
        const length = event.target.value.length;
        const counter = document.querySelector('.current');
        counter.textContent = length;
        if (length > 150) setOverflow(true);
    }
    return (
        <div className="postform-block">
            <div className="postform-block__title-block">
                <h1 className="form-title">{title}</h1>
            </div>
            <div className="postform-block__description-block">
                <span className="form-description">{description}</span>
            </div>
            <div className="postform-block__textarea-block">
                <textarea
                    className="text-area"
                    placeholder={placeholder}
                    onChange={onInput}
                ></textarea>
                <div class="counter">
                    <span>Символов: </span>
                    <span
                        className={
                            isOverflowed ? 'current overflow' : 'current'
                        }
                    >
                        0
                    </span>
                    &nbsp;/
                    <span class="total">150</span>
                </div>
            </div>
            <div className="postform-block__image-adding-block">
                <a>
                    <UploadAndDisplayImage></UploadAndDisplayImage>
                </a>
                {isOverflowed ? (
                    <div className="overflow_error">
                        <span>Превышен лимит символов</span>
                    </div>
                ) : (
                    <></>
                )}
            </div>
            <button className="post-btn">Применить</button>
        </div>
    );
};
export default PostForm;
