
import React from 'react';
import { NavLink, Project, Hobby, SectionId, PersonalInfo, SkillCategory, SkillItem, Experience, EducationItem, CertificationItem, LanguageSpoken } from './types';

// --- PERSONAL INFO (from Resume) ---
export const PERSONAL_INFO: PersonalInfo = {
  name: "Rahul Chirra",
  email: "rahulchirra9@gmail.com",
  phone: "+91 93902 88788",
  location: "Warangal, India",
  linkedin: "https://linkedin.com/in/rahul-c-457657225",
  githubUrl: "https://github.com/rahulchirra", // Added GitHub URL
  professionalSummary: "Experienced Data Science professional skilled in data analysis, model development, and dashboard creation. I use Python, SQL, and BI tools to uncover insights and drive business decisions. I actively explore emerging AI and digital trends to continuously enhance my analytical capabilities. I excel in team collaborations to deliver complete analytics solutions. Eager to apply my analytical skills in a Data Analytics role to deliver measurable impact.",
};

// --- GENERAL PURPOSE ICON COMPONENTS ---
const CodeBracketIconSvg = (props: React.SVGProps<SVGSVGElement>): React.ReactElement =>
  React.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: "currentColor",
      ...props
    },
    React.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
    })
  );

export const LightbulbIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => // Used in AboutSection title and Hobbies
  React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", ...props },
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 18v-5.25m0 0a3 3 0 00-3-3m3 3a3 3 0 013-3m-3 3V6.75m0 0A2.25 2.25 0 009.75 4.5h4.5A2.25 2.25 0 0012 6.75m0 0H12M12 6.75a2.25 2.25 0 012.25-2.25h1.5a2.25 2.25 0 012.25 2.25M12 6.75a2.25 2.25 0 00-2.25-2.25H8.25a2.25 2.25 0 00-2.25 2.25m0 0H12M8.25 18.75a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75Zm4.5 0a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75Z" })
  );

export const DownloadIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => // Used in HeroSection
  React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    ...props
  },
  React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
  })
);

export const ArrowUpIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => // Used in BackToTopButton
  React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    ...props
  },
  React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
  })
);


// --- NEW COLORFUL SKILL ICONS ---

// Fix: Converted JSX to React.createElement for ColorfulPythonIcon
const ColorfulPythonIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) =>
  React.createElement("svg", { viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props },
    React.createElement("path", { d: "M16.2047 8.3H7.79473C7.08473 8.3 6.52473 8.86 6.52473 9.57V12.53H7.79473V9.57C7.79473 8.86 8.35473 8.3 9.06473 8.3H14.9347C15.6447 8.3 16.2047 8.86 16.2047 9.57V15.87C16.2047 16.58 15.6447 17.14 14.9347 17.14H7.79473C7.08473 17.14 6.52473 16.58 6.52473 15.87V14.31H5.25473V15.87C5.25473 17.28 6.38473 18.41 7.79473 18.41H14.9347C16.3447 18.41 17.4747 17.28 17.4747 15.87V9.57C17.4747 8.86 16.9147 8.3 16.2047 8.3Z", fill: "#306998" }),
    React.createElement("path", { d: "M7.79527 15.7H14.9353C15.6453 15.7 16.2053 15.14 16.2053 14.43V8.3H14.9353V14.43C14.9353 15.14 14.3753 15.7 13.6653 15.7H7.79527C7.08527 15.7 6.52527 15.14 6.52527 14.43V2.5C6.52527 1.79 7.08527 1.23 7.79527 1.23H9.35527V2.5H7.79527C7.08527 2.5 6.52527 3.06 6.52527 3.77V14.43C6.52527 15.14 7.08527 15.7 7.79527 15.7Z", fill: "#FFD43B" }),
    React.createElement("circle", { cx: "10.5", cy: "5.5", r: "1.5", fill: "#FFD43B" }),
    React.createElement("circle", { cx: "13.5", cy: "18.5", r: "1.5", fill: "#306998" })
  );

