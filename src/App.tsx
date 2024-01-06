import ToggleDarkIcon from "./common/icons/ToggleDarkIcon";
import ProfilePic from "../src/assets/profile-removebg-preview.png";
import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import DownloadIcon from "./common/icons/DownloadIcon";

import Project1 from "../src/assets/Rectangle 1 (1).png";
import Project2 from "../src/assets/Rectangle 1 (2).png";
import Project3 from "../src/assets/Rectangle 1 (3).png";
import Project4 from "../src/assets/Rectangle 1 (4).png";
import Project5 from "../src/assets/Rectangle 1 (5).png";

const projects = [
  {
    title: "Project 1",
    image: Project1,
  },
  {
    title: "Project 2",
    image: Project2,
  },
  {
    title: "Project 3",
    image: Project3,
  },
  {
    title: "Project 4",
    image: Project4,
  },
  {
    title: "Project 5",
    image: Project5,
  },
];

function App() {
  return (
    <>
      <div className="container max-w-screen-lg mx-auto font-poppins flex space-y-10 flex-col items-center justify-center">
        <div className="w-14 h-14 flex justify-center items-center bg-white mt-2 rounded-full">
          <ToggleDarkIcon />
        </div>
        <div className="flex gap-10 justify-center items-center">
          <div className="border-2 border-[#F7D039] w-fit rounded-full">
            <div className="p-1">
              <img
                src={ProfilePic}
                alt=""
                className="w-36 h-36  rounded-full bg-[#F7D039]"
              />
            </div>
          </div>
          <div className="flex flex-col font-poppins font-medium gap-2">
            <span className="text-4xl text-[#3D3D3D]">Henry Nnamani</span>
            <span className="text-lg text-[#575757]">Software Engineer</span>
            <span className="flex space-x-6 opacity-50">
              <GitHub />
              <Twitter />
              <LinkedIn />
            </span>
          </div>
        </div>

        {/** */}
        <div className="flex justify-between text-[#575757] font-poppins font-medium h-15 gap-4">
          <div className="flex flex-col justify-center items-center w-[148px]">
            <span className="text-2xl">7</span>
            <span className="text-center text-lg">
              Years of work experience
            </span>
          </div>
          <div className="flex flex-col justify-center items-center w-[148px]">
            <span className="text-2xl">50+</span>
            <span className="text-center text-lg">Completed projects</span>
          </div>
          <div className="flex flex-col justify-center items-center w-[148px]">
            <span className="text-2xl">20+</span>
            <span className="text-center text-lg">Satisfied customers</span>
          </div>
        </div>

        {/** */}
        <div className="flex space-x-10">
          <button className="px-10 py-3 bg-[#FBD144] flex justify-center items-center rounded-md">
            <span>Download CV</span>
            <DownloadIcon />
          </button>
          <button className="px-10 py-3 bg-white flex justify-center items-center rounded-md">
            <span>Contact me </span>
          </button>
        </div>

        {/** */}
        <div className="flex flex-col items-center">
          <div className="bg-white p-4 group  w-[460px] rounded-lg">
            <div className="flex justify-around items-center">
              <button className="bg-[#D7D7D7] px-16 py-4 font-medium rounded-md">
                Portfolio
              </button>
              <button className="px-16 py-4 rounded-md">Skills</button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {projects?.map((project) => (
              <img
                src={project.image}
                alt=""
                className="w-48 h-48 object-contain"
              />
            ))}
          </div>
        </div>

        {/** */}
        <div className="text-gray-500 p-3 flex items-center">
          &copy; Henry. {new Date().getFullYear()} All right reserved
        </div>
      </div>
    </>
  );
}

export default App;
