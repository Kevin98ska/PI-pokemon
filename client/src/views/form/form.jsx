import React, { useState } from "react";
import styles from "../form/form.module.css";
import axios from "axios";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    image: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: [],
  });

  const [errors, setErrors] = useState({});

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [property]: value });
    validateForm();
  };

  const validateForm = () => {
    let hasErrors = false;
    const newErrors = {};

    // Validación del campo "Nombre"
    if (!form.name.trim()) {
      newErrors.name = "El nombre es obligatorio";
      hasErrors = true;
    } else {
      newErrors.name = "";
    }

    // Validación para campos numéricos
    const numericFields = ["hp", "attack", "defense", "speed", "height", "weight"];
    numericFields.forEach((field) => {
      if (form[field] !== "" && (isNaN(form[field]) || form[field] > 100)) {
        newErrors[field] = "Debe ser igual o menor a 100";
        hasErrors = true;
      } else {
        newErrors[field] = "";
      }
    });

    setErrors(newErrors);
    return !hasErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post ("http://localhost:3001/pokemons", form)
    .then(res=>alert(res))

    if (validateForm()) {
      // Puedes enviar el formulario al servidor o realizar otras acciones
      console.log("Formulario válido, datos enviados al servidor");
    } else {
      console.log("Formulario inválido, corrige los errores");
    }
  };

  const [image, setImage] = useState(null);
  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    setImage(imageFile);
  };
  
  

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div>
        <label>Nombre: </label>
        <input type="text" value={form.name} onChange={changeHandler} name="name" />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>

      <div>
        <label>Imagen: </label>
        <input type="file" onChange={handleImageChange} name="image" accept="image/*" />
        {errors.image && <span className="error">{errors.image}</span>}
     </div>

      <div>
        <label>Vida: </label>
        <input type="text" value={form.life} onChange={changeHandler} name="hp" />
        {errors.life && <span className="error">{errors.life}</span>}
      </div>

      <div>
        <label>Ataque: </label>
        <input type="text" value={form.attack} onChange={changeHandler} name="attack" />
        {errors.attack && <span className="error">{errors.attack}</span>}
      </div>

      <div>
        <label>Defensa: </label>
        <input type="text" value={form.defense} onChange={changeHandler} name="defense" />
        {errors.defense && <span className="error">{errors.defense}</span>}
      </div>

      <div>
        <label>Velocidad: </label>
        <input type="text" value={form.speed} onChange={changeHandler} name="speed" />
        {errors.speed && <span className="error">{errors.speed}</span>}
      </div>

      <div>
        <label>Altura: </label>
        <input type="text" value={form.height} onChange={changeHandler} name="height" />
        {errors.height && <span className="error">{errors.height}</span>}
      </div>

      <div>
        <label>Peso: </label>
        <input type="text" value={form.weight} onChange={changeHandler} name="weight" />
        {errors.weight && <span className="error">{errors.weight}</span>}
      </div>

      <div>
        <label>Tipo: </label>
        <input type="text" value={form.types} onChange={changeHandler} name="types" />
      </div>

      <button type="submit">Crear Pokémon</button>
    </form>
  );
};

export default Form;
