import React from 'React';
import classBuilder from '@experiments/classBuilder';
import styles from './nav.module.scss';

const Nav = ({ page }) => {
    return (
        <div className={classBuilder(styles.nav, styles[page])} >
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

export default Nav;