import React from 'react';
import styles from './coordinateDisplay.module.scss';

const CoordinateDisplay = ({ lon, lat, hide, deleteCoord, minimizeCoord }) => {
    if (hide) {
        return null;
    }

    return (
        <div className={styles.container} onBlur={e => e.stopPropagation()}>
            <div className={styles.buttons}>
                <button onClick={minimizeCoord}>_</button>
                <button onClick={deleteCoord}>X</button>
            </div>
            <div>
                Longitude: {lon}
            </div>
            <div>
                Latitude: {lat}
            </div>
        </div>
    );
}

export default CoordinateDisplay;
