import React from 'react'
import PropTypes from 'prop-types'

function Expire(props) {
  const [isVisible, setIsVisible] = React.useState(true)
  const [children, setChildren] = React.useState(props.children)

  React.useEffect(() => {
    setChildren(props.children)
    setIsVisible(true)
    setTimer(props.delay)
  }, [props.children, props.delay])

  const setTimer = (delay) => {
    setTimeout(() => setIsVisible(false), delay)
  }
  return isVisible ? <>{children}</> : null
}

Expire.propTypes = {
  delay: PropTypes.number,
  children: PropTypes.object,
}

export default Expire
