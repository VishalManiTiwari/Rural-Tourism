import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaHeart, FaRegHeart, FaShare, FaTimes, FaMapMarkerAlt, FaInfoCircle,
  FaChevronLeft, FaChevronRight, FaStar, FaRegStar, FaDirections, FaImages, FaPlayCircle,
  FaCalendarAlt, FaLeaf, FaSearch, FaFilter // Added more icons for new features
} from 'react-icons/fa';

// Custom Next Arrow for Slider
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow right-0 sm:right-4 z-10 cursor-pointer`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <FaChevronRight className="text-white text-3xl bg-black/50 hover:bg-black/75 rounded-full p-2" />
    </div>
  );
};

// Custom Prev Arrow for Slider
const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow left-0 sm:left-4 z-10 cursor-pointer`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <FaChevronLeft className="text-white text-3xl bg-black/50 hover:bg-black/75 rounded-full p-2" />
    </div>
  );
};

// Image Gallery Modal Component
const ImageGalleryModal = ({ images, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="relative max-w-4xl w-full h-auto max-h-[90vh] bg-white rounded-lg overflow-hidden flex flex-col"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-gray-200 z-20 text-xl"
          aria-label="Close gallery"
        >
          <FaTimes />
        </button>
        <div className="relative flex-grow flex items-center justify-center p-4">
          <img
            src={images[currentImageIndex]}
            alt={`Gallery image ${currentImageIndex + 1}`}
            className="max-h-[70vh] object-contain rounded-lg"
          />
          {images.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-4 p-3 bg-black/50 text-white rounded-full hover:bg-black/75 transition-colors text-2xl"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 p-3 bg-black/50 text-white rounded-full hover:bg-black/75 transition-colors text-2xl"
              >
                <FaChevronRight />
              </button>
            </>
          )}
        </div>
        <div className="p-4 text-center text-gray-700">
          Image {currentImageIndex + 1} of {images.length}
        </div>
      </motion.div>
    </div>
  );
};


