import "../styles/index.css"
import Project from "../components/Project";
import pwrPic from "../assets/PWR-screenshot.png"
import weatherPic from "../assets/weather-dashboard-screenshot.png"
import candidatePic from "../assets/candidate-search-app-pic.png"
import ninjaPic from "../assets/note-ninja-pic.png"
import lifePic from "../assets/life-together-pic.png"
import kanbanPic from "../assets/kanban-board-screenshot.png"

function Portfolio() {

  const projects = [
    {
      title: "The PWR House",
      deployed: "https://the-pwr-house.onrender.com/",
      github: "https://github.com/ashleymh060504/the-pwr-house",
      image: pwrPic
    },
    {
      title: "Weather Dashboard",
      deployed: "https://weather-dashboard-m9t1.onrender.com/",
      github: "https://github.com/ashleymh060504/weather-dashboard",
      image: weatherPic
    },
    {
      title: "Life Together",
      deployed: "https://life-together-jxb0.onrender.com",
      github: "https://github.com/ashleymh060504/life-together",
      image: lifePic
    },
    {
      title: "Kanban Board",
      deployed: "https://kanban-board-wkbx.onrender.com",
      github: "https://github.com/ashleymh060504/kanban-board",
      image: kanbanPic
    },
    {
      title: "Candidate Search Application",
      deployed: "https://candidate-search-application-c7uw.onrender.com",
      github: "https://github.com/ashleymh060504/candidate-search-application",
      image: candidatePic
    },
    {
      title: "Note Ninja",
      deployed: "https://duzinhoml.github.io/note-ninja/",
      github: "https://github.com/duzinhoml/note-ninja",
      image: ninjaPic
    }
  ]

  return (
    <div className="background-image">
      <h3>Portfolio</h3>


      <div className="portfolio-container">
          {
            projects.map((project, index) => {
              return <Project key={index} {...project} />
            })
          }
      </div>
    </div>
  );
}

export default Portfolio;