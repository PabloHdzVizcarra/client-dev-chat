import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'

AlertError.propTypes = {
  text: PropTypes.string.isRequired,
}

function AlertError({ text }) {
  return (
    <div className={styles.alert}>
      <p className={styles.alert__info}>{text}</p>
    </div>
  )
}

export default AlertError
