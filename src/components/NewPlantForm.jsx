import React, { useState } from "react";

function NewPlantForm({ addPlant }) {
  const [form, setForm] = useState({ name: "", image: "", price: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name,
        image: form.image,
        price: form.price
      }),
    })
      .then((r) => r.json())
      .then(addPlant);
    setForm({ name: "", image: "", price: "" });
  }

  return (<div className="new-plant-form">
<form onSubmit={handleSubmit}>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Plant name"
        required
      />
      <input
        name="image"
        value={form.image}
        onChange={handleChange}
        placeholder="Image URL"
        required
      />
      <input
        name="price"
        value={form.price}
        onChange={handleChange}
        placeholder="Price"
        required
        type="number"
        step="0.01"
      />
      <button type="submit">Add Plant</button>
    </form>
  </div>
    
  );
}

export default NewPlantForm;