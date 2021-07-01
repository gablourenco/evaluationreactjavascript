import { useState } from 'react'

export default function FavButton() {
    // function incrementcounter(fav){
    //     return method : 'POST'
    // }
    const [fav, setFav] = useState(false)
    let favBtnElement = (
            <button className="btn btn-default swap" onClick={() => setFav(!fav)}><span className="glyphicon glyphicon-heart-empty"></span></button>)
        if(fav === false){
            favBtnElement = (
                <button className="btn btn-default swap" onClick={() => setFav(!fav)}><span className="glyphicon glyphicon-heart-empty"></span></button>
            )
        }
        else{
        favBtnElement = (
        <button className="btn btn-default swap" onClick={() => setFav(!fav)}><span className="glyphicon glyphicon-heart"></span></button>
    )
}
return favBtnElement
}


