import React, { useState, useRef, useEffect, useCallback } from 'react';
import styles from './addCoordinates.module.scss';

const UploadMap = ({ data, onSubmit }) => {
    const { file, fileUrl, x, y } = data;

    return (
        <div className={styles.container}>
            <img src={fileUrl} width="60%"/>
            <div>
                X: {x}
                Y: {y}
            </div>
        </div>
    );
}

export default UploadMap;