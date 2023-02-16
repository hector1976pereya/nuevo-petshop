

import Boton from "./Boton"
import "./Tarjeta.css"



const Tarjeta = (props) => {
  return (
    <figure className="figure">
        <img src={props.objeto.img} alt=""/>
        <figcaption>
            <h3 className="h3"
            >{props.objeto.producto}</h3>
            <p className="p"
            > ${props.objeto.precio}</p>
        </figcaption>
        <Boton/>
    </figure>

  )
}

export default Tarjeta