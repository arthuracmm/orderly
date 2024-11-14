import "./banner.css"
import banner from './banner1.png';
import axios from "axios"
import React, {useState, useEffect} from "react";

function Banner() {

    const [category, setCategory] = useState([])
    useEffect(() =>{
        axios.get("http://localhost:5000/category")
        .then((res) => {
        setCategory(res.data)
        })
        .catch(() => {
        console.log('Deu errado')
        })
    }, [])

    

    return(
        <div className="banner-main">
                   <img src={banner} alt="banner" className="bannerimg"/>
            <div className="category-banners">
            {category.map((category) =>{
                        return (
                            <div className="category">
                                <img src={category.image} alt={category.image}/>
                                <h2>{category.name}</h2>
                            </div>
                        )
                    })}
            </div>
        </div>
        
    );
}

export default Banner;