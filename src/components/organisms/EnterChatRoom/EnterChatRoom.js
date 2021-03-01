import React from 'react'
import PropTypes from 'prop-types'
import Select from '../../molecules/Select'
import styled from 'styled-components'
import { device } from '../../../utils/size'

EnterChatRoom.propTypes = {
  handleSelect: PropTypes.func.isRequired,
  listChatRooms: PropTypes.array.isRequired,
}

const Button = styled.button`
  width: 40%;
  background-color: rgb(47, 153, 12);
  height: 40px;
  color: #ffffff;
  font-weight: bold;
  margin: 10px 0 0 0;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  font-size: 1.2rem;

  transition: all ease-in 300ms;

  &:hover {
    background-color: rgb(51, 166, 13);
    font-size: 1.3rem;
  }

  @media only screen and ${device.tablet} {
  }
  @media only screen and ${device.laptop} {
    width: 30%;

    &:hover {
      font-size: 1.3rem;
    }
  }
`

function EnterChatRoom({ handleSelect, listChatRooms }) {
  const [selected, setSelected] = React.useState(false)
  const [valueSelect, setValueSelect] = React.useState('-----')

  function handleChangeValueSelect(event) {
    if (event.target.value === '-----') {
      setValueSelect(event.target.value)
      setSelected(false)
      return
    }
    setValueSelect(event.target.value)
    setSelected(true)
  }

  function handleClick() {
    if (valueSelect === '-----') return
    handleSelect(valueSelect)
  }

  return (
    <div>
      {listChatRooms.length !== 0 ? (
        <Select
          data={listChatRooms}
          handleChange={handleChangeValueSelect}
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
              width: '40%',
              hoverBColor: 'rgb(51,166,13)',
              fontSize: '1.2rem',
            }}
            onClick={handleClick}
          >
            Ingresar
          </Button>
        </div>
      ) : null}
    </div>
  )
}

export default EnterChatRoom
