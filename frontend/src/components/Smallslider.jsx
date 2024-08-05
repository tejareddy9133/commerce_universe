import React from "react";
import Slider from "react-slick";

function Responsive() {
  const images = [
    {
      img: "https://pisces.bbystatic.com/image2/BestBuy_US/dam/ghp-MMT-669182-tv-16c7b1f5-f700-4469-bcf6-821e568b4e3f.jpg;maxHeight=960;maxWidth=960",
    },
    {
      img: "https://pisces.bbystatic.com/image2/BestBuy_US/dam/SOL-106837-iphone14-yellow-na-ghp-a82b438b-18ff-47cc-880a-63e33b653e8e.jpg;maxHeight=960;maxWidth=960",
    },
    {
      img: "https://pisces.bbystatic.com/image2/BestBuy_US/dam/subghp-EVN-205712-upgrade-plus-b513dde8-d003-432d-b792-8b4eb9903e0d.jpg;maxHeight=960;maxWidth=960",
    },
    {
      img: "https://pisces.bbystatic.com/image2/BestBuy_US/dam/pol-MMT-665820_DER-87a2497b-38b8-45a5-b746-0bb83bc7ee42.jpg;maxHeight=504;maxWidth=740",
    },
    {
      img: "https://pisces.bbystatic.com/image2/BestBuy_US/dam/top-MMT-665816-Save350WindowsLaptops_DER-b825f326-fdf3-4358-a96c-2bee0b54751f.jpg;maxHeight=504;maxWidth=740",
    },
  ];
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider style={{ height: "230px" }} {...settings}>
        {images.map((el) => (
          <div style={{ width: "150px", height: "200px", margin: "10px" }}>
            <img src={el.img} alt="" height={"10%"} width={"50%"} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Responsive;
