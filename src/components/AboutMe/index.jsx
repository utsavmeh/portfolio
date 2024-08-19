import React from "react";
import { Text, Img, List } from "components";
import ProjectTask from "components/Projects";
import Footer from "components/Footer";
import './aboutme.css';
import Experience from "components/Experience";
import Project from "components/Projects";

const AboutMe = () => {

	return(
		<div className="flex flex-col font-inter md:h-[] items-center justify-start mt-[104px] w-[61%] md:w-full" id="aboutme">
		<div className="flex flex-col gap-[26px] items-center justify-start w-full">
			<div className="flex flex-col items-center justify-start">
				<Text
					className="sm:text-[35px] md:text-[41px] text-[45px] text-center text-white-A700 tracking-[-1.35px] uppercase"
					size="txtInterExtraBold45"
				>
					About Me
				</Text>
				<Text
					className="bg-clip-text bg-gradient  text-[11px] text-center text-transparent tracking-[6.60px] uppercase"
					size="txtInterMedium11"
				>
					Explore Now
				</Text>
			</div>
			<Text
				className="text-[17px] text-center text-gray-300"
				size="txtInterMedium17"
			>
				<span className="text-gray-300 font-inter font-medium">
					As a passionate software engineer, I thrive on the intricate
					dance between logic and creativity. Currently immersed in the
					dynamic world of{" "}
				</span>
				<span className="text-gray-300 font-inter font-bold">
					Veersa
				</span>
				<span className="text-gray-300 font-inter font-medium">
					<>
						, my expertise centers around ReactJs and ROR, where I
						seamlessly blend technology with innovation.
						<br />
						<br />
						With a fervor for crafting elegant solutions, I navigate the
						ever-evolving landscape of software development. My journey
						involves translating concepts into code, creating seamless
						user experiences, and constantly pushing the boundaries of
						what&#39;s possible
					</>
				</span>
			</Text>
		</div>
		<Experience />
		<Project />
		<Footer className="flex flex-row gap-[50px] md:gap-[] md:gap-x-[] md:gap-y-[] items-center justify-center mt-[222px] w-[65%] md:w-full" />
	</div>
	)
}

export default AboutMe;