import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';
import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone';
import {trainingInfo} from '../../../data/store/trainingInfo';
import styles from './CustomizedTables.module.scss'

export const CustomizedTables = () => {
    const rows = trainingInfo.variants.row
    const iconCheck = (value: boolean) => value ? <CheckCircleTwoToneIcon color={'success'} fontSize={'small'}/> : <CancelTwoToneIcon color={'error'} fontSize={'small'}/>

    return (
        <TableContainer sx={{width: '300px'}} className={styles.container}>
            <Table aria-label="simple table" className={styles.table}>
                <TableHead className={styles.tableHead}>
                    <TableRow className={styles.tableRow}>
                        <TableCell className={styles.tableCell}>Что делаем</TableCell>
                        <TableCell className={styles.tableCell}>№1</TableCell>
                        <TableCell className={styles.tableCell}>№2</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody className={styles.tableBody}>
                    {rows.map(row => (
                        <TableRow
                            key={row.name}
                            className={styles.tableRow}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell className={styles.tableCell} component="th" scope="row">{row.name}</TableCell>
                            <TableCell className={styles.tableCell} align="right">{iconCheck(row.first)}</TableCell>
                            <TableCell className={styles.tableCell} align="right">{iconCheck(row.second)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
