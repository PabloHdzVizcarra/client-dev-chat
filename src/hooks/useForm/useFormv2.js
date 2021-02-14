import { useState, useEffect, useRef } from 'react'

const useFormV2 = (initialValues, onSubmit, validateValuesFunc) => {
  const [values, setValues] = useState(initialValues || {})
  const [errors, setErrors] = useState({})
  const [showErrorAlert, setShowErrorAlert] = useState(false)

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
      setShowErrorAlert(true)
      setErrors(errors)
      return
    }

    setErrors({})
    onSubmit(values)
  }

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    showError: showErrorAlert,
  }
}

export default useFormV2
