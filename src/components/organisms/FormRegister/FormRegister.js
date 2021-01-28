import styled from 'styled-components'
import Input from '../../atoms/input/Input'
import Label from '../../atoms/label/Label'
import Button from '../../atoms/button/Button'

const Form = styled.form`
  padding: 10px;
  background-color: aliceblue;
  margin-top: 1rem;
`

const Container = styled.div`
  display: grid;
  gap: 10px;
`

const FormRegister = ({ values, handleChange, handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Container>
        <Label text={`Username`}/>
        <Input
          name='username'
          type='text'
          inputColor='#212121'
          value={values.username}
          handleChange={handleChange}
        />
        <Button
          textButton='Registrar'
        />
      </Container>
    </Form>
  )
}

export default FormRegister