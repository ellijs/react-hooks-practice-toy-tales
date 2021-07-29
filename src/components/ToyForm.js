import React, {useState} from "react";

function ToyForm({ handleFormData }) {
  const [ formData, setFormData ] = useState({
    id: "",
    name: "",
    image: ""
  })

  function handleChange (e) {
    const key = e.target.name
    const value = e.target.value

    setFormData({
      ...formData, [key]:value
    })
  }

  function updateFormData (e) {
    e.preventDefault()
    handleFormData(formData)
    setFormData({
      id: "",
      name: "",
      image: ""
    })
  }
  return (
    <div className="container">
      <form onSubmit={updateFormData} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={handleChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
