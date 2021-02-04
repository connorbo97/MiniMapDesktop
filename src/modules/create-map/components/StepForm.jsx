import React from 'React';
import styles from './stepForm.module.scss';

const StepForm = ({ index, title, description, component: Component, ...rest }) => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>Step {index + 1}: {title}</div>
            <div className={styles.description}>{description}</div>
            <div classname={styles.content}><Component {...rest} /></div>
        </div>
    )
}

export default StepForm;