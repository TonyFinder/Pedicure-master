import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export const SelectAutoWidth = () => {
    const [category, setCategory] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setCategory(event.target.value);
    };

    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 200 }}>
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
                    <MenuItem value="dry">Сухая кожа</MenuItem>
                    <MenuItem value="wet and smell">Влажная кожа</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}
