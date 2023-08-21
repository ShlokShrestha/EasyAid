import React,{useEffect} from "react";
import FeatureCauses from "../components/FeatureCauses";
import ServerPeople from "../components/ServerPeople";
import MajorCauses from "../components/MajorCauses";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="banner">
        <div className="d-flex justify-content-center align-items-center position-relative">
          <img
            src="https://preview.colorlib.com/theme/thecharity/images/hero.jpg.webp"
            alt=""
            className="img-fluid"
          />
          <div className="position-absolute text-white overlay">
            <div className=" text-center px-3">
              <h1 className="text-warning">GIVE A HAND</h1>
              <h1>TO MAKE THE BETTER WORLD</h1>
              <p className="w-75 mx-auto">
                That don't lights. Blessed land spirit creature divide our made
                two itself upon you'll dominion waters man second good you
                they're divided upon winged were replenish night
              </p>
              <Link to='/contact' className="donatebtn  text-w">Donate Now</Link>
            </div>
          </div>
        </div>
      </section>
      {/* Major-causes-section */}
      <section className="cause-section">
        <MajorCauses />
      </section>
      {/* About-section */}
      <section className="about-section mt-5">
        <div className="position-relative d-flex justify-content-center align-items-center">
          <img
            src="https://preview.colorlib.com/theme/thecharity/images/welcome-bg.jpg.webp"
            alt=""
            className="img-fluid"
          />
          <div className="position-absolute about-us">
            <div className="container px-2">
              <div className="row py-5">
                <div className="col-lg-6 col-md-12 col-12 text-white p-4">
                  <img
                    src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=813&q=80"
                    className="img-fluid w-full h-auto"
                    alt=""
                  />
                </div>
                <div className="col-lg-6 col-md-12 col-12  text-white">
                  <h1 className="position-relative pb-4">
                    Welcome to our Charity
                  </h1>
                  <p className="my-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                    deleniti temporibus illo similique assumenda doloribus
                    soluta magni. A, quis inventore dolorum aut vel reiciendis
                    consequatur numquam maiores nobis veniam! Odit. Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit. Totam hic
                    incidunt, eaque quos, explicabo et perspiciatis consequatur
                    obcaecati eveniet fugiat saepe fugit molestias! Hic,
                  </p>
                  <Link to='/about' className=" readbtn">Read Me</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Feature-section */}
      <section className="feature-causes ">
        <FeatureCauses />
      </section>
      {/* Serve-people-section */}
      <section className="serve-people bg-light">
        <ServerPeople />
      </section>
      {/* Join-with-us-section */}
      <section className="join-us py-5 ">
        <div className="text-center my-5 text-white">
          <h1>Become a volunteer</h1>
          <p className="w-50 mx-auto">
            So seed seed green that winged cattle in. Gathering thing made fly
            you're divided deep leave on the medicene moved us land years
            living.
          </p>
          <button className="joinbtn mt-4">Join with us</button>
        </div>
      </section>
    </>
  );
};

export default Home;
