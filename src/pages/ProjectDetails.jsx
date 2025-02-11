import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Mountain from "../assets/mountain.png";
import earnly from "../assets/earnly.png";
import gadet from "../assets/gadets.png";
import cricket from "../assets/cricket.png";

const projectData = [
  {
    id: 1,
    title: "Movie Portal",
    image: `https://i.ibb.co.com/67VnWmkD/Screenshot-2025-02-05-152815.png`,
    github: "https://github.com/khushiiakter/Movie-Portal",
    liveLink: "https://assignment-10-bf625.web.app/",
    techStack:
      "React.js, Javascript, Tailwind CSS, MongoDB, Node.js, Express, JWT, HTML5, Firebase",
    description:
      "This website is a dynamic movie portal designed to enhance your cinematic journey. Explore a vast database of movies, read real user reviews, and enjoy personalized recommendations based on your interests. With a sleek, dark-themed interface and cutting-edge features, MovieZone is your ultimate destination for the latest trends in cinema.",
    challenges: "Implementing secure authentication and API data fetching.",
    improvements: "Adding more movie filters and enhancing UI.",
  },
  {
    id: 2,
    title: "Service Review",
    image: `https://i.ibb.co.com/XfQJrj39/Screenshot-2025-02-05-152922.png`,
    github: "https://github.com/khushiiakter/Service-Review",
    liveLink: "https://assignment-11-eb26e.web.app/",
    techStack:
      "React.js, Javascript, Tailwind CSS, MongoDB, Node.js, Express, JWT, HTML5, Firebase",
    description:
      "Service Review System is a full-stack application designed to provide users with a platform for exploring, reviewing, and sharing feedback on various services. It aims to empower users with trusted information and insights to make informed decisions.",
    challenges: "Ensuring real-time updates.",
    improvements: "Enhancing map integration and adding more routes.",
  },
  {
    id: 3,
    title: "Earnly",
    image: `${earnly}`,
    github: "https://github.com/khushiiakter/Earnly",
    liveLink: "https://earnly-fad73.web.app/",
    techStack:
      "React.js, Javascript, Tailwind CSS, MongoDB, Node.js, Express, Firebase, JWT, Stripe, HTML5",
    description:
      "The Micro Tasking and Earning Platform is designed to provide users with opportunities to complete small tasks and earn money. The platform accommodates 3 distinct roles: Worker, Buyer, and Admin. Each role is tailored with specific functionalities to ensure seamless task management, task creation, and platform administration.",
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
    description:
      "Welcome to Mountain Treks, a platform designed to help adventure enthusiasts plan and book unforgettable hiking experiences. Whether you're looking for serene escapes or thrilling expeditions, we've got you covered.",
    challenges: "Ensuring real-time updates and managing user bookings.",
    improvements: "Enhancing map integration and adding more routes.",
  },
  {
    id: 5,
    title: "GadgetHeaven",
    image: `${gadet}`,
    github: "https://github.com/khushiiakter/Assignment-008",
    liveLink: "https://stately-youtiao-d8f56d.netlify.app/",
    techStack: "React.js, Javascript, Tailwind CSS, HTML5",
    description: `GadgetHeaven✨ is a modern e-commerce platform designed for tech enthusiasts, offering a seamless shopping experience for the latest gadgets. With an intuitive interface, users can explore categories like smartphones, smartwatches, and accessories through a well-structured navigation system. The platform features dynamic product displays, detailed product pages, and efficient sorting and filtering options to help users find their desired gadgets effortlessly. A shopping cart and wishlist system, managed via Context API and LocalStorage, ensures smooth functionality, while interactive elements like toasts for cart actions and purchase confirmation modals enhance user engagement. The site also handles edge cases efficiently, preventing errors on reloads and ensuring a reliable browsing experience with dynamic navigation and a robust 404 page. GadgetHeaven is the ultimate destination where innovation meets convenience, making gadget shopping more exciting and hassle-free. 🚀`,
    challenges:
      "Managing state efficiently with Context API and LocalStorage while ensuring data persistence and dynamic UI updates is a key challenge. Handling edge cases like wishlist restrictions, price limits, and proper navigation adds complexity. Implementing a smooth purchase confirmation modal and dynamic styling with useLocation() also requires careful execution.",
    improvements:
      "Optimizing state management, lazy loading images, and enhancing UI responsiveness will boost performance. Adding search functionality, better sorting options, and user authentication will improve the shopping experience. Strengthening security with server-side validation will make GadgetHeaven✨ more reliable and user-friendly.",
  },
  {
        id: 6,
        title: "BPL-DREAM-11",
        image: `${cricket}`,
        github: "https://github.com/khushiiakter/assignment-7",
        liveLink: "https://chimerical-gingersnap-0fd6e3.netlify.app/",
        techStack: "React.js, Javascript, Tailwind CSS, HTML5",
        description:
          "BPL-DREAM-11 is a React-based fantasy cricket platform where users can build their dream BPL (Bangladesh Premier League) team within a set coin limit. It offers a seamless player selection process, preventing duplicate picks and ensuring balanced team management. With dynamic toggling between available and selected players, interactive alerts via React Toastify, and a responsive UI powered by Tailwind CSS, the platform delivers an engaging experience for cricket enthusiasts.",
        challenges: "Managing coin limits, preventing duplicate player selections, and ensuring seamless dynamic team management.",
        improvements: "Optimizing user interface responsiveness, adding more dynamic player filters, and enhancing real-time notifications for a smoother experience",
      },
];

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectData.find((proj) => proj.id === parseInt(id));

  if (!project) {
    return (
      <div className="text-center text-red-500 text-2xl font-bold py-10">
        Project not found!
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <div className="">
        
        <h1 className="text-4xl flex gap-2 items-center font-bold text-gray-800 mb-6">
        <Link to="/"><FaArrowLeft className="text-2xl" /></Link> {project.title}
        </h1>
      </div>

      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover rounded-lg shadow-md mb-6"
      />
      <p className="text-lg text-gray-700 mb-6">{project.description}</p>
      <div className="space-y-4">
        <p className="text-gray-600">
          <strong className="text-gray-800">Tech Stack:</strong>{" "}
          {project.techStack}
        </p>
        <p className="text-gray-600">
          <strong className="text-gray-800">Challenges:</strong>{" "}
          {project.challenges}
        </p>
        <p className="text-gray-600">
          <strong className="text-gray-800">Potential Improvements:</strong>{" "}
          {project.improvements}
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
