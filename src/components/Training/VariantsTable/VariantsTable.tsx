import React from 'react';
import styles from './VariantsTable.module.scss';
import Typography from '@mui/material/Typography';
import {trainingInfoState} from '../../../data/store/trainingInfoState';
import {CustomizedTables} from '../../MatetialUI/CustomizedTables/CustomizedTables';
import DoneTwoToneIcon from '@mui/icons-material/DoneTwoTone';

const Fade = require("react-reveal/Fade")

export const VariantsTable = () => {
    // console.log("VariantsTable")

    return (
        <div className={styles.container}>
            <div className={styles.variants}>
                <Fade top>
                    <Typography variant={'h3'}
                                className={styles.variantsTitle}>{trainingInfoState.variants.header.toUpperCase()}</Typography>
                </Fade>

                <div className={styles.variantsDescription}>
                    <Fade left>
                        <CustomizedTables/>
                    </Fade>
                    <Fade right>
                        <div className={styles.restInfoBlock}>
                            {trainingInfoState.restInfo.map((value, index) => <div key={index}
                                                                                   className={styles.restInfo}>
                                <DoneTwoToneIcon/>
                                <div className={styles.value}>{value}</div>
                            </div>)}
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
};