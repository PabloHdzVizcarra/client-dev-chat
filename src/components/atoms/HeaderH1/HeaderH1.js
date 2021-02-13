import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const H1 = styled.h1`
  font-size: ${(props) => props.fontSize || '1rem'};
  text-align: ${(props) => props.textAlign || 'auto'};
  color: ${(props) => props.color || 'black'};
  font-weight: ${(props) => props.fontWeight || 'normal'};
  margin: ${(props) => props.margin || '0'};
  font-family: 'Roboto Mono', monospace;
  text-align: ${(props) => props.textAlign || 'left'};
`

const HeaderH1 = ({ text, styles }) => {
  return <H1 {...styles}>{text}</H1>
}

HeaderH1.propTypes = {
  text: PropTypes.string.isRequired,
  styles: PropTypes.object,
}

export default HeaderH1
