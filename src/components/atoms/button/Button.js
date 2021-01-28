import styled from 'styled-components'

const ElementButton = styled.button`
    
  `

const Button = ({textButton}) => {
  return(
    <ElementButton
      type='submit'
    >
      {textButton}
    </ElementButton>
  )
}

export default Button