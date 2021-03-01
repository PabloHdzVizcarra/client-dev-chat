import styled from 'styled-components'
import { device } from '../../../utils/size'

export const ContainerSelect = styled.div`
  padding: 5px;
  display: flex;
  justify-content: center;
  margin: 20px 0 0 0;
  width: 100%;
`

export const ESelect = styled.select`
  padding: 10px;
  width: 60%;
  text-align: center;
  text-align-last: center;
  font-size: 1.1rem;
  border: 2px solid #212121;
  background-color: white;
  cursor: pointer;

  @media only screen and ${device.tablet} {
    width: 40%;
  }
  @media only screen and ${device.laptop} {
    width: 30%;
  }
`

export const Option = styled.option`
  text-align: center;
`
