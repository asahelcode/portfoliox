import { useParams, useOutletContext } from 'react-router-dom'
import projects from '@/data/project.json'
import { useEffect } from 'react'
import { GitHub } from "@mui/icons-material";
import InsertLinkIcon from '@mui/icons-material/InsertLink';

type Project = {
  id: number
  image: string
  description: string
  title: string
  github: string
  link: string
  technologies: string[]
}


interface ContextProp {
  darkMode: boolean
}

const ProjectDetail = () => {
  const { id } = useParams()

  const project: Project | undefined = projects.find((project) => project.id.toString() == id)
  const { darkMode }: ContextProp = useOutletContext();

  // const navigate = useNavigate()

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  if(!project) {
    return
  }

  return (
    <div className="mt-10 flex  flex-col space-y-10 justify-center items-center">
      <span className="text-2xl font-semibold text-center">{project.title}</span>
      <img src={project && project.image} alt="" className="h-44 object-contain border p-2 border-white"/>
      <div className="lg:w-[50%] w-[80%] flex justify-center text-sm px-10 border-l-2 border-r-2 border-white">
        {project.description}
      </div>
      <div className="flex space-x-10">
        <a href={project.github} className="flex items-center space-x-2">
          <GitHub />
          <span>Github</span>
        </a>
        <a href={project.link} className="flex items-center space-x-2">
          <InsertLinkIcon />
          <span className="font-normal ">Live</span>
        </a>
      </div>
      <div className="flex justify-center items-center flex-col space-y-4">
        <span>Technologies</span>
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-5">
          {
            project.technologies.map((technology) => (
              <span className="w-fit p-2 px-3 rounded-full bg-gray-400 text-white">
                {technology}
              </span>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail