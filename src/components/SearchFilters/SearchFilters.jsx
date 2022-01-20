import React, { useEffect, useState } from 'react'
import { Row, Col, Select } from 'components'
import { useSearchParams } from 'react-router-dom'
import { SORT_BY_PRICE_PARAM, FILTER_BY_DEALS, SORT_BY_PRODUCT_NAME } from 'infra/api'


/**
 * Search Filters. It adds/remove search params to the URL
 */


export const SearchFilters = () => {
    const [currentSorPriceValue, setCurrentSorPriceValue] = useState("")
    const [currentEyeCatcherValue, setCurrentEyeCatcherValue] = useState("")
    const [search, setSearchParams] = useSearchParams()
    const currentPriceSort = search.get(SORT_BY_PRICE_PARAM) || ""
    const currentEyeCatcherOption = search.get(FILTER_BY_DEALS) || ""
    const currentProductSort = search.get(SORT_BY_PRODUCT_NAME) || ""

    const priceOptions = [
        {
            label: "None",
            value: ""
        },
        {
            label: "Price: Low to high",
            value: "price_desc"
        },
        {
            label: "Price: High to low",
            value: "price_asc"
        },
    ]
    const nameOptions = [
        {
            label: "None",
            value: ""
        },
        {
            label: "SORT A-Z",
            value: "desc"
        },
        {
            label: "SORT Z-A",
            value: "asc"
        },
    ]
    const eyeCatcherOptions = [
        {
            label: "None",
            value: ""
        },
        {
            label: "Deals",
            value: "1"
        }
    ]

    const handleSortByPrice = (val) => {
        currentProductSort && search.delete(SORT_BY_PRODUCT_NAME)
        currentPriceSort && search.delete(SORT_BY_PRICE_PARAM)
        !!val && search.append(SORT_BY_PRICE_PARAM, val)
        setSearchParams(search)
    }

    const handleSortByEyeCatcher = (val) => {
        currentEyeCatcherOption && search.delete(FILTER_BY_DEALS)
        !!val && search.append(FILTER_BY_DEALS, val)
        setSearchParams(search)
    }
    const handleSortProductName = (val) => {
        currentProductSort && search.delete(SORT_BY_PRODUCT_NAME)
        currentPriceSort && search.delete(SORT_BY_PRICE_PARAM)
        !!val && search.append(SORT_BY_PRODUCT_NAME, val)
        setSearchParams(search)
    }

    useEffect(() => {
        setCurrentSorPriceValue(currentPriceSort)
        setCurrentEyeCatcherValue(currentEyeCatcherOption)
    }, [currentEyeCatcherOption, currentPriceSort])

    return (
        <>
            <Row>
                <Col>
                    <h3>Filter by</h3>
                </Col>
            </Row>
            <Row

            >
                <Col size={3}>
                    <Select
                        placeholder={'price'}
                        value={currentSorPriceValue}
                        options={priceOptions}
                        onChange={handleSortByPrice}
                    />
                    <br />
                </Col>
                <Col size={3}>
                    <Select
                        placeholder={'all products'}
                        value={currentEyeCatcherValue}
                        options={eyeCatcherOptions}
                        onChange={handleSortByEyeCatcher}
                    />
                    <br />
                </Col>
                <Col size={3}>
                    <Select
                        placeholder={'product name'}
                        value={currentProductSort}
                        options={nameOptions}
                        onChange={handleSortProductName}
                    />
                    <br />
                </Col>
            </Row>

        </>
    )
}

export default SearchFilters