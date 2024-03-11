import React from "react"
import { useState } from "react"
import '../../style/Feed.css'
import Header from "../../header/Header.js";
import triangle from "../../assets/triangle.png";
const API_BASE = "http://localhost:3001"

const Feed = () => {
    const [restaurants] = useState([]);
    const [reviews] = useState([]);

    return (
        <div>
            <div className="header">
                <Header />
            </div>

            <h1 className="titleFeed">Reviews em Alta</h1>
            {reviews.length === 0 && (
                <div className="contentFeed">
                    <h1 className= "noDataReviewFeed">AINDA NÃO EXISTEM REVIEWS CADASTRADAS NO SITE</h1>
                </div>
            )}
            {reviews.length > 0 && (
                <div className="contentFeed">
                    <img src={triangle} alt="triangle" className="leftTriangleFeed"/>
                    <img src={triangle} alt="triangle" className="rightTriangleFeed"/>
                </div>
            )}

            <h1 className="titleFeed">Restaurantes</h1>
            {restaurants.length === 0 && (
                <div className="contentFeed">
                    <h1 className= "noDataRestaurantFeed">AINDA NÃO EXISTEM RESTAURANTES CADASTRADOS NO SITE</h1>
                </div>
            )}
            {restaurants.length > 0 && (
                <div className="contentFeed">
                    <img src={triangle} alt="triangle" className="leftTriangleFeed"/>
                    <img src={triangle} alt="triangle" className="rightTriangleFeed"/>
                </div>
            )}

            <h1 className="titleFeed">Reviews</h1>
            {reviews.length === 0 && (
                <div className="lastContentFeed">
                    <h1 className= "noDataReviewFeed">AINDA NÃO EXISTEM REVIEWS CADASTRADAS NO SITE</h1>
                </div>
            )}
            {reviews.length > 0 && (
                <div className="lastContentFeed">
                    <img src={triangle} alt="triangle" className="leftTriangleFeed"/>
                    <img src={triangle} alt="triangle" className="rightTriangleFeed"/>
                </div>
            )}
        </div>
    )
}

export default Feed
