import React, { useState } from 'react';
import './gallery.css';
import CloseIcon from '@material-ui/icons/Close';

import i1 from './images/i1.png'
import i3 from './images/i2.jpg'
import i2 from './images/i3.jpg'
import i4 from './images/i4.png'
import i5 from './images/i5.jpg'
import i6 from './images/i6.png'
import i7 from './images/i7.jpg'
import i8 from './images/i8.jpg'
import i9 from './images/i9.jpg'
import i10 from './images/i10.jpg'
import i11 from './images/i11.jpg'
import i12 from './images/i12.jpg'
import i13 from './images/i13.jpg'
import i14 from './images/i14.png'
import i15 from './images/i15.png'
import i16 from './images/i16.jpg'
import i17 from './images/i17.jpg'
import i18 from './images/i18.png'
import i19 from './images/i19.jpg'
import i20 from './images/i20.jpg'


function Gallery() {
    let data = [
        {
            id: 1,
            imgSrc: i1,

        },
        {
            id: 2,
            imgSrc: i2,

        },
        {
            id: 3,
            imgSrc: i3,

        },
        {
            id: 4,
            imgSrc: i4,

        },
        {
            id: 5,
            imgSrc: i5,

        },
        {
            id: 6,
            imgSrc: i6,

        },
        {
            id: 7,
            imgSrc: i7,

        },
        {
            id: 8,
            imgSrc: i8,

        },
        {
            id: 9,
            imgSrc: i9,

        },
        {
            id: 10,
            imgSrc: i10,

        },
        {
            id: 11,
            imgSrc: i11,

        },
        {
            id: 12,
            imgSrc: i12,

        },
        {
            id: 13,
            imgSrc: i13,

        },
        {
            id: 14,
            imgSrc: i14,

        },
        {
            id: 15,
            imgSrc: i15,

        },
        {
            id: 16,
            imgSrc: i16,

        },
        {
            id: 17,
            imgSrc: i17,

        },
        {
            id: 18,
            imgSrc: i18,

        },
        {
            id: 19,
            imgSrc: i19,

        },
        {
            id: 20,
            imgSrc: i20,

        },
    ]
    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');
    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }
  return (
    <>
    <div className={model? "model open" : "model"}>
        <img src={tempimgSrc} />
        <CloseIcon onClick={() => setModel(false)} />
    </div>
    <div className="gallery">
       {data.map((item, index)=> {
        return(
            <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
                <img src={item.imgSrc} style={{width: '100%'}} />
            </div>
        )
       })}
    </div>
    </>
  )
}

export default Gallery
