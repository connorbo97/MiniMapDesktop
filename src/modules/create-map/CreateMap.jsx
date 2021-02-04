import React, { useState } from 'React';
import { UploadMap, AddCoordinates } from './modules'
import { StepForm } from './components';
import styles from './createMap.module.scss';

const CreateMap = () => {
    const [step, setStep] = useState(0);
    const [data, setData] = useState({});

    const updateData = (newData) => {
        setData(prevState => ({
            ...prevState,
            ...newData
        }))
        setStep(prevStep => prevStep + 1)
    };

    const steps = [
        {
            title: 'Upload Map',
            description: 'Click the button to add your map',
            component: UploadMap,
        },
        {
            title: 'Add Coordinates',
            description: 'Mark at least 3 points on your map with accurate latitude and longitude',
            component: AddCoordinates,
        }
    ];

    console.log(data);
    
    return (
        <div className={styles['container']}>
            <StepForm
                {...steps[step]}
                index={step}
                onSubmit={updateData}
                data={data}
            />
        </div>
    )
}

export default CreateMap;