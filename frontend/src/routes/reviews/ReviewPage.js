import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { jwtDecode } from "jwt-decode";
import "../../style/ReviewPage.css";

const API_BASE = "http://localhost:3001";

const ReviewPage = () => {
  const { iduser, idrest } = useParams();
  const navigate = useNavigate();

  const [review, setReview] = useState(null);
  const [restaurant, setRestaurant] = useState(null);
  const [user, setUser] = useState(null);
  const [isOwner, setIsOwner] = useState(true);

  const [redirect, setRedirect] = useState(false);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  useEffect(() => {
    const getUserInfoFromToken = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const decoded = jwtDecode(token);
          const userID = decoded.userId;
          setIsOwner(iduser === userID)
        } catch (error) {
          console.error("Failed to decode token", error);
        }
      }
    };
    getUserInfoFromToken();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_BASE}/reviews/${idrest}/${iduser}`);
        if (response.status === 200) {
          setReview(response.data);
          setLikes(response.data.likes);
          setDislikes(response.data.dislikes);
        } else {
          console.error("Falha ao obter dados do review", response.statusText);
        }
      } catch (error) {
        console.error("Erro ao fazer a solicitação de review para a API", error);
      }

      try {
        const response = await axios.get(`${API_BASE}/restaurants/${idrest}`);
        if (response.status === 200) {
          setRestaurant(response.data);
        } else {
          console.error("Falha ao obter dados do restaurante", response.statusText);
        }
      } catch (error) {
        console.error("Erro ao fazer a solicitação do restaurante para a API", error);
      }

      try {
        const response = await axios.get(`${API_BASE}/users/${iduser}`);
        if (response.status === 200) {
          setUser(response.data);
        } else {
          console.error("Falha ao obter dados do usuário", response.statusText);
        }
      } catch (error) {
        console.error("Erro ao fazer a solicitação do usuário para a API", error);
      }
    };
    fetchData();
  }, [idrest, iduser]);

  const deleteReview = async () => {
    try {
      const response = await axios.delete(`${API_BASE}/reviews/${idrest}/${iduser}/delete`);
      if (response.status === 200) {
        setRedirect(true);
      } else {
        console.error("Falha ao deletar review", response.statusText);
      }
    } catch (error) {
      console.error("Erro ao fazer a solicitação para a API", error);
    }
  };

  const handleLike = async () => {
    setLikes((prevCount) => (prevCount === review.likes ? review.likes + 1 : review.likes));
    setDislikes(review.dislikes);
    try {
      await axios.put(`${API_BASE}/reviews/${idrest}/${iduser}/edit`, {
        title: review.title,
        user: iduser,
        restaurant: idrest,
        rating: review.rating,
        text: review.text,
        sabor: review.sabor,
        atendimento: review.atendimento,
        tempoDeEspera: review.tempoDeEspera,
        preco: review.preco,
        likes: likes,
        dislikes: dislikes,
      });
    } catch (error) {
      console.error("Erro ao editar review", error);
    }
  };

  const handleDislike = async () => {
    setDislikes((prevCount) => (prevCount === review.dislikes ? review.dislikes + 1 : review.dislikes));
    setLikes(review.likes);
    try {
      await axios.put(`${API_BASE}/reviews/${idrest}/${iduser}/edit`, {
        title: review.title,
        user: iduser,
        restaurant: idrest,
        rating: review.rating,
        text: review.text,
        sabor: review.sabor,
        atendimento: review.atendimento,
        tempoDeEspera: review.tempoDeEspera,
        preco: review.preco,
        likes: likes,
        dislikes: dislikes,
      });
    } catch (error) {
      console.error("Erro ao editar review", error);
    }
  };

  if (redirect) {
    navigate(`/reviews/${idrest}`);
  }

  return (
    <div className="review-page-container">
      {review && user && restaurant && (
        <div className="review-page">
          <div className="restaurant-details">
            {restaurant.profileImage ? (
              <img className="restaurant-img" src={`${API_BASE}/${restaurant.profileImage}`} alt="Restaurant" />
            ) : (
              <img className="restaurant-img" src={`${process.env.PUBLIC_URL}/no_restaurant_img.jpg`} alt="No Restaurant Image" />
            )}
            <p>{restaurant.name}</p>
          </div>
          <div className="review-data">
            <div className="review-main-details">
              <h2>{review.title}</h2>
              <div className="star-rating">
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    style={{ color: index < review.rating ? "#ffc107" : "#524d39" }}
                  >
                    &#9733;
                  </span>
                ))}
              </div>
            </div>
            <div className="review-details">
              <p>Por: {user.name} {isOwner && "(você)"}</p>
              <p>{review.text}</p>
            </div>
            <div className="review-ratings">
              <p>Sabor:</p>
              <div className="star-rating">
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    style={{ color: index < review.sabor ? "#ffc107" : "#524d39" }}
                  >
                    &#9733;
                  </span>
                ))}
              </div>
              <p>Atendimento:</p>
              <div className="star-rating">
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    style={{ color: index < review.atendimento ? "#ffc107" : "#524d39" }}
                  >
                    &#9733;
                  </span>
                ))}
              </div>
              <p>Tempo de Espera:</p>
              <div className="star-rating">
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    style={{ color: index < review.tempoDeEspera ? "#ffc107" : "#524d39" }}
                  >
                    &#9733;
                  </span>
                ))}
              </div>
              <p>Preço:</p>
              <div className="star-rating">
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    style={{ color: index < review.preco ? "#ffc107" : "#524d39" }}
                  >
                    &#9733;
                  </span>
                ))}
              </div>
            </div>
          </div>
          {isOwner && (
            <div className="review-actions">
              <Link className="simple-button" to={`/reviews/${idrest}/${iduser}/edit`}>
                Editar Review
              </Link>
              <button className="delete-button" onClick={deleteReview}>
                Deletar Review
              </button>
            </div>
          )}
          <div className="review-voting">
            <p>Avalie este review:</p>
            <button onClick={handleLike} style={{ color: likes > 0 ? "blue" : "black" }}>
              <AiOutlineLike /> {likes}
            </button>
            <button onClick={handleDislike} style={{ color: dislikes > 0 ? "red" : "black" }}>
              <AiOutlineDislike /> {dislikes}
            </button>
          </div>
          <div>
            <Link className="review-return" to={`/reviews/${idrest}`}>
              Voltar
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewPage;
