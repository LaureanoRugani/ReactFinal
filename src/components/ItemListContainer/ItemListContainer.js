import React from 'react'
import { useState, useEffect } from "react";
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../../Firebase/config'; 


export default function ItemListContainer() {

  const [loading, setLoading] = useState(true);

  const [error ,setError] = useState(false);

  const [resultado, setResultado] = useState([]);

  const { categoryId } = useParams ();

  useEffect(() => {

    const getData = async() => {

    if(categoryId){

      const q = query(collection(db, "viajes"), where("categoria", "==", categoryId));

      const querySnapshot = await getDocs(q);

      const data = querySnapshot.docs.map((doc) => {


        return { ...doc.data(), id: doc.id}

      });

      setResultado(data);

      setLoading(false)

    } else {

      const queryCollection = collection(db, 'viajes')

      getDocs(queryCollection)

        .then(res => setResultado(res.docs.map(producto => ({id: producto.id, ...producto.data()}))))

        .catch(()=>{

          setError(true)

        })

        .finally(()=> {

          setLoading(false)

        })

    }}

    getData()

    }, [categoryId])



  return (

    <>

      {

        loading ? <h4 className='text-dark text-center bg-warning '>Cargando viajes...</h4> : <ItemList productos={resultado} />

      }



    </>

  )

}


