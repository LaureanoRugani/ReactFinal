import React, {useState, useEffect} from "react";
import CartItem from "./CartItem/CartItem";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import './Cart.css'
import Button from 'react-bootstrap/Button'
import { addDoc, collection, getFirestore, doc, updateDoc } from "firebase/firestore";
import { Col, Row, Container } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const Cart = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [compra, setearCompra] = useState ([]);
    useEffect(()=> {
        const compra = JSON.parse(localStorage.getItem('compra'))
        if(compra) {
            setearCompra(compra)
        }
    }, [])

    const { cart, precioFinal, LimpiarCart } = useCartContext();
    const order = {
        buyer: {
            name: 'lmr',
            email: 'asd@gmail.com',
            phone: '12345',
            address: '54321111'
        },
        items: cart.map(producto => ({ id: producto.id, nombre: producto.nombre, precioUnitario: producto.precio, cantidad: producto.cantidad, subtotal: producto.precio * producto.cantidad })),
        total: precioFinal(),
    }
    const emitirCompra = () => {
        const dataBase = getFirestore();
        const ordersCollection = collection(dataBase, 'orders');
        addDoc(ordersCollection, order)
            .then(({ id }) =>         <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>(`felicitaciones, su pedido de cotizacion de viaje, fue realizado con exito. Su numero de referencia es: ${id}`)</Modal.Body>
            <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
                Cerrar
            </Button>
            </Modal.Footer>
        </Modal>  ) 
        LimpiarCart() 
        cart.forEach((item) => {
            const itemRef = doc(dataBase, 'products', item.id)
            updateDoc(itemRef, {
                stock: item.stock - item.cantidad,
            })
        })


    }

    return (
        <>
            {
                (cart.length === 0) ?
                    <div className="w-auto shadow-lg rounded d-flex row">
                        <h3 className="text-dark text-center bg-warning">No hay viajes en el carro de compras, vuelva al catalogo </h3>
                        <Link to={'/'}>
                            <Button className="btn btn-info col-12">Volver al catalogo de viajes</Button>
                        </Link>
                    </div>
                    :
                    <Container fluid>
                        <Row>
                            <Col className="productCheckout">
                                {
                                    cart.map((producto) => {
                                        return (
                                            <Card className="cardProductCheckout mb-3">
                                                <CartItem key={producto.id} producto={producto} />
                                            </Card>

                                        )
                                    })
                                }
                            </Col>
                            <Col>
                                <Card className="formUserCheckout  p-3">
                                    <Form >
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label className="text-dark">Email</Form.Label>
                                            <Form.Control type="email" placeholder="Ingrese su email" required />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicName">
                                            <Form.Label className="text-dark">Nombre</Form.Label>
                                            <Form.Control type="text" placeholder="Ingrese su nombre" required />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicAdress">
                                            <Form.Label className="text-dark">Direccion</Form.Label>
                                            <Form.Control type="text" placeholder="Ingrese su nombre direccion" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicPhone">
                                            <Form.Label >Telefono</Form.Label>
                                            <Form.Control type="text" required placeholder="Ingrese su numero telefonico" />
                                        </Form.Group>
                                        <Button disabled={cart.length === 0} onClick={emitirCompra}>Checkout</Button>
                                    </Form>
                                </Card>
                            </Col>
                        </Row>
                        <Card className="cartTotal">
                            <h4 className="text-dark fw-bolder" >Total: ${precioFinal()}</h4>
                        </Card>
                    </Container>

            }

        </>
    )
}

export default Cart