import { useState, useEffect } from 'react'
import Search from './searchbar'
import SerieList from './SerieList'

export default function App() {
    const [seriesData, setSeriesData] = useState([])
 
       useEffect(() => {
        fetch('http://localhost:4000/rest/shows')
            .then(response => response.json())
            .then(data => setSeriesData(data))
    }, [])

    return (
        <div>
            <div><Search/></div>
            <SerieList series={seriesData} />
        </div>
    )
}