// src/pages/About.js
import { useRef } from 'react';
import Iridescence from '../assets/images/backgrounds/Iridescence';
import VariableProximity from '../assets/animations/VariableProximity';
import './Pages.css';

function About() {
  const containerRef = useRef(null);

  return (
    <>
      <Iridescence
        color={[0.2, 1, 0.4]} // Green
        mouseReact={true}
        amplitude={0.6}
        speed={0.4}
      />
      
      <header className="page-header">
        <div ref={containerRef} style={{ position: 'relative' }}>
          <VariableProximity
            label={'About Us'}
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
          <h1>About GuildPlate</h1>
          <p>Learn more about our mission, vision, and team.</p>
        </div>
        
        <div className="cards-grid">
          <div className="card">
            <h2>🎯 Our Mission</h2>
            <p>To deliver exceptional solutions that empower businesses and individuals to achieve their goals.</p>
          </div>
          
          <div className="card">
            <h2>👥 Our Team</h2>
            <p>A diverse group of passionate professionals dedicated to innovation and excellence.</p>
          </div>
          
          <div className="card">
            <h2>💡 Our Values</h2>
            <p>Integrity, creativity, and commitment to quality in everything we do.</p>
          </div>
          
          <div className="card">
            <h2>🌟 Our Story</h2>
            <p>Founded with a vision to make a difference, we've grown into a trusted partner for countless clients.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;