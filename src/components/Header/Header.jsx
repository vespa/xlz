import React from 'react'
import PropTypes from 'prop-types';
import styles from './Header.module.scss'
import { Container, Row, Col } from 'components';
import logo from 'static/logo.svg'
/**
 * Container wraps and centralize element
 */

export const Header = ({
    searchBox,
}) => {
    return (
        <header className={`${styles.header}`} >
            <Container>
                <Row>
                    <Col size={2}>
                        <img src={`${logo}#logo-usage`} alt="logo" style={{ width: '100%', height: '2rem' }} />
                    </Col>
                    <Col>
                        {searchBox}
                    </Col>
                    <Col size={2} />
                </Row>
            </Container>

        </header>
    )
}

Header.propTypes = {
    /** expected text/Component */
    searchBox: PropTypes.object,
}

export default Header

