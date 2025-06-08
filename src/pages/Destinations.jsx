import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FaChevronLeft } from "react-icons/fa"; // For back button icon

// --- Enriched States and Cities Data ---
const statesData = {
  "Andhra Pradesh": [
    {
      name: "Amaravati",
      description: "The planned capital city of Andhra Pradesh, known for its modern architecture and historical significance as a Buddhist site.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Amaravati_Buddhist_Stupa.jpg/1200px-Amaravati_Buddhist_Stupa.jpg",
      attractions: ["Amaravati Stupa", "Dhyana Buddha Statue", "Undavalli Caves"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Explore ancient Buddhist ruins", "Visit modern government buildings", "Enjoy riverside views"],
    },
    {
      name: "Anantapur",
      description: "A city in Andhra Pradesh, famous for its rich history, spiritual sites, and the Lepakshi Veerabhadra Temple.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Lepakshi_Veerabhadra_Temple_Nandi.jpg/1200px-Lepakshi_Veerabhadra_Temple_Nandi.jpg",
      attractions: ["Lepakshi Veerabhadra Temple", "ISKCON Temple", "Thimmamma Marrimanu (Banyan Tree)"],
      bestTimeToVisit: "September to February",
      thingsToDo: ["Discover ancient temples", "Experience rural Andhra culture", "Visit the world's largest banyan tree"],
    },
    {
      name: "Guntur",
      description: "A major city known as the 'Chilli Capital of India' due to its large production of red chillies. It also has historical and educational significance.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Guntur_Mirchi_Yard.jpg/1200px-Guntur_Mirchi_Yard.jpg", // Placeholder
      attractions: ["Uppalapadu Bird Sanctuary", "Kondaveedu Fort", "Nagarjuna Konda"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Explore historical forts", "Birdwatching", "Taste local spicy cuisine"],
    },
    {
      name: "Kurnool",
      description: "A city with a rich historical background, having served as the capital of the Andhra State. It's known for its ancient forts and caves.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Kurnool_Fort_Ruins.jpg/1200px-Kurnool_Fort_Ruins.jpg",
      attractions: ["Kondareddy Buruju (Kurnool Fort)", "Belum Caves", "Rollapadu Wildlife Sanctuary"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Explore ancient caves", "Visit historical monuments", "Wildlife viewing"],
    },
    {
      name: "Tirupati",
      description: "A revered pilgrimage city, home to the famous Sri Venkateswara Temple, a significant Hindu shrine.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Tirumala_Venkateswara_Temple.jpg/1200px-Tirumala_Venkateswara_Temple.jpg",
      attractions: ["Sri Venkateswara Temple (Tirumala)", "Sri Kapileswara Swamy Temple", "Talakona Waterfalls"],
      bestTimeToVisit: "September to March",
      thingsToDo: ["Perform darshan at the temple", "Explore waterfalls and nature", "Visit spiritual sites"],
    },
    {
      name: "Visakhapatnam",
      description: "A beautiful coastal city, often called the 'City of Destiny' or 'Jewel of the East Coast', known for its beaches, hills, and caves.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Rushikonda_Beach%2C_Vizag.jpg/1200px-Rushikonda_Beach%2C_Vizag.jpg",
      attractions: ["Rushikonda Beach", "Araku Valley", "Borra Caves", "Kailasagiri"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Relax on beaches", "Explore tribal culture in Araku", "Visit stunning caves"],
    },
  ],
  "Arunachal Pradesh": [
    {
      name: "Itanagar",
      description: "The capital of Arunachal Pradesh, known for its picturesque landscapes, historical sites, and cultural diversity.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Itanagar_Gompa.jpg/1200px-Itanagar_Gompa.jpg",
      attractions: ["Itafort", "Ganga Lake (Gyakar Sinyi)", "Buddhist Temple"],
      bestTimeToVisit: "October to April",
      thingsToDo: ["Visit historical forts", "Boating in tranquil lakes", "Explore local markets"],
    },
    {
      name: "Mechuka",
      description: "A remote and enchanting valley in Arunachal Pradesh, known for its pristine beauty, Buddhist monasteries, and adventure sports.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Mechuka_Valley_Arunachal_Pradesh.jpg/1200px-Mechuka_Valley_Arunachal_Pradesh.jpg",
      attractions: ["Samten Yongcha Monastery", "Siyom River", "Mechuka Lake"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Trekking", "River rafting", "Experience local tribal life"],
    },
    {
      name: "Tawang",
      description: "A serene and breathtaking town nestled in the Himalayas, famous for the Tawang Monastery, one of the largest Buddhist monasteries in India.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Tawang_Monastery.jpg/1200px-Tawang_Monastery.jpg",
      attractions: ["Tawang Monastery", "Sela Pass", "Madhuri Lake (Sangetsar Lake)", "Nuranang Falls"],
      bestTimeToVisit: "March to October",
      thingsToDo: ["Visit monasteries", "Enjoy panoramic mountain views", "Explore high-altitude lakes"],
    },
  ],
  Assam: [
    {
      name: "Dibrugarh",
      description: "Known as the 'Tea City of India', Dibrugarh is a major tea producer and a gateway to the eastern parts of Assam and Arunachal Pradesh.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Tea_Garden_in_Assam.jpg/1200px-Tea_Garden_in_Assam.jpg",
      attractions: ["Mancotta Tea Estate", "Dehing Patkai Wildlife Sanctuary", "Namphake Village"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Explore tea gardens", "Wildlife safaris", "Visit ethnic villages"],
    },
    {
      name: "Guwahati",
      description: "The largest city in Assam and a major riverine port city, known for its ancient temples, especially the Kamakhya Temple.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Kamakhya_Temple_Guwahati.jpg/1200px-Kamakhya_Temple_Guwahati.jpg",
      attractions: ["Kamakhya Temple", "Umananda Island (Peacock Island)", "Assam State Museum", "Pobitora Wildlife Sanctuary"],
      bestTimeToVisit: "October to April",
      thingsToDo: ["Temple visits", "River cruises on Brahmaputra", "Wildlife viewing"],
    },
  ],
  Bihar: [
    {
      name: "Arrah",
      description: "A historical city in Bihar, known for its significance in the Indian Rebellion of 1857.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Arrah_Town_Clock_Tower.jpg/1200px-Arrah_Town_Clock_Tower.jpg", // Placeholder
      attractions: ["Maharaja College, Arrah", "Arrah Old Town", "Various historical sites"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Explore historical landmarks", "Experience local life"],
    },
    {
      name: "Gaya",
      description: "A holy city for Hindus and Buddhists, most famous for Bodh Gaya, where Lord Buddha attained enlightenment.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Mahabodhi_Temple_Bodh_Gaya.jpg/1200px-Mahabodhi_Temple_Bodh_Gaya.jpg",
      attractions: ["Mahabodhi Temple (Bodh Gaya)", "Vishnupad Temple", "Mangla Gauri Temple", "Dungeshwari Cave Temples"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Pilgrimage", "Meditation at Bodhi Tree", "Explore ancient temples and caves"],
    },
    {
      name: "Patna",
      description: "The capital of Bihar, and one of the oldest continuously inhabited places in the world. It was historically known as Pataliputra.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Gandhi_Maidan_Patna.jpg/1200px-Gandhi_Maidan_Patna.jpg",
      attractions: ["Golghar", "Patna Museum", "Kumhrar", "Takht Sri Harmandir Sahib Ji"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Visit historical monuments", "Explore museums", "Experience riverfront activities"],
    },
  ],
  Chhattisgarh: [
    {
      name: "Bilaspur",
      description: "Known as the 'Rice Bowl of Chhattisgarh', it's an industrial and commercial hub with rich cultural heritage.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Bilaspur_city_view.jpg/1200px-Bilaspur_city_view.jpg", // Placeholder
      attractions: ["Kanan Pendari Zoo", "Ratanpur Fort", "Tala (Devrani-Jethani Temple)"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Wildlife viewing", "Explore historical sites", "Experience local markets"],
    },
    {
      name: "Jagdalpur",
      description: "Known as the 'Tourism Capital of Chhattisgarh', it's famous for its magnificent waterfalls, caves, and tribal culture.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Chitrakote_Falls_Jagdalpur.jpg/1200px-Chitrakote_Falls_Jagdalpur.jpg",
      attractions: ["Chitrakote Falls", "Tirathgarh Falls", "Kanger Valley National Park", "Kotumsar Cave"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Waterfall visits", "Cave exploration", "Jungle safaris", "Experience tribal culture"],
    },
    {
      name: "Raipur",
      description: "The capital of Chhattisgarh, a major industrial and commercial hub with several historical and natural attractions nearby.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Raipur_city_skyline.jpg/1200px-Raipur_city_skyline.jpg", // Placeholder
      attractions: ["Mahant Ghasidas Memorial Museum", "Nandan Van Zoo & Safari", "Purkhauti Muktangan"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Visit museums", "Explore wildlife parks", "Experience local culture and cuisine"],
    },
  ],
  Goa: [
    {
      name: "Goa",
      description: "India's smallest state, famous for its stunning beaches, vibrant nightlife, Portuguese heritage, and spice plantations.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Goa_beach_view.jpg/1200px-Goa_beach_view.jpg",
      attractions: ["Baga Beach", "Anjuna Flea Market", "Dudhsagar Falls", "Old Goa Churches (Basilica of Bom Jesus)"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Beach relaxation", "Water sports", "Nightlife", "Explore historical sites", "Spice plantation tours"],
    },
  ],
  Gujarat: [
    {
      name: "Ahmedabad",
      description: "A bustling metropolitan city and a UNESCO World Heritage Site, known for its rich history, unique architecture, and vibrant textile industry.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sabarmati_Ashram.jpg/1200px-Sabarmati_Ashram.jpg",
      attractions: ["Sabarmati Ashram", "Adalaj Stepwell", "Sidi Saiyyed Mosque", "Kankaria Lake"],
      bestTimeToVisit: "November to February",
      thingsToDo: ["Explore historical architecture", "Visit Gandhi's ashram", "Enjoy street food", "Shopping for textiles"],
    },
    {
      name: "Dwarka",
      description: "One of the four sacred 'Char Dham' pilgrimage sites for Hindus, believed to be the ancient kingdom of Lord Krishna.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Dwarkadhish_Temple.jpg/1200px-Dwarkadhish_Temple.jpg",
      attractions: ["Dwarkadhish Temple", "Rukmini Devi Temple", "Bet Dwarka", "Nageshwar Jyotirlinga"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Pilgrimage to ancient temples", "Explore coastal areas", "Dolphin spotting"],
    },
    {
      name: "Kutch",
      description: "A vast, arid region in Gujarat, famous for its unique white Rann of Kutch salt marsh, vibrant handicrafts, and diverse culture.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/White_Rann_of_Kutch.jpg/1200px-White_Rann_of_Kutch.jpg",
      attractions: ["White Rann of Kutch", "Dholavira (Harappan site)", "Kutch Museum", "Mandvi Beach"],
      bestTimeToVisit: "October to March (especially during Rann Utsav)",
      thingsToDo: ["Experience the Rann Utsav festival", "Camel safaris", "Explore traditional crafts", "Visit historical sites"],
    },
    {
      name: "Surat",
      description: "Known as the 'Diamond City of India' and the 'Textile City', Surat is a major commercial center with a rich history and culinary delights.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Surat_Diamond_Bourse.jpg/1200px-Surat_Diamond_Bourse.jpg", // Placeholder
      attractions: ["Dumas Beach", "Sardar Patel Museum", "Science Centre Surat", "Chintamani Jain Temple"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Shopping for diamonds and textiles", "Explore historical sites", "Taste Parsi cuisine"],
    },
  ],
  Haryana: [
    {
      name: "Gurugram",
      description: "A major financial and technology hub in Haryana, part of the National Capital Region (NCR), known for its modern infrastructure and corporate offices.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Cyber_Hub%2C_Gurgaon.jpg/1200px-Cyber_Hub%2C_Gurgaon.jpg",
      attractions: ["Cyber Hub", "Sheetla Mata Mandir", "Sultanpur National Park", "Museum of Folk and Tribal Art"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Explore modern urban life", "Dining and nightlife", "Birdwatching"],
    },
    {
      name: "Kurukshetra",
      description: "A historic city with immense religious significance, considered the battlefield of the Mahabharata and the place where Lord Krishna delivered the Bhagavad Gita.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Brahma_Sarovar_Kurukshetra.jpg/1200px-Brahma_Sarovar_Kurukshetra.jpg",
      attractions: ["Brahma Sarovar", "Jyotisar", "Sannihit Sarovar", "Sheikh Chehli's Tomb"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Visit holy sites", "Explore historical places", "Attend religious ceremonies"],
    },
  ],
  "Himachal Pradesh": [
    {
      name: "Chamba",
      description: "A picturesque town in the Himalayas, known for its ancient temples, scenic beauty, and traditional Chamba Rumal embroidery.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Chamba_Town_Himachal_Pradesh.jpg/1200px-Chamba_Town_Himachal_Pradesh.jpg",
      attractions: ["Laxmi Narayan Temple", "Bhuri Singh Museum", "Khajjiar (Mini Switzerland)"],
      bestTimeToVisit: "April to October",
      thingsToDo: ["Explore ancient temples", "Enjoy scenic beauty", "Trekking"],
    },
    {
      name: "Dharamshala",
      description: "The spiritual home of the Dalai Lama and the Tibetan government-in-exile, offering stunning views of the Dhauladhar range.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/McLeod_Ganj_Dharamshala.jpg/1200px-McLeod_Ganj_Dharamshala.jpg",
      attractions: ["Tsuglagkhang Complex (Dalai Lama Temple)", "Bhagsu Waterfall", "Dal Lake", "Kangra Fort"],
      bestTimeToVisit: "March to June, September to November",
      thingsToDo: ["Learn about Tibetan culture", "Meditation and yoga", "Trekking to Triund"],
    },
    {
      name: "Kangra",
      description: "A historic district known for its ancient fort, lush tea gardens, and vibrant Kangra miniature paintings.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Kangra_Fort.jpg/1200px-Kangra_Fort.jpg",
      attractions: ["Kangra Fort", "Baijnath Temple", "Masrur Rock Cut Temple"],
      bestTimeToVisit: "September to June",
      thingsToDo: ["Explore historical forts", "Visit ancient temples", "Tea garden tours"],
    },
    {
      name: "Kullu",
      description: "A beautiful valley known as the 'Valley of Gods', famous for its majestic hills, charming deodar and pine forests, and apple orchards.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Kullu_Valley.jpg/1200px-Kullu_Valley.jpg",
      attractions: ["Great Himalayan National Park", "Bijli Mahadev Temple", "Raghunath Temple"],
      bestTimeToVisit: "March to June, September to November",
      thingsToDo: ["Adventure sports (rafting, paragliding)", "Trekking", "Nature walks"],
    },
    {
      name: "Manali",
      description: "A popular hill station known for its breathtaking snow-capped mountains, vibrant culture, and adventure activities.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Manali_Himalayas.jpg/1200px-Manali_Himalayas.jpg",
      attractions: ["Hadimba Devi Temple", "Solang Valley", "Rohtang Pass (seasonal)", "Old Manali"],
      bestTimeToVisit: "March to June, October to February",
      thingsToDo: ["Skiing and snowboarding (winter)", "Paragliding", "Trekking", "River rafting"],
    },
    {
      name: "Shimla",
      description: "The 'Queen of Hill Stations', a popular colonial-era summer capital known for its charming architecture, Mall Road, and scenic views.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Shimla_Mall_Road.jpg/1200px-Shimla_Mall_Road.jpg",
      attractions: ["The Ridge", "Christ Church", "Kufri", "Jakhoo Temple", "Mall Road"],
      bestTimeToVisit: "March to June, October to February",
      thingsToDo: ["Stroll on Mall Road", "Toy train ride", "Skiing (winter)", "Enjoy colonial architecture"],
    },
  ],
  Jharkhand: [
    {
      name: "Deoghar",
      description: "An important Hindu pilgrimage city, home to the Baidyanath Jyotirlinga temple, one of the twelve Jyotirlingas in India.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Baidyanath_Jyotirlinga_Temple.jpg/1200px-Baidyanath_Jyotirlinga_Temple.jpg",
      attractions: ["Baidyanath Dham", "Trikut Parvat", "Basukinath Temple"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Pilgrimage", "Ropeway ride to Trikut Parvat", "Explore spiritual sites"],
    },
    {
      name: "Jamshedpur",
      description: "The first planned industrial city of India, founded by Jamsetji Tata. Known as the 'Steel City of India' and 'Tatanagar'.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Jamshedpur_city_skyline.jpg/1200px-Jamshedpur_city_skyline.jpg", // Placeholder
      attractions: ["Jubilee Park", "Dalma Wildlife Sanctuary", "Hudco Lake"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Visit parks and gardens", "Wildlife viewing", "Boating"],
    },
    {
      name: "Ranchi",
      description: "The capital of Jharkhand, often called the 'City of Waterfalls' due to numerous waterfalls surrounding it.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Hundru_Falls_Ranchi.jpg/1200px-Hundru_Falls_Ranchi.jpg",
      attractions: ["Hundru Falls", "Dassam Falls", "Jonha Falls", "Rock Garden"],
      bestTimeToVisit: "September to March",
      thingsToDo: ["Waterfall hopping", "Picnics", "Nature walks"],
    },
  ],
  Karnataka: [
    {
      name: "Badami",
      description: "A historical town famous for its rock-cut cave temples and structural temples, representing early Chalukyan architecture.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Badami_Cave_Temples.jpg/1200px-Badami_Cave_Temples.jpg",
      attractions: ["Badami Cave Temples", "Agastya Lake", "Bhutanatha Group of Temples"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Explore ancient cave temples", "Photography", "Rock climbing"],
    },
    {
      name: "Bagalkote",
      description: "A district known for its historical and archaeological sites, including Pattadakal, a UNESCO World Heritage Site.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Pattadakal_Virupaksha_Temple.jpg/1200px-Pattadakal_Virupaksha_Temple.jpg",
      attractions: ["Pattadakal", "Aihole", "Mahakuta Group of Temples"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Explore ancient temple complexes", "Learn about Chalukyan history"],
    },
    {
      name: "Belagavi",
      description: "Also known as Belgaum, it's a city with a rich cultural heritage, historical forts, and natural beauty.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Belgaum_Fort.jpg/1200px-Belgaum_Fort.jpg",
      attractions: ["Belgaum Fort", "Kamala Basti", "Attiveri Bird Sanctuary"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Visit historical forts", "Birdwatching", "Explore local culture"],
    },
    {
      name: "Bengaluru",
      description: "The capital of Karnataka, known as the 'Silicon Valley of India', a vibrant metropolis with a pleasant climate and modern amenities.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Bengaluru_Vidhana_Soudha.jpg/1200px-Bengaluru_Vidhana_Soudha.jpg",
      attractions: ["Lalbagh Botanical Garden", "Cubbon Park", "Bengaluru Palace", "Tipu Sultan's Summer Palace", "ISKCON Temple"],
      bestTimeToVisit: "October to February",
      thingsToDo: ["Explore gardens and parks", "Visit historical palaces", "Enjoy modern city life and dining"],
    },
    {
      name: "Bidar",
      description: "A historic city in Karnataka, known for its magnificent fort, ancient monuments, and Bidriware craft.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Bidar_Fort_Entrance.jpg/1200px-Bidar_Fort_Entrance.jpg",
      attractions: ["Bidar Fort", "Bahmani Tombs", "Guru Nanak Jhira Sahib", "Chaukhandi of Hazrat Khalil Ullah"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Explore historical forts and tombs", "Learn about Bidriware craft"],
    },
    {
      name: "Dharwad",
      description: "A twin city with Hubballi, known for its educational institutions and cultural heritage, particularly in classical music.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Dharwad_University.jpg/1200px-Dharwad_University.jpg", // Placeholder
      attractions: ["Dharwad Fort", "Amargol", "University of Agricultural Sciences, Dharwad"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Explore educational and cultural centers", "Visit historical sites"],
    },
    {
      name: "Gokarna",
      description: "A small, laid-back pilgrimage town on the Arabian Sea, known for its pristine beaches and sacred temples.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Gokarna_Beach.jpg/1200px-Gokarna_Beach.jpg",
      attractions: ["Om Beach", "Mahabaleshwar Temple", "Kudle Beach", "Half Moon Beach"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Relax on beaches", "Water sports", "Trekking to hidden beaches", "Temple visits"],
    },
    {
      name: "Hampi",
      description: "A UNESCO World Heritage Site, the ruins of the Vijayanagara Empire, known for its stunning ancient temples, monuments, and boulders.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Hampi_Virupaksha_Temple.jpg/1200px-Hampi_Virupaksha_Temple.jpg",
      attractions: ["Virupaksha Temple", "Vittala Temple (Stone Chariot)", "Hampi Bazaar", "Matanga Hill"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Explore ancient ruins", "Bouldering", "Coracle ride on Tungabhadra River", "Photography"],
    },
    {
      name: "Kalaburagi",
      description: "Also known as Gulbarga, a historic city with a rich past, known for its magnificent fort, ancient tombs, and Sufi shrines.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Gulbarga_Fort.jpg/1200px-Gulbarga_Fort.jpg",
      attractions: ["Gulbarga Fort", "Khwaja Bande Nawaz Dargah", "Jama Masjid", "Shor Gumbad"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Explore historical monuments and architecture", "Visit spiritual sites"],
    },
    {
      name: "Mangalore",
      description: "A major port city in Karnataka, known for its beautiful beaches, ancient temples, churches, and delicious seafood.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Mangalore_beach.jpg/1200px-Mangalore_beach.jpg",
      attractions: ["Panambur Beach", "Kadri Manjunath Temple", "St. Aloysius Chapel", "Tannirbhavi Beach"],
      bestTimeToVisit: "September to March",
      thingsToDo: ["Beach relaxation", "Water sports", "Temple and church visits", "Enjoy local cuisine"],
    },
    {
      name: "Mysuru",
      description: "The 'Cultural Capital of Karnataka', famous for its majestic Mysore Palace, rich heritage, and vibrant Dasara festival.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Mysore_Palace_at_night.jpg/1200px-Mysore_Palace_at_night.jpg",
      attractions: ["Mysore Palace", "Chamundi Hills", "Brindavan Gardens", "Mysore Zoo"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Visit the grand palace", "Explore gardens", "Attend Dasara festival (Oct)", "Elephant rides"],
    },
    {
      name: "Vijayapura",
      description: "Also known as Bijapur, a city famous for its grand historical monuments of the Adil Shahi dynasty, including the Gol Gumbaz.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Gol_Gumbaz_Bijapur.jpg/1200px-Gol_Gumbaz_Bijapur.jpg",
      attractions: ["Gol Gumbaz", "Ibrahim Rouza", "Malik-e-Maidan", "Bara Kaman"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Explore magnificent historical architecture", "Learn about Adil Shahi dynasty"],
    },
  ],
  Kerala: [
    {
      name: "Kochi",
      description: "A vibrant city in Kerala, known as the 'Queen of the Arabian Sea', famous for its rich history, diverse culture, and backwaters.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Chinese_fishing_nets_in_Fort_Kochi.jpg/1200px-Chinese_fishing_nets_in_Fort_Kochi.jpg",
      attractions: ["Fort Kochi", "Chinese Fishing Nets", "Mattancherry Palace", "Jewish Synagogue", "Marine Drive"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Explore historical sites", "Boat rides in backwaters", "Enjoy Kathakali performances", "Seafood dining"],
    },
    {
      name: "Kollam",
      description: "An ancient port city on the Laccadive Sea coast of Kerala, known for its backwaters, Ashtamudi Lake, and cashew industry.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Ashtamudi_Lake_Kollam.jpg/1200px-Ashtamudi_Lake_Kollam.jpg",
      attractions: ["Ashtamudi Lake", "Thenmala Ecotourism", "Jatayu Earth's Center", "Thangassery Light House"],
      bestTimeToVisit: "August to March",
      thingsToDo: ["Backwater cruises", "Ecotourism activities", "Visit historical lighthouse"],
    },
    {
      name: "Kumarakom",
      description: "A popular backwater tourism destination on Vembanad Lake, known for its houseboats, bird sanctuary, and serene beauty.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Houseboat_in_Kumarakom.jpg/1200px-Houseboat_in_Kumarakom.jpg",
      attractions: ["Kumarakom Bird Sanctuary", "Vembanad Lake", "Aruvikkuzhi Waterfall"],
      bestTimeToVisit: "September to March",
      thingsToDo: ["Houseboat cruises", "Birdwatching", "Ayurvedic treatments"],
    },
    {
      name: "Munnar",
      description: "A picturesque hill station in Kerala, famous for its sprawling tea plantations, lush green valleys, and mist-covered mountains.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Tea_Plantations_Munnar.jpg/1200px-Tea_Plantations_Munnar.jpg",
      attractions: ["Eravikulam National Park", "Mattupetty Dam", "Anamudi Peak", "Tea Museum"],
      bestTimeToVisit: "September to May",
      thingsToDo: ["Tea plantation tours", "Trekking", "Boating", "Wildlife spotting"],
    },
    {
      name: "Palakkad",
      description: "Known as the 'Gateway of Kerala', a city famous for its unique blend of Tamil and Malayalam culture, paddy fields, and historical fort.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Palakkad_Fort.jpg/1200px-Palakkad_Fort.jpg",
      attractions: ["Palakkad Fort", "Malampuzha Dam", "Parambikulam Tiger Reserve"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Explore historical forts", "Dam and garden visits", "Wildlife safaris"],
    },
    {
      name: "Thiruvananthapuram",
      description: "The capital of Kerala, a vibrant city with a rich cultural heritage, famous temples, and beautiful beaches.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Padmanabhaswamy_Temple.jpg/1200px-Padmanabhaswamy_Temple.jpg",
      attractions: ["Sree Padmanabhaswamy Temple", "Kovalam Beach", "Napier Museum", "Shanghumugham Beach"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Temple visits", "Beach relaxation", "Museum exploration"],
    },
    {
      name: "Thrissur",
      description: "Known as the 'Cultural Capital of Kerala', famous for its historical significance, ancient temples, and vibrant festivals like Thrissur Pooram.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Vadakkunnathan_Temple%2C_Thrissur.jpg/1200px-Vadakkunnathan_Temple%2C_Thrissur.jpg",
      attractions: ["Vadakkunnathan Temple", "Athirappilly Falls", "Kerala Kalamandalam"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Attend festivals", "Visit temples", "Explore waterfalls"],
    },
  ],
  "Madhya Pradesh": [
    {
      name: "Bhopal",
      description: "The capital of Madhya Pradesh, known as the 'City of Lakes' for its numerous natural and artificial lakes.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Upper_Lake%2C_Bhopal.jpg/1200px-Upper_Lake%2C_Bhopal.jpg",
      attractions: ["Upper Lake (Bhojtal)", "Van Vihar National Park", "Sanchi Stupa (nearby)", "Bhimbetka Rock Shelters (nearby)"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Boating in lakes", "Wildlife viewing", "Explore ancient Buddhist sites"],
    },
    {
      name: "Gwalior",
      description: "A historic city in Madhya Pradesh, dominated by the magnificent Gwalior Fort, known for its palaces and temples.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Gwalior_Fort.jpg/1200px-Gwalior_Fort.jpg",
      attractions: ["Gwalior Fort", "Jai Vilas Palace", "Sas Bahu Temples", "Teli Ka Mandir"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Explore grand fort and palaces", "Learn about Maratha and Rajput history"],
    },
    {
      name: "Indore",
      description: "The largest city in Madhya Pradesh, a commercial hub known for its historical palaces, vibrant markets, and delicious street food.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Rajwada_Indore.jpg/1200px-Rajwada_Indore.jpg",
      attractions: ["Rajwada Palace", "Lal Bagh Palace", "Central Museum", "Kanch Mandir"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Explore royal palaces", "Indulge in street food", "Shopping"],
    },
    {
      name: "Khajuraho",
      description: "A UNESCO World Heritage Site, famous for its group of exquisite Hindu and Jain temples known for their intricate and erotic carvings.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Khajuraho_Temples_Western_Group.jpg/1200px-Khajuraho_Temples_Western_Group.jpg",
      attractions: ["Western Group of Temples", "Eastern Group of Temples", "Southern Group of Temples", "Panna National Park (nearby)"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Admire ancient temple architecture", "Learn about Chandela dynasty", "Light and Sound show"],
    },
    {
      name: "Orchha",
      description: "A charming historical town located on the Betwa River, known for its palaces, temples, and cenotaphs (chhatris) of Bundela rulers.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Orchha_Palace.jpg/1200px-Orchha_Palace.jpg",
      attractions: ["Orchha Fort Complex (Jehangir Mahal, Raj Mahal)", "Ram Raja Temple", "Chhatris on Betwa River"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Explore royal palaces and temples", "River rafting on Betwa", "Enjoy the historical ambiance"],
    },
    {
      name: "Ujjain",
      description: "An ancient and sacred city in Madhya Pradesh, one of the seven holy cities (Sapta Puri) of Hinduism, known for the Mahakaleshwar Jyotirlinga temple.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Mahakaleshwar_Jyotirlinga_Temple.jpg/1200px-Mahakaleshwar_Jyotirlinga_Temple.jpg",
      attractions: ["Mahakaleshwar Jyotirlinga Temple", "Kal Bhairav Temple", "Harsiddhi Temple", "Ram Ghat"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Pilgrimage to sacred temples", "Attend evening aarti at Ram Ghat", "Experience spiritual atmosphere"],
    },
  ],
  Maharashtra: [
    {
      name: "Amravati",
      description: "A city in Maharashtra known for its historical and religious significance, particularly the Ambadevi Temple.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Ambadevi_Temple_Amravati.jpg/1200px-Ambadevi_Temple_Amravati.jpg", // Placeholder
      attractions: ["Ambadevi Temple", "Chikhaldara Hill Station (nearby)", "Melghat Tiger Reserve (nearby)"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Visit temples", "Explore nearby hill stations and wildlife"],
    },
    {
      name: "Chhatrapati Sambhaji Nagar (Aurangabad)",
      description: "A historic city known as a major tourism hub, serving as the gateway to the UNESCO World Heritage Sites of Ajanta and Ellora Caves.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Ellora_Caves_Kailasa_Temple.jpg/1200px-Ellora_Caves_Kailasa_Temple.jpg",
      attractions: ["Ajanta Caves", "Ellora Caves", "Bibi Ka Maqbara", "Daulatabad Fort"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Explore ancient rock-cut caves", "Visit historical monuments", "Learn about Mughal and Buddhist history"],
    },
    {
      name: "Igatpuri",
      description: "A charming hill station in the Western Ghats, known for its scenic beauty, waterfalls, and Vipassana International Academy.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Igatpuri_landscape.jpg/1200px-Igatpuri_landscape.jpg", // Placeholder
      attractions: ["Bhatsa River Valley", "Tringalwadi Fort", "Vipassana International Academy (Dhammagiri)"],
      bestTimeToVisit: "June to September (monsoon), October to March",
      thingsToDo: ["Trekking and hiking", "Meditation courses", "Enjoy monsoon waterfalls"],
    },
    {
      name: "Kolhapur",
      description: "A historic city on the banks of the Panchganga River, known for its ancient Mahalaxmi Temple, Kolhapuri Chappals, and local cuisine.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Mahalakshmi_Temple_Kolhapur.jpg/1200px-Mahalakshmi_Temple_Kolhapur.jpg",
      attractions: ["Mahalaxmi Temple", "New Palace (Shahaji Chhatrapati Museum)", "Rankala Lake", "Panhala Fort"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Pilgrimage", "Explore historical palaces and forts", "Shop for Kolhapuri Chappals"],
    },
    {
      name: "Mahabaleshwar",
      description: "A popular hill station in the Western Ghats, famous for its scenic viewpoints, lush forests, and strawberry farms.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Mahabaleshwar_Viewpoint.jpg/1200px-Mahabaleshwar_Viewpoint.jpg",
      attractions: ["Arthur's Seat", "Venna Lake", "Lingmala Waterfall", "Pratapgad Fort (nearby)"],
      bestTimeToVisit: "October to June",
      thingsToDo: ["Enjoy panoramic viewpoints", "Boating", "Strawberry picking (seasonal)", "Trekking"],
    },
    {
      name: "Mumbai",
      description: "The bustling financial capital of India, a vibrant metropolis known for its iconic landmarks, Bollywood, diverse culture, and street food.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Gateway_of_India_Mumbai.jpg/1200px-Gateway_of_India_Mumbai.jpg",
      attractions: ["Gateway of India", "Marine Drive", "Chhatrapati Shivaji Maharaj Terminus", "Elephanta Caves", "Sanjay Gandhi National Park"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Explore iconic landmarks", "Enjoy nightlife and dining", "Shopping", "Visit Bollywood studios"],
    },
    {
      name: "Nagpur",
      description: "The 'Orange City' of India, known for its orange orchards, historical monuments, and as a major commercial and political center of Vidarbha.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Deekshabhoomi_Nagpur.jpg/1200px-Deekshabhoomi_Nagpur.jpg",
      attractions: ["Deekshabhoomi", "Sitabuldi Fort", "Ambazari Lake", "Tadoba Andhari Tiger Reserve (nearby)"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Visit religious sites", "Explore historical forts", "Enjoy nature at lakes", "Wildlife safaris (nearby)"],
    },
    {
      name: "Nashik",
      description: "An ancient holy city in Maharashtra, known for its pilgrimage sites, particularly the Kumbh Mela, and its role as India's 'Wine Capital'.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Godavari_River_Nashik.jpg/1200px-Godavari_River_Nashik.jpg",
      attractions: ["Trimbakeshwar Temple", "Panchavati", "Sula Vineyards", "Pandavleni Caves"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Pilgrimage to temples", "Wine tasting tours", "Explore ancient caves"],
    },
  ],
  Manipur: [
    {
      name: "Imphal",
      description: "The capital of Manipur, known for its scenic beauty, vibrant markets, and historical significance from World War II.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Loktak_Lake_Manipur.jpg/1200px-Loktak_Lake_Manipur.jpg",
      attractions: ["Kangla Fort", "Loktak Lake (nearby)", "Keibul Lamjao National Park (nearby)", "Ima Keithel (Mother's Market)"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Explore historical sites", "Visit the unique Loktak Lake", "Experience floating national park", "Shop at women-run markets"],
    },
  ],
  Meghalaya: [
    {
      name: "Cherrapunjee",
      description: "Historically one of the wettest places on Earth, known for its stunning waterfalls, living root bridges, and limestone caves.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Nohkalikai_Falls_Cherrapunjee.jpg/1200px-Nohkalikai_Falls_Cherrapunjee.jpg",
      attractions: ["Nohkalikai Falls", "Double Decker Living Root Bridge", "Mawsmai Cave", "Arwah Cave"],
      bestTimeToVisit: "October to May",
      thingsToDo: ["Explore waterfalls", "Trek to living root bridges", "Cave exploration"],
    },
    {
      name: "Shillong",
      description: "The capital of Meghalaya, known as the 'Scotland of the East' for its rolling hills, waterfalls, and pleasant climate.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Shillong_View.jpg/1200px-Shillong_View.jpg",
      attractions: ["Elephant Falls", "Shillong Peak", "Ward's Lake", "Don Bosco Centre for Indigenous Cultures"],
      bestTimeToVisit: "October to May",
      thingsToDo: ["Visit waterfalls", "Boating in lakes", "Enjoy panoramic views", "Explore local culture"],
    },
  ],
  Mizoram: [
    {
      name: "Aizawl",
      description: "The capital of Mizoram, a picturesque hill city offering panoramic views of the Tlawng River valley and surrounding hills.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Aizawl_city_view.jpg/1200px-Aizawl_city_view.jpg",
      attractions: ["Solomon's Temple", "Durtlang Hills", "Mizoram State Museum", "Reiek Tourist Village"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Enjoy scenic views", "Explore local culture and traditions", "Visit handicraft centers"],
    },
    {
      name: "Champhai",
      description: "A picturesque town in Mizoram, known as the 'Rice Bowl of Mizoram' and offering stunning views of the Myanmar hills.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Champhai_Valley.jpg/1200px-Champhai_Valley.jpg", // Placeholder
      attractions: ["Murlen National Park (nearby)", "Rih Dil (Myanmar border lake)", "Kungawrhi Puk (cave)"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Enjoy panoramic views", "Explore caves", "Visit border areas"],
    },
    {
      name: "Lunglei",
      description: "Named after a bridge-like rock, Lunglei is a beautiful town offering serene landscapes and cultural insights.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Lunglei_Rock_Bridge.jpg/1200px-Lunglei_Rock_Bridge.jpg", // Placeholder
      attractions: ["Lunglei Bridge (rock formation)", "Saza Wildlife Sanctuary", "Thorangtlang Wildlife Sanctuary"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Explore natural rock formations", "Wildlife viewing", "Trekking"],
    },
    {
      name: "Serchhip",
      description: "A district in Mizoram known for its vibrant traditional Mizo villages and stunning natural beauty.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Serchhip_landscape.jpg/1200px-Serchhip_landscape.jpg", // Placeholder
      attractions: ["Vantawng Falls (nearby)", "Thenzawl Golf Course (nearby)", "Chhingpui Thlan"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Visit waterfalls", "Explore traditional villages", "Enjoy golfing"],
    },
  ],
  Nagaland: [
    {
      name: "Dimapur",
      description: "The largest city and commercial hub of Nagaland, known for its historical Kachari ruins and as a gateway to other parts of the state.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Dimapur_Kachari_Ruins.jpg/1200px-Dimapur_Kachari_Ruins.jpg",
      attractions: ["Kachari Ruins", "Intanki National Park (nearby)", "Nagaland Zoological Park"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Explore ancient ruins", "Wildlife viewing", "Shopping for local handicrafts"],
    },
    {
      name: "Kohima",
      description: "The capital of Nagaland, a hill station with a rich history related to World War II, and known for its vibrant Naga culture.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Kohima_War_Cemetery.jpg/1200px-Kohima_War_Cemetery.jpg",
      attractions: ["Kohima War Cemetery", "Nagaland State Museum", "Kisama Heritage Village (Hornbill Festival site)"],
      bestTimeToVisit: "October to May (December for Hornbill Festival)",
      thingsToDo: ["Learn about WWII history", "Experience Naga culture", "Attend Hornbill Festival"],
    },
  ],
  Odisha: [
    {
      name: "Bhubaneswar",
      description: "The capital of Odisha, known as the 'Temple City of India' for its numerous ancient temples, especially those from the Kalinga architectural style.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Lingaraja_Temple_Bhubaneswar.jpg/1200px-Lingaraja_Temple_Bhubaneswar.jpg",
      attractions: ["Lingaraj Temple", "Udayagiri and Khandagiri Caves", "Dhauli Shanti Stupa", "Nandankanan Zoological Park"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Explore ancient temples and caves", "Wildlife viewing", "Attend cultural events"],
    },
    {
      name: "Cuttack",
      description: "The former capital of Odisha, known for its historical fort, silver filigree work, and a bustling commercial center.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Cuttack_Silver_Filigree.jpg/1200px-Cuttack_Silver_Filigree.jpg", // Placeholder
      attractions: ["Barabati Fort", "Cuttack Chandi Temple", "Stone Revetment of the Mahanadi"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Visit historical fort", "Shop for silver filigree", "Experience local markets"],
    },
    {
      name: "Koraput",
      description: "A picturesque district in Odisha, known for its lush green hills, tribal culture, and coffee plantations.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Koraput_landscape.jpg/1200px-Koraput_landscape.jpg", // Placeholder
      attractions: ["Duduma Waterfall", "Kolab Reservoir", "Tribal Museum", "Jeypore"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Explore waterfalls", "Visit tribal villages", "Learn about local culture"],
    },
    {
      name: "Puri",
      description: "A coastal city and a major pilgrimage site for Hindus, famous for the Jagannath Temple and its annual Rath Yatra (Chariot Festival).",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Jagannath_Temple_Puri.jpg/1200px-Jagannath_Temple_Puri.jpg",
      attractions: ["Jagannath Temple", "Puri Beach", "Konark Sun Temple (nearby)", "Chilika Lake (nearby)"],
      bestTimeToVisit: "October to March (July for Rath Yatra)",
      thingsToDo: ["Pilgrimage", "Relax on the beach", "Visit the iconic Sun Temple", "Birdwatching at Chilika Lake"],
    },
  ],
  Punjab: [
    {
      name: "Amritsar",
      description: "A spiritual and cultural center for Sikhs, home to the iconic Golden Temple (Harmandir Sahib), a revered pilgrimage site.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Golden_Temple_Amritsar.jpg/1200px-Golden_Temple_Amritsar.jpg",
      attractions: ["Golden Temple", "Jallianwala Bagh", "Wagah Border Ceremony", "Partition Museum"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Visit the Golden Temple", "Witness the Wagah Border Ceremony", "Learn about history"],
    },
    {
      name: "Jalandhar",
      description: "An ancient city in Punjab with a rich history, known for its sports industry and historical sites.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Jalandhar_city_view.jpg/1200px-Jalandhar_city_view.jpg", // Placeholder
      attractions: ["Devi Talab Mandir", "Pushpa Gujral Science City (nearby)", "Imam Nasir Mosque"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Visit temples and mosques", "Explore science exhibits", "Shop for sports goods"],
    },
    {
      name: "Kapurthala",
      description: "Known as the 'Paris of Punjab', it's a princely city famous for its unique architecture inspired by French and Indo-Saracenic styles.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Jagajit_Palace_Kapurthala.jpg/1200px-Jagajit_Palace_Kapurthala.jpg",
      attractions: ["Jagajit Palace (Sainik School)", "Shalimar Gardens", "Moorish Mosque", "Kanjli Wetland"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Explore palaces and gardens", "Birdwatching", "Admire unique architecture"],
    },
    {
      name: "Ludhiana",
      description: "The largest city in Punjab, a major industrial hub known for its hosiery and textile industries, often called the 'Manchester of India'.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Ludhiana_clock_tower.jpg/1200px-Ludhiana_clock_tower.jpg", // Placeholder
      attractions: ["Maharaja Ranjit Singh War Museum", "Hardy's World Amusement Park", "Rural Museum"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Visit museums", "Enjoy amusement park rides", "Shopping"],
    },
    {
      name: "Patiala",
      description: "A princely state city known for its magnificent palaces, gardens, and the distinct 'Patiala Peg' whisky measure.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Qila_Mubarak_Patiala.jpg/1200px-Qila_Mubarak_Patiala.jpg",
      attractions: ["Qila Mubarak", "Moti Bagh Palace", "Sheesh Mahal", "Baradari Garden"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Explore royal palaces and forts", "Stroll in gardens", "Learn about Sikh history"],
    },
  ],
  Rajasthan: [
    {
      name: "Ajmer",
      description: "A holy city in Rajasthan, famous for the Ajmer Sharif Dargah, a revered Sufi shrine, and close to the sacred Pushkar Lake.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ajmer_Sharif_Dargah.jpg/1200px-Ajmer_Sharif_Dargah.jpg",
      attractions: ["Ajmer Sharif Dargah", "Ana Sagar Lake", "Taragarh Fort", "Pushkar Lake (nearby)"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Pilgrimage", "Boating in lakes", "Explore historical forts", "Visit Pushkar Camel Fair (Nov)"],
    },
    {
      name: "Alwar",
      description: "A historical city in Rajasthan, known for its majestic fort, serene lakes, and proximity to Sariska Tiger Reserve.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Bala_Quila_Alwar_Fort.jpg/1200px-Bala_Quila_Alwar_Fort.jpg",
      attractions: ["Bala Quila (Alwar Fort)", "Siliserh Lake", "Bhangarh Fort (haunted, nearby)", "Sariska Tiger Reserve"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Explore forts and palaces", "Boating", "Wildlife safaris", "Visit haunted sites"],
    },
    {
      name: "Bikaner",
      description: "The 'Camel Country' of Rajasthan, known for its magnificent forts, palaces, and being a major center for camel breeding.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Junagarh_Fort_Bikaner.jpg/1200px-Junagarh_Fort_Bikaner.jpg",
      attractions: ["Junagarh Fort", "Karni Mata Temple (Rat Temple, Deshnok)", "Lalgarh Palace", "National Research Centre on Camel"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Explore forts and palaces", "Visit unique temples", "Camel rides", "Attend Camel Festival (Jan)"],
    },
    {
      name: "Bundi",
      description: "A charming town in Rajasthan, known for its stepwells, palaces, and intricate frescoes.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Taragarh_Fort_Bundi.jpg/1200px-Taragarh_Fort_Bundi.jpg",
      attractions: ["Taragarh Fort", "Bundi Palace", "Raniji ki Baori (Queen's Stepwell)", "Nawal Sagar Lake"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Explore ancient stepwells", "Visit historical palaces and forts", "Photography"],
    },
    {
      name: "Chittorgarh",
      description: "A historic city famous for its grand Chittorgarh Fort, a UNESCO World Heritage Site, which stands as a symbol of Rajput bravery.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Chittorgarh_Fort_Kirti_Stambh.jpg/1200px-Chittorgarh_Fort_Kirti_Stambh.jpg",
      attractions: ["Chittorgarh Fort", "Vijay Stambh (Victory Tower)", "Kirti Stambh (Tower of Fame)", "Rana Kumbha's Palace"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Explore the massive fort complex", "Learn about Rajput history and legends"],
    },
    {
      name: "Dholpur",
      description: "A city in Rajasthan, known for its historical monuments, including palaces, tombs, and the National Chambal Sanctuary nearby.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Dholpur_Palace.jpg/1200px-Dholpur_Palace.jpg", // Placeholder
      attractions: ["Dholpur Palace (Raj Niwas Palace)", "Machkund Temple", "National Chambal Sanctuary"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Visit palaces", "Wildlife viewing (Gharials, Dolphins)", "Boat safaris"],
    },
    {
      name: "Jaipur",
      description: "The 'Pink City' and capital of Rajasthan, famous for its magnificent forts, palaces, vibrant bazaars, and rich cultural heritage.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Hawa_Mahal_Jaipur.jpg/1200px-Hawa_Mahal_Jaipur.jpg",
      attractions: ["Hawa Mahal", "Amer Fort", "City Palace", "Jantar Mantar", "Nahargarh Fort"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Explore grand forts and palaces", "Elephant rides at Amer Fort", "Shopping for handicrafts and jewelry", "Hot air ballooning"],
    },
    {
      name: "Jaisalmer",
      description: "The 'Golden City' of Rajasthan, known for its golden sandstone fort, desert landscapes, and camel safaris in the Thar Desert.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Jaisalmer_Fort.jpg/1200px-Jaisalmer_Fort.jpg",
      attractions: ["Jaisalmer Fort", "Patwon Ki Haveli", "Sam Sand Dunes", "Gadisar Lake"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Camel safaris in the desert", "Desert camping", "Explore the living fort", "Cultural evenings"],
    },
    {
      name: "Jodhpur",
      description: "The 'Blue City' of Rajasthan, dominated by the majestic Mehrangarh Fort, known for its indigo-painted houses and vibrant markets.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Mehrangarh_Fort_Jodhpur.jpg/1200px-Mehrangarh_Fort_Jodhpur.jpg",
      attractions: ["Mehrangarh Fort", "Jaswant Thada", "Umaid Bhawan Palace", "Mandore Gardens"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Explore the grand fort", "Zip-lining over the fort", "Shopping for local crafts", "Experience local cuisine"],
    },
    {
      name: "Udaipur",
      description: "The 'City of Lakes' and 'Venice of the East', known for its romantic lakes, majestic palaces, and vibrant arts scene.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/City_Palace_Udaipur.jpg/1200px-City_Palace_Udaipur.jpg",
      attractions: ["City Palace", "Lake Pichola", "Jag Mandir", "Fateh Sagar Lake", "Saheliyon Ki Bari"],
      bestTimeToVisit: "September to March",
      thingsToDo: ["Boating on Lake Pichola", "Explore palaces and gardens", "Attend cultural shows", "Shopping for traditional art"],
    },
  ],
  Sikkim: [
    {
      name: "Gangtok",
      description: "The capital of Sikkim, a picturesque hill station offering stunning views of Mount Kanchenjunga, vibrant Buddhist monasteries, and lush landscapes.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Gangtok_city_view.jpg/1200px-Gangtok_city_view.jpg",
      attractions: ["MG Marg", "Rumtek Monastery", "Tsomgo Lake", "Baba Harbhajan Singh Mandir"],
      bestTimeToVisit: "March to May, October to November",
      thingsToDo: ["Stroll on MG Marg", "Visit monasteries", "Explore high-altitude lakes", "Enjoy cable car rides"],
    },
    {
      name: "Mangan",
      description: "The district headquarters of North Sikkim, a serene town offering panoramic views and a gateway to the northern reaches of the state.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Mangan_Valley.jpg/1200px-Mangan_Valley.jpg", // Placeholder
      attractions: ["Permayangtse Monastery (nearby)", "Phodong Monastery", "Chungthang"],
      bestTimeToVisit: "March to May, October to November",
      thingsToDo: ["Enjoy scenic beauty", "Trekking", "Explore remote areas of Sikkim"],
    },
    {
      name: "Pelling",
      description: "A charming hill town in West Sikkim, known for its breathtaking views of the Kanchenjunga range and ancient monasteries.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Pelling_Kanchenjunga_view.jpg/1200px-Pelling_Kanchenjunga_view.jpg",
      attractions: ["Pemayangtse Monastery", "Rabdentse Ruins", "Khecheopalri Lake", "Singshore Bridge"],
      bestTimeToVisit: "March to May, September to December",
      thingsToDo: ["View Kanchenjunga", "Visit ancient monasteries", "Trekking to waterfalls"],
    },
  ],
  "Tamil Nadu": [
    {
      name: "Chennai",
      description: "The capital of Tamil Nadu, a bustling metropolitan city known for its vibrant culture, ancient temples, beaches, and delicious South Indian cuisine.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Marina_Beach_Chennai.jpg/1200px-Marina_Beach_Chennai.jpg",
      attractions: ["Marina Beach", "Kapaleeshwarar Temple", "Fort St. George", "Government Museum"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Relax on beaches", "Visit ancient temples", "Explore colonial history", "Taste local food"],
    },
    {
      name: "Coimbatore",
      description: "Known as the 'Manchester of South India' due to its textile industry, a major industrial city offering a mix of nature, culture, and industry.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Adiyogi_Statue_Coimbatore.jpg/1200px-Adiyogi_Statue_Coimbatore.jpg",
      attractions: ["Adiyogi Shiva Statue", "Marudamalai Temple", "VOC Park and Zoo", "Monkey Falls (nearby)"],
      bestTimeToVisit: "September to March",
      thingsToDo: ["Visit spiritual sites", "Explore nature and waterfalls", "Shopping for textiles"],
    },
    {
      name: "Kanchipuram",
      description: "The 'City of a Thousand Temples', a revered pilgrimage site famous for its exquisite silk sarees and ancient Hindu temples.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Kanchi_Kailasanathar_Temple.jpg/1200px-Kanchi_Kailasanathar_Temple.jpg",
      attractions: ["Kailasanathar Temple", "Ekambareswarar Temple", "Kamakshi Amman Temple", "Varadaraja Perumal Temple"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Temple hopping", "Shop for Kanchipuram silk sarees", "Learn about temple architecture"],
    },
    {
      name: "Kanniyakumari",
      description: "The southernmost tip of mainland India, famous for its unique sunrise and sunset views over three seas, and pilgrimage sites.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Vivekananda_Rock_Memorial_Kanniyakumari.jpg/1200px-Vivekananda_Rock_Memorial_Kanniyakumari.jpg",
      attractions: ["Vivekananda Rock Memorial", "Thiruvalluvar Statue", "Kumari Amman Temple", "Gandhi Memorial Mandapam"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Witness unique sunrises/sunsets", "Boat rides to memorials", "Pilgrimage"],
    },
    {
      name: "Madurai",
      description: "One of the oldest continuously inhabited cities in the world, known as the 'Temple City' for its iconic Meenakshi Amman Temple.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Meenakshi_Amman_Temple_Madurai.jpg/1200px-Meenakshi_Amman_Temple_Madurai.jpg",
      attractions: ["Meenakshi Amman Temple", "Thirumalai Nayakkar Palace", "Gandhi Memorial Museum", "Alagar Koyil"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Explore grand temple architecture", "Learn about Tamil culture and history", "Attend temple rituals"],
    },
    {
      name: "Mamallapuram (Mahabalipuram)",
      description: "A UNESCO World Heritage Site, an ancient port town famous for its rock-cut temples, cave sanctuaries, and monolithic sculptures from the Pallava dynasty.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Shore_Temple_Mahabalipuram.jpg/1200px-Shore_Temple_Mahabalipuram.jpg",
      attractions: ["Shore Temple", "Pancha Rathas", "Krishna's Butter Ball", "Arjuna's Penance"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Explore ancient rock-cut monuments", "Relax on beaches", "Learn about Pallava art"],
    },
    {
      name: "Rameswaram",
      description: "A sacred Hindu pilgrimage island town in Tamil Nadu, believed to be the place where Lord Rama built a bridge to Lanka.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Ramanathaswamy_Temple_Rameswaram.jpg/1200px-Ramanathaswamy_Temple_Rameswaram.jpg",
      attractions: ["Ramanathaswamy Temple", "Dhanushkodi", "Pamban Bridge", "Agniteertham"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Pilgrimage to sacred sites", "Visit the ghost town of Dhanushkodi", "Walk on Pamban Bridge"],
    },
    {
      name: "Thanjavur",
      description: "The 'Rice Bowl of Tamil Nadu', a historic city famous for the UNESCO World Heritage Brihadeeswarar Temple and its rich Chola heritage.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brihadeeswarar_Temple_Thanjavur.jpg/1200px-Brihadeeswarar_Temple_Thanjavur.jpg",
      attractions: ["Brihadeeswarar Temple", "Thanjavur Maratha Palace", "Art Gallery", "Saraswathi Mahal Library"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Explore magnificent temple architecture", "Learn about Chola dynasty", "Discover traditional art"],
    },
  ],
  Telangana: [
    {
      name: "Hyderabad",
      description: "The capital of Telangana, a vibrant city known for its rich history, iconic monuments like Charminar, and delicious Hyderabadi cuisine.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Charminar_Hyderabad.jpg/1200px-Charminar_Hyderabad.jpg",
      attractions: ["Charminar", "Golconda Fort", "Chowmahalla Palace", "Ramoji Film City", "Hussain Sagar Lake"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Explore historical landmarks", "Taste Hyderabadi Biryani", "Visit film city", "Boating in lake"],
    },
    {
      name: "Warangal",
      description: "A historical city in Telangana, known for its majestic fort, ancient temples, and as the former capital of the Kakatiya dynasty.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Warangal_Fort_Thousand_Pillar_Temple.jpg/1200px-Warangal_Fort_Thousand_Pillar_Temple.jpg",
      attractions: ["Warangal Fort", "Thousand Pillar Temple", "Bhadrakali Temple", "Pakhal Lake (nearby)"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Explore ancient fort and temples", "Learn about Kakatiya architecture", "Boating in lake"],
    },
  ],
  Tripura: [
    {
      name: "Agartala",
      description: "The capital of Tripura, a charming city known for its royal palaces, temples, and serene lakes.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Ujjayanta_Palace_Agartala.jpg/1200px-Ujjayanta_Palace_Agartala.jpg",
      attractions: ["Ujjayanta Palace", "Neermahal (Water Palace, nearby)", "Tripura Sundari Temple (nearby)", "Jagannath Temple"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Visit royal palaces", "Explore temples", "Boating in lakes"],
    },
  ],
  "Uttar Pradesh": [
    {
      name: "Agra",
      description: "Home to the iconic Taj Mahal, a UNESCO World Heritage Site and one of the Seven Wonders of the World.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Taj_Mahal.jpg/1200px-Taj_Mahal.jpg",
      attractions: ["Taj Mahal", "Agra Fort", "Fatehpur Sikri (nearby)", "Itmad-ud-Daulah's Tomb"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Marvel at the Taj Mahal", "Explore Mughal architecture", "Visit historical forts"],
    },
    {
      name: "Ayodhya",
      description: "A sacred Hindu pilgrimage city, believed to be the birthplace of Lord Rama, and recently a major focus of religious tourism.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Ram_Janmabhoomi_Temple_Ayodhya.jpg/1200px-Ram_Janmabhoomi_Temple_Ayodhya.jpg",
      attractions: ["Ram Janmabhoomi Temple", "Hanuman Garhi", "Kanak Bhawan", "Sarayu River"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Pilgrimage to sacred sites", "Boat ride on Sarayu River", "Attend evening aarti"],
    },
    {
      name: "Jhansi",
      description: "A historic city in Uttar Pradesh, famous for the Jhansi Fort and its association with Rani Lakshmibai, the Queen of Jhansi.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Jhansi_Fort.jpg/1200px-Jhansi_Fort.jpg",
      attractions: ["Jhansi Fort", "Rani Mahal", "Jhansi Museum", "Parichha Dam"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Explore historical fort", "Learn about Rani Lakshmibai", "Visit museums"],
    },
    {
      name: "Kanpur",
      description: "An industrial city in Uttar Pradesh, known for its leather and textile industries, and historical monuments.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Kanpur_city_skyline.jpg/1200px-Kanpur_city_skyline.jpg", // Placeholder
      attractions: ["Allen Forest Zoo", "Jajmau", "Nana Rao Park", "Shri Radhakrishna Temple"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Visit zoo and parks", "Explore historical sites", "Shopping"],
    },
    {
      name: "Lucknow",
      description: "The capital of Uttar Pradesh, known as the 'City of Nawabs' or 'City of Ganga-Jamuni Tehzeeb', famous for its exquisite architecture, refined etiquette, and delicious cuisine.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Bara_Imambara_Lucknow.jpg/1200px-Bara_Imambara_Lucknow.jpg",
      attractions: ["Bara Imambara", "Chota Imambara", "Residency", "Hazratganj Market"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Explore grand historical monuments", "Savor Awadhi cuisine (Kebabs)", "Shopping for Chikankari embroidery"],
    },
    {
      name: "Mathura",
      description: "A sacred city in Uttar Pradesh, believed to be the birthplace of Lord Krishna, a major pilgrimage site for Hindus.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Krishna_Janmabhoomi_Temple_Mathura.jpg/1200px-Krishna_Janmabhoomi_Temple_Mathura.jpg",
      attractions: ["Krishna Janmabhoomi Temple", "Dwarkadhish Temple", "Gokul", "Vrindavan (nearby)"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Pilgrimage to Krishna's birthplace", "Explore temples and ghats", "Attend spiritual ceremonies"],
    },
    {
      name: "Varanasi",
      description: "One of the oldest continuously inhabited cities in the world, a sacred Hindu pilgrimage city on the banks of the Ganges River, known for its ghats and spiritual rituals.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Ghats_of_Varanasi.jpg/1200px-Ghats_of_Varanasi.jpg",
      attractions: ["Dashashwamedh Ghat", "Kashi Vishwanath Temple", "Sarnath (nearby)", "Assi Ghat"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Boat ride on Ganges at sunrise", "Witness Ganga Aarti", "Explore ancient temples and narrow lanes", "Visit Sarnath"],
    },
  ],
  Uttarakhand: [
    {
      name: "Almora",
      description: "A charming hill station in Uttarakhand, known for its cultural heritage, panoramic views of the Himalayas, and traditional Kumaoni culture.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Almora_town_view.jpg/1200px-Almora_town_view.jpg",
      attractions: ["Bright End Corner", "Nanda Devi Temple", "Kasar Devi Temple", "Binsar Wildlife Sanctuary (nearby)"],
      bestTimeToVisit: "March to June, September to November",
      thingsToDo: ["Enjoy panoramic views", "Visit ancient temples", "Nature walks and birdwatching"],
    },
    {
      name: "Badrinath",
      description: "A revered Hindu pilgrimage town in Uttarakhand, one of the Char Dham pilgrimage sites, located in the Garhwal Himalayas.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Badrinath_Temple.jpg/1200px-Badrinath_Temple.jpg",
      attractions: ["Badrinath Temple", "Tapt Kund", "Mana Village (India's last village)", "Vasudhara Falls"],
      bestTimeToVisit: "May to October (closed in winter)",
      thingsToDo: ["Pilgrimage", "Visit sacred sites", "Explore high-altitude villages and waterfalls"],
    },
    {
      name: "Chamoli",
      description: "A district in Uttarakhand, known for its stunning natural beauty, pilgrimage sites, and the Valley of Flowers National Park.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Valley_of_Flowers_Chamoli.jpg/1200px-Valley_of_Flowers_Chamoli.jpg",
      attractions: ["Valley of Flowers National Park", "Hemkund Sahib", "Auli (nearby)", "Joshimath"],
      bestTimeToVisit: "May to October (for Valley of Flowers: July-Sept)",
      thingsToDo: ["Trekking in Valley of Flowers", "Skiing (Auli in winter)", "Pilgrimage to Hemkund Sahib"],
    },
    {
      name: "Dehradun",
      description: "The capital city of Uttarakhand, nestled in the Doon Valley, known for its pleasant climate, educational institutions, and scenic beauty.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Clock_Tower_Dehradun.jpg/1200px-Clock_Tower_Dehradun.jpg",
      attractions: ["Robber's Cave", "Sahastradhara", "Mindrolling Monastery", "Forest Research Institute"],
      bestTimeToVisit: "March to June, October to November",
      thingsToDo: ["Explore caves and waterfalls", "Visit monasteries", "Nature walks"],
    },
    {
      name: "Haridwar",
      description: "An ancient city and important Hindu pilgrimage site in Uttarakhand, where the Ganges River leaves the Himalayas.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Har_Ki_Pauri_Haridwar.jpg/1200px-Har_Ki_Pauri_Haridwar.jpg",
      attractions: ["Har Ki Pauri", "Mansa Devi Temple", "Chandi Devi Temple", "Daksheshwar Mahadev Temple"],
      bestTimeToVisit: "October to April",
      thingsToDo: ["Take a holy dip in Ganges", "Witness Ganga Aarti", "Visit temples by ropeway"],
    },
    {
      name: "Kausani",
      description: "A tranquil hill station in Uttarakhand, known for its 300-km panoramic views of Himalayan peaks like Nanda Devi and Trishul.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Kausani_Himalayan_View.jpg/1200px-Kausani_Himalayan_View.jpg",
      attractions: ["Anasakti Ashram (Gandhi Ashram)", "Baijnath Temple", "Rudradhari Falls and Caves"],
      bestTimeToVisit: "March to June, September to November",
      thingsToDo: ["Enjoy panoramic mountain views", "Meditation and relaxation", "Visit ancient temples"],
    },
    {
      name: "Lansdowne",
      description: "A serene and pristine hill station in Uttarakhand, known for its peaceful environment and colonial-era charm.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/St._Mary%27s_Church_Lansdowne.jpg/1200px-St._Mary%27s_Church_Lansdowne.jpg",
      attractions: ["Tip N Top Viewpoint", "St. Mary's Church", "Bhulla Tal Lake", "Garhwali Mess"],
      bestTimeToVisit: "March to November",
      thingsToDo: ["Nature walks", "Boating in lake", "Enjoy peaceful ambiance", "Photography"],
    },
    {
      name: "Mussoorie",
      description: "The 'Queen of the Hills', a popular hill station in Uttarakhand, known for its colonial charm, scenic beauty, and waterfalls.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Kempty_Falls_Mussoorie.jpg/1200px-Kempty_Falls_Mussoorie.jpg",
      attractions: ["Kempty Falls", "Gun Hill", "Mall Road", "Company Garden", "Dhanaulti (nearby)"],
      bestTimeToVisit: "April to June, September to November",
      thingsToDo: ["Boating and picnics", "Cable car rides", "Stroll on Mall Road", "Explore waterfalls"],
    },
    {
      name: "Rishikesh",
      description: "The 'Yoga Capital of the World', a spiritual town in Uttarakhand, known for its yoga ashrams, adventure sports, and the confluence of Ganga and Chandrabhaga rivers.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Lakshman_Jhula_Rishikesh.jpg/1200px-Lakshman_Jhula_Rishikesh.jpg",
      attractions: ["Lakshman Jhula", "Ram Jhula", "Parmarth Niketan Ashram", "Triveni Ghat"],
      bestTimeToVisit: "September to March",
      thingsToDo: ["Yoga and meditation", "River rafting", "Bungee jumping", "Attend Ganga Aarti", "Trekking"],
    },
  ],
  "West Bengal": [
    {
      name: "Darjeeling",
      description: "The 'Queen of the Hills' in West Bengal, famous for its world-renowned Darjeeling tea, stunning views of Kanchenjunga, and the Darjeeling Himalayan Railway.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Darjeeling_Himalayan_Railway.jpg/1200px-Darjeeling_Himalayan_Railway.jpg",
      attractions: ["Darjeeling Himalayan Railway (Toy Train)", "Tiger Hill (sunrise view)", "Batasia Loop", "Peace Pagoda", "Tea Gardens"],
      bestTimeToVisit: "April to June, October to December",
      thingsToDo: ["Toy Train ride", "Sunrise viewing", "Tea garden tours", "Trekking"],
    },
    {
      name: "Durgapur",
      description: "An industrial city in West Bengal, known as the 'Ruhr of India', with a focus on steel and other industries.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Durgapur_Barrage.jpg/1200px-Durgapur_Barrage.jpg", // Placeholder
      attractions: ["Durgapur Barrage", "Bhabani Pathak's Tilla", "Kumar Mangalam Park"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Visit industrial sites", "Relax in parks", "Learn about the city's industrial heritage"],
    },
    {
      name: "Kalimpong",
      description: "A tranquil hill station in West Bengal, known for its scenic beauty, Buddhist monasteries, and flower nurseries.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Deolo_Hill_Kalimpong.jpg/1200px-Deolo_Hill_Kalimpong.jpg",
      attractions: ["Deolo Hill", "Durpin Dara Hill", "Zang Dhok Palri Phodang Monastery", "Pine View Nursery"],
      bestTimeToVisit: "March to May, September to November",
      thingsToDo: ["Enjoy panoramic views", "Visit monasteries and nurseries", "Paragliding"],
    },
    {
      name: "Kolkata",
      description: "The capital of West Bengal, known as the 'City of Joy' and the 'Cultural Capital of India', famous for its colonial architecture, art galleries, and vibrant festivals.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Victoria_Memorial_Kolkata.jpg/1200px-Victoria_Memorial_Kolkata.jpg",
      attractions: ["Victoria Memorial", "Howrah Bridge", "Indian Museum", "Dakshineswar Kali Temple", "Park Street"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Explore colonial landmarks", "Boat ride on Hooghly River", "Taste street food", "Attend Durga Puja (Oct)"],
    },
    {
      name: "Siliguri",
      description: "A major transit hub in West Bengal, known as the 'Gateway to Northeast India', offering access to Darjeeling, Sikkim, and Bhutan.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Coronation_Bridge_Siliguri.jpg/1200px-Coronation_Bridge_Siliguri.jpg", // Placeholder
      attractions: ["Coronation Bridge", "Salugara Monastery", "Mahananda Wildlife Sanctuary", "Hong Kong Market"],
      bestTimeToVisit: "October to May",
      thingsToDo: ["Explore local markets", "Visit monasteries", "Wildlife viewing (nearby)", "Access to hill stations"],
    },
  ],
  "Andaman and Nicobar Islands": [
    {
      name: "Rangat",
      description: "A town in the Middle Andaman Island, known for its serene beaches, mangrove creeks, and agricultural landscapes.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Limestone_Cave_Rangat.jpg/1200px-Limestone_Cave_Rangat.jpg", // Placeholder
      attractions: ["Cutbert Bay Beach (Turtle nesting)", "Aamkunj Beach", "Parrot Island", "Mangrove Nature Walk"],
      bestTimeToVisit: "October to May",
      thingsToDo: ["Relax on beaches", "Observe turtle nesting (seasonal)", "Boat rides through mangroves"],
    },
    {
      name: "Sri Vijaya Puram",
      description: "A lesser-known area in the Andaman Islands, offering untouched natural beauty and a peaceful escape.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Andaman_beach_sunset.jpg/1200px-Andaman_beach_sunset.jpg", // Placeholder
      attractions: ["Nearby pristine beaches", "Local village experiences"],
      bestTimeToVisit: "October to May",
      thingsToDo: ["Enjoy tranquility", "Explore local life", "Nature walks"],
    },
  ],
  Chandigarh: [
    {
      name: "Chandigarh",
      description: "A meticulously planned city and a Union Territory, known for its unique architecture designed by Le Corbusier, lush gardens, and urban planning.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Rock_Garden_Chandigarh.jpg/1200px-Rock_Garden_Chandigarh.jpg",
      attractions: ["Rock Garden", "Sukhna Lake", "Rose Garden", "Capitol Complex (UNESCO site)", "Pinjore Gardens (nearby)"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Explore unique gardens", "Boating in Sukhna Lake", "Admire modern architecture"],
    },
  ],
  "Dadra and Nagar Haveli and Daman and Diu": [
    {
      name: "Daman",
      description: "A coastal town with a rich Portuguese colonial past, known for its beautiful beaches, historical forts, and churches.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Moti_Daman_Fort.jpg/1200px-Moti_Daman_Fort.jpg",
      attractions: ["Moti Daman Fort", "Jampore Beach", "Devka Beach", "Miramar Beach"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Relax on beaches", "Explore historical forts", "Visit churches"],
    },
    {
      name: "Diu",
      description: "A small island located off the coast of Gujarat, known for its serene beaches, stunning fort, and Portuguese heritage.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Diu_Fort.jpg/1200px-Diu_Fort.jpg",
      attractions: ["Diu Fort", "Naida Caves", "Nagoa Beach", "St. Paul's Church"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Explore Diu Fort", "Discover natural caves", "Relax on beaches", "Visit churches"],
    },
    {
      name: "Silvassa",
      description: "The capital of Dadra and Nagar Haveli, a charming town known for its lush greenery, tribal culture, and peaceful environment.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Dudhni_Lake_Silvassa.jpg/1200px-Dudhni_Lake_Silvassa.jpg",
      attractions: ["Dudhni Lake", "Lion Safari Wildlife Park", "Hirwa Van Garden", "Tribal Cultural Museum"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Boating in Dudhni Lake", "Wildlife safari", "Explore gardens", "Learn about tribal culture"],
    },
  ],
  Delhi: [
    {
      name: "Delhi",
      description: "The capital city of India, a sprawling metropolis that seamlessly blends historical grandeur with modern urban life, offering a rich tapestry of cultures, monuments, and culinary delights.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/India_Gate_Delhi.jpg/1200px-India_Gate_Delhi.jpg",
      attractions: ["India Gate", "Red Fort", "Qutub Minar", "Humayun's Tomb", "Lotus Temple", "Akshardham Temple", "Chandni Chowk"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Explore historical monuments", "Shop in bustling markets", "Savor street food", "Visit diverse religious sites", "Experience nightlife"],
    },
  ],
  "Jammu and Kashmir": [
    {
      name: "Anantnag",
      description: "A city in the Kashmir Valley, known for its pristine beauty, springs, and serving as a base for Amarnath Yatra.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Anantnag_Valley.jpg/1200px-Anantnag_Valley.jpg", // Placeholder
      attractions: ["Martand Sun Temple", "Amarnath Cave (pilgrimage)", "Verinag Spring"],
      bestTimeToVisit: "April to October",
      thingsToDo: ["Visit historical temples", "Explore natural springs", "Pilgrimage"],
    },
    {
      name: "Jammu",
      description: "The winter capital of Jammu & Kashmir, known as the 'City of Temples' for its numerous ancient temples and shrines.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Raghunath_Temple_Jammu.jpg/1200px-Raghunath_Temple_Jammu.jpg",
      attractions: ["Raghunath Temple", "Bahu Fort", "Vaishno Devi Temple (nearby)", "Mansar Lake"],
      bestTimeToVisit: "October to March",
      thingsToDo: ["Pilgrimage to temples", "Explore historical forts", "Boating in lakes"],
    },
    {
      name: "Patnitop",
      description: "A popular hill station in Jammu & Kashmir, known for its serene beauty, meadows, and adventure activities.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Patnitop_view.jpg/1200px-Patnitop_view.jpg",
      attractions: ["Sanasar Lake", "Nathatop", "Naag Mandir", "Patnitop Circular Road"],
      bestTimeToVisit: "May to June, September to October (snow: Dec-Feb)",
      thingsToDo: ["Paragliding", "Trekking", "Skiing (winter)", "Nature walks"],
    },
  ],
};

// --- CityDetails Component ---
const CityDetails = ({ selectedCity, goBack }) => {
  let cityDetails = null;

  // Find the city details by iterating through statesData
  for (const state in statesData) {
    const foundCity = statesData[state].find((city) => city.name === selectedCity);
    if (foundCity) {
      cityDetails = foundCity;
      break;
    }
  }

  if (!cityDetails) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-lg mt-8 border border-gray-200">
        <h2 className="text-3xl font-bold text-red-600 mb-4">City Not Found</h2>
        <p className="text-gray-700 mb-6">
          Details for "{selectedCity}" could not be loaded. Please go back and
          try again.
        </p>
        <button
          onClick={goBack}
          className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 font-medium transition duration-300 flex items-center"
        >
          <FaChevronLeft className="mr-2" /> Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg mt-8 border border-gray-200">
      <button
        onClick={goBack}
        className="mb-6 flex items-center text-blue-600 hover:text-blue-800 transition duration-300 font-medium"
      >
        <FaChevronLeft className="mr-2" />
        Back to Destinations
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <img
            src={cityDetails.image}
            alt={cityDetails.name}
            className="w-full h-72 object-cover rounded-lg shadow-md mb-4"
          />
          <h1 className="text-4xl font-extrabold text-gray-800 mb-3">
            {cityDetails.name}
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            {cityDetails.description}
          </p>
        </div>

        <div>
          <div className="bg-blue-50 p-4 rounded-lg shadow-sm mb-4">
            <h3 className="text-2xl font-bold text-blue-700 mb-3">
              Popular Attractions
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {cityDetails.attractions.map((attraction, index) => (
                <li key={index}>{attraction}</li>
              ))}
            </ul>
          </div>

          <div className="bg-green-50 p-4 rounded-lg shadow-sm mb-4">
            <h3 className="text-2xl font-bold text-green-700 mb-3">
              Best Time to Visit
            </h3>
            <p className="text-gray-700">{cityDetails.bestTimeToVisit}</p>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-purple-700 mb-3">
              Things to Do
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {cityDetails.thingsToDo.map((activity, index) => (
                <li key={index}>{activity}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Destinations Component (Main) ---
const Destinations = () => {
  const [search, setSearch] = useState("");
  const [selectedCity, setSelectedCity] = useState(null); // New state for selected city

  const handleCityClick = (cityName) => {
    setSelectedCity(cityName);
  };

  // Filter logic remains similar, but now filters city objects
  const filteredStatesData = Object.entries(statesData)
    .map(([state, cities]) => ({
      state,
      // Filter cities based on search, and ensure we're comparing `city.name`
      cities: cities.filter((city) =>
        city.name.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    // Only include states that have cities matching the search or if the state name itself matches
    .filter(
      (entry) =>
        entry.cities.length > 0 ||
        entry.state.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="p-4 max-w-6xl mx-auto bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
        Discover India's Vibrant Destinations
      </h1>

      <div className="w-full flex justify-center my-8">
        <div className="relative w-[90%] max-w-md">
          <FiSearch
            className="absolute top-3.5 left-3 text-gray-400"
            size={20}
          />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search destinations..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl 
            shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          />
        </div>
      </div>

      {!selectedCity ? ( // Conditional rendering: show list or details
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="overflow-y-auto max-h-[600px] pr-4">
            {filteredStatesData.length === 0 && search !== "" ? (
              <p className="text-center text-gray-600 text-lg">
                No destinations found matching your search.
              </p>
            ) : (
              filteredStatesData.map((data) => (
                <div key={data.state} className="mb-8">
                  <h2 className="text-2xl text-green-600 font-bold bg-clip-text mb-3 border-b pb-1 border-gray-200">
                    {data.state}
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {data.cities.map((city) => (
                      <span
                        key={city.name}
                        onClick={() => handleCityClick(city.name)} // Make cities clickable
                        className="px-4 py-1 cursor-pointer rounded-full text-sm font-medium shadow-sm 
                        hover:bg-blue-100 hover:text-blue-800 transition duration-200
                        bg-gray-100 text-gray-700 border border-gray-200"
                      >
                        {city.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      ) : (
        <CityDetails selectedCity={selectedCity} goBack={() => setSelectedCity(null)} />
      )}
    </div>
  );
};

export default Destinations;