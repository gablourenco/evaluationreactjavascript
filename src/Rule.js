import FavButton from './favbutton.js'
import './Rule.css'


 export default function Rule(props) {
   const { rule } = props;
   const genres = rule.genres.map(genres => <span key={genres} className="genr">{genres}</span>);/////*************1 */

   return (
     
<div className="color">        
<section >          
  <div className="banniere">        
    <img src={rule.images.banner} alt="banniere"></img>
    <h1>{rule.title}</h1>
    <img src={rule.images.poster}></img>
  </div>
  <div className="descri"><p>{rule.description}</p></div>
    <div>
      <div>
        <div>{genres}</div>
          <div className='fa'><i><FavButton/></i></div>
      </div>
    </div>
</section>
</div>
   );
 }
 