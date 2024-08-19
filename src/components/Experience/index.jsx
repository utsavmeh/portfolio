import React from "react";
import { Text } from "components";
import { TechnoogiesButton } from "components/TechnologiesButton";

const Experience = () => {
  const TechnologiesName = ["ROR", "ReactJs", "NodeJs", "MongoDB", "JavaScript", "TypeScript", "MaterialUI"]

  return (
    <div className="flex flex-col gap-[54px] items-center justify-start mt-[97px] w-full">
			<div className="flex flex-col items-center justify-start">
				<Text
					className="sm:text-[35px] md:text-[41px] text-[45px] text-center text-white-A700 tracking-[-1.35px] uppercase"
					size="txtInterExtraBold45"
				>
					Experience
				</Text>
				<Text
					className="bg-clip-text bg-gradient  text-[11px] text-center text-transparent tracking-[6.60px] uppercase"
					size="txtInterMedium11"
				>
					Explore Now
				</Text>
			</div>
			<div className="flex flex-col items-start justify-start w-full">
				<div className="flex sm:flex-col flex-row sm:gap-10 gap-[291px] items-center justify-start w-auto md:w-full">
					<Text
						className="text-[17.58px] text-center text-white-A700 w-auto"
						size="txtInterExtraBold1758"
					>
						<span className="text-white-A700 font-inter font-extrabold">
							Veersa /
						</span>
						<span className="text-white-A700 font-inter font-normal">
							{" "}
							Software Engineer
						</span>
					</Text>
					<Text
						className="text-[10px] text-center text-gray-300 w-auto"
						size="txtInterRegular10"
					>
						Feb 2022 - PRESENT, Noida
					</Text>
				</div>
				<Text
					className="mt-8 text-[13px] text-center text-gray-300"
					size="txtInterMedium17"
				>
					<>
						Currently, I am working in Veersa Technoogies a service
						based company where i worked with different technologies
						like ReactJs, AngularJs, NodeJs and Ruby On Rails.
						I have more than 1+ years of experience in Reactjs, In mid 
						way of my journey i worked in Angular JS too but now i am 
						again back with Reactjs.
						<br />
						<br />
						My experience with React Js has allowed me to develop
						cross-platform websites that run seamlessly, scalable,
						and dynamic web pages with excellent user
						experiences. I have a deep understanding of component-based
						architecture and state management, and I am well-versed in
						the latest web development trends and technologies.
						<br />
					</>
				</Text>
				<div className="flex flex-wrap gap-[9px] items-center justify-start mt-4 w-[80%] md:w-full">
					{
						TechnologiesName.map((item, index) => (
							<TechnoogiesButton techName={item} key={index} />
						))
					}
				</div>
			</div>
		</div>
  )
}

export default Experience;