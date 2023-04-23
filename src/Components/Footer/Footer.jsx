import React from "react";

import Enquiry from "./Enquiry";

import PrivacyBlock from "./PrivacyBlock";

const Footer = () => {
  return (
    <section className="navbar bg-slate-200 w-full h-16 flex flex-row shadow-black ">
      <PrivacyBlock />
      <Enquiry />
    </section>
  );
};

export default Footer;
