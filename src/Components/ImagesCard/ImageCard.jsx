import React from 'react'
import '../ImagesCard/imagesCard.css'
import img from '../assest/ImagesData'



const ImageCard = () => {
  return (
    <div className='img'>
        {
          img.map((item, index) => {
            return (
              <div className='card' key={index}>
                <img src={item.image} alt='images' />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <h1>{item.location}</h1>
              </div>
            )
          })
        }
      
    </div>
  )
}

export default ImageCard
