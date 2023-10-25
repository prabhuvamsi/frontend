import React from 'react';
import './App.css';
import Home from './home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import FlipCardComponent from './sample';
import Form from './form';
import Card from './product';
import Cart from './cart';
import Pv from './pv';



function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/sample' element={<FlipCardComponent></FlipCardComponent>}></Route>
        <Route path='/form' element={<Form></Form>}></Route>
        <Route path='/product' element={<Card></Card>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
       <Route path='/pv' element={<Pv></Pv>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>

    
    </>
  );
}

export default App;
