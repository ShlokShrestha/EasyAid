import React from "react";
import Causes from "../components/Causes";

const Home = () => {
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
              <button className="donatebtn  text-w">Donate Now</button>
            </div>
          </div>
        </div>
      </section>
      <section className="cause-section">
        <div className="container py-5">
          <div className="text-center my-5">
            <h1>Our Major Causes</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
              obcaecati!
            </p>
          </div>
          <div className="row px-2 gy-4">
            <div className="col-lg-4 col-md-6 col-12">
              <div class="bg-light cards ">
                <div class="card-body text-center ">
                  <h4 class="card-title py-5">Give Donation</h4>
                  <img
                    src="https://preview.colorlib.com/theme/seelife/img/causes/c1.png.webp"
                    alt=""
                    className="pb-3"
                  />
                  <p class="card-text px-4 py-4">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ipsam eveniet doloribus maxime aliquid debitis numquam fugit
                    rerum iure necessitatibus labore?
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div class="bg-light cards ">
                <div class="card-body text-center ">
                  <h4 class="card-title py-5">Give Inspiration</h4>
                  <img
                    src="https://preview.colorlib.com/theme/seelife/img/causes/c2.png.webp"
                    alt=""
                    className="pb-3"
                  />
                  <p class="card-text px-4 py-4">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ipsam eveniet doloribus maxime aliquid debitis numquam fugit
                    rerum iure necessitatibus labore?
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div class="bg-light cards ">
                <div class="card-body text-center ">
                  <h4 class="card-title py-5">Become Bolunteer</h4>
                  <img
                    src="https://preview.colorlib.com/theme/seelife/img/causes/c3.png.webp"
                    alt=""
                    className="pb-3"
                  />
                  <p class="card-text px-4 py-4">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ipsam eveniet doloribus maxime aliquid debitis numquam fugit
                    rerum iure necessitatibus labore?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
                  <button className=" readbtn">Read Me</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="feature-causes ">
        <div className="text-center py-5">
          <h1>Featured Causes</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            obcaecati!
          </p>
        </div>
        <div className="pb-5">
          <Causes />
        </div>
      </section>
      <section className="serve-people bg-light">
        <div className="text-center py-5">
          <h1>Featured Causes</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            obcaecati!
          </p>
        </div>
        <div className="container">
          <div className="row py-5 px-4 gy-4">
            <div className="col-lg-4 col-md-6 col-12 text-center">
              <img
                src="https://preview.colorlib.com/theme/charitee/assets/img/icon/services1.svg"
                alt=""
              />
              <h4 className="mt-4">Pure Food & Water</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
                alias ullam! Atque quas odio quis?
              </p>
            </div>
            <div className="col-lg-4 col-md-6 col-12 text-center">
              <img
                src="https://preview.colorlib.com/theme/charitee/assets/img/icon/services2.svg"
                alt=""
              />
              <h4 className="mt-4">Health & Medicine</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
                alias ullam! Atque quas odio quis?
              </p>
            </div>
            <div className="col-lg-4 col-md-6 col-12 text-center">
              <img
                src="https://preview.colorlib.com/theme/charitee/assets/img/icon/services3.svg"
                alt=""
              />
              <h4 className="mt-4">Education</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
                alias ullam! Atque quas odio quis?
              </p>
            </div>
          </div>
        </div>
      </section>
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
