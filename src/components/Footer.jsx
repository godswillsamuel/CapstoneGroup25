import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="Form-section" className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-about">
            <h4>We are a team passionate about planetary science and data analysis. 
              Our team members include Godswill, Ayobami, AbdulQudus and our collaborative contributors working on innovative projects.</h4>
            <p style={{ fontSize: "15px", color: "#cec8c8", marginTop: "10px" }}>
              <strong>Team:</strong> Godswill, Ayobami, Muhammad, francis, isreal
            </p>
          </div>
                <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.15)", margin: "5px " }}></div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Design by Godswill & AbdulQudus</p>
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

            {/* Right Links */}
            <div  className="footer-Tutors" style={{ display: "flex", gap: "25px", flexWrap: "wrap", fontSize: "14px" }}>
              <a
                href="https://amakandukwu.com/"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#e5e7eb", textDecoration: "none" }}
                onMouseOver={(e) => e.target.style.textDecoration = "underline"}
                onMouseOut={(e) => e.target.style.textDecoration = "none"}
              >
                Amaka
              </a>
              <a
                href="https://www.linkedin.com/in/ifeomaokocha"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#e5e7eb", textDecoration: "none" }}
                onMouseOver={(e) => e.target.style.textDecoration = "underline"}
                onMouseOut={(e) => e.target.style.textDecoration = "none"}
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
                onMouseOver={(e) => e.target.style.textDecoration = "underline"}
                onMouseOut={(e) => e.target.style.textDecoration = "none"}
              >
                TSAcademy
             </a> 
        </div>        
      </div>
    </footer>
  );
};

export default Footer;