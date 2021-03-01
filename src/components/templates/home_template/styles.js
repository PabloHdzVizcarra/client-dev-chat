import styled from 'styled-components'
import { device } from '../../../utils/size'

export const ContainerHomeTemplate = styled.div`
  display: grid;
  grid-template-rows: min-content;
  grid-template-columns: 25% 75%;
  background-color: #ffffff;
  height: 100%;

  @media only screen and ${device.tablet} {
  }
  @media only screen and ${device.laptop} {
    background-color: #ffffff;
  }
`

export const BtnContainer = styled.div`
  grid-column: 2/3;
  justify-self: end;
  padding: 0 1rem;

  @media only screen and ${device.tablet} {
  }
  @media only screen and ${device.laptop} {
  }
`
export const ContainerUsersArea = styled.div`
  grid-column: 1/2;
  grid-row: 1/2;

  @media only screen and ${device.tablet} {
  }
  @media only screen and ${device.laptop} {
    grid-row: 1/3;
    grid-column: 1/2;
  }
`
