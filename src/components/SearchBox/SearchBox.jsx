import React, { useEffect, useState } from 'react'
import PropTypes from "prop-types";
import styles from "./SearchBox.module.scss"
import { Row, Col, Button } from 'components'
import { useNavigate, useSearchParams } from 'react-router-dom';
/**
 * Search Box 
 */

export const SearchBox = () => {
    const searchableTerms = "searchableTerms_like"
    const [searchParams] = useSearchParams()
    const currentSearch = searchParams.get(searchableTerms)
    const navigate = useNavigate()
    const [searchTerm, setSearchTerm] = useState("")
    const handleSearch = (e) => {
        e.preventDefault()
        navigate(`/?${searchableTerms}=${searchTerm.trim().replace(/\s{1,}/g, " ").split(" ").join("|")}`)
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
                        className={styles.search__input} placeholder='Suchbegriff eingeben'
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                </Col>
                <Col size={1} smallSize={4}>
                    <Button
                        className={styles.search__button}
                        aria-label="suchen"
                        type={"submit"}
                    > Suchen </Button>
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