import styled from 'styled-components'

// const Container = styled.div`
//   display: grid;
//   grid-template-rows: 5% 90% 5%;
//   height: 100vh;
//   background-color: #fff;
// `

const Paragraph = styled.p`
  text-align: center;
  font-size: 1.5rem;
  margin: 0;
  font-weight: bold;
`

const ContainerData = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  background-color: #f0f0f0;
`

const Message = styled.li`
  padding: 5px;
  margin: 5px;
  border-radius: 6px;
  border: 0.5px solid #ededed;
  width: max-content;
  list-style: none;
`

const WrapperMessage = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.admin === true ? 'flex-end' : 'flex-start'};
`

export const ContainerHomeTemplate = styled.div`
  display: grid;
  grid-template-rows: min-content;
  grid-template-columns: 25% 75%;
  background-color: #ffffff;
  height: 100%;
`

export const BtnContainer = styled.div`
  grid-column: 1/3;
  justify-self: end;
  padding: 0 1rem;
`

export { Paragraph, Message, ContainerData, WrapperMessage }
