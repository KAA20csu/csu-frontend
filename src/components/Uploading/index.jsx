import React, { useEffect, useState } from 'react';
import img from '../../assets/icons/iconImage.jpg';
import './styles.less';

export default function UploadAndDisplayImage() {
    const [images, setImages] = useState([]);
    const [imageURLs, setImageURLs] = useState([]);
    const [isRequiredResolution, setRequired] = useState(true);

    useEffect(() => {
        if (images.length < 1) return;
        const newImageUrls = [];
        images.forEach((image) => {
            newImageUrls.push(URL.createObjectURL(image));
            if (image.size > 9112.5) setRequired(false);
        });
        setImageURLs(newImageUrls);
    }, [images]);

    function onImageChange(e) {
        setImages([...e.target.files]);
    }
    function getExtension() {
        return document
            .getElementById('files')
            .value.replace(/.*[\/\\]/, '')
            .split('.')[1];
    }
    function containz(elem) {
        var arr = ['png', 'jpg', 'jpeg'];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === elem) {
                return true;
            }
        }
        return false;
    }
    function getWidth() {
        return document.getElementById('image1').naturalWidth;
    }
    return (
        <>
            <label for="files">
                <img src={img}></img> + Добавить изображение
            </label>
            <input
                id="files"
                className="inputFile"
                type="file"
                multiple-accept="image/*"
                onChange={onImageChange}
            ></input>
            <div className="uploadedFiles">
                {imageURLs.map((imageSrc) => (
                    <>
                        {containz(getExtension()) && isRequiredResolution ? (
                            <>
                                <img
                                    id="image1"
                                    src={imageSrc}
                                    width="34px"
                                    height="34px"
                                ></img>
                                <span>
                                    &nbsp;
                                    {document
                                        .getElementById('files')
                                        .value.replace(/.*[\/\\]/, '')}
                                </span>
                                <span>{isRequiredResolution.value}</span>
                            </>
                        ) : (
                            <div className="uploadedFiles__error">
                                <span>Неверный формат изображения</span>
                            </div>
                        )}
                    </>
                ))}
            </div>
        </>
    );
}
