import React, { useEffect, useState } from 'react'
import PropTypes from "prop-types";
import { useSearchParams } from 'react-router-dom';
import styles from "./SearchBox.module.scss"
import { Row, Col, Button } from 'components'
import { SEARCHABLE_TERMS_PARAM } from 'infra/api'

/**
 * Search Box 
 */

export const SearchBox = () => {
    const [search, setSearchParams] = useSearchParams()
    const currentSearch = search.get(SEARCHABLE_TERMS_PARAM)
    // const navigate = useNavigate()
    const [searchTerm, setSearchTerm] = useState("")
    const handleSearch = (e) => {
        e.preventDefault()
        currentSearch && search.delete(SEARCHABLE_TERMS_PARAM)
        !!searchTerm && search.append(SEARCHABLE_TERMS_PARAM, searchTerm)
        setSearchParams(search)
    }
    useEffect(() => {
        !!currentSearch && setSearchTerm(currentSearch.replace(/\|/g, ' '))
    }, [currentSearch])
    return (
        <form onSubmit={handleSearch}>
            <Row
                className={styles.search}
            >
                <Col smallSize={8}>
                    <input
                        type={'search'}
                        value={searchTerm}
                        className={styles.search__input} placeholder='Enter a search term'
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                </Col>
                <Col size={1} smallSize={4}>
                    <Button
                        className={styles.search__button}
                        aria-label="search"
                        type={"submit"}
                    > Search </Button>
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