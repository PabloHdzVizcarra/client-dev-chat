import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'
import './index.css'

/**
 *This component requires a state to be able to activate the animation from the parent component, Example: const [entered, setEntered] = React.useState(true)
 * @param {boolean} in prop
 */
const Disappear = ({ in: inProp, children }) => {
  return (
    <CSSTransition
      unmountOnExit
      in={inProp}
      timeout={{ appear: 300, enter: 1000, exit: 300 }}
      classNames='roll'
    >
      {children}
    </CSSTransition>
  )
}

Disappear.propTypes = {
  in: PropTypes.bool.isRequired,
  children: PropTypes.object,
  childRef: PropTypes.object,
}

export default Disappear
