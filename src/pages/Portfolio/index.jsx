import React from "react";

import { Button, Img, List, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import Projects from "components/Projects";
import { TechnoogiesButton } from "components/TechnologiesButton";

const PortfolioPage = () => {
  const TechnologiesName = ["ROR", "ReactJs", "NodeJs", "MongoDB", "JavaScript", "TypeScript", "MaterialUI"]
  // const TechnologiesName = ["ROR"]
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
          <Button
            className="!text-white-A700 border border-gray-700 border-solid cursor-pointer font-medium leading-[normal] min-w-[187px] mt-[34px] rounded-[27px] text-[15px] text-center"
            color="black_900"
            size="sm"
            variant="fill"
          >
            Contact Me
          </Button>
          <div className="flex flex-col font-inter md:h-[] items-center justify-start mt-[104px] w-[61%] md:w-full">
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
{/*                   
                  <Button
                    className="bg-transparent cursor-pointer leading-[normal] min-w-[69px] rounded-[10px] text-[8px] text-center"
                    shape="round"
                    size="xs"
                    variant="outline"
                    color="deep_purple_A100_deep_orange_300"
                  >
                    Nodejs
                  </Button>
                  <Button
                    className="bg-transparent cursor-pointer leading-[normal] min-w-[56px] rounded-[10px] text-[8px] text-center"
                    shape="round"
                    size="xs"
                    variant="outline"
                    color="deep_purple_A100_deep_orange_300"
                  >
                    React
                  </Button>
                  <Button
                    className="bg-transparent border border-solid cursor-pointer deep_purple_A100_deep_orange_300_border2 leading-[normal] min-w-[69px] rounded-[10px] text-[8px] text-center"
                    shape="round"
                    color="black_900"
                    size="xs"
                    variant="fill"
                  >
                    JavaScript
                  </Button>
                  <Button
                    className="bg-transparent border border-solid cursor-pointer deep_purple_A100_deep_orange_300_border3 leading-[normal] min-w-[69px] rounded-[10px] text-[8px] text-center"
                    shape="round"
                    color="black_900"
                    size="xs"
                    variant="fill"
                  >
                    Typescript
                  </Button> */}
                </div>
              </div>
            </div>
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
                  <div className="flex flex-1 md:flex-col flex-row gap-[25px] items-center justify-between w-full">
                    <div className="flex md:flex-1 flex-col items-center justify-start md:justify-start w-[48%] md:w-full">
                      <Projects className="flex flex-row gap-3.5 items-center justify-between w-full" />
                    </div>
                    <div className="flex md:flex-1 flex-col items-center md:justify-between justify-start w-[49%] md:w-full">
                      <div className="flex flex-row gap-5 items-center justify-between md:p-[] md:pb-[] md:pl-[] md:pr-[] md:pt-[] w-full">
                        <div className="bg-white-A700 flex flex-col md:h-20 sm:h-[50px] items-center md:justify-center justify-start p-[25px] md:p-[] md:pb-[] md:pl-[] md:pr-[] md:pt-[] sm:px-5 rounded-[7px] sm:w-[100px] md:w-[199px] w-[38%]">
                          <Img
                            className="h-4 md:h-auto my-0.5 object-cover w-[99%]"
                            src="images/img_image4.png"
                            alt="imageFour"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-start md:w-1/2 sm:w-3/5">
                          <Text
                            className="text-[16.22px] text-center text-white-A700 tracking-[-0.49px]"
                            size="txtInterExtraBold1622"
                          >
                            Duly
                          </Text>
                          <Text
                            className="mt-[3px] text-[10px] text-blue_gray-400 tracking-[-0.18px] w-full"
                            size="txtInterMedium6"
                          >
                            Create a website with teamwork for Duly where they 
                            can patient can book appointment online and see all the
                            prescriptions reports as well as book for imaging and more.{" "}
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-center justify-between w-[97%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-[44%] md:w-full">
                      <div className="flex flex-row gap-[17px] items-center justify-between w-full">
                        <div className="bg-white-A700 flex flex-col md:h-[100px] sm:h-[50px] items-center md:justify-center justify-start p-[23px] sm:px-5 rounded-[7px] sm:w-[100px] md:w-[200px] w-[44%]">
                          <Img
                            className="h-4 md:h-auto my-1 object-cover w-full"
                            src="images/img_image6.png"
                            alt="imageSix"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-start md:w-1/2 sm:w-3/5">
                          <Text
                            className="text-[16.22px] text-center text-white-A700 tracking-[-0.49px]"
                            size="txtInterExtraBold1622"
                          >
                            Pharmacord
                          </Text>
                          <Text
                            className="md:ml-[0] text-[10px] text-blue_gray-400 tracking-[-0.18px]"
                            size="txtInterMedium6"
                          >
                            Developed the Portal for hospitals to take the payments.
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[47%] md:w-full">
                      <div className="flex flex-row gap-5 items-center justify-between w-full">
                        <div className="bg-white-A700 flex flex-col md:h-[100px] sm:h-[50px] items-center md:justify-center justify-start p-4 rounded-[7px] w-2/5 sm:w-[100px] md:w-[200px]">
                          <Img
                            className="h-[38px] md:h-auto object-cover w-[33%]"
                            src="images/img_image9.png"
                            alt="imageNine"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-start md:w-1/2 sm:w-3/5">
                          <Text
                            className="text-[16.22px] text-center text-white-A700 tracking-[-0.49px]"
                            size="txtInterExtraBold1622"
                          >
                            Flywire{" "}
                          </Text>
                          <Text
                            className="text-[10px] text-blue_gray-400 tracking-[-0.18px]"
                            size="txtInterMedium6"
                          >
                           Using ROR to make a payment gateway using credit cards, digital wallets
                           and echecks.
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
            </div>
            <Footer className="flex flex-col gap-[29px] md:gap-[] md:gap-x-[] md:gap-y-[] items-center justify-start mt-[222px] w-[65%] md:w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioPage;
