import React, { useEffect, useCallback, useState, useRef } from 'react'
import PropTypes from "prop-types";
import styles from "./Image.module.scss"

/**
 *  lazy load Image 
 */

export const Image = ({
    src,
    alt,
    className = "",
    // dependency injection
    fetch = global.fetch,
    ...rest
}) => {
    const [currentSource, setCurrentSource] = useState("")
    const [loaded, setLoaded] = useState(false)
    const imageEl = useRef(null)

    // it deals with the random redirecting provided on the fake api
    const loadImage = useCallback(
        async () => {
            const source = await fetch(src)
            setCurrentSource(source.url)
        }, [fetch, src]
    )

    const preload = (elem) => {
        elem.setAttribute('src', elem.getAttribute('data-src'))
    }

    const checkVisible = (elm) => {
        if (!elm) return false
        var { bottom, top } = elm.getBoundingClientRect();
        var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
        return !(bottom < 0 || top - viewHeight >= 0);
    }

    const isImageVisible = useCallback(async () => {
        if (loaded) return false;
        if (checkVisible(imageEl.current)) {
            setLoaded(true)
            window.removeEventListener('scroll', isImageVisible, false)
            await loadImage()
            setTimeout(() => {
                imageEl.current.removeAttribute('style')
            }, 200)
            preload(imageEl.current.querySelector('img'))
        }
    }, [loadImage, loaded])

    const configureLazyLoad = useCallback(() => {
        const elem = imageEl.current
        elem.style.height = window.getComputedStyle(elem).width
        !checkVisible(imageEl.current) && window.addEventListener("scroll", isImageVisible, false)
    }, [isImageVisible])

    useEffect(() => {
        imageEl.current && configureLazyLoad()
    }, [configureLazyLoad])

    useEffect(() => {
        imageEl.current && !loaded && isImageVisible()
    })

    return (
        <>
            {<div ref={imageEl} className={`${styles.image}`} {...rest} >
                {currentSource && loaded &&
                    <>
                        <img
                            itemProp="image"
                            data-src={currentSource}
                            alt={alt}
                            className={`${styles.image} `}
                            onLoad={
                                e => setTimeout(() => {
                                    e.target.setAttribute('style', 'opacity:1')
                                }, 100)}
                        />
                        {/* this assure that crawlers will be able to find the image */}
                        <a className={`${styles.hidden_link} `} href={currentSource}>{currentSource}</a>
                    </>
                }
            </div>
            }
        </>
    )
}
Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired

}

export default Image