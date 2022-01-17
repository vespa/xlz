import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from "prop-types";
import { Row, Col, Image } from 'components'
import styles from "./Product.module.scss"
/**
 * Product viewer 
 */

export const Product = ({
    brand,
    eyecatcher,
    image,
    name,
    price,
    priceSale
}) => (
    <Col size={3} className={styles.product}>
        {!!eyecatcher &&
            <Row>
                <Col className={styles.product__eyecatcher}>
                    {eyecatcher}
                </Col>
            </Row>
        }

        <Row>
            <Col>
                <Image src={image} alt={`${brand} ${name}`} />
            </Col>
        </Row>
        <Row>
            <Col>
                {brand}
            </Col>
        </Row>
        <Row>
            <Col>
                {name}
            </Col>
        </Row>
        <Row>
            <Col>
                {price}
            </Col>
        </Row>
        {!!priceSale &&
            <Row>
                <Col>
                    {priceSale}
                </Col>
            </Row>
        }

    </Col>
);
Product.propTypes = {
    /** brand of the product */
    brand: PropTypes.string.isRequired,
    /** label on the top */
    eyecatcher: PropTypes.string,
    /** product picture */
    image: PropTypes.string.isRequired,
    /** price  */
    price: PropTypes.number.isRequired,
    /** priceSale  */
    priceSale: PropTypes.number,

}

export default Product