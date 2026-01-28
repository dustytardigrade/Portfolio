// src/pages/Home.js
import { useRef } from 'react';
import Iridescence from '../assets/images/backgrounds/Iridescence';
import VariableProximity from '../assets/animations/VariableProximity';
import './Pages.css';

function Home() {
  const containerRef = useRef(null);

  return (
    <>
      <Iridescence
        color={[1, 0.3, 0.2]} // Orange/Red
        mouseReact={true}
        amplitude={0.5}
        speed={0.5}
      />
      
      <header className="page-header">
        <div ref={containerRef} style={{ position: 'relative' }}>
          <VariableProximity
            label={'Home'}
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
          <h1>Welcome to GuildPlate</h1>
          <p>Your gateway to amazing projects and products.</p>
        </div>
        
        <div className="cards-grid">
          <div className="card">
            <h2>🚀 Latest Projects</h2>
            <p>Check out our newest work and innovations.</p>
          </div>
          
          <div className="card">
            <h2>💼 Our Products</h2>
            <p>Discover the tools and services we offer.</p>
          </div>
          
          <div className="card">
            <h2>📊 Why Choose Us</h2>
            <p>Quality, innovation, and dedication to excellence.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;