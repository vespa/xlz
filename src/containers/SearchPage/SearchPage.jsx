import React, { useEffect, useState, useCallback } from 'react'
import { Product, Row } from 'components'
import { getProductList, SEARCHABLE_TERMS_PARAM } from 'infra/api'
import { useSearchParams } from 'react-router-dom'

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
                {productList.map(product => <Product key={product.id} {...product} />)}
            </Row>
        </>
    )
}

export default SearchPage