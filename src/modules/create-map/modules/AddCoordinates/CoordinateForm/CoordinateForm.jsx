import React, { useState } from 'react';
import Marker from './img/marker.png';
import CoordinateDisplay from './CoordinateDisplay';
import CoordinateFormEdit from './CoordinateFormEdit';
import styles from './coordinateForm.module.scss';

const CoordinateForm = ({ x, y, lat: dataLat, lon: dataLon, updateCoordinate, cancelCoordinate, index }) => {
    const [open, setOpen] = useState(true);
    const [submitted, setSubmitted] = useState(false);
    const [hideDisplay, setHideDisplay] = useState(false);
    const [lon, setLon] = useState(dataLat);
    const [lat, setLat] = useState(dataLon);

    const updateCoord = () => {
        updateCoordinate(lat, lon)
        setOpen(false)
        setSubmitted(true)
        setHideDisplay(false);
    }

    const deleteCoord = () => {CoordinateForm
        cancelCoordinate(index)
    }

    return (
        <div style={{
            position: 'absolute',
            transform: 'translateY(-75%) translateX(-50%)',
            top: y+'px',
            left: x+'px'
        }}>
            <div className={styles.container}>
                {open ? (
                    <CoordinateFormEdit
                        lon={lon}
                        lat={lat}
                        setLon={setLon}
                        setLat={setLat}
                        submitted={submitted}
                        deleteCoord={deleteCoord}
                        updateCoord={updateCoord}
                    />
                ) : (
                    <CoordinateDisplay
                        hide={!submitted || hideDisplay}
                        deleteCoord={deleteCoord}
                        minimizeCoord={() => setHideDisplay(true)}
                        lon={lon}
                        lat={lat}
                    />
                )}
                <img style={{ cursor: open ? 'default' : 'pointer' }} onClick={() => setOpen(true)} src={Marker} width={'100px'} />
            </div>
        </div>
    );
}

export default CoordinateForm;