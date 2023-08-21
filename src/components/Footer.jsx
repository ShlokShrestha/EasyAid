import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container pt-5">
        <div className="row my-5 text-white">
          <div className="col-lg-3 col-md-6 col-6">
            <h3>the charity</h3>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, con sectetur adipiscing elit. Mauris
              temp us vestib ulum mauris.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. <br />
              Mauris tempus vestib ulum mauris.Lorem ipsum dolo. Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Incidunt facere
              dolor veritatis necessitatibus provident eligendi.
            </p>
          </div>
          <div className="col-lg-3 col-md-6 col-6">
            <h3>Useful Links</h3>
            <div className="mt-4">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/causes">Causes</Link>
                </li>
                <li>
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-6">
            <h3>Support</h3>
            <p className="mt-4 w-50">
              When a child gets access to good food, it can change.
            </p>
            <Link to='/contact' className=" readbtn">Join Us Today</Link>
          </div>
          <div className="col-lg-3 col-md-6 col-6">
            <h3>Contact Us</h3>
            <div className="d-flex flex-column mt-4">
              <p>
                <FaPhoneAlt /> +977-9845632175
              </p>
              <p>
                <MdEmail /> office@gmail.com
              </p>
              <p>
                <MdLocationOn /> Baneshwor, Kathmandu, Nepal
              </p>
            </div>
          </div>
        </div>
        <div className="text-white text-center pb-2">
          <hr />
          <p>Copyright ©2023 All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
