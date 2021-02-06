import { CSSTransition } from 'react-transition-group'
import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

/*
 *Este componente requiere agregar un estado al componente donde se implementara Example: const [entered, setEntered] = React.useState(true),
 */
const Disappear = ({ in: inProp }) => {
  const nodeRef = React.useRef(null)
  return (
    <CSSTransition
      unmountOnExit
      in={inProp}
      timeout={{ appear: 0, enter: 0, exit: 300 }}
      classNames='roll'
      appear
      nodeRef={nodeRef}
    >
      <div
        style={{
          position: 'fixed',
        }}
        ref={nodeRef}
      >
        Gator
      </div>
    </CSSTransition>
  )
}

Disappear.propTypes = {
  in: PropTypes.bool.isRequired,
}

export default Disappear
