import React from 'react'
import PropTypes from 'prop-types'
import styles from './FormAndInfo.module.css'

function FormAndInfo({ chatRoom, setChatRoom, handleSubmit }) {
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.form__input}>
          <label htmlFor='chat'>Nombre de la sala de Chat</label>
          <input
            type='text'
            name='chat'
            value={chatRoom}
            id='chat'
            onChange={(e) => setChatRoom(e.target.value)}
          />
        </div>
        <button>Crear</button>
      </form>
    </div>
  )
}

FormAndInfo.propTypes = {
  chatRoom: PropTypes.string.isRequired,
  setChatRoom: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

export default FormAndInfo
