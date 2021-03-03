import styled from 'styled-components'
import { device } from '../../../utils/size'
import { AiOutlineMessage } from 'react-icons/ai'

export const ContainerHomeTemplate = styled.div`
  display: grid;
  grid-template-rows: max-content;
  grid-template-columns: 25% 75%;
  background-color: #ffffff;
  height: 100%;

  @media only screen and ${device.tablet} {
  }
  @media only screen and ${device.laptop} {
    grid-template-columns: 25% 75%;
    grid-template-rows: 7% 92%;
  }
`

export const BtnContainer = styled.div`
  grid-column: 2/3;
  justify-self: end;
  height: 40px;
  padding: 5px 10px;
  display: flex;
  align-items: center;

  @media only screen and ${device.tablet} {
  }
  @media only screen and ${device.laptop} {
    align-items: center;
    height: 100%;
    display: flex;
    padding: 2px 10px;
  }
`
export const ContainerUsersArea = styled.div`
  grid-column: 1/2;
  grid-row: 1/2;
  display: flex;
  justify-content: flex-start;

  @media only screen and ${device.tablet} {
  }
  @media only screen and ${device.laptop} {
    grid-row: 1/3;
    grid-column: 1/2;
    justify-content: center;
    padding: 10px;
  }
`

export const IconMessages = styled(AiOutlineMessage)`
  color: rgb(65, 199, 199);
  font-size: 2rem;
  margin-left: 5px;
`
