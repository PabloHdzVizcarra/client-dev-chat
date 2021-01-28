import styled from 'styled-components'

const ElementLabel = styled.label`
  color: darkcyan;
  margin: 10px 0 0 0;
`

const Label = ({ text }) => {

  return (
    <ElementLabel>{text}</ElementLabel>
  )
}

export default Label