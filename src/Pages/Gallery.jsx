import React, { useEffect } from "react";
import Data from "../Data/GalleryData";
const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="gallery-page">
      <section className="page-header">
        <div className="position-relative d-flex justify-content-center align-items-center">
          <img
            src="https://preview.colorlib.com/theme/thecharity/images/hero.jpg.webp"
            alt=""
            className="img-fluid page-header-img"
          />
          <div className="position-absolute text-white text-center overlay">
            <h2>Gallery</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="row gy-4 py-5 px-2">
          {Data.map((item) => (
            <div className="col-lg-4 col-md-6 col-12" key={item.id}>
              <div class="card border-0">
                <img src={item.image} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{item.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
