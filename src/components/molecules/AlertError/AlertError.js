import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'
import styled from 'styled-components'

const Container = styled.div`
  position: fixed;
  right: 10px;
  top: 10px;
  padding: 10px 6px;
  margin: 6px;
  border-radius: 3px;
  border: 1px solid rgb(238, 211, 215);
  background-color: rgb(242, 222, 222);
`

AlertError.propTypes = {
  text: PropTypes.string.isRequired,
  nodeRef: PropTypes.object,
}

function AlertError({ text, nodeRef }) {
  return (
    <Container ref={nodeRef}>
      <p className={styles.alert__heading}>ERROR</p>
      <p className={styles.alert__info}>{text}</p>
    </Container>
  )
}

export default AlertError
