import React from "react";

import { Img, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[15px] w-[174px]"
          src="images/img_socialicons.svg"
          alt="socialicons"
        />
        <a href="https://www.buymeacoffee.com/utsavmeh"> <img align="left" src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" height="30" width="100" alt="utsavmeh" /></a>
        <div className="h-6 relative w-full">
          <Text
            className="m-auto text-[10px] text-center text-gray-300"
            size="txtInterMedium10"
          >
            <>
              Loosely designed in Figma and coded in Visual Studio Code by yours
              truly. Built with Next.js
              <br />
              and Tailwind CSS, deployed with Vercel. All text is set in the
              Inter typeface.
            </>
          </Text>
          <Img
            className="absolute h-[11px] left-[22%] top-[0]"
            src="images/img_figma.svg"
            alt="figma"
          />
        </div>
      </div>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
