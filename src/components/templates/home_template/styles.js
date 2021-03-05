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
  //padding: 5px 10px;
  display: flex;
  align-items: center;
  background-color: rgba(86, 121, 191, 0.8);
  width: 100%;
  justify-content: flex-end;

  @media only screen and ${device.tablet} {
  }
  @media only screen and ${device.laptop} {
    align-items: center;
    height: 100%;
    display: flex;
    padding: 2px 10px;
    background-color: #ffffff;
  }
`
export const ContainerUsersArea = styled.div`
  grid-column: 1/2;
  grid-row: 1/2;
  display: flex;
  justify-content: flex-start;
  background-color: rgba(86, 121, 191, 0.8);

  @media only screen and ${device.tablet} {
  }
  @media only screen and ${device.laptop} {
    grid-row: 1/3;
    grid-column: 1/2;
    justify-content: center;
    padding: 10px;
    background-color: #ffffff;
  }
`

export const IconMessages = styled(AiOutlineMessage)`
  color: rgb(65, 199, 199);
  font-size: 2.5rem;
  margin-left: 5px;
`
