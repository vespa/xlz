import React from 'react'
import PropTypes from 'prop-types';
import styles from './Header.module.scss'

/**
 * Container wraps and centralize element
 */

export const Header = ({
    children,
    className = '',
    ...rest
}) => {
    return (
        <header className={`${styles.container}`} >
            <div className={`${className}`} {...rest} > {children} </div>
        </header>
    )
}

Header.propTypes = {
    /**  custom class */
    className: PropTypes.string,
    /** expected text/Component */
    children: PropTypes.node,
}

export default Header

