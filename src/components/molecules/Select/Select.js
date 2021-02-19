import React from 'react'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'

Select.propTypes = {
  data: PropTypes.array.isRequired,
}

function Select({ data }) {
  return (
    <select>
      {data.map((element) => (
        <option key={uuidv4()}>{element}</option>
      ))}
    </select>
  )
}

export default Select
