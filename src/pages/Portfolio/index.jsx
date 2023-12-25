import React from "react";

import { Button, Img, Text } from "components";
import Header from "components/Header";
import AboutMe from "components/AboutMe";

const PortfolioPage = () => {
  return (
    <>
      <div
        className="bg-black-900 bg-cover bg-no-repeat flex flex-col font-poppins h-full items-center justify-start mx-auto p-[33px] sm:px-5 w-full"
        style={{ backgroundImage: "url('images/img_portfolio.png')" }}
      >
        <div className="flex flex-col items-center justify-start max-w-[1168px] mb-[60px] mx-auto md:px-5 w-full">
          <Header className="flex flex-row md:gap-10 items-center justify-between w-full" />
          <div className="bg-gray-900 flex flex-col h-[231px] items-center justify-start mt-[123px] pl-0.5 pt-0.5 rounded-[115px] w-[231px]">
            <div className="flex flex-col items-center justify-start w-[228px] md:w-full">
              <Img
                className="h-[229px] md:h-auto object-cover rounded-bl-[115px] rounded-br-[115px] w-[228px] sm:w-full"
                src="images/img_image1.png"
                alt="imageOne"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start mt-8">
            <Text
              className="md:text-5xl text-[63.42px] text-center text-white-A700 tracking-[-3.81px]"
              size="txtPoppinsBold6342"
            >
              Utsav Mehrotra!
            </Text>
            <Text
              className="sm:text-[22.11px] md:text-[24.11px] text-[26.11px] text-blue_gray-400 text-center"
              size="txtInterSemiBold2611"
            >
              <span className="text-gray-400 font-poppins font-semibold">
                I do Code &{" "}
              </span>
              <span className="text-deep_purple-A100 font-poppins font-semibold">
                Chill
              </span>
              <span className="text-red-900 font-poppins font-semibold"> </span>
              {/* <span className="text-blue_gray-400 font-poppins font-semibold">
                ?
              </span>
              <span className="text-blue_gray-400 font-inter font-semibold">
                ?
              </span> */}
            </Text>
          </div>
          <Text
            className="mt-[26px] text-base text-center text-gray-300"
            size="txtPoppinsMedium16"
          >
            <>
              Passionate Software Engineer with a focus on ReactJs, NodeJs, Ruby on Rails
              development,
              <br />
              dedicated to crafting elegant and user-friendly websites.
            </>
          </Text>
          <a href="https://wa.me/9140727830" target="_blank">
            <Button
              className="!text-white-A700 border border-gray-700 border-solid cursor-pointer font-medium leading-[normal] min-w-[187px] mt-[34px] rounded-[27px] text-[15px] text-center"
              color="black_900"
              size="sm"
              variant="fill"
            >
              Contact Me
            </Button>
          </a>
          <AboutMe/>
        </div>
      </div>
    </>
  );
};

export default PortfolioPage;
