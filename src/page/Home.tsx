import ProfilePic from "@assets/profile-removebg-preview.png";
import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import { useEffect, useState } from "react";

import { FaNodeJs } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { SiPostgresql, SiGraphql } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { MdFileDownload } from "react-icons/md";
import projects from '@/data/project.json'
import { useOutletContext, useNavigate } from "react-router-dom";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const skills = [
  {
    title: "NodeJS",
    icon: <FaNodeJs />,
  },
  {
    title: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    title: "ReactJS",
    icon: <RiReactjsFill />,
  },
  {
    title: "GraphQL",
    icon: <SiGraphql />,
  },
  {
    title: "PostgreSQL",
    icon: <SiPostgresql />,
  },
  {
    title: "NextJs",
    icon: <TbBrandNextjs />,
  },
]

interface ContextProp {
  darkMode: boolean
}

const Home = () => {
  const [activeBtn, setActiveBtn] = useState("portfolio");
  const { darkMode }: ContextProp = useOutletContext();

  const navigate = useNavigate()

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <>
        
        <div className="flex lg:flex-row flex-col gap-10 justify-center pt-16 items-center">
          <div className="border-4 outline-none border-[#F7D039] w-fit rounded-full lg:dark:bg-white dark:bg-[#0C151D]">
            <div className="p-1">
              <img
                src={ProfilePic}
                alt=""
                className="w-36 h-36  rounded-full bg-[#F7D039]"
              />
            </div>
          </div>
          <div className="flex lg:items-start justify-center items-center flex-col font-poppins font-medium gap-2">
            <span className="text-4xl text-[#3D3D3D] dark:text-[#F1F2F4]">
              Henry Nnamani
            </span>
            <span className="text-lg text-[#575757] dark:text-[#A3ABB2]">
              Software Engineer
            </span>
            <span className="flex space-x-6 text-gray-500 dark:text-[#A3ABB2]">
              <a href="https://github.com/asahelcode">
                <GitHub />
              </a>
              <a href="https://twitter.com/asahelcode">
                <Twitter />
              </a>
              <a href="https://www.linkedin.com/in/henry-nnamani-a71b74287/">
                <LinkedIn />
              </a>
            </span>
          </div>
        </div>

        {/** */}
        <div className="flex mx-5 px-10 lg:justify-between xs:px-12 justify-around text-[#575757] dark:text-[#A3ABB2] font-poppins font-medium h-15 lg:gap-10">
          <div className="flex flex-col justify-center items-center w-[148px]">
            <span className="lg:text-xl text-lg">2</span>
            <span className="lg:text-center lg:text-lg text-sm text-center">
              Years of work experience
            </span>
          </div>
          <div className="flex flex-col justify-center items-center w-[100px]">
            <span className="lg:text-xl text-lg">3+</span>
            <span className="lg:text-center lg:text-lg text-sm text-center">
              Completed projects
            </span>
          </div>
          <div className="flex flex-col justify-center items-center w-[100px]">
            <span className="lg:text-xl text-lg">10+</span>
            <span className="lg:text-center lg:text-lg text-sm text-center">
              Satisfied customers
            </span>
          </div>
        </div>

        {/** */}
        <div className="flex lg:space-x-10 space-x-6 text-[#3D3D3D]">
          <button className="lg:px-10 px-7 lg:py-3 py-4 bg-[#FBD144] font-poppins font-medium flex justify-center items-center rounded-[10px]">
            <a className="mr-4  dark:text-[#3D3D3D] text-sm lg:text-lg xs:text-xs" href="https://flowcv.com/resume/oknhlbo7hv">
              Download CV
            </a>
            <MdFileDownload className="text-gray-600" />
          </button>
          <button className="lg:px-10 px-7 lg:py-3 py-4 bg-white dark:bg-[#171F26] flex justify-center items-center rounded-md">
            <a href="https://twitter.com/asahelcode" className="dark:text-[#A3ABB2] lg:text-lg text-xs">
              Contact me{" "}
            </a>
          </button>
        </div>

        {/** */}
        <div className="flex flex-col items-center font-poppins font-medium">
          <div className="bg-white dark:bg-[#171F26] p-4 group overflow-x-hidden w-[300px] lg:w-[460px] rounded-lg mb-4">
            <div className="flex justify-around items-center">
              <button
                className={`lg:px-16 px-10 py-4 ${
                  activeBtn === "portfolio" && "bg-[#D7D7D7] dark:bg-[#0C151D]"
                }  dark:text-[#A3ABB2] font-medium rounded-md`}
                onClick={() => setActiveBtn("portfolio")}
              >
                Portfolio
              </button>
              <button
                className={`lg:px-16 px-10 py-4 ${
                  activeBtn === "skills" && "bg-[#D7D7D7]  dark:bg-[#0C151D]"
                } font-medium dark:text-[#A3ABB2] rounded-md `}
                onClick={() => setActiveBtn("skills")}
              >
                Skills
              </button>
            </div>
          </div>
          <div className="lg:gap-2 gap-4 w-[80%] dark:text-[#A3ABB2]">
            <div className="flex flex-col space-y-4 w-full">
            {activeBtn === "portfolio" &&
              projects?.map((project) => (
                <div className="relative group">
                  {/* <img
                    src={project.image}
                    alt=""
                    className="lg:w-48 lg:h-48 w-full px-4 object-contain rounded-md "
                  /> */}
                    <button onClick={() => navigate(`/project/${project.id}`)} className="w-full hover:shadow-sm hover:shadow-[#FBD144] bg-white dark:bg-[#171F26] p-4 py-8 flex justify-between">
                        {project.title}
                          <ArrowForwardIcon />
                    </button>
                  {/* <div className="cursor-pointer dark:text-[#3D3D3D] absolute w-[92%] top-0 bottom-0 left-4 lg:w-[10rem] lg:h-[6.4rem] lg:top-11 lg:rounded-md lg:right-0 rounded-md bg-[#FFE071E0] opacity-0 group-hover:opacity-80 transition-opacity duration-200 z-10 flex justify-center items-center flex-col">
                    <span className="text-xs font-medium text-center">{project.title}</span>
                    <div>
                      <a
                        href={project.link}
                        className="w-10 h-10 flex justify-center items-center z-10 bg-white rounded-full mt-2"
                      >
                        <IoLinkOutline />
                      </a>
                    </div>
                  </div> */}
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-2">
            {activeBtn === "skills" &&
              skills?.map((skill) => (
                <div className="pt-4 flex items-center  gap-2">
                  <div className="w-16 h-16 text-white flex justify-center items-center bg-gray-600 rounded-full text-2xl">
                    {skill.icon}
                  </div>
                  <span className="text-sm text-gray-400">{skill.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/** */}
        <div className="text-gray-500 p-3 flex items-center">
          &copy; Henry. {new Date().getFullYear()} All right reserved
        </div>
      </>
  )
}

export default Home