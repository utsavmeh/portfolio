import React from "react";

import { Button, Img, Text } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex flex-row gap-4 items-center justify-between w-[12%] sm:w-[10%]">
          <Img
            className="h-[26px]"
            src="images/img_television.svg"
            alt="logo"
          />
          <div className="flex flex-col items-end justify-start">
            <Text
              className="sm:text-[20.21px] md:text-[26.21px] text-[28.21px] text-white-A700"
              size="txtPoppinsBold2221"
            >
              Utsav{" "}
            </Text>
            <Text
              className="text-[7.18px] text-white-A700 tracking-[5.51px] uppercase"
              size="txtPoppinsRegular918"
            >
              Mehrotra
            </Text>
          </div>
        </div>
        <div className="flex flex-row gap-2.5 items-center justify-between w-[17%] md:w-[30%] sm:w-[50%]">
          <Button
            className="cursor-pointer font-medium font-poppins leading-[normal] min-w-[96px] sm:min-w-[70px] text-[13.19px] sm:text-[10.19px] text-center"
            shape="round"
            color="gray_500"
            size="xs"
            variant="outline"
          >
            About me
          </Button>
          <Button
            className="cursor-pointer font-medium font-poppins leading-[normal] min-w-[87px] sm:min-w-[65px] text-[13.19px] sm:text-[10.19px] text-center"
            shape="round"
            color="white_A700"
            size="xs"
            variant="fill"
          >
            Contact
          </Button>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