// Fix: Converted JSX to React.createElement for ColorfulRIcon
const ColorfulRIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) =>
  React.createElement("svg", { viewBox: "0 0 24 24", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", ...props },
    React.createElement("path", { fill: "#276DC2", d: "M13.13 10.31H10.07V18.5h3.06c2.59 0 4.69-2.1 4.69-4.69v-.81c0-2.59-2.1-4.69-4.69-4.69zm.03 7.13h-1.02v-5.06h1.02c1.68 0 3.06 1.37 3.06 3.06v-.81c0 1.68-1.38 2.81-3.06 2.81zM9.05 5.5h3.06c4.14 0 7.5 3.36 7.5 7.5v.81c0 4.14-3.36 7.5-7.5 7.5H9.05V5.5zm6.17-2.5H6.88C5.28 3 4 4.28 4 5.88v12.25C4 19.72 5.28 21 6.88 21h8.34c3.31 0 6-2.69 6-6v-.81c0-3.31-2.69-6-6-6V5.5c0-1.6-1.28-2.88-2.88-2.88z" })
  );

// Fix: Converted JSX to React.createElement for ColorfulSqlDatabaseIcon
const ColorfulSqlDatabaseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) =>
  React.createElement("svg", { viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props },
    React.createElement("ellipse", { cx: "12", cy: "6", rx: "7", ry: "3", fill: "#76A9EA" }),
    React.createElement("path", { d: "M5 12C5 13.6569 8.13401 15 12 15C15.866 15 19 13.6569 19 12C19 10.3431 15.866 9 12 9C8.13401 9 5 10.3431 5 12Z", fill: "#A0C3EF" }),
    React.createElement("path", { d: "M19 6V18C19 19.6569 15.866 21 12 21C8.13401 21 5 19.6569 5 18V6C5 7.65685 8.13401 9 12 9C15.866 9 19 7.65685 19 6Z", fill: "#4A89DC" }),
    React.createElement("path", { d: "M5 12V18C5 19.6569 8.13401 21 12 21C15.866 21 19 19.6569 19 18V12C19 13.6569 15.866 15 12 15C8.13401 15 5 13.6569 5 12Z", fill: "#3A7BC8" })
  );

// Fix: Converted JSX to React.createElement for ColorfulTableauIcon
const ColorfulTableauIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => // Simplified bar chart
  React.createElement("svg", { viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props },
    React.createElement("rect", { x: "4", y: "12", width: "4", height: "8", rx: "1", fill: "#4E79A7" }),
    React.createElement("rect", { x: "10", y: "8", width: "4", height: "12", rx: "1", fill: "#F28E2B" }),
    React.createElement("rect", { x: "16", y: "4", width: "4", height: "16", rx: "1", fill: "#E15759" })
  );

// Fix: Converted JSX to React.createElement for ColorfulPowerBiIcon
const ColorfulPowerBiIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => // Simplified pie chart
  React.createElement("svg", { viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props },
    React.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z", fill: "#FCD116" }),
    React.createElement("path", { d: "M12 2V12H21.82C21.42 6.46 17.06 2.48 12 2Z", fill: "#000000" }),
    React.createElement("path", { d: "M12 12H2.18C2.58 17.54 6.94 21.52 12 22V12Z", fill: "#5E5E5E" })
  );

// Fix: Converted JSX to React.createElement for ColorfulExcelIcon
const ColorfulExcelIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) =>
  React.createElement("svg", { viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props },
    React.createElement("path", { d: "M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z", fill: "#107C41" }),
    React.createElement("path", { d: "M7 7H11V10H7V7Z", fill: "white" }),
    React.createElement("path", { d: "M7 11H11V14H7V11Z", fill: "white" }),
    React.createElement("path", { d: "M7 15H11V18H7V15Z", fill: "white" }),
    React.createElement("path", { d: "M12 7H17V10H12V7Z", fill: "white" }),
    React.createElement("path", { d: "M12 11H17V14H12V11Z", fill: "white" }),
    React.createElement("path", { d: "M12 15H17V18H12V15Z", fill: "white" }),
    React.createElement("line", { x1: "2", y1: "10.5", x2: "22", y2: "10.5", stroke: "#0E6535", strokeWidth: "0.5" }),
    React.createElement("line", { x1: "2", y1: "14.5", x2: "22", y2: "14.5", stroke: "#0E6535", strokeWidth: "0.5" }),
    React.createElement("line", { x1: "11.5", y1: "4", x2: "11.5", y2: "20", stroke: "#0E6535", strokeWidth: "0.5" })
  );

