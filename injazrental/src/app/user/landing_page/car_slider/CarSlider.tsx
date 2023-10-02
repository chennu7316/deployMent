"use client";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "/banner.jpg" },
  { url: "/1000_F_516057644_qMGY5IZoNNOkCLI5vJqtNpXSIU9J5Kmx.jpg" },
  { url: "images/3.jpg" },
  { url: "images/4.jpg" },
  { url: "images/5.jpg" },
  { url: "images/6.jpg" },
  { url: "images/7.jpg" },
];

export const CarSlider = () => {
  return (
    <div style={{ backgroundPosition: "bottom" }}>
      <SimpleImageSlider
        width="100%"
        style={{ backgroundPosition: "bottom" }}
        height="80vh"
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
};
