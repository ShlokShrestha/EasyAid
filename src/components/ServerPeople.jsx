import React from "react";

const FeatureCauses = () => {
  return (
    <div className="bg-light">
      <div className="text-center py-5">
        <h1>We serve for peoples</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
          obcaecati!
        </p>
      </div>
      <div className="container">
        <div className="row py-5 px-4 gy-4">
          <div className="col-lg-4 col-md-6 col-12 text-center">
            <img src="/img/services1.png" alt="" style={{ width: "110px" }} />
            <h4 className="mt-4">Pure Food & Water</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
              alias ullam! Atque quas odio quis?
            </p>
          </div>
          <div className="col-lg-4 col-md-6 col-12 text-center">
            <img src="/img/services2.png" alt="" style={{ width: "110px" }} />
            <h4 className="mt-4">Health & Medicine</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
              alias ullam! Atque quas odio quis?
            </p>
          </div>
          <div className="col-lg-4 col-md-6 col-12 text-center">
            <img src="/img/services3.png" alt="" style={{ width: "110px" }} />
            <h4 className="mt-4">Education</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
              alias ullam! Atque quas odio quis?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCauses;
