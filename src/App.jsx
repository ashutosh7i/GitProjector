import { useState, useEffect } from 'react';
import parser from './parser.js';
import 'bulma/css/bulma.min.css';
const username = "ashutosh7i";
const token = import.meta.env.VITE_TOKEN;

function App() {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    try {
      const projectsData = await parser(username, token);
      setProjects(projectsData);
    } catch (error) {
      console.error('Error fetching projects:', error.message);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  console.log(projects);
  return (
    <div className="container">
      {projects.map((project, index) => (
        
        <div key={index} className="card mb-6">
          <div className="card-image">
            <figure className="image is-3by2">
              <img src={project.readme.heroimage.link} alt={project.readme.heroimage.name} />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img src={project.readme.logo.link} alt={project.readme.logo.name} />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">{project.readme.title}</p>
                <p className="subtitle is-6">{project.readme.description}</p>
              </div>
            </div>

            <div className="content">
              <h4>Tech Stack</h4>
              <div className="tags are-medium">
                {project.readme.techStack && project.readme.techStack.map((tech, index) => (
                  <span key={index} className="tag">
                    <figure className="image is-32x32">
                      <img src={tech.link} alt={tech.name} />
                    </figure>
                    {tech.name}
                  </span>
                ))}
              </div>

              <h4>Features</h4>
              <ul>
                {project.readme.features && project.readme.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <h4>Projects</h4>
              <ul>
                {project.readme.links && project.readme.links.map((link, index) => (
                  <li key={index}>
                    <a href={link.url}>{link.title}</a>
                  </li>
                ))}
              </ul>
              <h4>Project badges</h4>
              {project.readme.badges && project.readme.badges.map((badge, index) => (
                <span key={index} className={`tag`} style={{backgroundColor: badge.color,color:"white",marginLeft:5}} >{badge.name}{" "}</span>
              ))}
              <br />
              <h5>date</h5>
              <time>{project.readme.date}</time>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;