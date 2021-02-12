import { useState, useEffect, useRef } from 'react'

const useForm = ({ initialValues, onSubmit }) => {
  const [values, setValues] = useState(initialValues || {})
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})

  const formRendered = useRef(true)

  useEffect(() => {
    if (formRendered.current) {
      setValues(initialValues)
      setErrors({})
      setTouched({})
    }

    formRendered.current = false
  }, [initialValues])

  const handleChangeOneValue = (value) => {
    setValues({ ...values, colorUser: value.hex })
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    event.persist()
    setValues({ ...values, [name]: value })
  }

  const handleBlur = (event) => {
    const { name } = event.target
    setTouched({ ...touched, [name]: true })
    setErrors({ ...errors })
  }

  const handleSubmit = (event) => {
    if (event) event.preventDefault()
    const { username, colorUser } = values

    if (username.length < 3) {
      setErrors({
        username: 'El username debe tener una longitud mayor a 3 caracteres',
      })
      onSubmit({ errors })
      return
    }
    if (!colorUser) {
      setErrors({
        colorUser: 'no seleccionaste ningún color de usuario',
      })
      return
    }
    setErrors({})
    onSubmit({ values, errors })
  }

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    handleChangeOneValue,
  }
}

export default useForm
