import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="items-center text-center justify-center">
          <h1 className="text-2xl font-bold items-center justify-center">Gadget Heaven</h1>
          <p className="text-slate-400 "><small>Leading the way in cutting-edge technology and innovation.</small></p>
      </div>
      {/* <div className="w-full ml-10 mr-10 border-1 bg-base-200 "></div> */}
      <div className="flex  bg-white justify-between m-5 ">
        <footer className="gap-50 w-1/2 mx-auto footer sm:footer-horizontal text-base-content p-10">
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
