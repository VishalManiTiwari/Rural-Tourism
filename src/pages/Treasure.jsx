import React from "react";

const Treasure = () => {
  const treasures = [
    {
      id: 1,
      name: "Kitam",
      state: "Sikkim",
      description: "A bird's paradise",
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/kitam-bird-sanctuary-sikkim-rural-wonders?qlt=82&ts=1726642173598",
    },
    {
      id: 2,
      name: "Diezephe",
      state: "Nagaland",
      description: "The village of crafts and culture",
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/diezephe-craft-village-chumoukedima-nagaland-rural-wonders?qlt=82&ts=1727355522870",
    },
    {
      id: 3,
      name: "Reiek",
      state: "Mizoram",
      description: "The home of majestic misty mountains!",
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/reiek-mountain-reiek-mizoram-rural-wonders?qlt=82&ts=1727162325719",
    },
    {
      id: 4,
      name: "Saroda Dadar",
      state: "Chhattisgarh",
      description: "The enchanting oasis",
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/chilphi-ghati-rural-wonders?qlt=82&ts=1726642138505",
    },
    {
      id: 5,
      name: "Mawphlang",
      state: "Meghalaya",
      description: "Meghalaya's mystical wonder",
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/khisi-heritage-village-west-khasi-hills-rural-wonders?qlt=82&ts=1726642200125",
    },
    {
      id: 6,
      name: "Cotigao",
      state: "Goa",
      description: "The green paradise of Goa",
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/cotigao-wild-life-sanctury-entrance-cotigao-rural-wonders?qlt=82&ts=1726641738476",
    },
    {
      id: 7,
      name: "Aru",
      state: "Jammu and Kashmir" ,
      description: "An oasis of serenity",
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/aru-valley-anantnag-rural-wonders?qlt=82&ts=1726642132648",
    },
    {
      id: 8,
      name: "Kanthalloor",
      state: "Kerala",
      description: "Kashmir of Kerala",
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/kanthalloor-village-kerala-rural-wonders?qlt=82&ts=1726642148707",
    },
    {
      id: 9,
      name: "Manyuliang",
      state: "Arunachal Pradesh",
      description: "Serene himalayan sanctuary",
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/namdapha-national-park-rural-wonders?qlt=82&ts=1726642216133",
    },
    {
      id: 9,
      name: "",
      state: "Arunachal Pradesh",
      description: "Serene himalayan sanctuary",
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/namdapha-national-park-rural-wonders?qlt=82&ts=1726642216133",
    },
    {
      id: 9,
      name: "Manyuliang",
      state: "Arunachal Pradesh",
      description: "Serene himalayan sanctuary",
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/namdapha-national-park-rural-wonders?qlt=82&ts=1726642216133",
    },
    {
      id: 9,
      name: "Manyuliang",
      state: "Arunachal Pradesh",
      description: "Serene himalayan sanctuary",
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/namdapha-national-park-rural-wonders?qlt=82&ts=1726642216133",
    },
    {
      id: 9,
      name: "Manyuliang",
      state: "Arunachal Pradesh",
      description: "Serene himalayan sanctuary",
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/namdapha-national-park-rural-wonders?qlt=82&ts=1726642216133",
    },
  ];

  return (
    <div className="container  mx-auto px-4 py-12">
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
    </div>
  );
};

export default Treasure;
