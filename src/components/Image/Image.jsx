import React, { useEffect, useCallback, useState, useRef } from 'react'
import PropTypes from "prop-types";
import styles from "./Image.module.scss"
/**
 * Load lazy Image 
 */




export const Image = ({ src, alt, className = "", ...rest }) => {
    const [currentSource, setCurrentSource] = useState("")
    const imageEl = useRef(null)
    // it deals with the random redirecting provided on the fake api
    const loadImage = useCallback(
        async () => {
            const source = await fetch(src)
            setCurrentSource(source.url)
        }, [src]
    )

    const preload = (elem) => {
        elem.setAttribute('src', elem.getAttribute('data-src'))
    }

    const checkVisible = (elm) => {
        var { bottom, top } = elm.getBoundingClientRect();
        var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
        return !(bottom < 0 || top - viewHeight >= 0);
    }

    const isImageVisible = useCallback(async () => {
        if (checkVisible(imageEl.current)) {
            window.removeEventListener('scroll', isImageVisible, false)
            await loadImage()
            preload(imageEl.current.querySelector('img'))
        }
    }, [loadImage])

    const configureLazyLoad = useCallback(() => {
        const elem = imageEl.current
        elem.style.height = window.getComputedStyle(elem).width
        !checkVisible(imageEl.current) && window.addEventListener("scroll", isImageVisible, false)
    }, [isImageVisible])



    useEffect(() => {
        isImageVisible()
    }, [isImageVisible])

    useEffect(() => {
        imageEl.current && configureLazyLoad()
    }, [configureLazyLoad])

    return (
        <>
            {<div ref={imageEl} className={`${styles.image}`} >
                {currentSource &&
                    <img
                        data-src={currentSource} alt={alt}
                        {...rest} className={`${styles.image} `}
                        onLoad={e => e.target.setAttribute('style', 'opacity:1')}
                    />}
            </div>
            }
            {/* this line is not working now, it expects to be in a SSR env to ensure that the images are indexable */}
            {/* <noscript>
                {!!currentSource && <img src={currentSource} alt={alt} />}
            </noscript> */}
        </>
    )
}
Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired

}

export default Image