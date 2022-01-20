import React, { useEffect, useState, useCallback, useRef } from 'react'
import { SearchFilters, Product, Row, Col, Button } from 'components'
import { getProductList, SEARCHABLE_TERMS_PARAM, SORT_BY_PRICE_PARAM, FILTER_BY_DEALS, SORT_BY_PRODUCT_NAME } from 'infra/api'
import { useSearchParams } from 'react-router-dom'
import styles from './SearchPage.module.scss'

export const SearchPage = () => {
    const maxPerPage = 12;
    const [loading, setLoading] = useState(true)
    const [showResults, setShowResults] = useState(maxPerPage)
    const [error, setError] = useState('')
    const [search] = useSearchParams()
    const [productList, setProductList] = useState([])
    const [fullProductList, setFullProductList] = useState([])
    const searchableTerms = search.get(SEARCHABLE_TERMS_PARAM) || ""
    const orderByPrice = search.get(SORT_BY_PRICE_PARAM)
    const currentEyeCatcherOption = search.get(FILTER_BY_DEALS) || ""
    const currentProductSort = search.get(SORT_BY_PRODUCT_NAME) || ""

    const loadProductList = useCallback(async () => {
        setLoading(true)
        try {
            const products = await getProductList({ searchableTerms })
            setProductList(products)
            setFullProductList(products)
        } catch (err) {
            setError('something went wrong. Please try again later')
            console.error(err.message)
        } finally {
            setLoading(false)
        }
    }, [searchableTerms])

    const loadMoreResults = () => setShowResults(showResults + maxPerPage)

    const reorderByPriceParam = useCallback(() => {
        const isPriceSalePresent = (item) => item.priceSale || item.price
        const comparePrices = (a, b) => isPriceSalePresent(a) - isPriceSalePresent(b)
        const reorderType = {
            price_asc: (a, b) => comparePrices(b, a),
            price_desc: (a, b) => comparePrices(a, b)
        }
        const reordered = !!orderByPrice ? [...productList].sort(reorderType[orderByPrice]) : false
        !!reordered && setProductList(reordered)
        !reordered && !loading && setProductList((currentProductSort || currentEyeCatcherOption) ? productList : fullProductList)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [orderByPrice])



    const filterByDeals = useCallback(() => {
        !loading && setProductList(currentEyeCatcherOption ? productList.filter(item => item.eyecatcher) : fullProductList)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentEyeCatcherOption, fullProductList])

    const sortyByName = useCallback(() => {
        const compareNames = (a, b) => {
            const nameA = a.name.toLowerCase()
            const nameB = b.name.toLowerCase()
            return nameA < nameB ? -1 : nameA > nameB ? 1 : 0
        }
        const reorderType = {
            asc: (a, b) => compareNames(b, a),
            desc: (a, b) => compareNames(a, b)
        }
        const reordered = !!currentProductSort ? [...productList].sort(reorderType[currentProductSort]) : false
        !!reordered && setProductList(reordered)
        !reordered && !loading && setProductList(currentEyeCatcherOption ? productList : fullProductList)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentProductSort, fullProductList])



    useEffect(() => {
        setShowResults(maxPerPage)
        loadProductList()
    }, [loadProductList, searchableTerms])

    useEffect(() => {
        reorderByPriceParam()
    }, [orderByPrice, currentEyeCatcherOption, reorderByPriceParam])

    useEffect(() => {
        filterByDeals()
    }, [currentEyeCatcherOption, filterByDeals])

    useEffect(() => {
        sortyByName()
    }, [currentProductSort, sortyByName])

    return (
        <>
            {!error ?
                <>
                    <SearchFilters />
                    <Row data-testid={"product-list"}>
                        {!loading && productList
                            .filter((_, i) => i < showResults)
                            .map(product => <Product key={product.id} {...product} data-testid={"product"} />)}

                        {(!loading && productList.length === 0) && <Col className={styles.no_matches}> No matches found for <b>{searchableTerms}</b> </Col>}
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