import React from 'react'
import PropTypes from "prop-types";
import styles from "./SearchBox.module.scss"
import { Row, Col } from 'components'
/**
 * Search Box 
 */

export const SearchBox = () => {

    return (
        <Row

        >
            <Col>
                <input type={'search'} />
            </Col>
            <Col>
                <button></button>
            </Col>
        </Row>
    )
}
SearchBox.propTypes = {
    /**  Example */
    example: PropTypes.string,

}

export default SearchBox