import React from 'react'
import StarRating from './StarRating'

export default function MovieCard({imgSrc,movieName,rating}) {
  return (
    <div style={{width:'200px',backgroundColor:'rgb(29, 28, 28)',marginBottom:'20px'}}>
      <img src={imgSrc} alt=""style={{width:'100%'}} />
      <p style={{textAlign:'center',color:'white'}}>{movieName}</p>
      <StarRating rating={rating} />
    </div>
  )
}