// Fix: Converted JSX to React.createElement for ColorfulGearsIcon
const ColorfulGearsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) =>
  React.createElement("svg", { viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props },
    React.createElement("path", { d: "M12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8Z", fill: "#F39C12" }),
    React.createElement("path", { d: "M19.4727 11.7678L20.8869 10.3536L19.4727 8.93934L18.0585 10.3536C17.4379 9.73296 16.6513 9.27938 15.7827 9.04964L15.4357 7.26777H13.2173L12.8703 9.04964C12.0017 9.27938 11.2151 9.73296 10.5945 10.3536L9.18027 8.93934L7.76606 10.3536L9.18027 11.7678C8.77136 12.3407 8.5 13.0354 8.5 13.7822C8.5 14.5291 8.77136 15.2238 9.18027 15.7967L7.76606 17.2109L9.18027 18.6251L10.5945 17.2109C11.2151 17.8315 12.0017 18.2851 12.8703 18.5148L13.2173 20.2967H15.4357L15.7827 18.5148C16.6513 18.2851 17.4379 17.8315 18.0585 17.2109L19.4727 18.6251L20.8869 17.2109L19.4727 15.7967C19.8816 15.2238 20.1529 14.5291 20.1529 13.7822C20.1529 13.0354 19.8816 12.3407 19.4727 11.7678ZM12 16C10.3431 16 9 14.6569 9 13C9 11.3431 10.3431 10 12 10C13.6569 10 15 11.3431 15 13C15 14.6569 13.6569 16 12 16Z", fill: "#2ECC71" }),
    React.createElement("path", { d: "M9.04964 15.7827L7.26777 15.4357V13.2173L9.04964 12.8703C9.27938 12.0017 9.73296 11.2151 10.3536 10.5945L8.93934 9.18027L10.3536 7.76606L11.7678 9.18027C12.3407 8.77136 13.0354 8.5 13.7822 8.5C14.5291 8.5 15.2238 8.77136 15.7967 9.18027L17.2109 7.76606L18.6251 9.18027L17.2109 10.5945C17.8315 11.2151 18.2851 12.0017 18.5148 12.8703L20.2967 13.2173V15.4357L18.5148 15.7827C18.2851 16.6513 17.8315 17.4379 17.2109 18.0585L18.6251 19.4727L17.2109 20.8869L15.7967 19.4727C15.2238 19.8816 14.5291 20.1529 13.7822 20.1529C13.0354 20.1529 12.3407 19.8816 11.7678 19.4727L10.3536 20.8869L8.93934 19.4727L10.3536 18.0585C9.73296 17.4379 9.27938 16.6513 9.04964 15.7827Z", fill: "#3498DB", transform: "translate(-5 -5) scale(0.8)" })
  );

// Fix: Converted JSX to React.createElement for ColorfulBrainIcon
const ColorfulBrainIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) =>
  React.createElement("svg", { viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props },
    React.createElement("path", { d: "M9.5 4C7.567 4 6 5.567 6 7.5C6 9.433 7.567 11 9.5 11C11.433 11 13 9.433 13 7.5C13 5.567 11.433 4 9.5 4Z", fill: "#8E44AD" }),
    React.createElement("path", { d: "M14.5 4C12.567 4 11 5.567 11 7.5C11 9.433 12.567 11 14.5 11C16.433 11 18 9.433 18 7.5C18 5.567 16.433 4 14.5 4Z", fill: "#9B59B6" }),
    React.createElement("path", { d: "M12 10C9.23858 10 7 12.2386 7 15V19C7 19.5523 7.44772 20 8 20H16C16.5523 20 17 19.5523 17 19V15C17 12.2386 14.7614 10 12 10Z", fill: "#3498DB" }),
    React.createElement("path", { d: "M9 14H8V16H9V14Z", fill: "#ECF0F1" }),
    React.createElement("path", { d: "M11 13H10V17H11V13Z", fill: "#ECF0F1" }),
    React.createElement("path", { d: "M13 13H12V17H13V13Z", fill: "#ECF0F1" }),
    React.createElement("path", { d: "M15 14H14V16H15V14Z", fill: "#ECF0F1" }),
    React.createElement("path", { d: "M12 11C13.1046 11 14 11.8954 14 13H10C10 11.8954 10.8954 11 12 11Z", fill: "#2980B9" })
  );

