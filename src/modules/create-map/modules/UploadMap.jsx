import React, { useState, useRef, useEffect, useCallback } from 'react';
import get from 'lodash.get';
import styles from './uploadMap.module.scss';

const UploadMap = ({ onSubmit }) => {
    const imgRef = useRef(null);
    const [url, setUrl] = useState('');
    const [file, setFile] = useState('');
    const [measurements, setMeasurements] = useState()

    const handleFile = useCallback((e) => {
        setUrl(e.target.result);
    }, []);

    const handleFileUpload = useCallback((e) => {
        let fr = new FileReader();
        fr.onload = handleFile;
        fr.onloadend = handleFile;

        // fr.addEventListener("load", function () {
        //   // convert image file to base64 string
        //   handleFile()
        // }, false);

        const curFile = e.target.files[0];

        setFile(curFile);
        fr.readAsDataURL(curFile);
    }, [handleFile])
    
    useEffect(() => {
        if (imgRef.current?.src === url) {
            setMeasurements({ x: imgRef.current.width, y: imgRef.current.height })
        }
    }, [imgRef.current, url])

    return (
        <form className={styles.container} onSubmit={e => e.preventDefault() || onSubmit({ file, fileUrl: url, ...measurements })}>
            <input
                className={styles.button}
                onChange={handleFileUpload}
                type="file"
                accept="image/*"
                maxLength='1'
                id="myFile"
                name="filename"
            />
            <button className={styles.button} type='submit' disabled={!url || !file}>
                NEXT
            </button>
            <img ref={imgRef} src={url} width="60%"/>
            <div>
                X: {measurements?.x}
                Y: {measurements?.y}
            </div>
        </form>
    );
}

export default UploadMap;