import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom";
import '../style/Header.css'
import logo from "../assets/logo.svg";
import noprofileimage from "../assets/noprofileimage.png";
import searchicon from "../assets/searchicon.png";

const Header = () => {
    const [restaurant, setRestaurant] = useState("");

    return (
    <div> 
        <div className ="header">
            <Link className="linkHeader" to={`/feed`}>
                <img src={logo} alt="logo" className="logoHeader"/>
            </Link>

            <Link className="linkHeader" to={`/restaurants`}>
                <h1 className="restaurantsHeader">Restaurantes</h1>
            </Link>

            <h1 className="usersHeader">Usuários</h1>
            <h1 className="listsHeader">Listas</h1>
            <h1 className="forumHeader">Fórum</h1>

            <input 
                type="text" 
                placeholder="Ache seus pontos gastronômicos favoritos" 
                value={restaurant} 
                onChange={(e) => setRestaurant(e.target.value)} 
                className="inputFieldHeader"
            />
            
            <img src={searchicon} alt="searchicon" className="searchiconHeader"/>

            <img src={noprofileimage} alt="noprofileimage" className="noprofileimageHeader"/>
        </div>
    </div>
    );
}

export default Header;
