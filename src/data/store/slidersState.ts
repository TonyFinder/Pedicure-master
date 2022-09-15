import nails01s from '../../images/sliders/s1.jpg';
import nails03s from '../../images/sliders/s3.jpg';
import nails04s from '../../images/sliders/s4.jpg';
import nails05s from '../../images/sliders/s5.jpg';
import nails07s from '../../images/sliders/s7.jpg';
import nails08s from '../../images/sliders/s8.jpg';
import nails02s from '../../images/sliders/s2.jpg';
import nails06s from '../../images/sliders/s6.jpg';

export const slidersValues = {
    header: 'Слайдеры',
    gallery: {
        header: 'Прозрачная основа, наносятся на любой фон!',
        images: [
            {id: 1, image: nails03s},
            {id: 2, image: nails02s},
            {id: 6, image: nails06s},
            {id: 3, image: nails07s},
            {id: 4, image: nails04s},
            {id: 5, image: nails05s},
            {id: 7, image: nails08s},
            {id: 8, image: nails01s},
        ],
        restInfo: "листай для просмотра"
    },
}

export type SlidersStateValuesType = typeof slidersValues