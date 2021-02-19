import React from 'react'
import PropTypes from 'prop-types'
import './FormAndInfo.css'

function FormAndInfo({ text }) {
  return (
    <div>
      <p>{text}</p>
      <div>
        <form>
          <input placeholder='nombre de la sala de chat' />
          <button>Crear</button>
        </form>
      </div>
    </div>
  )
}

FormAndInfo.propTypes = {
  text: PropTypes.string.isRequired,
}

export default FormAndInfo
