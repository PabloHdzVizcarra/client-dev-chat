import React from 'react'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'
import styled from 'styled-components'

const Container = styled.div`
  padding: 5px;
  display: flex;
  justify-content: center;
  margin: 20px 0 0 0;
`

const ESelect = styled.select`
  padding: 10px;
  width: 20%;
  text-align: center;
  text-align-last: center;
  font-size: 1.1rem;
  border: 2px solid #212121;
  background-color: white;
`

const Option = styled.option`
  text-align: center;
`

Select.propTypes = {
  data: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  valueSelect: PropTypes.string.isRequired,
}

function Select({ data, handleChange, valueSelect }) {
  return (
    <Container>
      <ESelect onChange={(e) => handleChange(e)} value={valueSelect}>
        {<Option key={uuidv4()}>------</Option>}
        {data.map((room) => (
          <Option key={uuidv4()}>{room.name}</Option>
        ))}
      </ESelect>
    </Container>
  )
}

export default Select
