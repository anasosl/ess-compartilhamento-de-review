import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import '../../style/Restaurants.css';

const API_BASE = "http://localhost:3001"

const SearchResult = () => {
    const [restaurants, setSearchResult] = useState([]);
    const [error, setError] = useState(null);
    const location = useLocation();
    const { restaurantName } = location.state;

    useEffect(() => {
        const GetSearchResult = async () => {
            try {
                const response = await fetch(`/searches/search_restaurant?name=${encodeURIComponent(restaurantName)}`, {
                    method: "GET",
                });                

                if (!response.ok) {
                    throw new Error("Failed to fetch search results");
                }

                const data = await response.json();
                setSearchResult(data); // Corrected function to match the state setter name
            } catch (error) {
                console.error("Error fetching search results:", error);
                setError(error.message);
            }
        };

        if (restaurantName) {
            GetSearchResult();
        }
    }, [restaurantName]); 

    return (
        <div>

            <div className="restaurants-page"> 
                <Link className="link" to={`/restaurants/create`}>
                    <div className="simple-button" id="create-button">
                        <p>Cadastrar restaurante</p>
                    </div>
                </Link>

                <div className="restaurant-list"> 
                    <h2 className="category"> Resultado da Busca </h2>
                    {restaurants.length === 0 && (
                        <h1 className= "noDataRestaurant">NENHUM RESTAURANTE FOI ENCONTRADO</h1>
                    )}
                    {restaurants.map(restaurant => (
                        <div className="restaurant-preview" key={restaurant.id}> 
                            <div id="img-and-description">
                                <img id="restaurant-img-preview" src={`${API_BASE}/${restaurant.profileImage}`} />
                                <div id = "preview-description">
                                    <h2>{restaurant.name}</h2>
                                    <p>{restaurant.address.neighborhood} - {restaurant.address.city}</p>
                                    <p>{restaurant.typeOfFood}</p>
                                </div>
                            </div>
                            <Link className="link" to={`/restaurants/${restaurant._id}`}>
                                <div className="view-button">
                                    <p>Visualizar</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SearchResult;
