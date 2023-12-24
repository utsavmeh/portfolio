import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-lg" };
const variants = {
  outline: {
    gray_500: "border border-gray-500 border-solid text-gray-300",
    deep_purple_A100_deep_orange_300:
      "border border-solid deep_purple_A100_deep_orange_300_border text-gray-300",
  },
  fill: {
    white_A700: "bg-white-A700 text-black-900",
    black_900: "bg-black-900 text-gray-300",
  },
};
const sizes = { xs: "p-[5px]", sm: "p-4" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf([
    "gray_500",
    "deep_purple_A100_deep_orange_300",
    "white_A700",
    "black_900",
  ]),
};

export { Button };
