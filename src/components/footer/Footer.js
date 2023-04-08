import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return <footer>&copy; {year} Tech Grab, LLC. All rights reserved.</footer>;
};

export default Footer;
