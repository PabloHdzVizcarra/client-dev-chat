import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-rows: 5% 90% 5%;
  height: 100vh;
  background-color: #fff;
`

const Paragraph = styled.p`
  text-align: center;
  font-size: 1.5rem;
  margin: 0;
  font-weight: bold;
`

const FlexContainer = styled.div`
  display: flex;
  background-color: #fff;
  padding: 5px;
  color: #12a8ff;
`

const ContainerData = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  background-color: #f0f0f0;
`

const ContainerMessages = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  overflow: auto;
  padding: 10px;
  margin: 0;
`

const ContainerUsers = styled.div`
  padding: 10px;
  overflow: auto;
`

const InputText = styled.input`
  height: 100%;
  width: 90%;
`

const Button = styled.button`
  width: 10%;
  height: 110%;
  border-radius: 6px;
  margin-left: 5px;
  padding: 0;
  border: none;
`

const Message = styled.li`
  padding: 5px;
  background-color: beige;
  margin: 2px 0;
  border-radius: 6px;
  width: max-content;
  list-style: none;
`

export {
  Container,
  Paragraph,
  FlexContainer,
  ContainerMessages,
  InputText,
  Button,
  Message,
  ContainerData,
  ContainerUsers,
}
