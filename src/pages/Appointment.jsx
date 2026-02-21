import { useState } from "react";
import "../styles/Appointment.css";

function Appointment() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Appointment Submitted Successfully!");
    console.log(formData);

    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      message: ""
    });
  };

  return (
    <div className="appointment">
      <h1>Book an Appointment</h1>

      <form onSubmit={handleSubmit} className="appointment-form">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Describe your issue"
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit">Submit Appointment</button>
      </form>
    </div>
  );
}

export default Appointment;