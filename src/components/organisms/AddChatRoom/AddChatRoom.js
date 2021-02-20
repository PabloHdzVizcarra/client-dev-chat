import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.module.css'

AddChatRoom.propTypes = {
  chatRoom: PropTypes.string.isRequired,
  setChatRoom: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

function AddChatRoom({ chatRoom, handleSubmit, setChatRoom }) {
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
          className={styles.btn__open}
        >
          Crear Sala
        </button>
      ) : null}
      {showForm ? (
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.form__input}>
            <label htmlFor='name_chat'>Nombre de la sala de Chat</label>
            <input
              type='text'
              name='chat'
              value={chatRoom}
              id='name_chat'
              onChange={(e) => setChatRoom(e.target.value)}
            />
          </div>
          <input type='submit' className={styles.btn__submit} value='Crear' />
          <button
            onClick={() => {
              setShowForm(false)
              setShowButton(true)
            }}
            className={styles.btn__close}
            type='button'
          >
            Salir
          </button>
        </form>
      ) : null}
    </div>
  )
}

export default AddChatRoom
