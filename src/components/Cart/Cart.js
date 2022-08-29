import React from "react";
import CartItem from "./CartItem/CartItem";
import { useCartContext } from "../../context/CartContext";
import './Cart.css'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import { addDoc, collection, getFirestore,doc,updateDoc } from "firebase/firestore";

const Cart = () => {
    const { cart, precioFinal, LimpiarCart } = useCartContext();
    const order = {
        buyer: {
            name: 'Laureano',
            email: 'lmr@gmail.com',
            phone: '123123123',
            address: '123'
        },
        items: cart.map(producto => ({ id: producto.id, nombre: producto.nombre, precioUnitario: producto.precio, cantidad: producto.cantidad, subtotal: producto.precio * producto.cantidad })),
        total: precioFinal(),
    }

    const emitirCompra = () => {
        const dataBase = getFirestore();
        const ordersCollection = collection(dataBase, 'orders');
        addDoc(ordersCollection, order)
            .then(({ id }) => alert(`felicitaciones, su cotizacion del viaje ha sido realizada con exito. Su numero de referencia es: ${id}`))
        LimpiarCart()
        cart.forEach((item)=> {
            const itemRef = doc(dataBase, 'viajes', item.id)
            updateDoc(itemRef, {
                stock: item.stock - item.cantidad ,
            })
        })
    } 

    return (
        <>
            {
                (cart.length === 0) ?
                    <div className="w-auto shadow-lg rounded d-flex row">
                        <h3 className="text-dark text-center bg-warning">No hay viajes en tu carrito, por favor haga click en el boton debajo para volver al catalogo </h3>
                        <Link to={'/'}>
                            <Button className="btn btn-info col-12">Volver al catálogo</Button>
                        </Link>
                    </div>
                    :
                    cart.map((producto) => {
                        return (
                            <CartItem key={producto.id} producto={producto} />
                        )

                    })

            }
            <div className="cartTotal">
                <h4 >Total: ${precioFinal()}</h4>

            </div>

            <Button disabled={cart.length === 0} onClick={emitirCompra} className="btn btn-info col-12">Finalizar pedido</Button>
        </>
    )
}

export default Cart