import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const P = styled.p`
  text-align: center;
  font-size: ${(props) => props.fontSize || '1rem'};
  font-weight: ${(props) => props.fontWeight || 'normal'};
  color: ${(props) => props.color || 'black'};
  font-size: ${(props) => props.fontSize || '1rem'};
  height: ${(props) => props.height || 'auto'};
  width: ${(props) => props.width || 'auto'};
  margin: ${(props) => props.margin || '0'};
  padding: ${(props) => props.padding || 'auto'};
`

const Paragraph = ({ text, styles }) => {
  return <P {...styles}>{text}</P>
}

Paragraph.propTypes = {
  text: PropTypes.string.isRequired,
  styles: PropTypes.object,
}

export default Paragraph
