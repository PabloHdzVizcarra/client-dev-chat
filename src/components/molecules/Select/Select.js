import React from 'react'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'
import { ContainerSelect, ESelect, Option } from './styles'

Select.propTypes = {
  data: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  valueSelect: PropTypes.string.isRequired,
}

function Select({ data, handleChange, valueSelect }) {
  return (
    <ContainerSelect>
      <ESelect onChange={(e) => handleChange(e)} value={valueSelect}>
        {<Option key={uuidv4()}>-----</Option>}
        {data.map((room) => (
          <Option key={uuidv4()}>{room.name}</Option>
        ))}
      </ESelect>
    </ContainerSelect>
  )
}

export default Select
