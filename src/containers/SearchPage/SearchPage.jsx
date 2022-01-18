import React, { useEffect, useState, useCallback } from 'react'
import { Product, Row, Col, Button } from 'components'
import { getProductList, SEARCHABLE_TERMS_PARAM } from 'infra/api'
import { useSearchParams } from 'react-router-dom'
import styles from './SearchPage.module.scss'

export const SearchPage = () => {
    const maxPerPage = 12;
    const [showResults, setShowResults] = useState(maxPerPage)
    const [error, setError] = useState('')
    const [searchParams] = useSearchParams()
    const [productList, setProductList] = useState([])
    const searchableTerms = searchParams.get(SEARCHABLE_TERMS_PARAM) || ""

    const loadProductList = useCallback(async () => {
        try {
            const products = await getProductList({ searchableTerms })
            setProductList(products)
        } catch (err) {
            setError('something went wrong. Please try again later')
        }
    }, [searchableTerms])

    const loadMoreResults = () =>
        setShowResults(showResults + maxPerPage)

    useEffect(() => {
        setShowResults(maxPerPage)
        loadProductList()
    }, [loadProductList, searchableTerms])

    return (
        <>
            {!error ?
                <>
                    <Row>
                        {productList
                            .filter((_, i) => i < showResults)
                            .map(product => <Product key={product.id} {...product} />)}
                    </Row>
                    {showResults <= productList.length &&
                        <Row>
                            <Col className={styles.search__container}>
                                <Button className={styles.search__button} onClick={loadMoreResults}>
                                    Showing {showResults} from {productList.length}
                                </Button>
                            </Col>
                        </Row>
                    }
                </>
                :
                <Row>
                    <Col>{error}</Col>
                </Row>
            }
        </>
    )
}

export default SearchPage