// Fix: Converted JSX to React.createElement for ColorfulGitIcon
const ColorfulGitIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) =>
  React.createElement("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...props },
    React.createElement("path", { fill: "#F05033", d: "M22.1201,10.0656a1.1053,1.1053,0,0,0-1.2887-.376l-3.2621,1.3026-1.434-4.3009A1.1053,1.1053,0,0,0,14.88,5.7687l-5.6317,.9779a3.7445,3.7445,0,1,0-.6984,2.65L11.09,9.8673l-1.73,5.1881a1.1053,1.1053,0,0,0,.5742,1.3759l5.507,2.2029a1.1052,1.1052,0,0,0,1.3759-.5742L22.5,11.3543A1.1053,1.1053,0,0,0,22.1201,10.0656Zm-13.2031.357a1.5425,1.5425,0,1,1-1.5425-1.5424A1.5424,1.5424,0,0,1,8.917,10.4226Z" })
  );

// Fix: Converted JSX to React.createElement for ColorfulVSCodeIcon
const ColorfulVSCodeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) =>
  React.createElement("svg", { viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props },
    React.createElement("path", { d: "M18.707 2.293L6.414 14.586L12.707 20.879L21.707 11.879V5.293L18.707 2.293Z", fill: "#007ACC" }),
    React.createElement("path", { d: "M5.293 2.293L2.293 5.293V18.707L11.293 21.707L17.586 15.414L5.293 2.293Z", fill: "#006ACC" }),
    React.createElement("path", { d: "M6.414 14.586L2.293 18.707L5.293 21.707L11.293 21.707L6.414 14.586Z", fill: "#0059B3" })
  );

// Fix: Converted JSX to React.createElement for ColorfulJupyterIcon
const ColorfulJupyterIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) =>
  React.createElement("svg", { viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props },
    React.createElement("circle", { cx: "12", cy: "12", r: "10", fill: "#F37626" }),
    React.createElement("circle", { cx: "7", cy: "10", r: "2", fill: "white" }),
    React.createElement("circle", { cx: "12", cy: "6", r: "2", fill: "white" }),
    React.createElement("circle", { cx: "17", cy: "10", r: "2", fill: "white" }),
    React.createElement("path", { d: "M7 12C7 10.3431 8.34315 9 10 9C11.6569 9 13 10.3431 13 12C13 13.6569 11.6569 15 10 15C8.34315 15 7 13.6569 7 12Z", fill: "#E0E0E0", transform: "translate(2 2.5)" }),
    React.createElement("path", { d: "M12 12C12 10.3431 13.3431 9 15 9C16.6569 9 18 10.3431 18 12C18 13.6569 16.6569 15 15 15C13.3431 15 12 13.6569 12 12Z", fill: "#E0E0E0", transform: "translate(0 2.5)" }),
    React.createElement("path", { d: "M9.5 7C9.5 5.34315 10.8431 4 12.5 4C14.1569 4 15.5 5.34315 15.5 7C15.5 8.65685 14.1569 10 12.5 10C10.8431 10 9.5 8.65685 9.5 7Z", fill: "#E0E0E0", transform: "translate(0 0)" })
  );

