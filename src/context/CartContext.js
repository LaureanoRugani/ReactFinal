import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
const [cart, setCart] = useState([]);

console.log("carro:", cart);

const addProducto = (item, cantidad) => {
    if (agregadoAlCart(item.id)) {
    setCart(
        cart.map((producto) => {
            return producto.id === item.id
            ? { ...producto, cantidad: producto.cantidad + cantidad }
            : producto;
        })
    );
    } else {
        setCart([...cart, { ...item, cantidad }]);
    }
};

const limpiarCart = () => setCart([]);


const agregadoAlCart = (id) => {
    return cart.find((producto) => producto.id === id) ? true : false;
};

const quitarProducto = (id) =>
    setCart(cart.filter((producto) => producto.id !== id));


const precioFinal = () => {
    return (
      cart.reduce((prev,act) => prev + act.cantidad * act.precio, 0)
    );
}


    const totalProductos = () => {
        return (
    cart.reduce((prev, act) => prev + act.cantidad, 0 )
    );
}

    const finalizarCompra = () => {
        return (cart.length >=1) ? <Button  className="btn btn-success w-100">Finalizar Compra</Button>  : " "
}


return (
    <CartContext.Provider
    value={{
        limpiarCart,
        agregadoAlCart,
        quitarProducto,
        addProducto,
        precioFinal,
        cart,
        totalProductos,
        finalizarCompra,
    }}
    >
    {children}
    </CartContext.Provider>
);
};
export default CartProvider;