import breakout from "./images/breakout.PNG";
import canvasani from "./images/canvasani.PNG";
import hackernews from "./images/hackerNews.PNG";
import portfolio from "./images/portfolio.PNG";
import timetracker from "./images/timetracker.PNG";
import attendance from "./images/attendance.PNG";
import goApi from "./images/goApi.PNG";
import minesweeper from "./images/minesweeper.PNG";

// const placeHolderImgUrl = "https://picsum.photos/288/162";

const projectData = [
   {
      title: "Minesweeper",
      image: minesweeper,
      liveLink: "https://minesweeper.webdevpat.com/",
      repoLink: "https://github.com/Drasek-25/REACT-Minesweeper",
      techUsed: ["React"],
      features: [
         "Game built by reverse engineering Classic Minesweeper",
         "Classic left, right, and middle mouse functionality",
         "Game over animation",
         'Classic and "create your own" map sizes',
      ],
   },
   {
      title: "Attendance Backend",
      image: attendance,
      repoLink: "https://github.com/Drasek-25/NODE-Attendance-Backend",
      techUsed: ["NODE", "MongoDB", "Bcrypt", "Express-Sessions"],
      features: [
         "Backend for class attendance tracking application",
         "Secure password storage and comparison using bcrypt",
         "Secure login status using express-session",
         "Development only routes for testing",
      ],
   },
   {
      title: "Pokemon Rest API",
      image: goApi,
      repoLink: "https://github.com/Drasek-25/GO-Rest-API",
      techUsed: ["Golang", "Mux"],
      features: [
         "API for interaction with Pokemon data",
         "CRUD methods for interaction with data",
         "Handleing JSON parsing through manual unmarshalling",
      ],
   },
   {
      title: "Breakout",
      image: breakout,
      liveLink: "https://breakout.webdevpat.com",
      repoLink: "https://github.com/Drasek-25/CANVAS-Breakout-Game",
      techUsed: ["JS", "Canvas", "HTML"],
      features: [
         "Fully functioning Breakout Game",
         "Special Powers",
         "Multiple Levels",
         "User Menu",
      ],
   },
   // {
   //    title: "Plaid Login Utility",
   //    image: plaid,
   //    liveLink: "https://comingsoon.com",
   //    repoLink: "https://github.com/Drasek-25/Plaid-Project",
   //    techUsed: ["React", "Redux", "Axios"],
   //    features: [
   //       "Simple single page application to deal with plaid login",
   //       "User Registration/Login",
   //       "Real banking software",
   //    ],
   // },
   {
      title: "Constellation Animation",
      image: canvasani,
      liveLink: "handled via function in project card",
      repoLink: "https://github.com/Drasek-25/CANVAS-Constellation",
      techUsed: ["JS", "Canvas"],
      features: [
         "Progammatic animation using the HTML5 Canvas element",
         "Is the featured background of this webpage",
         "Animation is interactable with mouse click",
      ],
   },
   {
      title: "Time Tracker",
      image: timetracker,
      liveLink: "https://timetracker.webdevpat.com",
      repoLink: "https://github.com/Drasek-25/timeTracker",
      techUsed: ["JS", "HTML", "CSS"],
      features: [
         "Add and remove project cards",
         "Time tracking for each card",
         "Checkbox for tracking timesheet workflow",
         "Export as .xml file",
      ],
   },
   {
      title: "Portfolio",
      image: portfolio,
      liveLink: "https://webdevpat.com",
      repoLink: "https://github.com/Drasek-25/Portfolio",
      techUsed: ["React", "Material UI", "Canvas", "Apache"],
      features: [
         "Fully Responsive UI",
         "Canvas integrated into React",
         "Email service workaround via Google Forms",
         "Hosted on AWS",
      ],
   },
   {
      title: "Hacker News App",
      image: hackernews,
      liveLink: "https://hackernews.webdevpat.com",
      repoLink: "https://github.com/Drasek-25/REACT-ROUTER-Hacker-News",
      techUsed: ["React", "Axios"],
      features: [
         "Frontend for Hacker News API",
         "Follow links to posts, users, comments all delivering their own data",
      ],
   },
   // {
   //    title: "Github Social App",
   //    image: github,
   //    liveLink: "https://github.webdevpat.com",
   //    repoLink: "https://github.com/Drasek-25/REACT-Github-API",
   //    techUsed: ["React", "Axios"],
   //    features: [
   //       "A full functioning for Github API social network",
   //       "Follow links to users, friends, and repos, all delivering their own data",
   //    ],
   // },
   // {
   //    title: "Weather App",
   //    image: weather,
   //    liveLink: "https://weather.webdevpat.com",
   //    repoLink: "https://github.com/Drasek-25/REACT-Weather-API",
   //    techUsed: ["React", "Axios"],
   //    features: [
   //       "A Fully functioning frontend for the Weather API",
   //       "Search for your location via zipcode",
   //       "Todays weather and 5 day forcast",
   //    ],
   // },
];
export default projectData;
