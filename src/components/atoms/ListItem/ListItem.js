import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Li = styled.li`
  list-style: none;
  font-weight: bold;
  font-size: 1.1rem;
  text-transform: capitalize;
  color: #262626;
`

function ListItem({ text }) {
  return <Li>{text}</Li>
}

ListItem.propTypes = {
  text: PropTypes.string.isRequired,
}

export default ListItem
