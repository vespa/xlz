import React from 'react'
import PropTypes from 'prop-types';
import styles from './Col.module.scss'
import withHideActions from '../../_HOCs/withHideActions'
/**
 * Col put elments side by side vertically, redistributing sizes if it is not fixed on the elements. 
 */


export const ColModel = (({
    className,
    children,
    size = '',
    smallSize = '',
    ellipsis = false,
    right,
    ...rest
}) => {
    const colSize = size ? styles[`col_${size}`] : styles.col
    const colSmallSize = smallSize ? styles[`col__sm_${smallSize}`] : ''
    return <div  {...rest} className={`${colSize} ${right ? styles.right : ''} ${colSmallSize} col ${className} ${ellipsis ? styles.ellipsis : ''}`}>{children}</div>
})

export const Col = withHideActions(ColModel)

ColModel.propTypes = {
    /**  custom class */
    className: PropTypes.string,
    /** expected text/Component */
    children: PropTypes.node,
    /** Expected any number between 1 and 12 set how many spaces the cell will take inside the row. */
    size: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    /** hide element at desktop context */
    hideDesktop: PropTypes.bool,
    /** hide element at a moblie context */
    hideMobile: PropTypes.bool,
    /** Expected any number between 1 and 12 set how many spaces the cell will take inside the row. works only for mobile*/
    smallSize: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    /** colapses text if too big for cell size */
    ellipsis: PropTypes.bool,
    /** aligns text to right */
    right: PropTypes.bool


}



export default Col