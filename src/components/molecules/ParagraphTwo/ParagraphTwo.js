import React from 'react'
import PropTypes from 'prop-types'
import style from './styles.module.css'

ParagraphTwo.propTypes = {
  show: PropTypes.bool.isRequired,
  textOne: PropTypes.string.isRequired,
  textTwo: PropTypes.string.isRequired,
}

function ParagraphTwo({ show, textOne, textTwo }) {
  return (
    <>
      {!show ? (
        <p className={style.text}>{textOne}</p>
      ) : (
        <p className={style.text}>{textTwo}</p>
      )}
    </>
  )
}

export default ParagraphTwo
