import styled from 'styled-components'

const H1 = styled.h1`
  margin: 1rem 0 0 0;
  font-size: 2rem;
  font-weight: lighter;
`

const HeaderH1 = ({text}) => {
  return (
    <H1>{text}</H1>
  )
}

export default HeaderH1