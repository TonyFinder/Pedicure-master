import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {useDispatch, useSelector} from 'react-redux';
import {StoreType} from '../../../data/store/store';
import {chooseCategoryAC} from '../../../data/reducers/goodsReducer';

export const SelectAutoWidth = () => {
    const dispatch = useDispatch()
    const category = useSelector<StoreType, string | undefined>(state => {
        let countChosenCategories = state.goods.chosenCategory.filter(category => category.active).length
        return countChosenCategories === 0
            ? ''
            : countChosenCategories > 1
                ? 'all'
                : state.goods.chosenCategory.find(category => category.active)?.category
    })

    const handleChange = (event: SelectChangeEvent) => {
        dispatch(chooseCategoryAC(event.target.value))
    };

    return (
        <div>
            <FormControl sx={{m: 1, minWidth: 200}}>
                <InputLabel id="demo-simple-select-autowidth-label">Выберите категорию</InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={category}
                    onChange={handleChange}
                    autoWidth
                    label="Выберите категорию"
                >
                    <MenuItem value="all">Все категории</MenuItem>
                    <MenuItem value="drySkin">Сухая кожа</MenuItem>
                    <MenuItem value="wetSkin">Влажная кожа</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}
