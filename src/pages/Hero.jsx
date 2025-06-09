import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

const Hero = () => {
  const heroSlides = [
    {
      src: "https://s7ap1.scene7.com/is/image/incredibleindia/rural-listing-hero?qlt=82&ts=1727161958795",
      alt: "Rural India landscape",
      title: "Discover Rural India",
      subtitle: "Experience the authentic beauty of India's countryside",
      textPosition: "left",
    },
    {
      src: "https://c8.alamy.com/comp/BA1XW3/batik-showing-traditional-indian-village-scene-with-bullock-carts-BA1XW3.jpg",
      alt: "Traditional Indian village",
      title: "Traditional Crafts & Culture",
      subtitle: "Discover centuries-old traditions still alive today",
      textPosition: "right",
    },
    {
      src: "https://img.staticmb.com/mbcontent/images/crop/uploads/2021/10/tractor-spraying-pesticides-on-soybean-field_0_1200.jpg",
      alt: "Indian farmlands",
      title: "Sustainable Agriculture",
      subtitle: "Learn about India's farming heritage and innovations",
      textPosition: "center",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAqGlriO9WDW_mIF_b6fMkmHP8kkZY7XCXbQ&s",
      alt: "Local artisans in India",
      title: "Meet Local Artisans",
      subtitle: "Support authentic handmade crafts from rural communities",
      textPosition: "left",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: true,
    cssEase: "linear",
    pauseOnHover: false,
    dotsClass: "slick-dots !bottom-6",
  };

  // Function to determine text alignment based on position
  const getTextAlignment = (position) => {
    switch(position) {
      case "left": return "text-left items-start pl-8 sm:pl-12 md:pl-16 lg:pl-24";
      case "right": return "text-right items-end pr-8 sm:pr-12 md:pr-16 lg:pr-24";
      default: return "text-center items-center";
    }
  };

  return (
    <div className="relative mx-[-16px] overflow-hidden">
      <Slider {...settings}>
        {heroSlides.map((slide, index) => (
          <div key={index} className="relative">
            <div className="relative w-full h-80 sm:h-96 md:h-[30rem] lg:h-[40rem]">
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-full object-cover brightness-75"
                loading="lazy"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              {/* Content overlay */}
              <div className={`absolute inset-0 flex flex-col justify-center ${getTextAlignment(slide.textPosition)}`}>
                <div className="max-w-2xl space-y-4 text-white px-4">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg">
                    {slide.title}
                  </h1>
                  <p className="text-lg sm:text-xl md:text-2xl font-medium drop-shadow-md">
                    {slide.subtitle}
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;