import React from 'React';
import Logo from './img/logo.gif';
import PathSvg from './PathSvg';
import styles from './landing.module.scss';

const Landing = () => {
    console.log(styles);
    return (
        <div className={styles['container']}>
            <div className={styles.nav}>
                <div>
                    <a>
                        Home
                    </a>
                    <a>
                        Create
                    </a>
                    <a>
                        Edit
                    </a>
                    <a>
                        Account
                    </a>
                </div>
            </div>
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