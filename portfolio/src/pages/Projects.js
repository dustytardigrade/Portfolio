// src/pages/Projects.js
import { useRef } from 'react';
import Iridescence from '../assets/images/backgrounds/Iridescence';
import VariableProximity from '../assets/animations/VariableProximity';
import './Pages.css';

function Projects() {
  const containerRef = useRef(null);
  
  const projects = [
    { id: 1, name: 'Project Alpha', description: 'Revolutionary web application', status: 'Completed' },
    { id: 2, name: 'Project Beta', description: 'Mobile app development', status: 'In Progress' },
    { id: 3, name: 'Project Gamma', description: 'E-commerce platform', status: 'Completed' },
    { id: 4, name: 'Project Delta', description: 'AI-powered analytics', status: 'Planning' },
  ];

  return (
    <>
      <Iridescence
        color={[0.6, 0.2, 1]} // Purple
        mouseReact={true}
        amplitude={0.4}
        speed={0.6}
      />
      
      <header className="page-header">
        <div ref={containerRef} style={{ position: 'relative' }}>
          <VariableProximity
            label={'Projects'}
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
          <h1>Our Projects</h1>
          <p>Showcasing our best work and innovations.</p>
        </div>
        
        <div className="cards-grid">
          {projects.map(project => (
            <div key={project.id} className="card project-card">
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <span className={`status status-${project.status.toLowerCase().replace(' ', '-')}`}>
                {project.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;