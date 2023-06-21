import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Formulario = () => {
    //Estado del formulario
     const [form, setForm] = useState({
         titulo: '',
         autor: '',
         año: ''
     })

    //Estado de libros donde se almacenan
    const [libros, setLibros] = useState([])

    // Obtener libros
    const getLibros = async()=>{
        const url = 'http://localhost:5002/books'
        const response = await axios.get(url);
        console.log("respuesta",response.data)
        setLibros(response.data)
    }
    console.log("setlibros",libros)

    const postLibro = async(e)=>{
     e.preventDefault();

     const libro = {
      titulo: form.titulo,
      autor: form.autor,
      año: form.año
     }

     const url = 'http://localhost:5002/books'
     const response = await axios.post(url, libro)
     setLibros([...libros, response.data])

    }


useEffect(()=>{
    getLibros(); 
},[])

  return (
    <div>
        <nav>
            <Link to={'/'}>Inicio</Link>
            <Link to={'/formulario'}>Formulario</Link>
        </nav>

      <h1>Formulario de libros</h1>

      <form onSubmit={postLibro}>
        <input type="text" placeholder='Titulo' onChange={(e) => setForm({...form, titulo: e.target.value})}/>
        <input type="text" placeholder='Autor'onChange={(e) => setForm({...form, autor: e.target.value})}/>
        <input type="text" placeholder='Año' onChange={(e) => setForm({...form, año: e.target.value})}/>
        <button type='submit'>Enviar</button>
      </form>

    {libros.map((libro) => 
        <div key={libro.id}>
          <h3>Titulo: {libro.titulo}</h3>
          <h4>Autor: {libro.autor}</h4>
          <h5>Año: {libro.año}</h5>
          <button>Eliminar</button>
          <button>Editar</button>
        </div>
      )}

    </div>
  )
}

export default Formulario
