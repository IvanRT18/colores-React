import { useState } from "react";

const Form = ({ addColor }) => {
  const [color, setColor] = useState("");

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color);
  };

  return (
    <section className="container">
      <h4>Generador de colores</h4>
      <form className="color-form" onSubmit={handleSubmit}>
        <input
          type="color"
          name="color-input"
          id="color-input"
          value={color}
          onChange={handleChange}
        />
        <input
          type="text"
          name="text-input"
          id="text-input"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="#FFFFF"
        />

        <button type="submit" className="btn" style={{ background: color }}>
          Generar
        </button>
      </form>
    </section>
  );
};
export default Form;
