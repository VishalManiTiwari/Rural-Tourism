import React, { useState } from "react";

const Treasure = () => {
  const [selectedTreasure, setSelectedTreasure] = useState(null);

  const handleCardClick = (treasure) => {
    setSelectedTreasure(treasure);
  };

  const closeModal = () => {
    setSelectedTreasure(null);
  };

  const treasures = [
    {
      id: 1,
      name: "Kitam",
      state: "Sikkim",
      description: "A bird's paradise",
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/kitam-bird-sanctuary-sikkim-rural-wonders?qlt=82&ts=1726642173598",
      details:
        "Kitam Bird Sanctuary is located in South Sikkim and is a haven for bird lovers. It is home to over 200 species of birds including the Great Hornbill and many migratory species. The sanctuary also offers breathtaking views and serene nature trails.",
    },
    {
      id: 2,
      name: "Diezephe",
      state: "Nagaland",
      description: "The village of crafts and culture",
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/diezephe-craft-village-chumoukedima-nagaland-rural-wonders?qlt=82&ts=1727355522870",
      details:
        "Diezephe is a village near Dimapur known for preserving traditional Naga arts and crafts. Visitors can witness wood carving, bamboo craft, and weaving in action, and engage with local artisans to learn about their heritage.",
    },
    {
      id: 3,
      name: "Reiek",
      state: "Mizoram",
      description: "The home of majestic misty mountains!",
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/reiek-mountain-reiek-mizoram-rural-wonders?qlt=82&ts=1727162325719",
      details:
        "Reiek is a picturesque village nestled in the Lushai Hills. It offers panoramic views, including a glimpse of Bangladesh on clear days. The Reiek Heritage Village showcases Mizo culture, and the trails are ideal for hiking and birdwatching.",
    },
    {
      id: 4,
      name: "Saroda Dadar",
      state: "Chhattisgarh",
      description: "The enchanting oasis",
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/chilphi-ghati-rural-wonders?qlt=82&ts=1726642138505",
      details:
        "Saroda Dadar is a tranquil plateau surrounded by lush forests and waterfalls. Located in the Kabirdham district, it’s rich in flora and fauna, making it a perfect escape for nature lovers and adventure seekers alike.",
    },
    {
      id: 5,
      name: "Mawphlang",
      state: "Meghalaya",
      description: "Meghalaya's mystical wonder",
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/khisi-heritage-village-west-khasi-hills-rural-wonders?qlt=82&ts=1726642200125",
      details:
        "Mawphlang is home to the sacred groves of the Khasi tribe. These forests are untouched and protected by tradition, believed to house guardian spirits. It’s also the starting point of the David Scott Trail – a scenic hike rich in biodiversity.",
    },
    {
      id: 6,
      name: "Cotigao",
      state: "Goa",
      description: "The green paradise of Goa",
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/cotigao-wild-life-sanctury-entrance-cotigao-rural-wonders?qlt=82&ts=1726641738476",
      details:
        "Cotigao Wildlife Sanctuary in South Goa is known for its tall trees, quiet trails, and watchtowers. It’s a great alternative to Goa’s beaches for those seeking wildlife and greenery. Animals like flying squirrels and slender lorises inhabit the area.",
    },
    {
      id: 7,
      name: "Aru",
      state: "Jammu and Kashmir",
      description: "An oasis of serenity",
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/aru-valley-anantnag-rural-wonders?qlt=82&ts=1726642132648",
      details:
        "Aru Valley is a peaceful village near Pahalgam, surrounded by snow-clad peaks and alpine meadows. It’s a base for treks to the Kolahoi Glacier and Tarsar-Marsar lakes. Horse riding and camping are popular activities here.",
    },
    {
      id: 8,
      name: "Kanthalloor",
      state: "Kerala",
      description: "Kashmir of Kerala",
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/kanthalloor-village-kerala-rural-wonders?qlt=82&ts=1726642148707",
      details:
        "Kanthalloor is a scenic village in Idukki district, known for its cool climate and fruit orchards. It is one of the few places in Kerala where apples, plums, and strawberries grow. It’s a great offbeat destination for nature lovers.",
    },
    {
      id: 9,
      name: "Manyuliang",
      state: "Arunachal Pradesh",
      description: "Serene Himalayan sanctuary",
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/namdapha-national-park-rural-wonders?qlt=82&ts=1726642216133",
      details:
        "Manyuliang is a hidden village surrounded by dense forests and rivers. It’s located near Namdapha National Park, known for its tiger and red panda population. The area is perfect for eco-tourism and cultural experiences with local tribes.",
    },
    {
      id: 10,
      name: "Bashgram",
      state: "Tripura",
      description: "The bamboo haven",
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/rabindra-dance-3-rural-hero?qlt=82&ts=1726641826392",
      details:
        "Bashgram in Tripura is renowned for its bamboo handicrafts and traditional tribal dance performances. It's a place to experience authentic village life and buy handwoven textiles and bamboo products directly from the artisans.",
    },
    {
      id: 11,
      name: "Shergaon",
      state: "Arunachal Pradesh",
      description: "The tranquil Himalayan retreat",
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/shergaon-bridges-arunachal-pradesh-rural-hero?qlt=82&ts=1726642157444",
      details:
        "Shergaon is a picturesque hamlet of the Sherdukpen tribe. Surrounded by orchards and pine forests, it offers insights into Buddhist traditions and monastery life. Local cuisine and folk music are major highlights.",
    },
    {
      id: 12,
      name: "Chhoti Haldwani",
      state: "Uttarakhand",
      description: "The village that Corbett built",
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/jim-corbett-village-rural-hero?qlt=82&ts=1726642070737",
      details:
        "Chhoti Haldwani, also known as 'Corbett Village', was founded by legendary hunter-turned-conservationist Jim Corbett. The village maintains its colonial heritage, and visitors can see Corbett’s bungalow and explore forest trails.",
    },
    {
      id: 13,
      name: "Kalpeni Island",
      state: "Lakshadweep",
      description: "A coral paradise awaits!",
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/kavaratti-island-rural-hero?qlt=82&ts=1726642009760",
      details:
        "Kalpeni is part of the Lakshadweep archipelago, offering turquoise lagoons and coral reefs perfect for snorkeling and kayaking. Its calm waters and pristine beaches make it a dream destination for solitude and adventure lovers.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <p className="text-lg text-gray-600 mb-2">Uncover</p>
        <h1 className="font-extrabold text-4xl md:text-6xl text-gray-800">
          MORE TREASURES
        </h1>
      </div> 

      <div className="grid grid-cols-1 cursor-pointer sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {treasures.map((treasure) => (
          <div
            key={treasure.id}
            onClick={() => handleCardClick(treasure)}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={treasure.image}
                alt={treasure.name}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h1 className="text-red-600 font-bold">{treasure.state}</h1>
              <h1 className="text-xl font-bold text-gray-800 mb-1">
                {treasure.name}
              </h1>
              <p className="text-gray-600">{treasure.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedTreasure && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white max-w-md mx-4 rounded-lg shadow-lg overflow-hidden relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-3 text-xl font-bold text-gray-600 hover:text-red-500"
            >
              &times;
            </button>
            <img
              src={selectedTreasure.image}
              alt={selectedTreasure.name}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2 text-gray-800">
                {selectedTreasure.name}
              </h2>
              <p className="text-red-600 font-semibold">
                {selectedTreasure.state}
              </p>
              <p className="text-gray-700 mt-2">
                {selectedTreasure.details}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Treasure;
