import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './AddPosts.css';
import {useNavigate} from 'react-router-dom';
import check from '../../images/svg/check.svg';
import apagar from '../../images/svg/apagar.svg';

function AddPosts() {
  const navigate = useNavigate();
  const url = 'http://localhost:5000/produtos';

  const [data, setData] = useState({
    title: "",
    description: "",
    price: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    category: "", 
  });

  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/category")
      .then((res) => {
        setCategory(res.data);
      })
      .catch(() => {
        console.log('Deu errado');
      });
  }, []);

  // Função para editar categoria
  function editCategory(id, updatedName, updatedImage) {
    axios
      .put(`http://localhost:5000/category/${id}`, { name: updatedName, image: updatedImage })
      .then((res) => {
        console.log("Categoria atualizada com sucesso:", res.data);

        // Atualizando a lista localmente
        const updatedCategories = category.map((cat) =>
          cat.id === id ? { ...cat, name: updatedName, image: updatedImage } : cat
        );
        setCategory(updatedCategories);
      })
      .catch((err) => {
        console.error("Erro ao atualizar a categoria:", err);
      });
  }

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }

  function submit(e) {
    e.preventDefault();
    axios
      .post(url, {
        title: data.title,
        description: data.description,
        price: data.price,
        image1: data.image1,
        image2: data.image2,
        image3: data.image3,
        image4: data.image4,
        category: data.category,
      })
      .then((res) => {
        console.log(res.data);
        navigate('/');
      });
  }

  return (
    <div className='bodyAddPosts'>
      <div className="AddPosts">
        <button onClick={() => navigate('/admin')}>Voltar</button>
        <h1>Adicionar novo produto</h1>
        <form onSubmit={(e) => submit(e)}>
          <input onChange={(e) => handle(e)} id='title' value={data.title} placeholder='Título' type='text' />
          <input onChange={(e) => handle(e)} id='description' value={data.description} placeholder='Descrição' type='text' />
          <input onChange={(e) => handle(e)} id='image1' value={data.image1} placeholder='Imagem 1' type='textarea' />
          <input onChange={(e) => handle(e)} id='image2' value={data.image2} placeholder='Imagem 2' type='textarea' />
          <input onChange={(e) => handle(e)} id='image3' value={data.image3} placeholder='Imagem 3' type='textarea' />
          <input onChange={(e) => handle(e)} id='image4' value={data.image4} placeholder='Imagem 4' type='textarea' />
          <input onChange={(e) => handle(e)} id='price' value={data.price} placeholder='Valor' type='text' />
          <select onChange={(e) => handle(e)} id='category' name="selectedFruit">
            {category.map((category) => {
              return (
                <option key={category.id} value={category.category}>
                  {category.name}
                </option>
              );
            })}
          </select>
          <input type='submit' />
        </form>
      </div>
      <div className='EditPostsCategory'>
        <h1>Categorias</h1>
        {category.map((category) => {
          return (
            <div className='EditCategoryMap' key={category.id}>
              <input
                onChange={(e) => editCategory(category.id, e.target.value, category.image)}
                value={category.name}
                placeholder='Categoria'
                type='text'
              />
              <input
                onChange={(e) => editCategory(category.id, category.name, e.target.value)}
                value={category.image}
                placeholder='Link da Imagem'
                type='text'
              />
              <div className='EditCategoryMapButton'>
               
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AddPosts;
