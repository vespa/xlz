import React from 'react'
import PropTypes from 'prop-types';
import styles from './Row.module.scss'
import withHideActions from '../../_HOCs/withHideActions'

/**
 * Row make elements **Col** line side by side, redistributing sizes if it is not fixed on children elements.
 * Avoid use any element that not is an **Col**
 */

const RowModel = ({
    children,
    className = '',
    list = false,
    subItem = false,
    title = false,
    ...rest
}) => {
    return (
        <section
            className={`
            ${styles.row} 
            ${(list && !subItem) ? styles.row__list : ''}
            ${subItem ? styles.row__list__item : ''}
            ${title ? styles.row__list__item_title : ''}
            ${className}`}

            {...rest}
        >
            {children}
        </section>)
}



RowModel.propTypes = {
    /**  custom class */
    className: PropTypes.string,
    /** expected text/Component */
    children: PropTypes.node,
    /** assumes list style */
    list: PropTypes.bool,
    /** assumes list subItem style */
    subItem: PropTypes.bool,
    /** assumes list subItem title style */
    title: PropTypes.bool
}

export const Row = withHideActions(RowModel)

export default Row

