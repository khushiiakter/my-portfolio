import { useState } from "react";
import profile from "../assets/profile.JPG";
const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "303ed137-4aeb-417f-ac61-513c9d840494");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div id="contact" className=" py-8">
      <h2 className="text-6xl underline font-bold text-center mb-16 text-[#0F1035]">
        Contact <span className="text-[#5f1a89]">Me</span>
      </h2>
      <div className="flex md:flex-row flex-col p-7 rounded-2xl bg-gradient-to-r from-[#0F1035] to-[#5f1a89] shadow-lg max-w-[930px] mx-auto  gap-6  justify-between">
        <div className=" md:w-2/5 rounded-2xl text-gray-400 flex flex-col gap-3 font-semibold items-center justify-between">
          <div className="w-[220px]  rounded-3xl text-center  ">
            <img
              src={profile} 
              alt="Profile"
              className="object-cover w-full h-full rounded-2xl"
            />
          </div>
          <h3 className="text-2xl text-gray-300 font-bold">Khushi Akter Hena</h3>
          <div className="space-y-2 ml-2">
            <p>Email: khushiiakterhena@gmail.com</p>
            <p>Phone: +8801538422108</p>
            <p>Location: Dhaka, Bangladesh</p>
          </div>
        </div>
        <div className="md:w-3/5">
          <form onSubmit={onSubmit} className="flex flex-col justify-between  gap-5">
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                name="email"
                className="grow"
                placeholder="Your Email" required
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                type="text"
                name="name"
                className="grow"
                placeholder="Your Name" required
              />
            </label>
            <textarea
              name="message"
              className="textarea h-[150px] w-full textarea-bordered"
              placeholder="Your message" required
            ></textarea>
            <button
              type="submit"
              className="btn w-full bg-[#0F1035] font-semibold text-white hover:bg-[#5f1a89]  px-8 py-3 rounded-full  shadow-md"
            >
              Send Email
            </button>
            
          </form>
        </div>
        
      </div>
      <p className="mt-2 text-center text-sm">{result}</p>
    </div>
  );
};

export default Contact;
