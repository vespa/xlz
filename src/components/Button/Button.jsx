import React from 'react'
import PropTypes from "prop-types";
import styles from "./Button.module.scss"
/**
 * Description 
 */

export const Button = ({
    text,
    ...rest
}) => {

    return (
        <button
            className={styles.button}
            {...rest}
        >

        </button>
    )
}
Button.propTypes = {
    /**  text inside button */
    text: PropTypes.string,

}

export default Button