import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", message: ""
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({...prev, [name]: ""}));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Enter a valid email";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\d{10,15}$/.test(formData.phone.replace(/\s+/g, ""))) newErrors.phone = "Enter a valid phone number";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (formData.message.length > 100) newErrors.message = "Max 100 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setStatus("loading");

    try {
      const response = await fetch("https://whitebricks.com/tsacademy.php/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error("Failed to submit");

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });

      setTimeout(() => setStatus("idle"), 4000);

    } catch (err) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section className="form-section">
      <div className="form-container">
        <h2>Have Questions About Planetary Science?</h2>
        <p className="form-subtitle">
          Interested in learning more about space, astronomy, or how planetary data is collected and analyzed?
          Reach out and we'll get back to you.
        </p>

        {status === "success" && (
          <div className="success-msg">✅ Thanks! Your message has been sent. We'll get back to you.</div>
        )}
        {status === "error" && (
          <div className="error-msg">❌ Failed to send. Please try again.</div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Full Name<span>*</span></label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Full name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span className="field-error">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email<span>*</span></label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@example.com"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="field-error">{errors.email}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Phone Number<span>*</span></label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Please enter a valid phone number"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <span className="field-error">{errors.phone}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="message">Message<span>*</span></label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                maxLength="100"
                value={formData.message}
                onChange={handleChange}
              />
              <span className="char-count">{100 - formData.message.length} characters</span>
              {errors.message && <span className="field-error">{errors.message}</span>}
            </div>
          </div>

          <button type="submit" className="submit-btn" disabled={status === "loading"}>
            {status === "loading" ? "Sending..." : "Submit"}
            {status !== "loading" && <span className="arrow">›</span>}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Form;