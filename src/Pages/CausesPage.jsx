import React, { useEffect } from "react";
import MajorCauses from "../components/MajorCauses";
import FeatureCauses from "../components/FeatureCauses";

const Causes = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="causes-page">
      <div className="page-header">
        <div className="position-relative d-flex justify-content-center align-items-center">
          <img
            src="https://preview.colorlib.com/theme/thecharity/images/hero.jpg.webp"
            alt=""
            className="img-fluid page-header-img"
          />
          <div className="position-absolute text-white text-center overlay">
            <h2>Causes</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div className="my-5">
        <MajorCauses />
      </div>
      <div className="my-5">
        <FeatureCauses />
      </div>
    </div>
  );
};

export default Causes;
