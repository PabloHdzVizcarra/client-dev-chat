import styled from 'styled-components'

export const Container = styled.li`
  display: flex;
  width: max-content;
  align-items: center;
  flex-direction: ${(props) => (props.admin ? 'none' : 'row-reverse')};
`

export const Paragraph = styled.p`
  font-weight: normal;
  font-size: ${(props) => (props.admin ? '1.2rem' : '1rem')};
  margin: 5px 15px;
  border-radius: 6px;
  width: max-content;
  list-style: none;
  background-color: ${(props) =>
    props.admin ? 'rgb(86,121,191)' : 'rgba(86,121,191, .8)'};
  padding: 15px 15px;
  color: #fff;
  display: flex;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
