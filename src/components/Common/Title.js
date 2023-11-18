import React from "react";

const Title = ({ level = 1, children, ...props }) => {
  const HeadingTag = `h${level}`;
  return <HeadingTag {...props}>{children}</HeadingTag>;
};

export default Title;