// Fix: Converted JSX to React.createElement for ColorfulCloudDataIcon
const ColorfulCloudDataIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) =>
  React.createElement("svg", { viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props },
    React.createElement("path", { d: "M17.5 13.5C19.9853 13.5 22 11.5376 22 9C22 6.46243 19.9853 4.5 17.5 4.5C17.0496 4.5 16.6123 4.57778 16.2 4.71985C15.1029 2.68009 12.7617 1.5 10 1.5C6.68629 1.5 4 4.18629 4 7.5C4 7.69503 4.0142 7.88777 4.04187 8.07776C3.26471 8.47361 2.5 9.15217 2.5 10C2.5 11.1046 3.39543 12 4.5 12H5.5", stroke: "#3498DB", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
    React.createElement("ellipse", { cx: "12", cy: "17", rx: "5", ry: "2.5", fill: "#F39C12" }),
    React.createElement("path", { d: "M7 17V19.5C7 20.8807 9.23858 22 12 22C14.7614 22 17 20.8807 17 19.5V17", stroke: "#F39C12", strokeWidth: "1.5", fill: "#F39C12" }),
    React.createElement("path", { d: "M17 17C17 18.3807 14.7614 19.5 12 19.5C9.23858 19.5 7 18.3807 7 17", fill: "#E67E22" })
  );

// Fix: Converted JSX to React.createElement for ColorfulEthicalAiIcon
const ColorfulEthicalAiIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) =>
  React.createElement("svg", { viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props },
    React.createElement("path", { d: "M12 2L3 5V11C3 16.52 7.03 21.74 12 23C16.97 21.74 21 16.52 21 11V5L12 2Z", fill: "#2ECC71" }),
    React.createElement("path", { d: "M10 17L6 13L7.41 11.59L10 14.17L16.59 7.58L18 9L10 17Z", fill: "white" })
  );


// --- NAVIGATION ---
export const NAV_LINKS: NavLink[] = [
  { id: SectionId.Hero, label: 'Home' },
  { id: SectionId.About, label: 'About Me' },
  { id: SectionId.Work, label: 'My Work' },
  { id: SectionId.Hobbies, label: 'Hobbies' },
  { id: SectionId.Contact, label: 'Contact' },
];

// --- TECHNICAL SKILLS (from Resume) ---
export const TECHNICAL_SKILLS_DATA: SkillCategory[] = [
  {
    category: "Languages & Libraries",
    skills: [
      { name: "Python (Pandas, NumPy, Scikit-Learn)", IconComponent: ColorfulPythonIcon, animationClass: 'animate-subtle-float' },
      { name: "R", IconComponent: ColorfulRIcon, animationClass: 'animate-subtle-pulse' },
      { name: "SQL", IconComponent: ColorfulSqlDatabaseIcon, animationClass: 'animate-subtle-float' },
    ],
  },
  {
    category: "BI & Visualization",
    skills: [
      { name: "Tableau", IconComponent: ColorfulTableauIcon, animationClass: 'animate-subtle-pulse' },
      { name: "Power BI", IconComponent: ColorfulPowerBiIcon, animationClass: 'animate-subtle-float' },
      { name: "Excel", IconComponent: ColorfulExcelIcon, animationClass: 'animate-subtle-pulse' },
    ],
  },
  {
    category: "Data Science & ML",
    skills: [
      { name: "Feature Engineering", IconComponent: ColorfulGearsIcon, animationClass: 'animate-subtle-float' },
      { name: "Model Training & Validation", IconComponent: ColorfulBrainIcon, animationClass: 'animate-subtle-pulse' },
      { name: "Statistical Analysis", IconComponent: ColorfulTableauIcon, animationClass: 'animate-subtle-float' }, // Re-used Tableau as a generic chart
    ],
  },
  {
    category: "Tools & Environments",
    skills: [
      { name: "Jupyter Notebook", IconComponent: ColorfulJupyterIcon, animationClass: 'animate-subtle-pulse' },
      { name: "Google Colab", IconComponent: ColorfulJupyterIcon, animationClass: 'animate-subtle-float' }, // Re-used Jupyter
      { name: "Git", IconComponent: ColorfulGitIcon, animationClass: 'animate-subtle-pulse' },
      { name: "VS Code", IconComponent: ColorfulVSCodeIcon, animationClass: 'animate-subtle-float' },
    ],
  },
];

// --- CURRENTLY EXPLORING WIDGET DATA ---
export const CURRENTLY_EXPLORING_DATA: SkillItem[] = [
  { name: "Advanced Generative AI", IconComponent: ColorfulBrainIcon, animationClass: 'animate-subtle-pulse' }, 
  { name: "MLOps & DataOps Principles", IconComponent: ColorfulGearsIcon, animationClass: 'animate-subtle-float'},
  { name: "Ethical AI Frameworks", IconComponent: ColorfulEthicalAiIcon }, 
  { name: "Cloud Data Platforms (AWS/GCP)", IconComponent: ColorfulCloudDataIcon, animationClass: 'animate-subtle-pulse' },
];


// --- WORK EXPERIENCE (from Resume) ---
export const WORK_EXPERIENCE_DATA: Experience[] = [
  {
    role: "Data Science Intern",
    company: "Al Variant Company",
    duration: "Feb 2024 – Aug 2024",
    responsibilities: [
      "Architected and executed end-to-end ML pipeline: data ingestion, cleaning, feature engineering, model training, and validation.",
      "Enhanced model accuracy by 12% through hyperparameter tuning and feature optimization.",
      "Designed and published interactive dashboards in Tableau & Power BI, enabling stakeholders to monitor KPIs and model performance.",
      "Automated weekly data ingestion and reporting workflows, reducing manual effort by 40%."
    ],
  },
];

// --- PROJECTS (from Resume Project Highlights) ---
export const PROJECTS_DATA: Project[] = [
  {
    id: 'proj-sentiment',
    title: 'Hotel Review Sentiment Analysis',
    description: 'Objective: Classify hotel reviews to derive sentiment insights and recommend service improvements. Approach: Scraped and cleaned 5,000+ reviews; applied TF-IDF and word embeddings; compared Logistic Regression vs. SVM. Outcome: Achieved 88% classification accuracy; dashboards highlighted top 5 customer pain points, guiding targeted enhancements.',
    imageUrl: 'https://picsum.photos/seed/hotel-sentiment/600/400',
    tags: ['Python', 'NLP', 'TF-IDF', 'Word Embeddings', 'Scikit-Learn', 'Pandas', 'Data Visualization'],
    repoUrl: '#', // Placeholder
  },
  {
    id: 'proj-bankruptcy',
    title: 'Bankruptcy Prediction for Manufacturing Firms',
    description: 'Objective: Forecast financial distress to inform risk management and investment decisions. Approach: Extracted financial metrics via SQL; imputed missing values; built Random Forest and XGBoost models with cross-validation. Outcome: Achieved 91% recall in early risk detection; delivered interactive Power BI dashboard showcasing firm health scores.',
    imageUrl: 'https://picsum.photos/seed/bankruptcy-pred/600/400',
    tags: ['SQL', 'Python', 'Machine Learning', 'Random Forest', 'XGBoost', 'Power BI', 'Financial Analysis'],
    liveUrl: '#', // Placeholder
  },
];

// --- EDUCATION (from Resume) ---
export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "B.Tech, Computer Science Engineering (Data Science)",
    institution: "Vaagdevi College of Engineering, Warangal",
    year: "Expected 2025",
    grade: "CGPA: 7.5/10",
  },
  {
    degree: "Diploma, Electrical & Electronics Engineering",
    institution: "Vaagdevi Engineering College",
    year: "2021",
    grade: "Percentage: 45%",
  },
  {
    degree: "SSC",
    institution: "TS Model School",
    year: "2018",
    grade: "GPA: 8.5/10",
  },
];

