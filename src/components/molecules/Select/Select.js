import React from 'react'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'

Select.propTypes = {
  data: PropTypes.array.isRequired,
}

function Select({ data }) {
  return (
    <select>
      <option key={uuidv4()} defaultValue='selected'>
        --- chat room ---
      </option>
      {data.map((room) => (
        <option key={uuidv4()}>{room.name}</option>
      ))}
    </select>
  )
}

export default Select
