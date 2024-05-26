import axios from "axios";
import { useState, React } from "react";

import './Browse.css';

function Browse()

{
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [image, setImage] = useState('');

   
    console.log(image, 12);

    const handlechangeTitle = (e) =>
    {
        setTitle(e.target.value)
    }

    const handlechangeDesc = (e) =>
    {
        setDesc(e.target.value)
    }

    const handleClick = async (e) =>
    {
        console.log(title, desc, image, 19)

        const formData = new FormData()
        formData.append('title', title)
        formData.append('description', desc)
        formData.append('image', image)
        try
        {
            const res = await axios.post(
                "http://localhost:8081/foodweb",
                formData
            );
            console.log(res);
        }
        catch (ex) {
            console.log(ex);
          }
        
    }
    return (
        <div className="container-orders">
            <input value={title} onChange={handlechangeTitle} placeholder="title" name="title" className="in" /><br></br>
            <input value={desc} onChange={handlechangeDesc} placeholder="description" name="desc" className="in" /><br></br>
            <input onChange={(e) => setImage(e.target.files[0]) }name="image" type="file" className="in-img" />
            <button onClick={handleClick} className="in btn-orders btn-outline-success">Add Orders</button>
        </div>
    );
}
export default Browse;