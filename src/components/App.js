import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [ toys, setToys ] = useState([])
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then(resp => resp.json()) 
    .then(setToys)
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleFormData(formData) {
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    }).then(resp => resp.json())
    .then(data=> {
      const newToys = [ ...toys, data ]
      setToys(newToys)
    })
    setShowForm(!showForm)
  }

  function handleDelete(id) {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE"
    })

    setToys(toys.filter(toy => toy.id !== id))
  }

  function handleUpdate(id, likes) {
    const data = { likes }

    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify(data)
    }).then(resp => resp.json())
    .then(updatedLikes => {
      const newToyList = [...toys]
      newToyList.map(toy => {
        if (toy.id === id ) {
          toy.likes = updatedLikes.likes
          return toy
        } else {
          return toy
        }
      })
      setToys(newToyList)
    })
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm handleFormData={handleFormData}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} handleDelete={handleDelete} handleUpdate={handleUpdate} />
    </>
  );
}

export default App;
