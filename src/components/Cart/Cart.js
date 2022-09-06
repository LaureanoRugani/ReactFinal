import React, { useState, useEffect } from "react";
import CartItem from "./CartItem/CartItem";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import { Col, Row, Container } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import ModalConfirmarCompra from "../Modal/Modal";
import { collection, getFirestore } from "firebase/firestore";

const Cart = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { cart, precioFinal, addProducto} = useCartContext();

    return (
        <>
            {
                (cart.length === 0) ?
                    <div className="w-auto shadow-lg rounded d-flex row ">
                        <h3 className="text-dark text-center bg-warning">No hay viajes seleccionado, por favor vuelva al catalogo de compra </h3>
                        <Link to={'/'}>
                            <Button className="btn btn-info col-12">Volver al catalogo</Button>
                        </Link>
                    </div>
                    :
                    <Container fluid>
                        <Row>
                            <Col>
                                {
                                    cart.map((producto) => {
                                        return (
                                            <Card className="mb-3">
                                                <CartItem key={producto.id} producto={producto} />
                                            </Card>

                                        )
                                    })
                                }
                            </Col>
                            <Col>
                                <Card className="cartTotal">
                                    <div>
                                    <h4 className=" fw-bolder text-center fs-1" >Total: ${precioFinal()}</h4>
                                    </div>
                                    <Button disabled={cart.length === 0} onClick={handleShow} className="btn btn-info col-12 mt-3">Checkout</Button>
                                </Card>
                            </Col>
                        </Row>
                        <ModalConfirmarCompra handleClose={handleClose} show={show} />
                    </Container>

            }

        </>
    )
}

export default Cart