const RusticCards = () => {
  // State Management
  const [favorites, setFavorites] = useState(() => {
    // Initialize favorites from localStorage for persistence
    const savedFavorites = localStorage.getItem('rusticCardsFavorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });
  const [selectedCard, setSelectedCard] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCards, setFilteredCards] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [showImageGallery, setShowImageGallery] = useState(false);
  const [currentGalleryImages, setCurrentGalleryImages] = useState([]);
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All'); // New state for filtering by category

  // Custom data for rural tourism destinations in India
  const cardData = [
    {
      id: 1,
      title: "Chhoti Haldwani",
      description: "The Village that Corbett built",
      image: "https://s7ap1.scene7.com/is/image/incredibleindia/jim-corbett-village-rural-wonders?qlt=82&ts=1726642200762",
      gallery: [
        "https://www.incredibleindia.gov.in/content/dam/incredible-india/images/rural-tourism/chhoti-haldwani/1-jim-corbett-village-rural-ff.jpg",
        "https://static.toiimg.com/thumb/msid-48143303,width=1200,height=900/48143303.jpg",
        "https://www.sterlingholidays.com/activities/corbett/mustsee/bannerimage/corbett-choti-haldwani.jpg.imgw.1280.1280.jpeg"
      ],
      video: "https://youtu.be/TBtq-h7SMzU?si=30XcpwQl76luVtD2", 
      link: "https://en.wikipedia.org/wiki/Chhoti_Haldwani",
      location: "Uttarakhand, India",
      details: "A quaint village established by legendary hunter and conservationist Jim Corbett. It's known for its colonial-era cottages, the Jim Corbett Museum, and its tranquil environment rich in biodiversity. The village focuses on sustainable tourism and community development.",
      rating: 4.5,
      activities: ["Nature Walks", "Bird Watching", "Village Tours", "Jim Corbett Museum Visit"],
      bestTimeToVisit: "October to June",
      category: "Nature & Wildlife" 
    },
    {
      id: 2,
      title: "Chettinad Villages",
      description: "Heritage mansions & spicy cuisine",
      image: "https://c8.alamy.com/comp/PJXGW5/kanadukathan-india-march-12-2018-street-scene-in-the-chettinad-region-an-area-renowned-for-grand-houses-many-of-them-are-now-unoccupied-PJXGW5.jpg",
      gallery: [
        "https://www.holidify.com/images/bgImages/CHETTINAD.jpg",
        "https://sarathavilas.com/wp-content/uploads/2020/05/PALLATHUR_SV.jpg",
        "https://sarathavilas.com/wp-content/uploads/2020/05/COUV_1_SV.jpg"
      ],
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=iXJ0F_T9w491X_pX",
      link: "https://en.wikipedia.org/wiki/Chettinad",
      location: "Tamil Nadu, India",
      details: "The Chettinad region is an architectural marvel, famous for its grand, sprawling mansions built by the prosperous Nattukottai Chettiar community. Beyond the opulent homes, it's renowned for its unique, fiery Chettinad cuisine and a vibrant cultural heritage of arts and crafts.",
      rating: 4.8,
      activities: ["Mansion Tours", "Culinary Workshops", "Antique Shopping", "Temple Visits"],
      bestTimeToVisit: "October to March",
      category: "Culture & Heritage"
    },
    {
      id: 3,
      title: "Khajjiar",
      description: "Mini Switzerland of India",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Nature_of_Khajjiar_%28cropped%29.jpg/800px-Nature_of_Khajjiar_%28cropped%29.jpg",
      gallery: [
        "https://img1.oastatic.com/img2/75592492/max/variant.jpg",
        "https://www.savaari.com/blog/wp-content/uploads/2020/01/29643790127_7e779467f1_c.jpg",
        "https://www.tripnight.com/public/thumbs/monuments/252/UrHCl0Vy6mGX_468_738.jpg"
      ],
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=iXJ0F_T9w491X_pX",
      link: "https://en.wikipedia.org/wiki/Khajjiar",
      location: "Himachal Pradesh, India",
      details: "Nestled in the Dhauladhar range of the Himalayas, Khajjiar is a picturesque saucer-shaped meadow often referred to as the 'Mini Switzerland of India'. It features a serene lake, lush green forests, and a floating island. Ideal for nature lovers and adventurers.",
      rating: 4.7,
      activities: ["Paragliding", "Horse Riding", "Zorbing", "Nature Walks", "Kalatop Wildlife Sanctuary Visit"],
      bestTimeToVisit: "April to October",
      category: "Adventure & Nature"
    },
    {
      id: 4,
      title: "Majuli Island",
      description: "World's largest river island",
      image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/06/Image-2-14.jpg",
      gallery: [
        "https://upload.wikimedia.org/wikipedia/commons/6/68/Majuli_Island.jpg",
        "https://media.istockphoto.com/id/1219436845/photo/beautiful-scenery-of-majuli-island-assam.jpg?s=612x612&w=0&k=20&c=wOF4KQPUZOKSs8nuE4MDGwKL3PkIA-9GxWdALjJL6ns=",
        "https://www.kazirangasafaribooking.in/assets/images/molai-island.jpg"
      ],
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=iXJ0F_T9w491X_pX",
      link: "https://en.wikipedia.org/wiki/Majuli",
      location: "Assam, India",
      details: "Majuli is the world's largest river island and a significant center of Vaishnavite culture in Assam. It's known for its unique Sattras (monasteries), traditional mask-making, and vibrant Assamese heritage. A serene escape amidst the Brahmaputra River.",
      rating: 4.6,
      activities: ["Sattra Visits", "Mask Making Workshops", "Bird Watching", "Cycling Tours", "Boating"],
      bestTimeToVisit: "October to March",
      category: "Culture & Nature"
    },
    {
      id: 5,
      title: "Pochampally",
      description: "Ikat weaving village",
      image: "https://humansofhyderabad.co.in/wp-content/uploads/2023/10/IMG-20211117-WA0019-970x647.jpg",
      gallery: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRcdjHPnNndHQEAIorClnVqeTw8UyflkWtDQ&s",
        "https://www.bizzbuzz.news/h-upload/2021/11/16/1402526-unwto.webp",
        "https://www.sakshipost.com/sites/default/files/styles/canvas/public/article_images/2021/11/17/gaon2-1637143003.jpg?itok=mgnI2Riw"
      ],
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=iXJ0F_T9w491X_pX",
      link: "https://en.wikipedia.org/wiki/Pochampally",
      location: "Telangana, India",
      details: "Pochampally is a renowned village known for its exquisite Ikat weaving, a traditional art form that produces vibrant and intricate silk sarees and fabrics. It's often called the 'Silk City of India' and has received a GI (Geographical Indication) tag for its unique weaving style.",
      rating: 4.3,
      activities: ["Weaving Workshops", "Saree Shopping", "Village Walks"],
      bestTimeToVisit: "October to March",
      category: "Art & Craft"
    },
    {
      id: 6,
      title: "Spiti Valley",
      description: "Cold desert mountain villages",
      image: "https://s7ap1.scene7.com/is/image/incredibleindia/dawar-jammu-and-kashmir-rural-wonders?qlt=82&ts=1726641891221",
      gallery: [
        "https://static.toiimg.com/img/94619601/Master.jpg",
        "https://t4.ftcdn.net/jpg/03/72/75/73/360_F_372757378_aOASkKDmkQiakQnePuxOZSyLaRaghSW8.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBJenGZgMklQAg8f9rQ55yNXib2_Nxqun1dg&s"
      ],
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=iXJ0F_T9w491X_pX",
      link: "https://en.wikipedia.org/wiki/Spiti_Valley",
      location: "Himachal Pradesh, India",
      details: "A high-altitude cold desert valley nestled in the Himalayas, Spiti is a land of stark beauty, ancient Buddhist monasteries, and traditional mountain villages. It offers breathtaking landscapes, challenging treks, and a glimpse into a unique Tibetan Buddhist culture.",
      rating: 4.9,
      activities: ["Monastery Visits", "Trekking & Hiking", "Stargazing", "River Rafting", "Photography"],
      bestTimeToVisit: "June to October",
      category: "Adventure & Culture"
    },
    {
      id: 7,
      title: "Gokarna",
      description: "Pilgrimage town with pristine beaches",
      image: "https://us.123rf.com/450wm/olgaphotofire/olgaphotofire1404/olgaphotofire140400003/27094984-gokarna-karnataka-india-february-27-2014-locals-bathe-in-the-sacred-lake-kotiteertha-in-gokarna.jpg?ver=6",
      gallery: [
        "https://t3.ftcdn.net/jpg/04/79/25/78/360_F_479257808_maKCrMJERcyaOxkxfTlsRwO2Sy6c4yEw.jpg",
        "https://media.istockphoto.com/id/1299344131/photo/gokarna-beash-at-sunset.jpg?s=612x612&w=0&k=20&c=AyCTo2Gl-vmCr14Ea4ziDzwQI3WOt1a9sXeSeojDadM=",
        "https://t3.ftcdn.net/jpg/01/16/39/04/360_F_116390418_fjvPvAWcWfgDCYAJsWiT5sni5ukzcUO8.jpg"
      ],
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=iXJ0F_T9w491X_pX",
      link: "https://en.wikipedia.org/wiki/Gokarna",
      location: "Karnataka, India",
      details: "Gokarna is a small temple town on the Arabian Sea coast, known for its pristine beaches like Om Beach and Kudle Beach, and as a Hindu pilgrimage site. It offers a laid-back vibe, perfect for those seeking relaxation combined with spiritual exploration.",
      rating: 4.4,
      activities: ["Beach Hopping", "Temple Visits", "Yoga & Meditation", "Trekking", "Water Sports"],
      bestTimeToVisit: "October to March",
      category: "Coastal & Spiritual"
    },
    {
      id: 8,
      title: "Mawlynnong",
      description: "Asia's Cleanest Village",
      image: "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2023/12/19/ad850532a481cb0321a8d50598f7e15c_1000x1000.jpg",
      gallery: [
        "https://thumbs.dreamstime.com/b/famous-double-decker-living-roots-bridge-near-nongriat-village-cherrapunjee-meghalaya-india-famous-double-decker-living-roots-115227368.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/c/cc/Mawlynnong_-_Cleanest_village_of_Asia_in_Meghalaya.jpg",
        "https://www.akkcrusier.com/blog/wp-content/uploads/2023/08/Mawlynnong-The-cleanest-city-in-Asia.jpg"
      ],
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=iXJ0F_T9w491X_pX",
      link: "https://en.wikipedia.org/wiki/Mawlynnong",
      location: "Meghalaya, India",
      details: "Mawlynnong holds the distinction of being 'Asia's Cleanest Village'. This charming village is a model of eco-tourism, with vibrant greenery, friendly locals, and fascinating living root bridges. It offers a unique glimpse into the indigenous Khasi culture.",
      rating: 4.9,
      activities: ["Living Root Bridge Trek", "Village Cleanliness Drive", "Nature Walks", "Waterfalls"],
      bestTimeToVisit: "October to April",
      category: "Eco-tourism & Nature"
    },
    {
      id: 9,
      title: "Ziro Valley",
      description: "Land of the Apatani Tribe",
      image: "https://s3.india.com/wp-content/uploads/2024/07/Ziro-Arunachal-Pradesh_-Top-Tips-For-First-Time-Travelers-Revealed.jpg##image/jpg",
      gallery: [
        "https://media.istockphoto.com/id/1178712785/photo/view-from-dura-hidden-paradise-ziro.jpg?s=612x612&w=0&k=20&c=PbWUrAVgmNcj9y5wVXDl8b7rhn_ITnI5z4ceQQpv82o=",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq9qC3Y69Fnntim5CuRvp8w4trR0nvfjKKaQ&s",
        "https://thumbs.dreamstime.com/b/ziro-famous-paddy-cum-pisciculture-cultivation-area-renowned-terrace-fields-where-unique-system-poly-culture-318865138.jpg"
      ],
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ?si=iXJ0F_T9w491X_pX",
      link: "https://en.wikipedia.org/wiki/Ziro",
      location: "Arunachal Pradesh, India",
      details: "Ziro Valley is a breathtakingly beautiful plateau known for its lush green rice fields, pine-clad hills, and as the home of the indigenous Apatani tribe. It's famous for the annual Ziro Music Festival and offers a deep dive into tribal culture and traditions.",
      rating: 4.7,
      activities: ["Apatani Village Visits", "Trekking", "Bamboo Architecture Study", "Ziro Music Festival (Sept)"],
      bestTimeToVisit: "March to October",
      category: "Culture & Nature"
    },
    {
      id: 10,
      title: "Kumbalangi Integrated Tourism Village",
      description: "First Ecotourism Village of India",
      image: "https://media-cdn.tripadvisor.com/media/photo-s/11/d2/9e/97/view-from-reception.jpg",
      gallery: [
        "https://www.keralatourism.org/_next/image/?url=http%3A%2F%2F127.0.0.1%2Fktadmin%2Fimg%2Fpages%2Fmobile%2Fkumbalangi-tourism-village-1723102774_750d3397bf83541d5c0c.webp&w=3840&q=75",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMdkdM7r33kOsPL5j5gHW6Ju9VBAAPsBxjKQ&s",
        "https://live.staticflickr.com/2786/4537350332_f91427f791_z.jpg"
      ],
      video: "https://youtu.be/8RtOnEq7m9E?si=7xxCrbtK8h9DGWmt",
      link: "https://en.wikipedia.org/wiki/Kumbalangi",
      location: "Kerala, India",
      details: "Kumbalangi is India's first ecotourism village, a beautiful island near Kochi known for its serene backwaters, Chinese fishing nets, and sustainable village life. Visitors can experience traditional fishing, coir making, and authentic Kerala cuisine.",
      rating: 4.6,
      activities: ["Backwater Cruises", "Fishing Village Tour", "Coir Weaving", "Homestay Experience"],
      bestTimeToVisit: "October to March",
      category: "Eco-tourism & Culture"
    }
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: filteredCards.length > 4, // Only infinite if there are enough cards to scroll
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />, // Custom next arrow
    prevArrow: <PrevArrow />, // Custom prev arrow
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: filteredCards.length > 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          infinite: filteredCards.length > 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          infinite: filteredCards.length > 1,
        }
      }
    ]
  };

  // --- Utility Functions ---

  // Toggles favorite status for a card
  const toggleFavorite = (id, e) => {
    e.stopPropagation(); // Prevent modal from opening
    setFavorites(prevFavorites => {
      const newFavorites = prevFavorites.includes(id)
        ? prevFavorites.filter(favId => favId !== id)
        : [...prevFavorites, id];
      
      // Show toast notification
      setToastMessage(prevFavorites.includes(id) ? 'Removed from favorites!' : 'Added to favorites!');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000); // Hide toast after 2 seconds
      return newFavorites;
    });
  };

  // Handles sharing functionality
  const handleShare = (link, e) => {
    e.stopPropagation(); // Prevent modal from opening
    if (navigator.share) {
      navigator.share({
        title: `Explore this amazing rural destination: ${selectedCard.title}`,
        url: link
      }).catch(err => {
        console.log('Error sharing:', err);
        copyToClipboard(link);
      });
    } else {
      copyToClipboard(link);
    }
  };

  // Copies text to clipboard and shows toast
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setToastMessage('Link copied to clipboard!');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    }).catch(err => {
      console.error('Failed to copy:', err);
      setToastMessage('Failed to copy link!');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    });
  };

  // Opens the main modal with selected card data
  const openModal = (card) => {
    setSelectedCard(card);
    setShowModal(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling background
  };

  // Closes the main modal
  const closeModal = () => {
    setShowModal(false);
    setSelectedCard(null);
    setShowImageGallery(false); // Ensure gallery is closed too
    setShowVideoPlayer(false); // Ensure video player is closed too
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  // Opens image gallery modal
  const openImageGallery = (images, e) => {
    e.stopPropagation();
    setCurrentGalleryImages(images);
    setShowImageGallery(true);
  };

  // Opens video player modal
  const openVideoPlayer = (videoUrl, e) => {
    e.stopPropagation();
    setCurrentVideoUrl(videoUrl);
    setShowVideoPlayer(true);
  };

  // Closes image gallery modal
  const closeImageGallery = () => {
    setShowImageGallery(false);
    setCurrentGalleryImages([]);
  };

  // Closes video player modal
  const closeVideoPlayer = () => {
    setShowVideoPlayer(false);
    setCurrentVideoUrl('');
  };

  // Handles search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handles category filter change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    // Filter cards based on selected category immediately
    if (category === 'All') {
      setFilteredCards(cardData);
    } else {
      setFilteredCards(cardData.filter(card => card.category === category));
    }
    setSearchTerm(''); // Clear search term when category changes
  };

  // Determine unique categories for filter dropdown
  const categories = ['All', ...new Set(cardData.map(card => card.category))];

  // Filter cards based on both search term and selected category
  useEffect(() => {
    let results = cardData;

    if (selectedCategory !== 'All') {
      results = results.filter(card => card.category === selectedCategory);
    }

    if (searchTerm) {
      results = results.filter(card =>
        card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        card.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        card.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        card.details.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (card.activities && card.activities.some(activity => activity.toLowerCase().includes(searchTerm.toLowerCase())))
      );
    }
    setFilteredCards(results);
  }, [searchTerm, selectedCategory]);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 to-orange-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-amber-900 mb-8 tracking-tight">
          Discover India's Hidden Rural Gems
        </h2>
        <p className="text-center text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
          Immerse yourself in the authentic charm of rural India. Explore vibrant cultures, breathtaking landscapes, and unique experiences that await you.
        </p>

        {/* Search and Filter Section */}
        <div className="mb-10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="relative w-full sm:w-1/2">
            <input
              type="text"
              placeholder="Search by village, activity, or description..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300 shadow-sm"
              value={searchTerm}
              onChange={handleSearchChange}
              aria-label="Search rural destinations"
            />
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>

          <div className="relative w-full sm:w-1/3">
            <select
              className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-full appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300 shadow-sm"
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
              aria-label="Filter by category"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            <FaFilter className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </div>
        {/* End Search and Filter Section */}

        {filteredCards.length > 0 ? (
          <Slider {...settings}>
            {filteredCards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="px-2"
              >
                <div
                  onClick={() => openModal(card)}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group relative cursor-pointer transform hover:-translate-y-2"
                >
                  <div className="absolute top-3 right-3 z-10 flex gap-2">
                    <button
                      onClick={(e) => toggleFavorite(card.id, e)}
                      className="p-2 bg-white/80 rounded-full hover:bg-white transition-colors shadow"
                      aria-label={favorites.includes(card.id) ? "Remove from favorites" : "Add to favorites"}
                    >
                      {favorites.includes(card.id) ?
                        <FaHeart className="text-red-500 text-lg" /> :
                        <FaRegHeart className="text-gray-700 text-lg" />}
                    </button>
                    <button
                      onClick={(e) => handleShare(card.link, e)}
                      className="p-2 bg-white/80 rounded-full hover:bg-white transition-colors shadow"
                      aria-label="Share this destination"
                    >
                      <FaShare className="text-gray-700 text-lg" />
                    </button>
                  </div>

                  <div className="relative overflow-hidden h-56">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      className="w-full h-full object-cover transition-transform duration-300"
                      src={card.image}
                      alt={card.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          openModal(card);
                        }}
                        className="text-white bg-amber-700 hover:bg-amber-800 px-6 py-2 rounded-full font-semibold shadow-md transition-all duration-300 text-sm"
                      >
                        Explore More
                      </button>
                    </div>
                  </div>
                  <div className="p-4 flex flex-col justify-between h-40"> {/* Fixed height for content */}
                    <div>
                      <h3 className="text-xl font-bold text-amber-900 mb-1 truncate">{card.title}</h3>
                      <div className="flex items-center text-gray-600 text-sm mb-2">
                        <FaMapMarkerAlt className="mr-1 text-amber-600" />
                        <span>{card.location}</span>
                      </div>
                      <p className="text-gray-600 text-sm line-clamp-2">{card.description}</p>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                          i < Math.floor(card.rating) ? <FaStar key={i} /> : <FaRegStar key={i} />
                        ))}
                        <span className="ml-1 text-gray-700 text-sm">{card.rating}</span>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          openModal(card);
                        }}
                        className="text-amber-700 font-semibold hover:text-amber-900 transition-colors duration-300 flex items-center text-sm"
                      >
                        Details
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </Slider>
        ) : (
          <div className="text-center text-gray-600 text-xl py-10">
            No rural destinations found matching your criteria.
          </div>
        )}
      </div>

      {/* Main Detail Modal */}
      <AnimatePresence>
        {showModal && selectedCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-lg max-w-3xl w-full max-h-[95vh] overflow-y-auto shadow-2xl relative"
            >
              <div className="relative">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-gray-200 z-10 text-xl shadow"
                  aria-label="Close modal"
                >
                  <FaTimes />
                </button>
                <img
                  src={selectedCard.image}
                  alt={selectedCard.title}
                  className="w-full h-72 object-cover rounded-t-lg"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-3xl font-bold text-amber-900 mb-1">{selectedCard.title}</h2>
                    <div className="flex items-center text-gray-700 text-md">
                      <FaMapMarkerAlt className="mr-2 text-amber-600" />
                      <span>{selectedCard.location}</span>
                    </div>
                    <div className="flex items-center text-yellow-500 mt-2">
                      {[...Array(5)].map((_, i) => (
                        i < Math.floor(selectedCard.rating) ? <FaStar key={i} /> : <FaRegStar key={i} />
                      ))}
                      <span className="ml-2 text-gray-700">{selectedCard.rating} / 5</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={(e) => toggleFavorite(selectedCard.id, e)}
                      className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors shadow"
                      aria-label={favorites.includes(selectedCard.id) ? "Remove from favorites" : "Add to favorites"}
                    >
                      {favorites.includes(selectedCard.id) ?
                        <FaHeart className="text-red-500 text-xl" /> :
                        <FaRegHeart className="text-gray-700 text-xl" />}
                    </button>
                    <button
                      onClick={(e) => handleShare(selectedCard.link, e)}
                      className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors shadow"
                      aria-label="Share this destination"
                    >
                      <FaShare className="text-gray-700 text-xl" />
                    </button>
                  </div>
                </div>

                <p className="text-gray-800 text-lg leading-relaxed mb-6">{selectedCard.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="p-4 bg-amber-50 rounded-lg shadow-inner">
                    <div className="flex items-center text-amber-800 font-semibold mb-2">
                      <FaInfoCircle className="mr-2 text-xl" />
                      <span>About This Place</span>
                    </div>
                    <p className="text-gray-700 text-sm">{selectedCard.details}</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg shadow-inner">
                    <div className="flex items-center text-green-800 font-semibold mb-2">
                      <FaLeaf className="mr-2 text-xl" />
                      <span>Category</span>
                    </div>
                    <p className="text-gray-700 text-sm">{selectedCard.category}</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg shadow-inner">
                    <div className="flex items-center text-blue-800 font-semibold mb-2">
                      <FaCalendarAlt className="mr-2 text-xl" />
                      <span>Best Time to Visit</span>
                    </div>
                    <p className="text-gray-700 text-sm">{selectedCard.bestTimeToVisit}</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg shadow-inner">
                    <div className="flex items-center text-purple-800 font-semibold mb-2">
                      <FaDirections className="mr-2 text-xl" />
                      <span>Key Activities</span>
                    </div>
                    <ul className="list-disc list-inside text-gray-700 text-sm">
                      {selectedCard.activities.map((activity, idx) => (
                        <li key={idx}>{activity}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3 justify-center">
                  {selectedCard.gallery && selectedCard.gallery.length > 0 && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => openImageGallery(selectedCard.gallery, e)}
                      className="px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors flex items-center justify-center font-medium shadow-md"
                    >
                      <FaImages className="mr-2" /> View Gallery
                    </motion.button>
                  )}
                  {selectedCard.video && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => openVideoPlayer(selectedCard.video, e)}
                      className="px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors flex items-center justify-center font-medium shadow-md"
                    >
                      <FaPlayCircle className="mr-2" /> Watch Video
                    </motion.button>
                  )}
                  <a
                    href={selectedCard.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-amber-700 text-white rounded-full hover:bg-amber-800 transition-colors flex items-center justify-center font-medium shadow-md"
                  >
                    Learn More (Wikipedia)
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image Gallery Modal */}
      <AnimatePresence>
        {showImageGallery && (
          <ImageGalleryModal
            images={currentGalleryImages}
            onClose={closeImageGallery}
          />
        )}
      </AnimatePresence>

      {/* Video Player Modal */}
      <AnimatePresence>
        {showVideoPlayer && currentVideoUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="relative max-w-4xl w-full aspect-video rounded-lg overflow-hidden"
            >
              <button
                onClick={closeVideoPlayer}
                className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-gray-200 z-20 text-xl"
                aria-label="Close video player"
              >
                <FaTimes />
              </button>
              <iframe
                className="w-full h-full"
                src={currentVideoUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-5 py-3 rounded-lg shadow-lg z-50 text-center"
          >
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RusticCards;