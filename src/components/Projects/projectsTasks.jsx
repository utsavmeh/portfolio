import React from "react";

import { Img, Text } from "components";

const ProjectTask = (props) => {
  return (
    <>
      <div className={props.className}>
        {/* <div className="bg-white-A700 zoom-hover flex flex-col md:h-[100px] sm:h-[50px] items-center md:justify-center justify-start p-[23px] sm:px-5 rounded-[7px] sm:w-[100px] md:w-[200px] w-[58%]"> */}
          {/* <Img
            className="block md:flex md:h-[100px] sm:h-[50px] h-auto md:items-center md:justify-center object-cover rounded-[7px] sm:w-[100px] md:w-[200px]"
            src={props.image} 
            alt={props.projectName}
          /> */}
        {/* </div> */}
        <div className="flex flex-col items-start justify-start md:w-1/2 sm:w-3/5">
          <Text
            className="text-[26.22px] text-center text-white-A700 tracking-[-0.49px]"
            size="txtInterExtraBold1622"
          >
            {props.projectName}
          </Text>
          <Text
            className="md:ml-[0] ml-[3px] mt-0.5 text-[12px] text-blue_gray-400 tracking-[-0.18px] w-[99%] sm:w-full"
            size="txtInterMedium6"
          >
            {props.projectDescription}
          </Text>
        </div>
      </div>
    </>
  );
};

ProjectTask.defaultProps = {};

export default ProjectTask;
