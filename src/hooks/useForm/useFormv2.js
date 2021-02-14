import { useState, useEffect, useRef } from 'react'

const useFormV2 = (initialValues, onSubmit, validateValuesFunc) => {
  const [values, setValues] = useState(initialValues || {})
  const [errors, setErrors] = useState({})

  const formRendered = useRef(true)

  useEffect(() => {
    if (formRendered.current) {
      setValues(initialValues)
      setErrors({})
    }

    formRendered.current = false
  }, [initialValues])

  const handleChange = (event) => {
    const { name, value } = event.target
    event.persist()
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = (event) => {
    if (event) event.preventDefault()

    const errors = validateValuesFunc(values)

    if (errors) {
      setErrors(errors)
    }

    setErrors({})
    onSubmit(values)
  }

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  }
}

export default useFormV2
