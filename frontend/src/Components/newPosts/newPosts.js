import React, { useState, useEffect } from "react";
import "./newPosts.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NewPosts() {
  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/produtos")
      .then((res) => {
        setPosts(res.data);
      })
      .catch(() => {
        console.log("Deu errado");
      });
  }, []);

  // Função para adicionar item ao carrinho
  const addToCart = (post) => {
    const cartItem = {
      id: post.id,
      id_user: "1", // Substitua pelo ID do usuário logado
      quantity: 1,
      title: post.title,
      price: post.price,
      image1: post.image1,
    };

    axios
      .post("http://localhost:5000/cart", cartItem)
      .then((res) => {
        console.log("Produto adicionado ao carrinho:", res.data);
        alert(`${post.title} foi adicionado ao carrinho!`);
      })
      .catch((err) => {
        console.error("Erro ao adicionar ao carrinho:", err);
        alert("Não foi possível adicionar ao carrinho.");
      });
  };

  return (
    <div className="newpost-main">
      <h1 className="newpost-h1">Novidades</h1>
      <div className="line" />
      <div className="cards">
        {posts.map((post) => {
          return (
            <div className="card" key={post.id}>
              <div className="post-photos">
                <div className="main-photo">
                  <img src={post.image1} alt={post.title} />
                </div>
                <div className="other-photos">
                  <img src={post.image2} alt={post.title} />
                  <img src={post.image3} alt={post.title} />
                  <img src={post.image4} alt={post.title} />
                </div>
              </div>
              <h2>{post.title}</h2>

              <p className="post-price">R$ {Number(post.price).toFixed(2)}</p>

              <div className="btns">
                <button
                  className="post-btn"
                  onClick={() => navigate(`/produtos/${post.id}`)}
                >
                  Ver Mais
                </button>
                <button
                  className="post-btn"
                  onClick={() => addToCart(post)}
                >
                  Comprar
                </button>
              </div>
            </div>
          );
        })}
      </div>
      
    </div>
    
  );
}

export default NewPosts;
