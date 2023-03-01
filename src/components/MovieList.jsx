import React,{ useState } from 'react'
import MovieCard from './MovieCard'
import {Routes, Route, Link } from "react-router-dom"
import Descripiton from './Descripiton'
export default function MovieList({filterName,filterRating}) {
    const movies=[
        {
          imgSrc:'../../public/imgs/marvelEndGame.jpg',
          movieName:'Marvel Endgame',
          rating:5,
          description:'Nebula and Tony Stark are stranded in space following their defeat by Thanos on Titan, but are returned to Earth by Carol Danvers and reunited with Natasha Romanoff, Bruce Banner, Steve Rogers, Rocket, Thor, and James Rhodes.',
          Trailer:"https://www.youtube.com/embed/TcMBFSGVi1c"
        },
        {
          imgSrc:'../../public/imgs/peakyBlinders.jpg',
          movieName:'The Peakyblinders',
          rating:4,
          description:'Peaky Blinders is a crime drama centred on a family of mixed Irish Traveller and Romani origins based in Birmingham, England, starting in 1919, several months after the end of the First World War. It centres on the Peaky Blinders street gang and their ambitious, cunning crime boss Tommy Shelby (Murphy).',
          Trailer:"https://www.youtube.com/embed/oVzVdvGIC7U"
        },
        {
          imgSrc:'../../public/imgs/theFlash.jpg',
          movieName:'The Flash',
          rating:3,
          description:"It is a spin-off of Arrow, existing in the same fictional universe known as the Arrowverse. The series follows Barry Allen, portrayed by Grant Gustin, a crime scene investigator who gains super-human speed, which he uses to fight criminals, including others who have also gained superhuman abilities.",
          Trailer:"https://www.youtube.com/embed/Hdo_gvYxI9g"
        },
        {
          imgSrc:'../../public/imgs/theMatrix.jpg',
          movieName:'The Matrix',
          rating:5,
          description:"When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
          Trailer:"https://www.youtube.com/embed/m8e-FF8MsqU"
        },
        {
          imgSrc:'../../public/imgs/theTerminator.jpg',
          movieName:'The Terminator',
          rating:4,
          description:"Disguised as a human, a cyborg assassin known as a Terminator (Arnold Schwarzenegger) travels from 2029 to 1984 to kill Sarah Connor (Linda Hamilton). Sent to protect Sarah is Kyle Reese (Michael Biehn), who divulges the coming of Skynet, an artificial intelligence system that will spark a nuclear holocaust.",
          Trailer:"https://www.youtube.com/embed/QIcomuI1j7I"
        }
      ]
    const [movieList,setMovieList]=useState(movies)
    const [show,setShow]=useState(false)
    const [imgSrc,setImgSrc]=useState('')
    const [movieName,setMovieName]=useState('')
    const [rating,setRating]=useState(0)
    const hundleClickShowAddMovie=()=>{
        setShow(true)
    }
    const hundleClickUnshowAddMovie=()=>{
        setShow(false)
    }
    const hundleSubmitButton=()=>{
        setMovieList([...movieList,{imgSrc:imgSrc,movieName:movieName,rating:rating}])
        setShow(false)
    }
    const onimgSrc=event=>{
        setImgSrc(event.target.value)
    }
    const onmovieName=event=>{
        setMovieName(event.target.value)
    }
    const onrating=event=>{
        setRating(event.target.value)
    }
  return (
    <div>
        <div className='movieList'>
            {filterRating==undefined?movieList.map((movie, index) => (
              <Link to={`/${movie.movieName}`}>
            <MovieCard key={index} imgSrc={movie.imgSrc} movieName={movie.movieName} rating={movie.rating} /></Link>)):movieList.filter(movie=>movie.movieName==filterName && movie.rating==filterRating).map((movie, index) => (
              <Link to={`/${movie.movieName}`}>
              <MovieCard key={index} imgSrc={movie.imgSrc} movieName={movie.movieName} rating={movie.rating} /></Link>))
            }  
        </div>
    
        {show ? <div className='promptAdd'>
          <button onClick={hundleClickUnshowAddMovie} className='delete'>X</button>
          <div>imgSrc <input type="text" onChange={onimgSrc}/></div>
          <div>movieName <input type="text" onChange={onmovieName}/></div>
          <div>rating <input type="number" onChange={onrating}/></div>
          <button onClick={hundleSubmitButton}className='submitButtonAddMovie'>submit</button>
        </div> : null}
        <button onClick={hundleClickShowAddMovie} className='ButtonAddMovie'>+</button>
        <Routes>
          {movieList.map(movie=>(<Route exact path={`/${movie.movieName}`} element={<Descripiton description={movie.description} Trailer={movie.Trailer} />} />))}
        </Routes>
    </div>
  )
}
