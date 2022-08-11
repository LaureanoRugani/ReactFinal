import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import './IntroHome.css'
import 'animate.css';


export default function SaludoHome() {
return (
    <>
    <div className="home-saludo text-warning">
        <h1 className="text-warning fw-bold">Viajes LR</h1>
        <h4 className="p-home animate__animated animate__fadeInLeft">
        Creemos que viajar nos transforma, porque nos permite encontrar la mejor versión de nosotros mismos. Por eso, ofrecemos el mejor servicio de atención personalizada para acompañarte ANTES, DURANTE y DESPUÉS de tu viaje.

Trabajamos permanentemente en reforzar alianzas con proveedores líderes en sus segmentos, comprometidos a brindar siempre un servicio acorde a nuestra filosofía.

Con más de 20 años de experiencia contamos con un grupo de profesionales que hacen a la excelencia de nuestros servicios, asesores, coordinadores, guía, choferes altamente capacitados en la atención de pasajeros.
        </h4>
    </div>
    <div className="carrouselHome">
        <Carousel fade>
            <Carousel.Item>
                <img
                    src= 'https://res.cloudinary.com/djaugyqlt/image/upload/v1660171458/ImagenPaisaje1_tc1aao.jpg'
                    alt=""
                    style={{height:"25rem", width:"100%", borderRadius:"10px"}}
                />
            </Carousel.Item>
            
            <Carousel.Item>
                <img 
                    src= 'https://res.cloudinary.com/djaugyqlt/image/upload/v1660171459/ImagenPaisaje2_ij6lhe.jpg'
                    alt=""
                    style={{height:"25rem", width:"100%", borderRadius:"10px"}}
                />
            </Carousel.Item>

            <Carousel.Item>
                <img 
                    src= 'https://res.cloudinary.com/djaugyqlt/image/upload/v1660171458/ImagenPaisaje3_kmouof.jpg'
                    alt=""
                    style={{height:"25rem", width:"100%", borderRadius:"10px"}}
                />
            </Carousel.Item>
        </Carousel>
    </div>
    </>
);
}
