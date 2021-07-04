import "./show.json"
import "./searchbar.css"
import { useState, useEffect } from "react"
import Serie from "./Serie";

export default function Search() {
    const [datas, setDatas] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect (() => {
        fetch("http://localhost:4000/rest/shows")
        .then((response) => response.json())
        .then((json) => setDatas(json))
    },[])

    const handleSearchTerm = (e) => {
        let value = e.target.value;
        setSearchTerm(value);
    };


    console.log(searchTerm)
    return (
        <>
        <div className="searchBar">
            <input
            type="text"
            name="searchBar"
            id="searchBar"
            placeholder="Rechercher"
            onChange={handleSearchTerm}
            />
        </div>
        <div className="search__results">
            {datas.filter((val) =>{
                return val.title.toLowerCase().includes(searchTerm.toLowerCase());
            }).map((val) => {
             return   <div className="search__result" key={val.id}><Serie serie={val}/></div>
            })}
            
        </div>
        </>
    );
}