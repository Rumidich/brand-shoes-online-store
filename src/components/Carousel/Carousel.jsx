import React from "react";
import Carousel from "react-material-ui-carousel";
import "../Carousel/cars.css";

export default function Example(props) {
  return (
    <Carousel
      sx={{ marginBottom: "20px" }}
      height={"70vh"}
      swipe={true}
      autoPlay={true}
      interval={1500}
      stopAutoPlayOnHover={false}>
      <img
        className="cars"
        src="https://cdn.mos.cms.futurecdn.net/Tub9SozhpGmcFqtwmfVuT8.jpg"
      />

      <img
        className="cars"
        src="https://media.self.com/photos/62601451abd68281a6081461/4:3/w_2560%2Cc_limit/addidas-allbirds-low-carbon-sneaker-collab.png"
      />
      <img
        className="cars"
        src="https://brand.assets.adidas.com/f_auto,q_auto,fl_lossy/capi/enTH/Images/how-to-clean-4d-masthead-m_205-737907.jpg"
      />

      <img
        className="cars"
        src="https://assets.adidas.com/images/w_600,f_auto,q_auto/80a14d20e5d2465dac6eacad0119b6f3_9366/Ultraboost_21_Shoes_White_FY0377_HM1.jpg"
      />
      <img
        className="cars"
        src="https://i.insider.com/618008a51037b10018153033?width=1080&format=jpeg"
      />
    </Carousel>
  );
}
