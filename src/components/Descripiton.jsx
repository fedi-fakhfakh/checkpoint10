import React from 'react'
import {Routes, Route, Link } from "react-router-dom"
import SearchBar from './SearchBar'
export default function Descripiton({description,Trailer}) {
  return (
    <div>
        <Link to="/">Go to the previous page</Link>
        <iframe width="560" height="315" src={Trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe>
        <p>{description}</p>
        <Routes>
        <Route  path="/" element={<SearchBar />} />
        </Routes>
    </div>
  )
}
