import React from 'react'
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
        <div className={styles.product__box}>
            {!!eyecatcher &&
                <Row>
                    <Col className={styles.product__box__eyecatcher}>
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
                <Col className={styles.product__box__brand}>
                    {brand}
                </Col>
            </Row>
            <Row>
                <Col className={styles.product__box__name}>
                    {name}
                </Col>
            </Row>
            <Row className={!priceSale ? styles.product__box__price : styles.product__box__striked_price}>
                <Col>
                    € {price},-
                </Col>
            </Row>
            {!!priceSale &&
                <Row className={`${styles.product__box__price} ${styles["product__box__price--sale"]}`}>
                    <Col>
                        € {priceSale},-
                    </Col>
                </Row>
            }
        </div>
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