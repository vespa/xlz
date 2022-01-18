import React from 'react'
import { Row, Col, SimpleSelector } from 'components'
// import PropTypes from "prop-types";
// import styles from "./SearchFilters.module.scss"
/**
 * Description 
 */

export const SearchFilters = () => {
    const options = [{
        label: 'None',
        value: ''
    }]
    return (
        <Row

        >
            <Col>
                <SimpleSelector
                    options={options}
                    onChange={e => {
                        console.log(e)
                    }}
                />
                <br />
            </Col>
        </Row>
    )
}
// SearchFilters.propTypes = {
//     /**  Example */

// }

export default SearchFilters