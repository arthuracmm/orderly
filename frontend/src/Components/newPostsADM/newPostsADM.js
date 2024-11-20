import React, {useState, useEffect} from "react";
import "./newPostsADM.css"
import axios from "axios"
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function NewPostsADM() {
    const navigate = useNavigate();

    const [posts, setPosts] = useState([])
    useEffect(() =>{
        axios.get("http://localhost:5000/produtos")
        .then((res) => {
        setPosts(res.data)
        })
        .catch(() => {
        console.log('Deu errado')
        })
    }, [])
    return(
        <div className="newpost-main-adm">
            <div className="cards">
                    {posts.map((post) =>{
                        return (
                            <div className="card">
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

                                <div className="btns-adm">
                                <Link to={{pathname: `/edit/${post.id}`}}>
                                <button className="post-btn edit-post">Edit</button>
                                </Link>
                                </div>
                            </div>
                        )
                    })}
                    
        </div>
        </div>
        
    );
}

export default NewPostsADM;