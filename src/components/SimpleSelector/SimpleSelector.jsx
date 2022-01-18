import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import { Arrow, Row, Col } from 'components'
import styles from './SimpleSelector.module.scss'

export const SimpleSelector = ({ onChange, options, value, placeholder = 'Select...' }) => {
    const [currentValue, setCurrentValue] = useState()
    const [isOpen, setIsOpen] = useState(false)
    useEffect(() => {
        setCurrentValue(value ? options.filter(item => item.value === value)[0].label : placeholder)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className={styles.selector}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={styles.selector__box}
            >
                <Row className={styles.selector__box__content}>
                    <Col placeholder={placeholder} readOnly className={`${styles.selector__value} ${currentValue === placeholder ? styles.selector__value_placeholder : ''}`}>
                        {currentValue}
                    </Col>
                    <Col>
                        <Arrow style={{ float: 'right' }} />
                    </Col>
                    {/* <FontAwesomeIcon icon={faChevronDown} /> */}
                </Row>
            </button>
            {isOpen &&
                <div className={styles.selector__options}>
                    {options.map(({ label, value }) =>
                        <div key={value}>
                            <div
                                role='button'
                                className={styles.selector__cell}
                                style={!value ? { color: '#ccc', fontStyle: 'italic' } : {}}
                                onClick={() => {
                                    onChange(value)
                                    setCurrentValue(!value ? placeholder : label)
                                    setIsOpen(!isOpen)
                                }}
                            >
                                {label} &nbsp;
                            </div>
                        </div>
                    )}
                </div>
            }
        </div>
    )
}

SimpleSelector.propTypes = {
    /** effect onChage */
    onChange: PropTypes.func.isRequired,
    /** options shown at view */
    options: PropTypes.array.isRequired,
    /** current value */
    value: PropTypes.string,
    placeholder: PropTypes.string
}
