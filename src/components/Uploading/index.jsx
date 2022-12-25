import React, { useEffect, useState } from 'react';
import img from '../../assets/icons/iconImage.jpg';
import './styles.less';

export default function UploadAndDisplayImage() {
    const [images, setImages] = useState([]);
    const [imageURLs, setImageURLs] = useState([]);

    useEffect(() => {
        if (images.length < 1) return;
        const newImageUrls = [];
        images.forEach((image) =>
            newImageUrls.push(URL.createObjectURL(image))
        );
        setImageURLs(newImageUrls);
    }, [images]);

    function onImageChange(e) {
        setImages([...e.target.files]);
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
                        <img src={imageSrc} width="34px" height="34px"></img>
                        <span>
                            &nbsp;
                            {document
                                .getElementById('files')
                                .value.replace(/.*[\/\\]/, '')}
                        </span>
                    </>
                ))}
            </div>
        </>
    );
}
