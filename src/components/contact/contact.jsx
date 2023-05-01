import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, surname, email } = formData;
    const message = `Olá! Meu nome é ${name} ${surname} e meu email é ${email}.`;
    window.location.href = `https://wa.me/5571996137828/?text=${encodeURIComponent(
      message
    )}`;
  };

  return (
    <div className="contact-container">
      <div style={{ textAlign: "center" }}>
        <h2 className="stroke-text">
          COMPLETE O FORMULÁRIO E FALE COM A GENTE
        </h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div
          className="input-container"
        >
          <input
            type="text"
            name="name"
            placeholder="NOME"
            required
            value={formData.name}
            onChange={handleInputChange}
            style={{
              margin: "20px auto",
              display: "block",
              backgroundColor: "#F5F5F5",
              color: "#000000",
              width: "100%",
              maxWidth: "400px"
            }}
          />
          <input
            type="text"
            name="surname"
            placeholder="SOBRENOME"
            required
            value={formData.surname}
            onChange={handleInputChange}
            style={{
              margin: "20px auto",
              display: "block",
              backgroundColor: "#F5F5F5",
              color: "#000000",
              width: "100%",
              maxWidth: "400px"
            }}
          />
          <input
            type="email"
            name="email"
            placeholder="EMAIL"
            required
            value={formData.email}
            onChange={handleInputChange}
            style={{
              margin: "20px auto",
              display: "block",
              backgroundColor: "#F5F5F5",
              color: "#000000",
              width: "100%",
              maxWidth: "400px"
            }}
          />
        </div>
        <div style={{ textAlign: "center" }}>
          <button
            type="submit"
            style={{
              backgroundColor: "transparent",
              color: "#FFFFFF",
              border: "none",
              borderRadius: "100px",
              padding: "1px 12px",
              margin: "20px auto",
              display: "block"
            }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/897px-WhatsApp.svg.png"
              alt="Whatsapp Icon"
              style={{ height: "8rem", marginRight: "-1px" }}
            />
            ENVIAR
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
