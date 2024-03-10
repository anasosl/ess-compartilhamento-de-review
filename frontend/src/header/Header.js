import React from "react"
import { useState, useEffect } from "react"
import '../style/Header.css'
import logo from "../assets/logo.svg";
import noprofileimage from "../assets/noprofileimage.png";

const Header = () => {
    const [restaurant, setRestaurant] = useState("");

    return (
    <div> 
        <div className ="header">
            <img src={logo} alt="logo" className="logo"/>

            <h1 className="restaurants">Restaurantes</h1>
            <h1 className="users">Usuários</h1>
            <h1 className="lists">Listas</h1>
            <h1 className="forum">Fórum</h1>

            <input 
                type="text" 
                placeholder="Ache seus pontos gastronômicos favoritos" 
                value={restaurant} 
                onChange={(e) => setRestaurant(e.target.value)} 
                className="input-field"
            />

            <img src={noprofileimage} alt="noprofileimage" className="noprofileimage"/>
        </div>
    </div>
    );
}

export default Header;