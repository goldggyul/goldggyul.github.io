import React from 'react';
import Image from '../image';
import './style.scss';

function ImgEmoji({ src }) {
    if (!src) return null;
    return (
        <div className="img-emoji">
            <div className="img-wrapper">
                <Image src={src} alt="thumbnail" />
            </div>
        </div>
    );
}

export default ImgEmoji;
