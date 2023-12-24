import React from "react";

const sizeClasses = {
  txtPoppinsBold6342: "font-bold font-poppins",
  txtPoppinsRegular918: "font-normal font-poppins",
  txtInterRegular10: "font-inter font-normal",
  txtInterMedium10: "font-inter font-medium",
  txtInterMedium11: "font-inter font-medium",
  txtInterExtraBold1622: "font-extrabold font-inter",
  txtInterMedium17: "font-inter font-medium",
  txtInterExtraBold1758: "font-extrabold font-inter",
  txtInterMedium6: "font-inter font-medium",
  txtInterExtraBold45: "font-extrabold font-inter",
  txtPoppinsBold2221: "font-bold font-poppins",
  txtInterSemiBold2611: "font-inter font-semibold",
  txtPoppinsMedium16: "font-medium font-poppins",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
