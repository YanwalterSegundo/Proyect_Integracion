import React from "react";
import SearchBar from "./SearchBar/SearchBar.jsx";
import style from "./Nav.module.css";
import { Link } from "react-router-dom";


export default function Nav(props) {
  // props --> {onSearch: function}
  return ( 
    <div className={style.container} >
      <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/19643055883023.5996f8afa3a8f.gif" alt="Logo" className={style.logo}/>
      <Link to="/home" className={style.linkHome}>HOME 🏠</Link>
      <Link to="/favorites" className={style.linkHome}>FAVS ❤️</Link>
      {/* <Link to="/create">ADD CHARACTER!</Link> */}
      <Link to="/about" className={style.linkAbout}>ABOUT ❓</Link>
      <SearchBar onSearch={props.onSearch} />
      <button className={style.btn} onClick={props.out}>LOGOUT 🚪</button>
      
    </div>
    
  );
}


