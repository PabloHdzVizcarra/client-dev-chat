import styled from 'styled-components'
import { device } from '../../../utils/size'
import { AiOutlineMessage } from 'react-icons/ai'
import { ImCross } from 'react-icons/all'

export const ContainerHomeTemplate = styled.div`
  display: grid;
  grid-template-rows: max-content;
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
  height: 100%;

  @media only screen and ${device.tablet} {
  }
  @media only screen and ${device.laptop} {
  }
`
export const ContainerUsersArea = styled.div`
  grid-column: 1/2;
  grid-row: 1/2;
  display: flex;

  @media only screen and ${device.tablet} {
  }
  @media only screen and ${device.laptop} {
    grid-row: 1/3;
    grid-column: 1/2;
  }
`

export const IconMessages = styled(AiOutlineMessage)`
  color: rgb(65, 199, 199);
  font-size: 2rem;
  margin-left: 5px;
`

export const ContainerDataUsers = styled.div`
  background-color: rgba(22, 97, 203, 0.9);
  position: fixed;
  top: 0;
  width: 150px;
  height: 100%;
  display: flex;
  flex-direction: column;
`
export const ContainerCloseIcon = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const CloseIcon = styled(ImCross)`
  padding-right: 5px;
  padding-top: 5px;
  cursor: pointer;
  color: #fe2c34;
`
