import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const commonInfo = {
  name: "Truong Nguyen Quoc Dat",
  currentJob: "Software Developer",
  phoneNumber: "0379557887",
  email: "quocdat1994@gmail.com",
  facebook: "https://www.facebook.com/inusama1994",
  linkedin: "https://www.linkedin.com/in/dattruongnq/",
  profileImg: "https://i.imgur.com/hccYIVU.jpg",
  introduction:
    "Software developer with 2 years of experience in developing and maintaining Java/Android/Web application. Easily collaborate in a team or work independently. Have experience working directly with Japanese clients. Enjoy problems solving and self-research new technology."
};

const projects = [
  {
    projectName: "Comico Indonesia",
    summary:
      "Comico is a webtoon portal based in Indonesia that is part of NHN Corporation. It was first lauched in 2017.",
    projectImg: "https://i.imgur.com/oLU92uw.jpg",
    link: "http://www.comico.co.id/"
  },
  {
    projectName: "Cheer Up KPI",
    summary:
      "Cheer Up KPI is a business mobile app for recruitment/temporary staff agency's sales person or consultant.",
    projectImg: "https://i.imgur.com/2xswJqI.jpg",
    link: "https://appadvice.com/app/cheer-up-kpi/1035541546"
  }
];

const workExperience = [
  {
    company: "NHN Vietnam",
    time: "Sep 2018 - Now",
    summary:
      "Maintain and develop new feature for an Indonesia webtoon portal. Collaborate in a team of 5 members. Using Java Spring as core for back-end and Javascript, HTML/CSS for front-end."
  },
  {
    company: "Persol Process & Technology",
    time: "Oct 2015 - Oct 2017",
    summary:
      "Developed projects using a variety of languages and tools. Investigated technical errors in existing projects, maintain and optimize projects. Collaborated in small teams (3-5 members) to quickly implement and deliver application, following the Agile/Scrum Methodology. Interacted directly with clients in Japan. Developed and customized applications based on client’s requests and feedbacks."
  }
];

const education = [
  {
    university: "RMIT University Vietnam",
    time: "2013 - 2016",
    bachelor: "Bachelor of IT (Application Programming)",
    note: "Graduated with Distinction"
  }
];

const skills = {
  programmingSkill: ["Java", "C#", "Android", "Javascript", "Html", "CSS"],
  languageSkill: ["English", "Japanese"]
};

ReactDOM.render(
  <App
    commonInfo={commonInfo}
    projects={projects}
    workExperience={workExperience}
    education={education}
    skills={skills}
  />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
