import React from 'react';
import styles from './VariantsTable.module.scss';
import Typography from '@mui/material/Typography';
import {trainingInfo} from '../../../data/store/trainingInfo';
import {CustomizedTables} from '../../MatetialUI/CustomizedTables/CustomizedTables';
import DoneTwoToneIcon from '@mui/icons-material/DoneTwoTone';

export const VariantsTable = () => {
    return (
        <div className={styles.container}>
            <div className={styles.variants}>
                <Typography variant={'h3'}
                            className={styles.variantsTitle}>{trainingInfo.variants.header.toUpperCase()}</Typography>
                <div className={styles.variantsDescription}>
                    <CustomizedTables/>
                    <div className={styles.restInfoBlock}>
                        {trainingInfo.restInfo.map((value, index) => <div key={index} className={styles.restInfo}>
                            <DoneTwoToneIcon/>
                            <div className={styles.value}>{value}</div>
                        </div>)}
                    </div>
                </div>
            </div>
        </div>
    );
};