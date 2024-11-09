import React from "react";
import "./NewPost.css"
import blogFetch from "../axios/config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewPost = () => {
    
    const navigate = useNavigate()
    const [title, setTitle] = useState()
    const [body, setBody] = useState()

    const createPost = async (e) => {
        e.preventDefault()

        const post = {title, body, userId: 1}

        await blogFetch.post("/posts", {
            body: post,
        })

        navigate("/")

    }



  return (
    <div className="new-post">
      <h2>Inserir novo Post:</h2>
      <form onSubmit={(e) => createPost(e)}>
        <div className="form-control">
          <label htmlFor="title">Título:</label>
          <input onChange={(e) => setTitle(e.target.value)}
            type="text"
            name="title"
            id="title"
            placeholder="Digite o título"
          />
        </div>
        <div className="form-control">
          <label htmlFor="body">Conteúdo:</label>
          <textarea onChange={(e) => setBody(e.target.value)}
            name="body"
            id="body"
            placeholder="Digite o conteúdo"
          />
        </div>
        <input type="submit" value= "Criar Post" className="btn" />
      </form>
    </div>
  );
};

export default NewPost;
