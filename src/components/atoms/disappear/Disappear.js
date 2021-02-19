import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'
import './index.css'

/**
 *Este componente requiere un state para funcionar, por defecto debe ser false se debe agregar el componente al cual se desea elaborar la animación como {children}
 * @param {boolean} in - state que renderiza el componente por defecto false
 * @param {React.MutableRefObject} nodeRef - para poder ejecutar la transition requiere usar el hook UseRef y pasarlo como prop al componente
 * @param {React.Component} children - componente a renderizar con la animación
 */
const Disappear = ({ in: inProp, children, nodeRef }) => {
  return (
    <CSSTransition
      unmountOnExit
      in={inProp}
      timeout={{ appear: 300, enter: 1000, exit: 300 }}
      classNames='roll'
      nodeRef={nodeRef}
    >
      {children}
    </CSSTransition>
  )
}

Disappear.propTypes = {
  in: PropTypes.bool.isRequired,
  children: PropTypes.object,
  nodeRef: PropTypes.object,
}

export default Disappear
