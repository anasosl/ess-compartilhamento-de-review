import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // import useNavigate instead of useHistory
import '../../style/Header.css';
import logo from "../../assets/logo.svg";
import noprofileimage from "../../assets/noprofileimage.png";
import searchicon from "../../assets/searchicon.png";

const Header = () => {
    const [restaurant, setRestaurant] = useState("");
    const navigate = useNavigate(); // use useNavigate hook here

    const handleSearch = () => {
        navigate("/search/result", { state: { restaurantName: restaurant } }); // updated to use navigate
    };

    // Rest of your component remains the same

    return (
    <div> 
        <div className ="header">
            <Link className="linkHeader" to={`/feed`}>
                <img src={logo} alt="logo" className="logo"/>
            </Link>
            
            <Link className="linkHeader" to={`/restaurants`}>
                <h1 className="restaurants">Restaurantes</h1>
            </Link>

            <h1 className="users">Usuários</h1>
            <h1 className="lists">Listas</h1>
            <h1 className="forum">Fórum</h1>

            <div id="input-and-icon">
                <input 
                    type="text" 
                    placeholder="Ache seus pontos gastronômicos favoritos" 
                    value={restaurant} 
                    onChange={(e) => setRestaurant(e.target.value)} 
                    className="search-field"
                />
                
                <img
                    src={searchicon}
                    alt="searchicon"
                    className="searchicon"
                    onClick={handleSearch}
                />

            </div>

            <img src={noprofileimage} alt="noprofileimage" className="noprofileimage"/>

        </div>
    </div>
    );
}

export default Header;
