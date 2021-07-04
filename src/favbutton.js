import { useState } from 'react'




export default function FavButton(props) {
    // function incrementcounter(fav){
    //     return method : 'POST'
    // }
    const {
        titleserie, favoris, id
    }=props
    const [fav, setfav] = useState(favoris);
      function onButtonClick() {
            fetch(`http://localhost:4000/rest/shows/${id}`,{
            method:'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                title: titleserie,
                user: { favorited: !fav } })
            })
            .then(response => response.json())
            .then(setfav(!fav))
        }

        
        let favBtnElement = (
            <button className="btn btn-default swap" onClick={() => onButtonClick (!fav)}><span className="glyphicon glyphicon-heart-empty"></span></button>)
        if(fav === false){
            favBtnElement = (
                <button className="btn btn-default swap" onClick={() => onButtonClick(!fav)}><span className="glyphicon glyphicon-heart-empty"></span></button>
            )
        }
        else{
        favBtnElement = (
        <button className="btn btn-default swap" onClick={() => onButtonClick(!fav)}><span className="glyphicon glyphicon-heart"></span></button>
    )
}
return favBtnElement
}
