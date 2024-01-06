import ToggleDarkIcon from "./common/icons/ToggleDarkIcon";
import ProfilePic from "../src/assets/profile-removebg-preview.png";
import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import { Button } from "./components";
import DownloadIcon from "./common/icons/DownloadIcon";

function App() {
  return (
    <>
      <div className="bg-[#E9EBEC] h-screen w-screen font-poppins">
        <div className="container max-w-screen-lg mx-auto flex space-y-10 flex-col items-center justify-center">
          <div className="pt-4">
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
            <Button
              label="Download CV"
              color="FBD144"
              icon={<DownloadIcon />}
            />
            <Button label="Contact me" />
          </div>

          {/** */}
          <div className="bg-white p-4 group  w-[460px] rounded-lg">
            <div className="flex justify-around items-center">
              <button className=" bg-[#D7D7D7] px-16 py-4 font-medium rounded-md">
                Portfolio
              </button>
              <button className="px-16 py-4 rounded-md">Skills</button>
            </div>
            <div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