// --- CERTIFICATIONS (from Resume) ---
export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    name: "Data Science Certification",
    issuer: "ExcelR Solutions, Hyderabad",
    year: "2024",
    id: "cert1",
  },
];

// --- LANGUAGES SPOKEN (from Resume) ---
export const LANGUAGES_SPOKEN_DATA: LanguageSpoken[] = [
    { language: "Telugu", proficiency: "Native" },
    { language: "English", proficiency: "Fluent" },
    { language: "Hindi", proficiency: "Proficient" },
];


// --- HOBBIES ---
// Hobby icons now use specific color from constants.ts
export const HOBBIES_DATA: Hobby[] = [
  {
    id: 'hobby1',
    name: 'Coding & Side Projects',
    description: 'Exploring new technologies and building fun applications in my free time. Always learning and experimenting.',
    icon: CodeBracketIconSvg({ className: "w-12 h-12 text-[#86C232]" }), // Retains specific color for this general icon
  },
  {
    id: 'hobby4',
    name: 'Exploring Tech Trends',
    description: 'Keeping up with the latest advancements in AI, machine learning, and data science. Always curious about what\'s next.',
    icon: React.createElement(LightbulbIcon, { className: "w-12 h-12 text-[#86C232]" }), // Retains specific color for this general icon
  },
];

// Updated URL for resume download to a direct Google Drive link
export const RESUME_DOWNLOAD_URL = "https://drive.google.com/uc?export=download&id=154nAeiffBKADEko-y0oIEKR1Gdat83P4"; 
export const RESUME_FILENAME = "Rahul_Chirra_Resume.pdf";