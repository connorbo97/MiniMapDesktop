import React from 'react';
import styles from './coordinateFormEdit.module.scss';

const CoordinateFormEdit = ({ lon, lat, setLon, submitted, setLat, deleteCoord, updateCoord }) => {
    return (
        <div className={styles.form} onBlur={e => e.stopPropagation()}>
            <div className={styles.inputs}>
                <div>
                    Longitude
                    <input className={styles.input} value={lon} onChange={e => setLon(e.target.value)} autoFocus/>
                </div>
                <div>
                    Latitude
                    <input className={styles.input} value={lat} onChange={e => setLat(e.target.value)}/>
                </div>
            </div>
            <div className={styles.buttons}>
                <button onClick={deleteCoord}>
                    {submitted ? 'Delete' : 'Cancel'}
                </button>
                <button onClick={updateCoord}>
                    {submitted ? 'Update' : 'Submit'}
                </button>
            </div>
        </div>
    );
}

export default CoordinateFormEdit;