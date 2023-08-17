import React from "react";
const Gallery = () => {
  return (
    <div>
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
    </div>
  );
};

export default Gallery;
