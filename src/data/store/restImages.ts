import anna from '../../images/anna.jpg';
import nails7 from '../../images/nails/7.jpg';
import whatsApp from '../../images/icons/whatsApp.png';
import instagram from '../../images/icons/instagram.png';
import vk from '../../images/icons/vk.png';
import telegram from '../../images/icons/telegram.png';
import _372 from '../../images/goods/png8/372.png'
import _832 from '../../images/goods/png8/832.png'
import _1111 from '../../images/goods/png8/1111.png'
import _991039 from '../../images/goods/png8/991039.png'
import _111 from '../../images/goods/png8/111.png'
import _222 from '../../images/goods/png8/222.png'
import _889 from '../../images/goods/png8/889.png'
import _367 from '../../images/goods/png8/367.png'
import _888 from '../../images/goods/png8/888.png'
import _369 from '../../images/goods/png8/369.png'

export const mainPageImages = {anna, introduction: nails7}
export const icons = [
    {id: 'whatsApp', image: whatsApp, url: 'https://wa.me/79510215025'},
    {id: 'instagram', image: instagram, url: 'https://www.instagram.com/pedicure.cabinet'},
    {id: 'vk', image: vk, url: 'https://vk.com/pedicure.cabinet'},
    {id: 'telegram', image: telegram, url: 'https://t.me/PedicureCabinet'},
]
export const goodsImages = {
        372: _372,
        832: _832,
        1111: _1111,
        991039: _991039,
        111: _111,
        222: _222,
        889: _889,
        367: _367,
        888: _888,
        369: _369,
}

// types
export type ImagesMainPageType = typeof mainPageImages
export type IconsType = typeof icons
export type GoodsImagesType = typeof goodsImages