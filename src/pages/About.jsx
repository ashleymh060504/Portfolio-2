import "../styles/About.css";
import profilePic from "../assets/340FC48C-E8C4-49B3-88B7-72E258117515_1_201_a.jpeg";

function About () {
  return (
    <div className="about-background-image">
      <div className="title-container">
        <h3>About Me</h3>
        <img src={profilePic} alt="Developer Photo" className="profile-image" />
      </div>
      <p>
        I’m a passionate full-stack web developer with a background in HTML, CSS, JavaScript, TypeScript, React, MongoDB, Node.js, and SQL. In less than a week, I’ll officially be a coding bootcamp graduate, and I couldn’t be more excited to continue growing in this field. Though my journey in development started just six months ago, I’ve quickly developed strong problem-solving skills, attention to detail, and a determination to build efficient and scalable applications.
      </p>
      <p>
        As a developer, I thrive on challenges—whether it's debugging complex logic, optimizing performance, or crafting intuitive user experiences. I believe that communication and collaboration are just as important as technical skills, and I bring a strong work ethic to every project I take on.
      </p>
      <p>
        Beyond coding, I’m a wife and a mother of four (ages 2-14), which has honed my ability to multitask, stay organized, and push through any obstacle that comes my way. When I’m not building web applications, you’ll find me snowboarding, hiking with my family, or embracing the next adventure.
        </p>
        <p>
          I’m eager to contribute my skills to meaningful projects and continue growing as a developer. Let’s build something great together! 
      </p>
    </div>
  );
}

export default About;