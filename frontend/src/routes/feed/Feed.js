import React from "react"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import '../../style/Feed.css'
const API_BASE = "http://localhost:3001"

const Feed = () => {
    const [restaurants, setRandomRestaurants] = useState([])
    const [reviews, setRandomReviews] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        GetRandomRestaurants()
            .catch(err => {
                console.error("Error: ", err);
                setError(err.message);
            });

        GetRandomReviews()
            .catch(err => {
                console.error("Error: ", err);
                setError(err.message);
            });

        GetMostLikedReviews()
            .catch(err => {
                console.error("Error> ", err);
                setError(err.message);
            });
    }, []); 

    const GetRandomRestaurants = async () => {
        const response = await fetch(API_BASE + "/feed/random_restaurants");
        if (!response.ok) {
            throw new Error("Failed to fetch");
        }
        const data = await response.json();
        setRandomRestaurants(data);
    };

    const GetMostLikedReviews = async () => {
        const response = await fetch(API_BASE + "/feed/random_reviews");
        if (!response.ok) {
            throw new Error("Failed to fetch");
        }
        const data = await response.json();
        setRandomReviews(data);
    };

    const GetRandomReviews = async () => {
        const response = await fetch(API_BASE + "/feed/most_liked_reviews");
        if (!response.ok) {
            throw new Error("Failed to fetch");
        }
        const data = await response.json();
        setRandomReviews(data);
    };

    return (
        <div>
            <h1 className="titleFeed">Reviews em Alta</h1>
            {reviews.length === 0 && (
                <div className="noContentFeed">
                    <h1 className= "noDataReviewFeed">AINDA NÃO EXISTEM REVIEWS CADASTRADAS NO SITE</h1>
                </div>
            )}
            {reviews.length > 0 && (
                <div className="contentFeed">
                    {reviews.map((review, index) => (
                        <h2 key={index} className="reviewTitleFeed">{review.title}</h2>
                    ))}
                </div>
            )}                               

            <h1 className="titleFeed">Restaurantes</h1>
            {restaurants.length === 0 && (
                <div className="noContentFeed">
                    <h1 className= "noDataRestaurantFeed">AINDA NÃO EXISTEM RESTAURANTES CADASTRADOS NO SITE</h1>
                </div>
            )}
            {restaurants.length > 0 && (
                <div className="contentFeed">
                    {restaurants.map((restaurant, index) => (
                        <Link key={index} to={`/restaurants/${restaurant._id}`}>
                            <img src={`${API_BASE}/${restaurant.profileImage}`} alt={restaurant.name} className="restaurantImageFeed"/>
                        </Link>
                    ))}
                </div>
            )}

            <h1 className="titleFeed">Reviews</h1>
            {reviews.length === 0 && (
                <div className="noLastContentFeed">
                    <h1 className= "noDataReviewFeed">AINDA NÃO EXISTEM REVIEWS CADASTRADAS NO SITE</h1>
                </div>
            )}
            {reviews.length > 0 && (
                <div className="contentFeed">
                    {reviews.map((review, index) => (
                        <h2 key={index} className="reviewTitleFeed">{review.title}</h2>
                    ))}
                </div>
            )}
    </div>
)}
        

export default Feed
