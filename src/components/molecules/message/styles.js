import styled from 'styled-components'

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  width: min-content;
  align-items: center;
  margin-bottom: 10px;
`

export const Paragraph = styled.p`
  font-weight: normal;
  font-size: ${(props) => (props.admin ? '1.2rem' : '1rem')};
  margin: 0 15px 0 15px;
  border-radius: 6px;
  width: max-content;
  list-style: none;
  background-color: ${(props) =>
    props.admin ? 'rgb(86,121,191)' : 'rgba(86,121,191, .8)'};
  padding: 10px 15px;
  color: #fff;
  display: flex;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

export const UserName = styled.p`
  font-size: 0.7rem;
  padding: 0 15px;
  width: 80%;
  text-align: left;
  color: #333333;
`
