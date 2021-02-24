import React from 'react'
import PropTypes from 'prop-types'
import Select from '../../molecules/Select'
import Button from '../../atoms/button/Button'

EnterChatRoom.propTypes = {
  handleSelect: PropTypes.func.isRequired,
  listChatRooms: PropTypes.array.isRequired,
}

function EnterChatRoom({ handleSelect, listChatRooms }) {
  const [selected, setSelected] = React.useState(false)
  const [valueSelect, setValueSelect] = React.useState('-----')

  function handleChange(event) {
    console.log(event.target.value)
    if (!event.target.value || event.target.value === '-----') {
      return setSelected(false)
    }
    setValueSelect(event.target.value)
    setSelected(true)
    handleSelect()
  }

  React.useEffect(() => {}, [selected])
  return (
    <div>
      {listChatRooms.length !== 0 ? (
        <Select
          data={listChatRooms}
          handleChange={handleChange}
          valueSelect={valueSelect}
        />
      ) : null}
      {selected ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '15px',
          }}
        >
          <Button
            textButton='Ingresar'
            styles={{
              backgroundColor: 'rgb(47,153,12)',
              height: '40px',
              color: '#ffffff',
              fontWeight: 'bold',
              margin: '10px 0 0 0',
              width: '10%',
              hoverBColor: 'rgb(51,166,13)',
              fontSize: '1.2rem',
            }}
          />
        </div>
      ) : null}
    </div>
  )
}

export default EnterChatRoom
