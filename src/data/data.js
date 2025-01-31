import Tictactoe from "./imgProject/tictactoe.png";
import TaskManager from "./imgProject/taskmanager.png";
import Mapty from "./imgProject/mapty.png";
import Gatsby from "./imgProject/gatsby.PNG";
import Pogoda from "./imgProject/pogoda.PNG";

export const Bio = {
  name: "Dawid Urbaniak",
  description:
    "Witaj na mojej stronie! Jestem pasjonatem nowych technologii i programowania. Moja pasja do świata kodowania oraz ciągłe zainteresowanie innowacjami sprawiają, że każdy dzień to dla mnie nowa możliwość nauki i tworzenia.",
  github: "https://github.com/udawid",
  linkedin: "",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "Bootstrap",
        image:
          "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      },
      {
        name: "FluentUi-Blazor",
        image: "https://www.nuget.org/profiles/fluentui-blazor/avatar?imageSize=512",
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "C#",
        image: "https://cdnlogo.com/logos/c/27/c.svg",
      },
      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image: "https://www.svgrepo.com/show/452210/git.svg",
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "Android Studio",
        image:
          "https://www.svgrepo.com/show/424906/logo-google-android-studio.svg",
      },
      {
        name: "Visual Studio",
        image: "https://teamnet-software.pl//modules/gqgfileextensions/uploads/1700318644.png",
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
    role: "Fullstack Externship",
    company: "Lorem ipsum",
    date: "June 2023 - July 2023",
    desc: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
    skills: [
      "ReactJS",
      "Redux",
      "NodeJs",
      "Material UI",
      "HTML",
      "CSS",
      "JavaScript",
      "Docker",
      "AWS",
      "MongoDB",
    ],
  },
  {
    id: 1,
    img: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
    role: "Open Source Contributor ",
    company: "Lorem ipsum",
    date: "May 2023 - Present",
    desc: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
  },
];

export const projects = [
  {
    id: 0,
    title: "Tic tac toe",
    date: "",
    description:
      "Ten projekt jest prostą implementacją klasycznej gry Tic-Tac-Toe przy użyciu Reacta. Pozwala ona dwóm graczom na zmianę zaznaczać pola na siatce 3x3, dopóki jeden z nich nie wygra lub gra nie zakończy się remisem.",
    image: Tictactoe,
    tags: ["HTML", "CSS", "React"],
    category: "web app",
    github: "https://github.com/udawid/Tic-tac-toe-React",
    webapp: "https://tic-tac-toe-react0.netlify.app",
  },
  {
    id: 1,
    title: "Task Manager",
    date: "",
    description:
      "Task Manager to prosta aplikacja do zarządzania zadaniami, która pomaga użytkownikom organizować swoje obowiązki i śledzić postępy.",
    image: TaskManager,
    tags: ["HTML", "CSS", "React"],
    category: "web app",
    github: "https://github.com/udawid/task-manager-react",
    webapp: "https://react-taskmanager0.netlify.app",
  },
  {
    id: 2,
    title: "Map app",
    date: "",
    description:
      "Aplikacja do dokumentowania aktywności fizycznej, która wykorzystuje mapę z zewnętrznego API, lokalizacje użytkownika i zapisuje dane w local storage. ",
    image: Mapty,
    tags: ["HTML", "CSS", "JavaScript", "API", "LocalStorage"],
    category: "web app",
    github: "https://github.com/udawid/Map-App",
    webapp: "https://maptyapps.netlify.app",
  },
  {
    id: 3,
    title: "Gatsby-App",
    date: "",
    description:
      "Strona Internetowa stworzona w oparciu o framework Gatsby, zintegrowana z systemem zarządzania treścią Contentful, aby zapewnić łatwe i efektywne aktualizowanie zawartości",
    image: Gatsby,
    tags: [
      "HTML",
      "SCSS",
      "JavaScript",
      "Gatsby",
      "React",
      "GraphQL",
      "Contentful",
    ],
    category: "web app",
    github: "https://github.com/udawid/gatsby-project",
    webapp: "https://gatsby00.netlify.app",
  },
  {
    id: 4,
    title: "Aplikacja pogodowa",
    date: "",
    description:
      "Aplikacja pogodowa dla urządzeń z systemem Android, stworzona w języku Java. Dzięki wykorzystaniu API, dostarcza ona użytkownikom dokładne i aktualne informacje o pogodzie na całym świecie.",
    image: Pogoda,
    tags: ["Java", "Android Studio", "API"],
    category: "mobile app",
    github: "https://github.com/udawid/Pogoda2023",
    webapp: "",
  },
];
