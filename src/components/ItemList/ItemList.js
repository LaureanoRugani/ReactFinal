import React from 'react'
import Item from '../Item/Item'

export default function ItemList(props) {
    return (
    <div className='catalogo container flex row justify-content-center col-12'>
    {
        props.productos.map((product)=>{
            return(
                <Item key={product.id} id={product.id} imagen={product.imagen}  descripcion={product.descripcion} nombre={product.nombre} categoria={product.categoria} stock={product.stock}  />
            )

        })
    }
</div> 
)
}
