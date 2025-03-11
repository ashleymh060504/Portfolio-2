import githubLogo from '../assets/github-mark.jpeg';

function Project({title, deployed, github, image}) {
  return (
    <div className="project-card"
          style={{
            backgroundImage: `url(${image})`
          }}
        >
          <h1>{title}</h1>
          <div>
            <a href={deployed}
              target="_blank"
              rel="noreferrer" style={{ fontSize: '20px', padding: '10px' }}
            >Deployed Link</a>
            <a href={github}
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubLogo} alt="GitHub Logo" style={{ width: '40px', marginLeft: '30px' }} />
            </a>
          </div>
        </div>
  );
}

export default Project;