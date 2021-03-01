import React from 'react'
import PropTypes from 'prop-types'
import Select from '../../molecules/Select'
import styled from 'styled-components'
import { device } from '../../../utils/size'

OptionalChatRoom.propTypes = {
  infoMessage: PropTypes.string.isRequired,
  children: PropTypes.element,
  roomList: PropTypes.array.isRequired,
  handleSetRoom: PropTypes.func.isRequired,
}

const ContainerOptionalChatRoom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

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

function OptionalChatRoom({ infoMessage, roomList, handleSetRoom }) {
  const [isButton, setIsButton] = React.useState(false)
  const [valueSelect, setValueSelect] = React.useState('')

  function handleSelectOption(event) {
    if (event.target.value === '-----') {
      setValueSelect('-----')
      setIsButton(false)
      return
    }
    setValueSelect(event.target.value)
    setIsButton(true)
  }

  function handleClick() {
    handleSetRoom(valueSelect)
  }
  return (
    <ContainerOptionalChatRoom>
      <p>{infoMessage}</p>
      <Select
        valueSelect={valueSelect}
        handleChange={handleSelectOption}
        data={roomList}
      />
      {isButton ? <Button onClick={handleClick}>Ingresar</Button> : null}
    </ContainerOptionalChatRoom>
  )
}

export default OptionalChatRoom
