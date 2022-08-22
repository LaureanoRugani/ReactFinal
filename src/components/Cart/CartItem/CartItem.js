import React from "react";
import Button from 'react-bootstrap/Button'
import {useCartContext} from '../../../context/CartContext';
import '../Cart.css'

const CartItem = ({producto}) => {
    const {quitarProducto} = useCartContext();
    return (
        <div className="itemCarrito w-auto shadow-lg rounded d-flex row  col-3">
            <img src={producto.imagen} alt={producto.nombre} className="imgProductoCart img-fluid" />
            <div className="itemCarritoBody d-flex row col p-1 mb-2">
                <h4 >Nombre: {producto.nombre} </h4>
                <p>Cantidad: {producto.cantidad} </p>
                <p>Precio unitario: ${producto.precio}</p>
                <p>Subtotal: ${producto.cantidad * producto.precio}</p>
                <Button onClick={()=> quitarProducto(producto.id)}>Quitar Viaje</Button> 
            </div>
        </div>
    )
}
export default CartItem