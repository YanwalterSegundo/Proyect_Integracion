import React,{useState,useEffect } from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFavorite,deleteFavorite } from "../../../redux/actions/actions";
import {Connect} from "react-redux"

 function Card({name,species,onClose,gender,status,origin,image,id,removeFavorites,addFavorite}) {
  //   console.log(props, "props");
const dispatch = useDispatch();
const favorites = useSelector((state)=> state.favorites);
  
const [isFav,setIsFav] = useState (false);

function handLeClick(){

  if(isFav){
    setIsFav(false)
    removeFavorites(id)
  } else{
    setIsFav(true)
    addFavorite({name,species,onClose,gender,status,origin,image,id,removeFavorites,addFavorite});
  }
}

useEffect(() =>{
  favorites.forEach((fav)=>{
    if (fav.id === id){
      setIsFav(true);
    }
  });
}, [favorites]);

return (
    <div className={style.cardContainer}>
      <button className={style.closeButton} onClick={()=> onClose(id)}> 
       X 
      </button>
      <h2 className={style.cardInfo}>{name}</h2>
      <h2 className={style.cardInfo}>{species}</h2>
      <h2 className={style.cardInfo}>{gender}</h2>
      <h2 className={style.cardInfo}>{status}</h2>
      <h2 className={style.cardInfo}>{origin}</h2>
      <Link to={`/detail/${id}`}>
      <img className={style.cardImage} src={image} alt={name} />
      </Link>
      
      { isFav ? (
          <button onClick={handLeClick}>❤️</button>
        ) : (
          <button onClick={handLeClick}>🤍</button>
        )
      }
    </div>
  );
}
 export function mapDispatchToProps(dispatch){
  return {
    addFavorite: function(character){
      const objAction = addFavorite(character)
      dispatch(objAction)
    },
    removeFavorites: function(id){
      dispatch(deleteFavorite(id))

    },
  };
 }

 function mapStateToProps(globalState){
  return{
    favorites: globalState.favorites
  }

 }

 export default connect(mapStateToProps,mapDispatchToProps)(Card)
