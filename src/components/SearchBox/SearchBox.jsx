import React from 'react'
import PropTypes from "prop-types";
import styles from "./SearchBox.module.scss"
import { Row, Col, Button } from 'components'
/**
 * Search Box 
 */

export const SearchBox = () => {

    return (
        <form onSubmit={e => e.preventDefault()}>
            <Row
                className={styles.search}
            >
                <Col>
                    <input type={'search'} className={styles.search__input} placeholder='Suchbegriff eingeben' />
                </Col>
                <Col size={1}>
                    <Button
                        className={styles.search__button}
                        aria-label="suchen"
                        type={"submit"}
                    > text </Button>
                </Col>
            </Row>
        </form>
    )
}
SearchBox.propTypes = {
    /**  Example */
    example: PropTypes.string,

}

export default SearchBox