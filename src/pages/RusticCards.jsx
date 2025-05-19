import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';
import { FaHeart, FaRegHeart, FaShare, FaTimes, FaMapMarkerAlt, FaInfoCircle } from 'react-icons/fa';

const RusticCards = () => {
  const [favorites, setFavorites] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [showModal, setShowModal] = useState(false);

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
      image: "https://s7ap1.scene7.com/is/image/incredibleindia/jim-corbett-village-rural-wonders?qlt=82&ts=1726642200762",
      link: "https://en.wikipedia.org/wiki/Chhoti_Haldwani",
      location: "Uttarakhand, India",
      details: "A quaint village established by Jim Corbett, known for its colonial-era cottages and rich biodiversity."
    },
    {
      id: 2,
      title: "Chettinad Villages",
      description: "Heritage mansions & spicy cuisine",
      image: "https://s7ap1.scene7.com/is/image/incredibleindia/emerald-isles-kadamakkudy-kerala-rural-wonders?qlt=82&ts=1726642239544",
      link: "https://en.wikipedia.org/wiki/Chettinad",
      location: "Tamil Nadu, India",
      details: "Famous for its grand mansions, vibrant culture, and unique spicy cuisine that's a feast for the senses."
    },
    {
      id: 3,
      title: "Khajjiar",
      description: "Mini Switzerland of India",
      image: "https://imgs.search.brave.com/3jOUyfiOU3p8K9gOMPLT1uhKTfe01TDm60kzdNsA29c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy82/LzYxL05hdHVyZV9v/Zl9LaGFqamlhcl8o/Y3JvcHBlZCkuanBn",
      link: "https://en.wikipedia.org/wiki/Khajjiar",
      location: "Himachal Pradesh, India",
      details: "A picturesque meadow surrounded by dense forests with a small lake at its center, often called India's Switzerland."
    },
    {
      id: 4,
      title: "Majuli Island",
      description: "World's largest river island",
      image: "https://imgs.search.brave.com/R89jXwl5QlgAG3JBRA3U_ACXuzL41JDVD5lc73ZLRlI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/b3lvcm9vbXMuY29t/L3RyYXZlbC1ndWlk/ZS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/OS8wNi9JbWFnZS0y/LTE0LmpwZw",
      link: "https://en.wikipedia.org/wiki/Majuli",
      location: "Assam, India",
      details: "A cultural hotspot of Assam with unique Vaishnavite monasteries and a rich tradition of mask-making."
    },
    {
      id: 5,
      title: "Punakha Valley",
      description: "Bhutan's picturesque countryside",
      image: "https://s7ap1.scene7.com/is/image/incredibleindia/reiek-mountain-reiek-mizoram-rural-wonders?qlt=82&ts=1727162325719",
      link: "https://en.wikipedia.org/wiki/Punakha",
      location: "Punakha, Bhutan",
      details: "Home to the magnificent Punakha Dzong at the confluence of two rivers, surrounded by rice fields and hills."
    },
    {
      id: 6,
      title: "Spiti Valley",
      description: "Cold desert mountain villages",
      image: "https://s7ap1.scene7.com/is/image/incredibleindia/dawar-jammu-and-kashmir-rural-wonders?qlt=82&ts=1726641891221",
      link: "https://en.wikipedia.org/wiki/Spiti_Valley",
      location: "Himachal Pradesh, India",
      details: "A high-altitude desert valley with ancient monasteries, stunning landscapes, and a unique Buddhist culture."
    }
  ];

  const toggleFavorite = (id, e) => {
    e.stopPropagation();
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(favId => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const handleShare = (link, e) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: 'Check out this beautiful destination',
        url: link
      }).catch(err => {
        console.log('Error sharing:', err);
        copyToClipboard(link);
      });
    } else {
      copyToClipboard(link);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Link copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy:', err);
    });
  };

  const openModal = (card) => {
    setSelectedCard(card);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
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
              <div 
                onClick={() => openModal(card)}
                className="bg-gray-200 cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group relative"
              >
                <div className="absolute top-2 right-2 z-10 flex gap-2">
                  <button 
                    onClick={(e) => toggleFavorite(card.id, e)}
                    className="p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
                    aria-label={favorites.includes(card.id) ? "Remove from favorites" : "Add to favorites"}
                  >
                    {favorites.includes(card.id) ? 
                      <FaHeart className="text-red-500" /> : 
                      <FaRegHeart className="text-gray-700" />}
                  </button>
                  <button 
                    onClick={(e) => handleShare(card.link, e)}
                    className="p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
                    aria-label="Share this destination"
                  >
                    <FaShare className="text-gray-700" />
                  </button>
                </div>
                
                <div className="relative overflow-hidden h-56">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    className="w-full h-full object-cover"
                    src={card.image}
                    alt={card.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(card);
                      }}
                      className="text-white cursor-pointer border border-white px-4 py-2 rounded-full hover:bg-white hover:text-amber-900 transition-colors duration-300"
                    >
                      Explore
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-amber-900">{card.title}</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <FaMapMarkerAlt className="mr-1" />
                    <span>{card.location}</span>
                  </div>
                  <p className="text-gray-600">{card.description}</p>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="mt-4"
                  >
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(card);
                      }}
                      className="text-amber-700 cursor-pointer font-semibold hover:text-amber-900 transition-colors duration-300 flex items-center"
                    >
                      Discover more
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
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

      {/* Modal */}
      {showModal && selectedCard && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="relative">
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-gray-200 z-10"
                aria-label="Close modal"
              >
                <FaTimes />
              </button>
              <img 
                src={selectedCard.image} 
                alt={selectedCard.title} 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold text-amber-900">{selectedCard.title}</h2>
                  <div className="flex items-center text-gray-600 my-2">
                    <FaMapMarkerAlt className="mr-2" />
                    <span>{selectedCard.location}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={(e) => toggleFavorite(selectedCard.id, e)}
                    className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                    aria-label={favorites.includes(selectedCard.id) ? "Remove from favorites" : "Add to favorites"}
                  >
                    {favorites.includes(selectedCard.id) ? 
                      <FaHeart className="text-red-500" /> : 
                      <FaRegHeart className="text-gray-700" />}
                  </button>
                  <button 
                    onClick={(e) => handleShare(selectedCard.link, e)}
                    className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                    aria-label="Share this destination"
                  >
                    <FaShare className="text-gray-700" />
                  </button>
                </div>
              </div>
              
              <p className="text-gray-700 mt-4">{selectedCard.description}</p>
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center text-amber-700 font-semibold mb-2">
                  <FaInfoCircle className="mr-2" />
                  <span>About this place</span>
                </div>
                <p className="text-gray-700">{selectedCard.details}</p>
              </div>
              
              <div className="mt-6 flex flex-wrap gap-3">
                <a 
                  href={selectedCard.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-amber-700 text-white rounded-full hover:bg-amber-800 transition-colors flex items-center"
                >
                  Learn more on Wikipedia
                </a>
                <button 
                  onClick={closeModal}
                  className="px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default RusticCards;