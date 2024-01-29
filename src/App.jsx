import { useState } from 'react'

import Nav from './Components/Nav/Nav';
import Hero from './Components/Hero/Hero';
import image from './Components/assest/ImagesData';
import Images from './Components/ImagesCard/Images';

function App() {

  
  return (
   <>
   <Nav/>
    <Hero/>
    <Images images={image}/>
   </>
  )
}

export default App
