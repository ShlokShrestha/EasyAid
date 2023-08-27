import React from "react";
import Data from "../Data/CauseData";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
const Causes = () => {
  return (
    <section className="causes-card">
      <div className="text-center py-5">
        <h1>Featured Causes</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
          obcaecati!
          
        </p>
      </div>
      <div className="container pb-5 px-3">
        <div className="row gy-4">
          {Data.map((item) => (
            <div className="col-lg-4 col-md-6 col-12 " key={item.id}>
              <div className="card">
                <img
                  src={item.image}
                  className="card-img-top overflow-hidden"
                  alt="..."
                />
                <div className="card-body p-4">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text text-secondary">{item.overview}</p>
                  <div className="d-flex justify-content-between my-3 fw-medium">
                    <span>Raised: ${item.raised}</span>
                    <span className="text-success">Goal: ${item.goal}</span>
                  </div>
                  <div className="d-flex justify-content-between my-2 ">
                    <Link to='/contact' className=" readbtn">Donate</Link>
                    <span className="my-auto text-success">
                      <AiOutlineHeart size={22} className="me-1" />
                      {item.donate} Donors
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Causes;
