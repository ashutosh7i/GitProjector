import { useState, useEffect } from 'react';
import parser from './parser.js';

const username = "ashutosh7i";

function App() {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    try {
      const projectsData = await parser(username);
      setProjects(projectsData);
    } catch (error) {
      console.error('Error fetching projects:', error.message);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div>
      {projects.map((project, index) => (
        <div key={index}>
          <h1>{project.readme.title}</h1>
          <h2>Description:</h2>
          <p>{project.readme.description}</p>

          <h3>Features:</h3>
          <ul>
            {project.readme.features && project.readme.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          <h3>Tech Stack:</h3>
          <ul>
            {project.readme.techStack && project.readme.techStack.map((tech, index) => (
              <li key={index}>
                {tech.name}: <img src={tech.link} alt={tech.name} />
              </li>
            ))}
          </ul>

          <h3>Images:</h3>
          <ul>
            {project.readme.images && project.readme.images.map((image, index) => (
              <li key={index}>{image.name}: <img src={image.link} alt={image.name} /></li>
            ))}
          </ul>

          <h3>Links:</h3>
          <ul>
            {project.readme.links && project.readme.links.map((link, index) => (
              <li key={index}>
                <a href={link.url}>{link.title}</a>
              </li>
            ))}
          </ul>

          <h3>Badges:</h3>
          <ul>
            {project.readme.badges && project.readme.badges.map((badge, index) => (
              <li key={index} style={{ color: badge.color }}>{badge.name}</li>
            ))}
          </ul>

          <h3>Date:</h3>
          <p>{project.readme.date}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
