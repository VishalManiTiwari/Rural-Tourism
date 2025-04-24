import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';

const RusticCards = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const cardData = [
    {
      id: 1,
      title: "Chhoti Haldwani",
      description: "The Village that corbett built",
      image: "https://s7ap1.scene7.com/is/image/incredibleindia/jim-corbett-village-rural-wonders?qlt=82&ts=1726642200762"
    },
    {
      id: 2,
      title: "Chettinad Villages",
      description: "Heritage mansions & spicy cuisine",
      image: "https://s7ap1.scene7.com/is/image/incredibleindia/emerald-isles-kadamakkudy-kerala-rural-wonders?qlt=82&ts=1726642239544"
    },
    {
      id: 3,
      title: "Khajjiar",
      description: "Mini Switzerland of India",
      image: "https://imgs.search.brave.com/3jOUyfiOU3p8K9gOMPLT1uhKTfe01TDm60kzdNsA29c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy82/LzYxL05hdHVyZV9v/Zl9LaGFqamlhcl8o/Y3JvcHBlZCkuanBn"
    },
    {
      id: 4,
      title: "Majuli Island",
      description: "World's largest river island",
      image: "https://imgs.search.brave.com/R89jXwl5QlgAG3JBRA3U_ACXuzL41JDVD5lc73ZLRlI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/b3lvcm9vbXMuY29t/L3RyYXZlbC1ndWlk/ZS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/OS8wNi9JbWFnZS0y/LTE0LmpwZw"
    },
    {
      id: 5,
      title: "Punakha Valley",
      description: "Bhutan's picturesque countryside",
      image: "https://s7ap1.scene7.com/is/image/incredibleindia/reiek-mountain-reiek-mizoram-rural-wonders?qlt=82&ts=1727162325719"
    },
    {
      id: 6,
      title: "Spiti Valley",
      description: "Cold desert mountain villages",
      image: "https://s7ap1.scene7.com/is/image/incredibleindia/dawar-jammu-and-kashmir-rural-wonders?qlt=82&ts=1726641891221"
    }
  ];

  return (
    <div className="py-12 px-4  sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">Explore Rural India</h2>
        
        <Slider {...settings}>
          {cardData.map((card, index) => (
            <motion.div 
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="px-2"
            >
              <div className="bg-gray-200 cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative overflow-hidden h-56">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    className="w-full h-full object-cover"
                    src={card.image}
                    alt={card.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <button className="text-white cursor-pointer border border-white px-4 py-2 rounded-full hover:bg-white hover:text-amber-900 transition-colors duration-300">
                      Explore
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold cursor-pointer text-amber-900">{card.title}</h3>
                  <p className="text-gray-600 cursor-pointer">{card.description}</p>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="mt-4"
                  >
                    <button className="text-amber-700 cursor-pointer font-semibold hover:text-amber-900 transition-colors duration-300 flex items-center">
                      Discover more
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default RusticCards;