import React from 'react'
import PropTypes from 'prop-types';
import styles from './Container.module.scss'

/**
 * Container wraps and centralize element
 */

export const Container = ({
    children,
    className = '',
    ...rest
}) => {
    return (
        <section className={`${styles.container}`} >
            <div className={`${styles.container__content} ${className}`} {...rest} > {children} </div>
        </section>
    )
}

Container.propTypes = {
    /**  custom class */
    className: PropTypes.string,
    /** expected text/Component */
    children: PropTypes.node,
}

export default Container

