import React from 'react'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'

function List({ data }) {
  return (
    <div>
      {data.map((element) => (
        <li key={uuidv4()}>{element}</li>
      ))}
    </div>
  )
}

List.propTypes = {
  data: PropTypes.array.isRequired,
}

export default List
