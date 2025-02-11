import { motion } from "framer-motion";
const AboutMe = () => {
  const aboutItems = [
    {
      title: "Education",
      description:
        "I'm studying for a Bachelor of Science (Pass) in the 1st year at National University and I am focusing on technologies like React, JavaScript, Mongodb,and Node.js",
      icon: "📘", 
    },
    {
      title: "Problem-Solving",
      description: "I approach challenges with a logical/systematic mindset.",
      icon: "🧠", 
    },
    {
      title: "Experience",
      description: "I have a diverse portfolio of projects.",
      icon: "💼", 
    },
    {
      title: "Technical Skills",
      description:
        "As a Frontend Web Developer, I specialize in React JS, html, Node.js, firebase, css and Tailwind CSS.",
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
                scale: 1.030,
              
              
                transition: { duration: 0.5, ease: "easeOut"},
              }}
              className="flex text-white bg-[#0F1035] items-start p-6 rounded-3xl shadow-lg transform"
              style={{
                background: "linear-gradient(to right, #0F1035, #5f1a89)",
              }}
            >
              <div className="text-5xl my-auto mr-4">{item.icon}</div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
