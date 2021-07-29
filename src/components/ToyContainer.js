import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, handleDelete, handleUpdate }) {
  const renderToys = toys.map(toy => <ToyCard key={toy.id} toy={toy} handleDelete={handleDelete} handleUpdate={handleUpdate}/>)
  return (
    <div id="toy-collection">{renderToys}</div>
  );
}

export default ToyContainer;
