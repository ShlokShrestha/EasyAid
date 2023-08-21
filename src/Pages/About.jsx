import React, { useEffect } from "react";
import ServerPeople from "../components/ServerPeople";
import { Link } from "react-router-dom";
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="about-page">
      <section className="page-header">
        <div className="position-relative d-flex justify-content-center align-items-center">
          <img
            src="https://preview.colorlib.com/theme/thecharity/images/hero.jpg.webp"
            alt=""
            className="img-fluid page-header-img"
          />
          <div className="position-absolute text-white text-center overlay">
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="bg-white ">
          <div className="container py-5">
            <div className="row my-5">
              <div className="col-lg-6 col-md-12 col-12 ">
                <img
                  src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=813&q=80"
                  className="img-fluid w-full h-auto"
                  alt=""
                />
              </div>
              <div className="col-lg-6 col-md-12 col-12  ">
                <h1 className="position-relative pb-3">
                  Welcome to our Charity
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                  deleniti temporibus illo similique assumenda doloribus soluta
                  magni. A, quis inventore dolorum aut vel reiciendis
                  consequatur numquam maiores nobis veniam! Odit. Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit. Totam hic
                  incidunt, eaque quos, explicabo et perspiciatis consequatur
                  obcaecati eveniet fugiat saepe fugit molestias! Hic,
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ServerPeople />
      <div className="join-us py-5 ">
        <div className="text-center my-5 text-white">
          <h1>Become a volunteer</h1>
          <p className="w-50 mx-auto">
            So seed seed green that winged cattle in. Gathering thing made fly
            you're divided deep leave on the medicene moved us land years
            living.
          </p>
          <Link to="/contact" className="joinbtn mt-4">
            Join with us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
