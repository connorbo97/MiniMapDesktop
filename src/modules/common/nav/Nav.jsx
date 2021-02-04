import React from 'React';
import classBuilder from '@experiments/classBuilder';
import styles from './nav.module.scss';

const Nav = ({ page }) => {
    return (
        <div className={classBuilder(styles.nav, styles[page])} >
            <div>
                <a href='?test=1#Landing'>
                    Home
                </a>
                <a href='?test=2#CreateMap'>
                    Create
                </a>
                <a href='?test=3#EditMap'>
                    Edit
                </a>
                <a href='?test=4#Account'>
                    Account
                </a>
            </div>
        </div>
    );
}

export default Nav;