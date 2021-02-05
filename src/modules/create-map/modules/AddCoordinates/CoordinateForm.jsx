import React, { useState, useRef, useEffect, useCallback } from 'react';
import { isNil } from '@experiments/Toolbox'; 
import styles from './coordinateForm.module.scss';

const CoordinateForm = ({ x, y, lat: dataLat, lon: dataLon, updateCoordinate, cancelCoordinate, index }) => {
    const [open, setOpen] = useState(true);
    const [lon, setLon] = useState(dataLat);
    const [lat, setLat] = useState(dataLon);
    return (
        <div className={styles.container} style={{
            position: 'absolute',
            color: 'red',
            top: y+'px',
            left: x+'px'
        }}>
            <div className={styles.container} onFocusOut={e => { debugger }}>
                {open && <div className={styles.form} onBlur={e => e.stopPropagation()}>
                    test1234
                    <div>
                        Longitude
                        <input className={styles.input} value={lon} onChange={e => setLon(e.target.value)}/>
                    </div>
                    <div>
                        Latitude
                        <input className={styles.input} value={lat} onChange={e => setLat(e.target.value)}/>
                    </div>
                    <div className={styles.buttons}>
                        <button onClick={() => { cancelCoordinate(index) }}>Cancel</button>
                        <button onClick={() => updateCoordinate(lat, lon) || setOpen(false)}>Submit</button>
                    </div>
                </div>}
                <div onClick={() => setOpen(true)}>
                    X
                </div>
            </div>
        </div>
    );
}

export default CoordinateForm;