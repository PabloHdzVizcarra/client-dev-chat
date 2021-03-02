import styled from 'styled-components'
import { ImCross } from 'react-icons/all'

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
