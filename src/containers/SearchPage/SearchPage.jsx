import React, { useEffect, useState, useCallback } from 'react'
import { Row, Col } from 'components'
import { getProductList, SEARCHABLE_TERMS_PARAM } from 'infra/api'
import { useSearchParams } from 'react-router-dom'

// let x = {
//     brand: "Lubowitz-Hayes",
//     eyecatcher: "HEY",
//     id: 5,
//     image: "https://loremflickr.com/320/320/furniture,chair/all",
//     name: "Transcof",
//     price: 798,
//     priceSale: 402,
//     url: "https://csmonitor.com/velit/donec.js",
//     searchableTerms: "Transcof Lubowitz-Hayes"
// }
const Product = ({
    brand,
    eyecatcher,
    id,
    image,
    price,
    priceSale,
    url
}) => (
    <div>{brand}</div>
);
export const SearchPage = () => {
    const [searchParams] = useSearchParams()
    const searchableTerms = searchParams.get(SEARCHABLE_TERMS_PARAM) || ""
    const [productList, setProductList] = useState([])

    const loadProductList = useCallback(async () => {
        const products = await getProductList({ searchableTerms })
        console.log(products)
        setProductList(products)
    }, [searchableTerms])

    useEffect(() => {
        loadProductList()
    }, [loadProductList, searchableTerms])

    return (
        <>
            <Row>
                <Col> {productList.map(product => <Product key={product.id} {...product} />)} </Col>
            </Row>
        </>
    )
}

export default SearchPage