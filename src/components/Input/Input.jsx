import React from 'react'
import PropTypes from "prop-types";
import styles from "./Input.module.scss"
/**
 * Description 
 */

export const Input = ({
    className = "",
    ...rest
}) => {

    return (
        <input className={`${styles.input} ${className}`} {...rest} />
    )
}
Input.propTypes = {
    /**  custom class */
    example: PropTypes.string,

}

export default Input