import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const H1 = styled.h1`
  font-size: ${(props) => props.fontSize || 'auto'};
  font-weight: normal;
  margin: ${(props) => props.margin || '0'};
  font-family: ${(props) => props.fontFamily || 'JetBrains Mono'};
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
