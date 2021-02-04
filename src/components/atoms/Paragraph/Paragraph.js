import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const P = styled.p`
  text-align: center;
  font-size: 1.5rem;
  margin: 0;
  font-weight: bold;
`

const Paragraph = ({ text, styles }) => {
  return <P {...styles}>{text}</P>
}

Paragraph.propTypes = {
  text: PropTypes.string.isRequired,
  styles: PropTypes.object,
}

export default Paragraph
