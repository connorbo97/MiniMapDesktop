import React from 'React';
import { Nav } from '../common';
import Logo from './img/logo.gif';
import PathSvg from './PathSvg';
import styles from './landing.module.scss';

const Landing = () => {
    console.log(styles);
    return (
        <div className={styles['container']}>
            <Nav/>
            <div className={styles.main}>
                <div className={styles.imgContainer}>
                    <img src={Logo}/>
                </div>
                <div className={styles.form}>
                    <PathSvg className={styles.pathSvg} />
                    <button>
                        Create a map
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Landing;