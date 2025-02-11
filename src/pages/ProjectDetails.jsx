import { useParams } from "react-router-dom";

import Mountain from "../assets/mountain.png";
import earnly from "../assets/earnly.png";

const projectData = [
  {
    id: 1,
    title: "Movie Portal",
    image: `https://i.ibb.co.com/67VnWmkD/Screenshot-2025-02-05-152815.png`,
    github: "https://github.com/khushiiakter/Movie-Portal",
    liveLink: "https://assignment-10-bf625.web.app/",
    techStack: "React.js, Javascript, Tailwind CSS, MongoDB, Node.js, Express, JWT, HTML5, Firebase",
    description: "This website is a dynamic movie portal designed to enhance your cinematic journey. Explore a vast database of movies, read real user reviews, and enjoy personalized recommendations based on your interests. With a sleek, dark-themed interface and cutting-edge features, MovieZone is your ultimate destination for the latest trends in cinema.",
    challenges: "Implementing secure authentication and API data fetching.",
    improvements: "Adding more movie filters and enhancing UI.",
  },
  {
    id: 2,
    title: "Service Review",
    image: `https://i.ibb.co.com/XfQJrj39/Screenshot-2025-02-05-152922.png`,
    github: "https://github.com/khushiiakter/Service-Review",
    liveLink: "https://assignment-11-eb26e.web.app/",
    techStack: "React.js, Javascript, Tailwind CSS, MongoDB, Node.js, Express, JWT, HTML5, Firebase",
    description: "Service Review System is a full-stack application designed to provide users with a platform for exploring, reviewing, and sharing feedback on various services. It aims to empower users with trusted information and insights to make informed decisions.",
    challenges: "Ensuring real-time updates.",
    improvements: "Enhancing map integration and adding more routes.",
  },
  {
    id: 3,
    title: "Earnly",
    image: `${earnly}`,
    github: "https://github.com/khushiiakter/Earnly",
    liveLink: "https://earnly-fad73.web.app/",
    techStack: "React.js, Javascript, Tailwind CSS, MongoDB, Node.js, Express, Firebase, JWT, Stripe, HTML5",
    description: "The Micro Tasking and Earning Platform is designed to provide users with opportunities to complete small tasks and earn money. The platform accommodates 3 distinct roles: Worker, Buyer, and Admin. Each role is tailored with specific functionalities to ensure seamless task management, task creation, and platform administration.",
    challenges: "Ensuring real-time updates and dashboard updates.",
    improvements: "Enhancing map integration and adding more routes.",
  },
  {
    id: 4,
    title: "Mountain Treks",
    image: `${Mountain}`,
    github: "https://github.com/khushiiakter/Mountain-Treks",
    liveLink: "https://assignment-9-e93f8.web.app/",
    techStack: "React.js, Javascript, Tailwind CSS, HTML5, Firebase",
    description: "Welcome to Mountain Treks, a platform designed to help adventure enthusiasts plan and book unforgettable hiking experiences. Whether you're looking for serene escapes or thrilling expeditions, we've got you covered.",
    challenges: "Ensuring real-time updates and managing user bookings.",
    improvements: "Enhancing map integration and adding more routes.",
  },
  
];

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectData.find((proj) => proj.id === parseInt(id));

  if (!project) {
    return <div className="text-center text-red-500 text-2xl font-bold py-10">Project not found!</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">{project.title}</h1>
      <img src={project.image} alt={project.title} className="w-full h-96 object-cover rounded-lg shadow-md mb-6" />
      <p className="text-lg text-gray-700 mb-6">{project.description}</p>
      <div className="space-y-4">
        <p className="text-gray-600">
          <strong className="text-gray-800">Tech Stack:</strong> {project.techStack}
        </p>
        <p className="text-gray-600">
          <strong className="text-gray-800">Challenges:</strong> {project.challenges}
        </p>
        <p className="text-gray-600">
          <strong className="text-gray-800">Potential Improvements:</strong> {project.improvements}
        </p>
      </div>
      <div className="flex justify-center gap-4 mt-8">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn  bg-[#0F1035] font-semibold hover:bg-[#5f1a89] text-white px-8 py-3 rounded-full  shadow-md"
        >
          GitHub Repo
        </a>
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn  bg-[#0F1035] font-semibold hover:bg-[#5f1a89] text-white px-8 py-3 rounded-full  shadow-md"
        >
          Live Project
        </a>
      </div>
    </div>
  );
};

export default ProjectDetails;