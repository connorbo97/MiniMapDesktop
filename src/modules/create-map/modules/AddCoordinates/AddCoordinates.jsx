import React, { useState, useRef, useEffect, useCallback } from 'react';
import { noop } from '@experiments/Toolbox';
import CoordinateForm from './CoordinateForm';
import styles from './addCoordinates.module.scss';

const AddCoordinates = ({ data, onSubmit }) => {
    const imgRef = useRef(null);
    const [canAddCoordinate, setCanAddCoordinate] = useState(true);
    const [coordinates, setCoordinates] = useState([]);
    const { file, fileUrl, x, y } = data;

    const onMouseDown = e => {
        if (!canAddCoordinate) { return }
        const testX = e.nativeEvent?.offsetX;
        const testY = e.nativeEvent?.offsetY;
        console.log(e, e.nativeEvent, testX, testY);

        setCoordinates(prevCoordinates => prevCoordinates.concat([{
            x: testX,
            y: testY
        }]))

        setCanAddCoordinate(false);
    }

    const updateCoordinate = (index, lon, lat) => {
        setCoordinates(prevCoordinates => prevCoordinates.map((coord, i) => {
            if (i !== index) { return coord }
            
            return { ...coord, lon, lat }
        }))

        if (coordinates.length === 3) {
            setCanAddCoordinate(false)
        } else {
            setCanAddCoordinate(true);
        }
    }

    const cancelCoordinate = (indexToDelete) => {
        setCoordinates(prevCoordinates => prevCoordinates.filter((_, i) => i !== indexToDelete))
        setCanAddCoordinate(true);
    }

    return (
        <div className={styles.container}>
            <div className={styles.img}>
                <img ref={imgRef} width='100%' src={fileUrl} onMouseDown={canAddCoordinate ? onMouseDown : noop} />
                {coordinates
                    .filter(c => c)
                    .map((coord, i) => (
                        <CoordinateForm key={i} index={i} {...coord} updateCoordinate={updateCoordinate} cancelCoordinate={cancelCoordinate}/>
                    )
                )}
            </div>
        </div>
    );
}

export default AddCoordinates;