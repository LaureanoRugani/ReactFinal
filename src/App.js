import React, { useEffect } from 'react';
import '../src/components/NavBar/NavBar'
import IntroHome from './components/IntroHome/IntroHome';
import NavBarLogo from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import 'bootswatch/dist/morph/bootstrap.min.css';
import './Fonts/Fonts.css'
import { Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartProvider from './context/CartContext';
import Cart from './components/Cart/Cart';





function App() {
  


  useEffect(() => {
    // const app = initializeApp(firebaseConfig);

    // const db = getFirestore(app) //base de datos
    // const colRef = collection(db, 'viajes') ///referencia a la coleccion
    // getDocs(colRef).then((snapshot) => {

    // }, (error) => {

    // });

  }, [])

    


  return (
          <div  className='container-fluid flex bg-dark body'>
            <div id='NavBar'>
                <NavBarLogo/> 
            </div>
            <IntroHome/>
            <br/>
            <CartProvider>
            <Routes>
              <Route path='/' element={<ItemListContainer /> }/>
              <Route path='/category/:categoryId'  element={<ItemListContainer />}/>
              <Route path='/item/:id' element={<ItemDetailContainer />} />
              <Route path='/viajes/:continente' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart/>} />
            </Routes>
            </CartProvider>
            <br/>
            <br></br>
          </div>
          
  )
}

export default App;
