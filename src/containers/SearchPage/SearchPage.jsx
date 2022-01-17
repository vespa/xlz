import React, { useEffect, useState, useCallback } from 'react'
import { Product, Row, Col } from 'components'
import { getProductList, SEARCHABLE_TERMS_PARAM } from 'infra/api'
import { useSearchParams } from 'react-router-dom'

export const SearchPage = () => {
    const [error, setError] = useState('')
    const [searchParams] = useSearchParams()
    const searchableTerms = searchParams.get(SEARCHABLE_TERMS_PARAM) || ""
    const [productList, setProductList] = useState([])

    const loadProductList = useCallback(async () => {
        try {
            const products = await getProductList({ searchableTerms })
            setProductList(products)
        } catch (err) {
            setError('something went wrong. Please try again later')
        }
    }, [searchableTerms])

    useEffect(() => {
        loadProductList()
    }, [loadProductList, searchableTerms])

    return (
        <>
            {!error ?
                <Row>
                    {productList.map(product => <Product key={product.id} {...product} />)}
                </Row> :
                <Row>
                    <Col>{error}</Col>
                </Row>
            }
        </>
    )
}

export default SearchPage