import React from "react";

import { Img, Text, List } from "components";
import ProjectTask from "./projectsTasks";

const Project = () => {
  const ProjectList = [
    {
      name: "Techecies",
      image: "images/techecies.png",
      description: "Created the registration form page and implemented Mail service, Payment gateway using nodeJs and MongoDB."
    },
    {
      name: "Duly",
      image: "images/duly.png",
      description: "Create a website with teamwork for Duly where they can patient can book appointment online and see all the prescriptions reports as well as book for imaging and more."
    },
    {
      name: "Pharmacord",
      image: "images/pharmacord.png",
      description: "Developed the Portal for hospitals to take the payments."
    },
    {
      name: "Flywire",
      image: "images/flywire.png",
      description: "Using ROR to make a payment gateway using credit cards, digital wallets and echecks."
    }
  ]
  return (
    <div className="flex flex-col items-center justify-start mt-[105px] w-[99%] md:w-full">
			<div className="flex flex-col gap-[54px] items-center justify-start w-full">
				<div className="flex flex-col items-center justify-start">
					<Text
						className="sm:text-[35px] md:text-[41px] text-[45px] text-center text-white-A700 tracking-[-1.35px] uppercase"
						size="txtInterExtraBold45"
					>
						Projects
					</Text>
					<Text
						className="bg-clip-text bg-gradient  text-[11px] text-center text-transparent tracking-[6.60px] uppercase"
						size="txtInterMedium11"
					>
						Explore Now
					</Text>
				</div>
				<List
					className="flex flex-col gap-[23px] items-start w-full"
					orientation="vertical"
				>
					<div className="grid grid-cols-2 gap-4">
              {
                ProjectList.map((projects) => (
                  <ProjectTask 
                    className="flex flex-row gap-3.5 items-center justify-between w-full"
                    image = {projects.image}
                    projectName = {projects.name}
                    projectDescription = {projects.description}
                  />
                ))
              }
					</div>
				</List>
			</div>
		</div>
  )
}

export default Project;