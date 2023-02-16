import React from 'react';
import './Productos.css';
import { Link } from 'react-router-dom';


// Pagina de productos


function Productos() {
  return (
        <div className="cardContainer">         
         {/* Tarjeta productos perros */}
          <div className="card">
            <Link to="/productos-perros">
              <img className="productosImg" src={"https://cdn11.bigcommerce.com/s-lmdkge2gql/images/stencil/original/image-manager/dog.jpg?t=1672739290"} alt="perros" />                   <p className='productosP'>Productos para tu perro</p>
              <button className='productosBtn'>Perros</button>
            </Link>
          </div>

          {/* Tarjeta productos gatos */}
          <div className="card">
            <Link to="/productos-gatos">
              <img className="productosImg" src={"https://cdn11.bigcommerce.com/s-lmdkge2gql/images/stencil/original/image-manager/cat.jpg?t=1672739307"} alt="gatos" />
              <p className='productosP'>Productos para tu gato</p>
              <button className='productosBtn'>Gatos</button>
            </Link>  
          </div>

          {/* Tarjeta productos accesorios */}
          <div className="card">
            <Link to="/accesorios">
              <img className="productosImg" src={"https://www.purina.co.uk/sites/default/files/2020-12/Garden%20Dog%20ToysHERO.jpg"} alt="accesorios" />
              <p className='productosP'>Accesorios para tu mascota</p>
              <button className='productosBtn'>Accesorios</button>
            </Link>
          </div> 

          {/* Tarjeta productos indumentaria */}
          <div className="card">
            <Link to="/Indumentaria">
              <img className="productosImg" src={"https://www.petplace.com/static/9ff79c78a5d90ba3b746dfd8d5bce45c/ac7fd/shutterstock_113884636.png"} alt="indumentaria" />
              <p className='productosP'>Indumentaria para tu mascota</p>
              <button className='productosBtn'>Indumentaria</button>
            </Link>
          </div>   
    </div>
    )  
}

export default Productos;