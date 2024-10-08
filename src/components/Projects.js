import React from 'react';

const Projects = () => {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        <div className="project-item">
          <h3>Project 1</h3>
          <p>Description of Project 1.</p>
        </div>
        <div className="project-item">
          <h3>Project 2</h3>
          <p>Description of Project 2.</p>
        </div>
        {/* more projects */}
      </div>
    </section>
  );
}

export default Projects;