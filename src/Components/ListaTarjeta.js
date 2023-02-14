


import Tarjeta from "./Tarjeta"
import "./ListaTarjeta.css"


const ListaTarjeta = (props) => {
  return (
    <div className="listatarj">
    {
      props.lista.map(objeto => <Tarjeta Key={objeto.id} objeto={objeto} />)
    }
    </div>
  )
}

export default ListaTarjeta
