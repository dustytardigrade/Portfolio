// src/pages/Products.js
import { useRef } from 'react';
import Iridescence from '../assets/images/backgrounds/Iridescence';
import VariableProximity from '../assets/animations/VariableProximity';
import './Pages.css';

function Products() {
  const containerRef = useRef(null);
  
  const products = [
    { id: 1, name: 'Product One', description: 'An amazing product that solves problems.', price: '$99' },
    { id: 2, name: 'Product Two', description: 'Another great solution for your needs.', price: '$149' },
    { id: 3, name: 'Product Three', description: 'Premium quality and features.', price: '$199' },
    { id: 4, name: 'Product Four', description: 'The ultimate tool for professionals.', price: '$299' },
  ];

  return (
    <>
      <Iridescence
        color={[0.2, 0.6, 1]} // Blue
        mouseReact={true}
        amplitude={0.7}
        speed={0.3}
      />
      
      <header className="page-header">
        <div ref={containerRef} style={{ position: 'relative' }}>
          <VariableProximity
            label={'Products'}
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
          <h1>Our Products</h1>
          <p>Explore our range of innovative solutions.</p>
        </div>
        
        <div className="cards-grid">
          {products.map(product => (
            <div key={product.id} className="card product-card">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <div className="price">{product.price}</div>
              <button className="buy-button">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;