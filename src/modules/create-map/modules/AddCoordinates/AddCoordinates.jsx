import React, { useState, useRef, useEffect, useCallback } from 'react';
import { noop, isNil } from '@experiments/Toolbox';
import CoordinateForm from './CoordinateForm';
import styles from './addCoordinates.module.scss';

const MAX_COORDS = 3;

const AddCoordinates = ({ data, onSubmit }) => {
    const imgRef = useRef(null);
    const [canAddCoordinate, setCanAddCoordinate] = useState(true);
    const [coordinates, setCoordinates] = useState([]);
    const { file, fileUrl, x, y } = data;
    const hasMaxCoords = coordinates.length === MAX_COORDS && coordinates.every(coord => (
        !isNil(coord.x) && !isNil(coord.y) && !isNil(coord.lat) && !isNil(coord.lon)
    ));

    const goToNextStep = (e) => {
        if (!hasMaxCoords) {
            return;
        }
        onSubmit({ coordinates })
    }

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

        if (coordinates.length === MAX_COORDS) {
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
                <button disabled={!hasMaxCoords} onClick={goToNextStep}>NEXT</button>
                <img style={{
                    cursor: hasMaxCoords ?
                        'not-allowed' :
                        (canAddCoordinate ? 'pointer' : 'default') 
                }} ref={imgRef} width='100%' src={fileUrl} onMouseDown={canAddCoordinate ? onMouseDown : noop} />
                {coordinates
                    .filter(c => c)
                    .map((coord, i) => (
                        <CoordinateForm key={i} index={i} {...coord} updateCoordinate={(lon, lat) =>updateCoordinate(i, lon, lat)} cancelCoordinate={cancelCoordinate}/>
                    )
                )}
            </div>
        </div>
    );
}

export default AddCoordinates;