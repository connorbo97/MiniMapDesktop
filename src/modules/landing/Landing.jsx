import React from 'React';
import Logo from './img/logo.gif';
import PathSvg from './PathSvg';
import styles from './landing.module.scss';

const Landing = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.imgContainer}>
                    <img src={Logo}/>
                </div>
                <div className={styles.form}>
                    <PathSvg className={styles.pathSvg} />
                    <button onClick={() => {
                        location.hash='#CreateMap';
                        location.search='?test=7';
                    }}>
                        Create a map
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Landing;