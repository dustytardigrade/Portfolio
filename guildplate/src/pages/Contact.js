// src/pages/Contact.js
import { useRef } from 'react';
import Iridescence from '../assets/images/backgrounds/Iridescence';
import VariableProximity from '../assets/animations/VariableProximity';
import './Pages.css';

function Contact() {
  const containerRef = useRef(null);

  return (
    <>
      <Iridescence
        color={[1, 0.8, 0.2]} // Yellow/Gold
        mouseReact={true}
        amplitude={0.3}
        speed={0.7}
      />
      
      <header className="page-header">
        <div ref={containerRef} style={{ position: 'relative' }}>
          <VariableProximity
            label={'Contact'}
            className={'variable-proximity-demo'}
            fromFontVariationSettings="'wght' 500, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={300}
            falloff='gaussian'
          />
        </div>
      </header>

      <div className="page-container">
        <div className="card">
          <h1>Get In Touch</h1>
          <p>We'd love to hear from you!</p>
        </div>
        
        <div className="cards-grid">
          <div className="card contact-card">
            <h2>📧 Email Us</h2>
            <p>contact@guildplate.com</p>
          </div>
          
          <div className="card contact-card">
            <h2>📞 Call Us</h2>
            <p>+1 (555) 123-4567</p>
          </div>
          
          <div className="card contact-card">
            <h2>📍 Visit Us</h2>
            <p>123 Innovation Street<br/>Tech City, TC 12345</p>
          </div>
        </div>
        
        <div className="card contact-form-card">
          <h2>Send a Message</h2>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message" rows="5"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;