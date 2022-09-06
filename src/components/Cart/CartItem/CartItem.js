import React from "react";
import Button from 'react-bootstrap/Button'
import {useCartContext} from '../../../context/CartContext';

const CartItem = ({producto}) => {
    const {quitarProducto} = useCartContext();
    return (
        <div className="w-auto shadow-lg rounded d-flex row col-2">
            <img src={producto.imagen} alt={producto.nombre} />
            <div className="d-flex row col p-3 mb-1">
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