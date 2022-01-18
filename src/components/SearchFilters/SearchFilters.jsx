import React, { useEffect, useState } from 'react'
import { Row, Col, SimpleSelector } from 'components'
import { useSearchParams } from 'react-router-dom'
import { SORT_BY_PRICE_PARAM } from 'infra/api'

export const SearchFilters = () => {

    const [currentSorPriceValue, setCurrentSorPriceValue] = useState("")
    const [search, setSearchParams] = useSearchParams()
    const currentPriceSort = search.get(SORT_BY_PRICE_PARAM) || ""
    const options = [
        {
            label: 'None',
            value: ''
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
    const handleSortByPrice = (val) => {
        currentPriceSort && search.delete(SORT_BY_PRICE_PARAM)
        !!val && search.append(SORT_BY_PRICE_PARAM, val)
        setSearchParams(search)
    }
    useEffect(() => {
        setCurrentSorPriceValue(currentPriceSort)
    }, [currentPriceSort])
    return (
        <Row

        >
            <Col>
                <SimpleSelector
                    value={currentSorPriceValue}
                    options={options}
                    onChange={handleSortByPrice}
                />
                <br />
            </Col>
        </Row>
    )
}

export default SearchFilters