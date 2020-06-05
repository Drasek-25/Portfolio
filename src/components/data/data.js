import breakout from "./images/breakout.PNG";
import canvasani from "./images/canvasani.PNG";
import github from "./images/github.PNG";
import hackernews from "./images/hackerNews.PNG";
import plaid from "./images/plaid.PNG";
import portfolio from "./images/portfolio.PNG";
import timetracker from "./images/timetracker.PNG";
import weather from "./images/weather.PNG";

// const placeHolderImgUrl = "https://picsum.photos/288/162";

const projectData = [
   {
      title: "Portfolio",
      image: portfolio,
      liveLink: "placeholder.com",
      repoLink: "https://github.com/Drasek-25/Portfolio",
      techUsed: ["React", "Material UI", "Canvas"],
      features: [
         "Fully Responsive UI",
         "Canvas integrated into React",
         "Email service workaround via Google Forms",
      ],
   },
   {
      title: "Hacker News App",
      image: hackernews,
      liveLink: "placeholder.com",
      repoLink: "https://github.com/Drasek-25/REACT-ROUTER-Hacker-News",
      techUsed: ["React", "Axios"],
      features: [
         "Frontend for Hacker News API",
         "Follow links to posts, users, comments all delivering their own data",
      ],
   },
   {
      title: "Plaid Login Utility",
      image: plaid,
      liveLink: "placeholder.com",
      repoLink: "https://github.com/Drasek-25/Plaid-Project",
      techUsed: ["React", "Redux", "Axios"],
      features: [
         "Simple single page application to deal with plaid login",
         "User Registration/Login",
         "Real banking software",
      ],
   },
   {
      title: "Breakout",
      image: breakout,
      liveLink: "placeholder.com",
      repoLink: "https://github.com/Drasek-25/CANVAS-Breakout-Game",
      techUsed: ["JS", "Canvas"],
      features: [
         "Fully functioning Breakout Game",
         "Special Powers",
         "Multiple Levels",
         "User Menu",
      ],
   },
   {
      title: "Constellation Animation",
      image: canvasani,
      liveLink: "placeholder.com",
      repoLink: "https://github.com/Drasek-25/CANVAS-Constellation",
      techUsed: ["React", "Redux", "Axios"],
      features: [
         "Progammatic animation using the HTML5 Canvas element",
         "Is the featured background of this webpage",
      ],
   },
   {
      title: "Github Social App",
      image: github,
      liveLink: "placeholder.com",
      repoLink: "https://github.com/Drasek-25/REACT-Github-API",
      techUsed: ["React", "Redux", "Axios"],
      features: [
         "A full functioning for Github API social network",
         "Follow links to users, friends, and repos, all delivering their own data",
      ],
   },
   {
      title: "Weather App",
      image: weather,
      liveLink: "placeholder.com",
      repoLink: "placeholder.com",
      techUsed: ["React", "Axios"],
      features: [
         "A Fully functioning frontend for the Weather API",
         "Search for your location via zipcode",
         "Todays weather and 5 day forcast",
      ],
   },
   {
      title: "Time Tracker",
      image: timetracker,
      liveLink: "placeholder.com",
      repoLink: "placeholder.com",
      techUsed: ["JS", "HTML", "CSS"],
      features: [
         "Add and remove project cards",
         "Time tracking for each card",
         "Checkbox for tracking timesheet workflow",
         "Export as .xml file",
      ],
   },
];
export default projectData;
