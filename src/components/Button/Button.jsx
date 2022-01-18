import React from 'react'
import PropTypes from "prop-types";
import styles from "./Button.module.scss"
/**
 * Description 
 */

export const Button = ({
    children,
    className = '',
    ...rest
}) => {

    return (
        <button
            className={`${styles.button} ${className}`}
            {...rest}
        >
            {children}
        </button>
    )
}
Button.propTypes = {
    /**  text inside button */
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,

}

export default Button