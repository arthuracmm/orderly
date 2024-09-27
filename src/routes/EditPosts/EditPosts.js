import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './EditPosts.css';
import {useParams, useNavigate} from 'react-router-dom'

function EditPosts(){

  const {id} = useParams()
  const navigate = useNavigate();
  

  const [data, setData] = useState({
    title: "",
    description: "",
    images: "",
    price: "",
    image1 : "",
    image2 : "",
    image3 : "",
    image4 : ""
  })

  useEffect(() => {
    axios.get(`http://localhost:5000/produtos/${id}`)
      .then((response) => {
        setData({
          title: response.data.title,
          description: response.data.description,
          images: response.data.images,
          price: response.data.price,
          image1: response.data.image1,
          image2: response.data.image2,
          image3: response.data.image3,
          image4: response.data.image4
        });
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, [id]);

  function submit(e){
    e.preventDefault();
    axios.put(`http://localhost:5000/produtos/${id}`,{
      title : data.title,
      description : data.description,
      price : data.price,
      image1 : data.image1,
      image2 : data.image2,
      image3 : data.image3,
      image4 : data.image4
    })
    .then(res => {
      console.log(res.data)
      navigate('/')
    })
    .catch(err =>{
      console.error('erro ao puxar dados', err)
    })
  }

  function handle(e){
    const newdata = {...data}
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
  }

  function deletePost() {
    if (window.confirm("Tem certeza que deseja deletar este produto?")) {
      axios.delete(`http://localhost:5000/produtos/${id}`)
        .then(() => navigate('/'))
        .catch(err => console.error('Erro ao deletar', err));
    }
  }

  return(
    <div className='bodyEditPosts'>
      <div className="EditPosts"> 
        <button onClick={deletePost }>Delete</button>
        <button onClick={() => navigate(-1) }>Voltar</button>
        <h1>Adicionar novo produto</h1>
        <form onSubmit={(e) => submit(e)}>
          <input onChange={(e) => handle(e)} id='title' value={data.title} placeholder='Título' type='text'/>
          <input onChange={(e) => handle(e)} id='description' value={data.description} placeholder='Descrição' type='text'/>
          <input onChange={(e) => handle(e)} id='image1' value={data.image1} placeholder='Imagem 1' type='textarea'/>
          <input onChange={(e) => handle(e)} id='image2' value={data.image2} placeholder='Imagem 2' type='textarea'/>
          <input onChange={(e) => handle(e)} id='image3' value={data.image3} placeholder='Imagem 3' type='textarea'/>
          <input onChange={(e) => handle(e)} id='image4' value={data.image4} placeholder='Imagem 4' type='textarea'/>
          <input onChange={(e) => handle(e)} id='price' value={data.price} placeholder='Valor' type='text'/>
          <input type='submit'/>
        </form>
      </div>
    </div>
  )

  }
  export default EditPosts;
