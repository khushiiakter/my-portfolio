import { motion } from "framer-motion";
import img1 from "../assets/icons8-code-64.png";
import img2 from "../assets/icons8-education-64.png";
const About2 = () => {
  const aboutItems = [
    {
      title: "Education",
      description:
        "I'm studying for a Bachelor of Science (Pass) in the 1st year at National University and I am focusing on technologies like React, JavaScript, Mongodb, and Node.js",
      icon: `${img2}`,
    },
    {
      title: "My Programming Journey",
      description:
        "I learned programming through the Complete Web Development Course with Programming Hero by Jhankar Mahbub. This course ignited my passion for coding and helped me build a strong foundation in web development.",
      icon: `${img1}`,
    },
    {
      title: "The Type of Work I Enjoy",
      description:
        "I love learning new things and strive to create the best user interfaces and user-friendly experiences. I enjoy solving problems and building applications that make a difference.",
      icon: "💼",
    },
    {
      title: "Technical Skills",
      description:
        "As a Frontend Web Developer, I specialize in React JS, HTML, Node.js, Firebase, CSS, and Tailwind CSS.",
      icon: "💻",
    },
    {
      title: "Hobbies & Interests",
      description:
        "Outside of programming, I enjoy reading stories, comics, and watching time-travel and sci-fi movies and series. I creating  stories and exploring creative writing.",
      icon: "💻",
    },
    {
      title: "My Personality",
      description:
        "I am a curious, creative, and detail-oriented individual who is always eager to learn and grow. I believe in improvement and  enjoy collaborating with others to achieve great results.",
      icon: "💻",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  return (
    <section id="aboutMe" className="text-black py-10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-6xl underline font-bold text-center mb-16 text-[#0F1035]"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          About <span className="text-[#5f1a89]">Me</span>
        </motion.h2>

        {/* Existing About Me Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {aboutItems.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.5, ease: "easeOut" },
              }}
              className="flex  text-white bg-[#0F1035] items-start p-6  rounded-3xl shadow-lg transform"
              style={{
                background: "linear-gradient(to right, #0F1035, #5f1a89)",
              }}
            >
              <div>
                <div className=" mb-2 flex items-center gap-3 justify-center  ">
                  
                  <h3 className="text-2xl font-semibold  text-center ">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-justify">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About2;
