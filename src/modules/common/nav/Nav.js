import React from 'React';
import styles from './nav.module.scss';

const Nav = () => {
    return (
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
    );
}

export default Landing;