import React from 'react';
import {VariantsTable} from './VariantsTable/VariantsTable';
import {Benefits} from './Benefits/Benefits';
import {TrainingIntroduction} from './TrainingIntroduction/TrainingIntroduction';

export const Training = () => {
    return (
        <>
            <TrainingIntroduction/>
            <Benefits/>
            <VariantsTable/>
        </>
    )
}