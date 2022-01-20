import React from 'react'
import PropTypes from "prop-types";
import styles from "./Arrow.module.scss"
/**
 * Small arrow element 
 */

export const Arrow = ({ onClick = () => { }, type = 'down' }) => (
    <div
        role="button"
        className={`
            ${styles.arrows__button}
            ${styles[`arrows__button--${type}`]}
            ${styles.arrows__active}
        `}
        onClick={onClick}
    />
)
Arrow.propTypes = {
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['down', 'up']),

}

export default Arrow