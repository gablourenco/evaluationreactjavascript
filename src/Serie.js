import FavButton from './favbutton.js'
import './Serie.css'


 export default function Serie(props) {
   const { serie } = props;
   const genres = serie.genres.map(genres => <span key={genres} className="genr">{genres}</span>);/////*************1 */

   return (
     
<div className="color">        
<section >          
  <div className="banniere">        
    <img src={serie.images.banner} alt="banniere"></img>
    <h1>{serie.title}</h1>
    <img src={serie.images.poster}></img>
  </div>
  <div className="descri"><p>{serie.description}</p></div>
    <div>
      <div>
        <div>{genres}</div>
          <div className='fa'><i><FavButton titleserie ={serie.title} favoris ={serie.user.favorited} id={serie.id}/></i></div>
      </div>
    </div>
</section>
</div>
   );
 }
 