import styled from 'styled-components'
import { ImCross } from 'react-icons/im'

export const ContainerDataUsers = styled.div`
  background-color: rgba(65, 199, 199, 0.8);
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

//TODO: animation close button X
export const CloseIcon = styled(ImCross)`
  padding-right: 5px;
  padding-top: 5px;
  cursor: pointer;
  color: #fe2c34;
`

export const NameChatRoom = styled.p`
  color: #333333;
  font-weight: bold;
  font-size: 1.4rem;
  width: 100%;
  margin-bottom: 10px;
`
