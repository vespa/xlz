import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from "prop-types";
import { Row, Col } from 'components'
import styles from "./Product.module.scss"
/**
 * Description 
 */

export const Image = ({ src, alt }) => {
    const [currentSource, setCurrentSource] = useState("")
    // it deals with the random redirecting
    const loadImage = useCallback(
        async () => {
            const source = await fetch(src)
            setCurrentSource(source.url)
        }, [src]
    )
    useEffect(() => {
        loadImage()
    }, [loadImage])
    return (
        <>
            {!!currentSource && <img src={currentSource} alt={alt} />}
            {/* this line is not working now, it expects to be in a SSR env */}
            <noscript>
                {!!currentSource && <img src={currentSource} alt={alt} />}
            </noscript>
        </>
    )
}
export const Product = ({
    brand,
    eyecatcher,
    image,
    name,
    price,
    priceSale
}) => (
    <Col size={3}>
        {!!eyecatcher &&
            <Row>
                <Col>
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