import React from 'react'
import PropTypes from 'prop-types'
import styles from './FormAndInfo.module.css'

function FormAndInfo({ chatRoom, setChatRoom, handleSubmit }) {
  const [showForm, setShowForm] = React.useState(false)
  const [showButton, setShowButton] = React.useState(true)
  return (
    <div className={styles.container}>
      {showButton ? (
        <button
          onClick={() => {
            setShowForm(true)
            setShowButton(false)
          }}
        >
          Crear Sala
        </button>
      ) : null}
      {showForm ? (
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
          <button type='submit'>Crear</button>
          <button
            onClick={() => {
              setShowForm(false)
              setShowButton(true)
            }}
          >
            Salir
          </button>
        </form>
      ) : null}
    </div>
  )
}

FormAndInfo.propTypes = {
  chatRoom: PropTypes.string.isRequired,
  setChatRoom: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

export default FormAndInfo
