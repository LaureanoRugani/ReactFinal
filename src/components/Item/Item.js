import React from 'react'
import Card from 'react-bootstrap/Card';
import './Item.css'
import Button from 'react-bootstrap/Button';
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from 'react'
import { Link } from 'react-router-dom';

export default function Item(props) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
      

      
  return (
    <>
          <Card data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="500" className='col-3 m-2 p-2 card-producto d-flex justify-content-around '>
            <Card.Img className='p-2 img-fluid shadow p-2 mb-4 bg-body rounded imgProduct d-flex' style={{width:'20rem', height:'20rem'}}  src={props.imagen}  />
            <Card.Body className='cardBody p-2' >
              <Card.Title className="text-dark fs-3 fw-bolder text-wrap" >{props.nombre} </Card.Title>
              <Card.Text className="fw-bold fs-6 text-white">
                  {props.descripcion}
              </Card.Text>
              {}
              <Link to={`/item/${props.id}`}>
                  <Button variant='btn  btn-primary btnCarrito mx-auto row col-12'>Detalles del viaje</Button>
              </Link>

            </Card.Body>
          </Card>
    </>
  )
}
