import React from 'react';
import styles from './VariantsTable.module.scss';
import Typography from '@mui/material/Typography';
import {trainingInfoState} from '../../../data/store/trainingInfoState';
import {CustomizedTables} from '../../MatetialUI/CustomizedTables/CustomizedTables';
import DoneTwoToneIcon from '@mui/icons-material/DoneTwoTone';

const Zoom = require("react-reveal/Zoom")

export const VariantsTable = () => {
    // console.log("VariantsTable")

    return (
        <div className={styles.container}>
            <div className={styles.variants}>
                <Zoom cascade>
                    <Typography variant={'h3'}
                                className={styles.variantsTitle}>{trainingInfoState.variants.header.toUpperCase()}</Typography>
                </Zoom>

                <div className={styles.variantsDescription}>
                    <CustomizedTables/>
                    <Zoom cascade>
                        <div className={styles.restInfoBlock}>
                            {trainingInfoState.restInfo.map((value, index) => <div key={index}
                                                                                   className={styles.restInfo}>
                                <DoneTwoToneIcon/>
                                <div className={styles.value}>{value}</div>
                            </div>)}
                        </div>
                    </Zoom>
                </div>
            </div>
        </div>
    );
};