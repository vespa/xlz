import React, { useEffect, useCallback, useState } from 'react'
import PropTypes from "prop-types";
import styles from "./Image.module.scss"
/**
 * Load lazy Image 
 */

export const Image = ({ src, alt, className = "", ...rest }) => {
    const [currentSource, setCurrentSource] = useState("")

    // it deals with the random redirecting provided on the fake api
    const loadImage = useCallback(
        async () => {
            const source = await fetch(src)
            setCurrentSource(source.url)
        }, [src]
    )

    useEffect(() => {
        loadImage()
    }, [loadImage])

    return (
        <>
            {!!currentSource && <img src={currentSource} alt={alt} {...rest} className={`${styles.image} `} />}
            {/* this line is not working now, it expects to be in a SSR env to ensure that the images are indexable */}
            <noscript>
                {!!currentSource && <img src={currentSource} alt={alt} />}
            </noscript>
        </>
    )
}
Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired

}

export default Image