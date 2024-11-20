import React, { useEffect, useState } from 'react';
import "./ProductDetail.css"
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import MainHeader from "../../Components/mainHeader/mainHeader";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [product, setProduct] = useState(null);
  
  useEffect(() => {
    axios.get(`http://localhost:5000/produtos/${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the product data!", error);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <MainHeader />
      <div className='productDetails'>
        <img src={product.image1} alt={product.title} className='firstImage'/>
        <div className='secondImages'>
          <img src={product.image2} alt={product.title} />
          <img src={product.image3} alt={product.title} />
          <img src={product.image4} alt={product.title} />
        </div>
        <div className='textDetails'>
          <div className='titleDescription'>
            <h1>{product.title}</h1>
            <h2>R${product.price}</h2>
          </div>

          <div className='description'>
            <p>{product.description}</p>
          </div>
        </div>  
      </div>
    </div>
  );
}

export default ProductDetails;