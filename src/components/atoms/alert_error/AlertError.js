import styled from 'styled-components'

const Container = styled.div`
  padding: 15px;
  border-radius: 6px;
  background-color: #c73954;
  margin: 10px 0;
`

const Paragraph = styled.p`
  font-weight: normal;
  color: #ffffff;
  margin: 0;
`

const AlertError = ({message}) => {
  return(
    <Container>
      <Paragraph>{message}</Paragraph>
    </Container>
  )
}

export default AlertError