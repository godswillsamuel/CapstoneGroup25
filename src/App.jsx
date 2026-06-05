import React, { useState } from "react";

// ==========================================
// 1. FORM SECTION COMPONENT
// ==========================================
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
      const response = await fetch("https://your-api-endpoint.com/submit", {
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
          Reach out and we’ll get back to you.
        </p>

        {status === "success" && (
          <div className="success-msg">✅ Thanks! Your message has been sent. We’ll get back to you.</div>
        )}
        {status === "error" && (
          <div className="error-msg">❌ Failed to send. Please try again.</div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Full Name*</label>
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
              <label htmlFor="email">Email*</label>
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
              <label htmlFor="phone">Phone Number*</label>
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
              <label htmlFor="message">Message*</label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                maxLength="100"
                value={formData.message}
                onChange={handleChange}
              />
              <span className="char-count">{formData.message.length}/100</span>
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

// ==========================================
// 2. FOOTER SECTION COMPONENT
// ==========================================
const Footer = () => {
  return (
    <footer id="Form-section" className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-about">
            <h4>We are a team passionate about planetary science and data analysis. 
              Our team members include Godswill, Ayobami, Qudus and our collaborative contributors working on innovative projects.</h4>
            <p style={{ fontSize: "15px", color: "#cec8c8", marginTop: "10px" }}>
              <strong>Team:</strong> Godswill, Ayobami, Muhammad, francis, isreal
            </p>
          </div>
          <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.15)", margin: "5px " }}></div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Design by Godswill & Ayobami</p>
          <p>
            Built by{" "}
            <a 
              href="https://github.com/godswillsamuel/Capstone25" 
              target="_blank" 
              rel="noreferrer" 
              style={{ color: "#60a5fa", textDecoration: "underline" }}
            >
              Group 25 Repository
            </a>
            . All rights reserved.
          </p>
        </div>

        <div className="footer-Tutors" style={{ display: "flex", gap: "25px", flexWrap: "wrap", fontSize: "14px" }}>
          <a
            href="https://amakandukwu.com/"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#e5e7eb", textDecoration: "none" }}
          >
            Amaka
          </a>
          <a
            href="https://www.linkedin.com/in/ifeomaokocha"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#e5e7eb", textDecoration: "none" }}
          >
            Ifeoma
          </a>
        </div>
        <div>
          <a className="footer-brand"
            href="https://tsacademyonline.com/"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#ffffff", textDecoration: "none", fontWeight: "600" }}
          >
            TSAcademy
          </a> 
        </div>        
      </div>
    </footer>
  );
};

// ==========================================
// 3. COMBINED MASTER LAYOUT
// ==========================================
const FormAndFooterLayout = () => {
  return (
    <>
      {/* Dynamic injection of the exact CSS code styles */}
      <style>{`
        .form-section {
          background-color: #0b0f19;
          color: #ffffff;
          padding: 60px 20px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        .form-container {
          max-width: 850px;
          margin: 0 auto;
          background: #111827;
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .form-container h2 {
          font-size: 28px;
          margin-bottom: 10px;
          color: #38bdf8;
          text-align: center;
        }
        .form-subtitle {
          color: #9ca3af;
          text-align: center;
          margin-bottom: 30px;
          font-size: 16px;
          line-height: 1.5;
        }
        .form-row {
          display: flex;
          gap: 20px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }
        .form-group {
          flex: 1;
          min-width: 250px;
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .form-group label {
          font-size: 14px;
          margin-bottom: 8px;
          color: #e5e7eb;
          font-weight: 500;
        }
        .form-group input, .form-group textarea {
          background: #1f2937;
          border: 1px solid #374151;
          color: #ffffff;
          padding: 12px;
          border-radius: 6px;
          font-size: 15px;
          outline: none;
          transition: border-color 0.2s;
        }
        .form-group input:focus, .form-group textarea:focus {
          border-color: #38bdf8;
        }
        .form-group textarea {
          height: 120px;
          resize: none;
        }
        .char-count {
          font-size: 11px;
          color: #6b7280;
          text-align: right;
          margin-top: 4px;
        }
        .field-error {
          color: #ef4444;
          font-size: 12px;
          margin-top: 5px;
        }
        .submit-btn {
          background: #0284c7;
          color: white;
          border: none;
          padding: 14px 28px;
          font-size: 16px;
          font-weight: 600;
          border-radius: 6px;
          cursor: pointer;
          display: block;
          margin: 30px auto 0 auto;
          transition: background 0.2s;
        }
        .submit-btn:hover:not(:disabled) {
          background: #0369a1;
        }
        .submit-btn:disabled {
          background: #4b5563;
          cursor: not-allowed;
        }
        .success-msg, .error-msg {
          padding: 12px;
          border-radius: 6px;
          margin-bottom: 20px;
          text-align: center;
          font-size: 15px;
        }
        .success-msg { background: rgba(16, 185, 129, 0.15); color: #10b981; border: 1px solid rgba(16, 185, 129, 0.2); }
        .error-msg { background: rgba(239, 68, 68, 0.15); color: #ef4444; border: 1px solid rgba(239, 68, 68, 0.2); }

        .footer {
          background-color: #030712;
          color: #9ca3af;
          padding: 40px 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          font-family: 'Segoe UI', sans-serif;
        }
        .footer-container {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .footer-about h4 {
          color: #f3f4f6;
          font-weight: 400;
          line-height: 1.6;
          margin-bottom: 10px;
        }
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 10px;
          font-size: 14px;
        }
        .footer-Tutors a {
          transition: color 0.2s;
        }
        .footer-Tutors a:hover {
          color: #38bdf8 !important;
        }
      `}</style>

      <Form />
      <Footer />
    </>
  );
};

export default FormAndFooterLayout;