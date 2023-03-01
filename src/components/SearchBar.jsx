import React,{ useState } from 'react'
import StarRating from './StarRating'
import MovieList from './MovieList'
export default function SearchBar() {
    var contentSubmit;
    var ratingSubmit;
    const [rating,setRating]=useState(0)
    const [textRating,setTextRating]=useState(undefined)
    const [content,setContent]=useState('')
    const starFill=(e)=>{
        ratingSubmit=e.target.value
    }
    const inputContent=(e)=>contentSubmit=e.target.value
    const handleCklick=()=>{
        setContent(contentSubmit)
        setTextRating(ratingSubmit==''?0:ratingSubmit)
        console.log(content,textRating)
    }
  return (
    <>
    <div className='searchDiv'>
        <input type="number" placeholder='Enter how many stars' style={{width:'175px',height:"20px"}} onChange={starFill}/>
        <input type="text" placeholder='Enter the name of the name' style={{width:'175px',height:"20px",position:'absolute',top:'70px',right:0}} onChange={inputContent}/>
        <button style={{position:'absolute',right:'10px',bottom:'10px' }} onClick={handleCklick}>Submit</button>
        <StarRating rating={rating} />
        
    </div>
    <MovieList filterName={content} filterRating={textRating}/>
    </>
  )
}
