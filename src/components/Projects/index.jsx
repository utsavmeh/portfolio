import React from "react";

import { Img, Text } from "components";

const Projects = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="block md:flex md:h-[100px] sm:h-[50px] h-[70px] md:items-center md:justify-center object-cover rounded-[7px] sm:w-[100px] md:w-[200px]"
          src="images/img_image2.png"
          alt="imageTwo"
        />
        <div className="flex flex-col items-start justify-start md:w-1/2 sm:w-3/5">
          <Text
            className="text-[16.22px] text-center text-white-A700 tracking-[-0.49px]"
            size="txtInterExtraBold1622"
          >
            WebHR
          </Text>
          <Text
            className="md:ml-[0] ml-[3px] mt-0.5 text-[6px] text-blue_gray-400 tracking-[-0.18px] w-[99%] sm:w-full"
            size="txtInterMedium6"
          >
            Designed a modern UI website comprising more than 50 screens, along
            with the integration of a blog using Next.js.
          </Text>
        </div>
      </div>
    </>
  );
};

Projects.defaultProps = {};

export default Projects;
