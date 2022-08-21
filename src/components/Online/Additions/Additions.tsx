import React from 'react';
import styles from './Additions.module.scss'
import Typography from '@mui/material/Typography';
import {introductionValues} from '../../../data/store/mainPageState';

// const Zoom = require("react-reveal/Zoom")

export const Additions = () => {
    // console.log("Program")

    return (
        <div className={styles.container}>
            {/*<Zoom cascade>*/}
                <Typography variant={'h2'}
                            className={styles.title}>{introductionValues.discount.header.toUpperCase()}</Typography>
            {/*</Zoom>*/}

            { introductionValues.discount.blocks.map(block =>
                // <Zoom cascade key={block.id}>
                    <div key={block.id} className={styles.innerContainer}>
                        <div className={styles.innerBlock}>
                            {/*<Zoom cascade>*/}
                                <Typography variant={'h3'}
                                            className={styles.additionTitle}>{block.header.toUpperCase()}</Typography>
                            {/*</Zoom>*/}

                            <div className={styles.bulletsBlock}>
                                { block.lessons.map(add =>
                                    // <Zoom cascade key={add.id}>
                                        <Typography key={add.id} variant={'subtitle1'}
                                                    className={styles.bullet}>{add.value}<span>{add.add && add.add}</span></Typography>
                                    // </Zoom>
                                )
                                }
                            </div>

                            <div className={styles.remarks}>
                                { block.description.map(remark =>
                                    // <Zoom cascade key={remark.id}>
                                        <Typography key={remark.id} variant={'subtitle1'}
                                                    className={styles.remarks}>{remark.add}</Typography>
                                    // </Zoom>
                                )
                                }
                            </div>
                        </div>
                    </div>
                // </Zoom>
            )
            }
        </div>
    )
}