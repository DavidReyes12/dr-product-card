import React, { useContext, CSSProperties } from 'react';
import { ProductContext } from './ProductCard';

import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";

export interface Props {
    image?: string;
    className?: string;
    style?: CSSProperties;
};

export const ProductImage = ({ image, className, style }: Props) => {

    const { product } = useContext(ProductContext);
    let imgToShow: string;

    if ( image ) {
        imgToShow = image;
    } else if ( product.img ) {
        imgToShow = product.img;
    } else {
        imgToShow = noImage;
    };

    return (
        <img 
            alt="Product" 
            className={`${ styles.productImg } ${ className }`} 
            src={ imgToShow } 
            style={ style }
        />
    );
};