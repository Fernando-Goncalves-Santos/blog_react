import React from 'react'
import "./NewPost.css"
import blogFetch from "../axios/config";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditPost = () => {

    const navigate = useNavigate()
    const [title, setTitle] = useState()
    const [body, setBody] = useState()

    // O useParams me permite resgatar o id que está na URL
    const {id} = useParams()

    const getPost = async() => {
        try {
            const response = await blogFetch.get(`/posts/${id}`)
            const data = response.data
            setTitle(data.title)
            setBody(data.body)
        } catch (error) {
            console.log(error)
        }
    }

    const editPost = async (e) => {
        e.preventDefault()

        const post = {title, body, userId: 1}

        await blogFetch.put(`/posts/${id}`, {
            body: post,
        })
    }

    useEffect(() => {
        getPost()
    }, [])

  return (
    <div className="new-post">
    <h2>Editando: {title}</h2>
    <form onSubmit={(e) => editPost(e)}>
      <div className="form-control">
        <label htmlFor="title">Título:</label>
        <input onChange={(e) => setTitle(e.target.value)}
          type="text"
          name="title"
          id="title"
          placeholder="Digite o título"
          value = {title || ""}
        />
      </div>
      <div className="form-control">
        <label htmlFor="body">Conteúdo:</label>
        <textarea onChange={(e) => setBody(e.target.value)}
          name="body"
          id="body"
          placeholder="Digite o conteúdo"
          value={body || ""}
        />
      </div>
      <input type="submit" value= "Editar Post" className="btn" />
    </form>
  </div>
  )
}

export default EditPost