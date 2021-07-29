import React, { useState } from "react";

function ToyCard({ toy, handleDelete, handleUpdate }) {
  const { name, image, likes } = toy
  const [ newLikes, setNewLikes ] = useState(likes + 1)

  function handleNewLikes() {
    setNewLikes(newLikes => newLikes + 1 )
    handleUpdate(toy.id, newLikes)
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button onClick={handleNewLikes} className="like-btn">Like {"<3"}</button>
      <button onClick={()=>handleDelete(toy.id)} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
