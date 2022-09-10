import React from 'react';
import Image from '../image';
import './style.scss';

function ImgHeader({ author }) {
    if (!author) return null;
    const { bio } = author;
    return (
        <div className="img-header">
            <div className="img-wrapper">
                <Image className="header-img"  src={bio.about} alt="thumbnail" />
            </div>
        </div>
    );
}

export default ImgHeader;
