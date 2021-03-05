import styled from 'styled-components'
import { device } from '../../../utils/size'

export const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
`

export const ContainerBtnCloseSession = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
  padding: 0 20px;
`

export const BtnCloseSession = styled.button`
  cursor: pointer;
  height: 30px;
  background-color: #e6272d;
  border: none;
  border-radius: 2px;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  padding: 0 10px;

  transition: all 300ms ease;

  @media only screen and ${device.tablet} {
  }

  &:hover {
    background-color: #fe2c34;
  }

  &:focus {
    outline: none;
  }
`
