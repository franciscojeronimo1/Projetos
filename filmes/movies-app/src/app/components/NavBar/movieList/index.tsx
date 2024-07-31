'use client'
import './index.scss'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function MovieList(){
    const [movies, setMovies] = useState([])

    useEffect(() => {
        getMovies()
    }, [])

    const getMovies = () => {
        axios({
            method: 'get',
            url: 'https://api.themoviedb.org/3/discover/movie',
            params: {
                api_key: '60a4701284dd8ee23204746d9803ae03',
                language: 'pt-BR'
            }
        }).then(response => {
            setMovies(response.data.results)
        })
    }

    return (
        <ul className="movie-list">
            <li></li>
        </ul>
    )
}