import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'

AlertError.propTypes = {
  text: PropTypes.string.isRequired,
  nodeRef: PropTypes.object,
}

function AlertError({ text, nodeRef }) {
  return (
    <div className={styles.alert} ref={nodeRef}>
      <p className={styles.alert__info}>{text}</p>
    </div>
  )
}

export default AlertError
