import React, { useState } from "react";

// Region data (remains the same)
const regionData = [
  {
    region: "North",
    states: [
      "Delhi",
      "Haryana",
      "Himachal Pradesh",
      "Jammu and Kashmir",
      "Ladakh",
      "Punjab",
      "Rajasthan",
      "Uttar Pradesh",
    ],
    image:
      "https://media.istockphoto.com/id/1154057848/photo/north-korea-countryside-scenery.jpg?s=170667a&w=0&k=20&c=7wKfbLou3t2bsgQBkWOXDMwEsA-sLI8xoETnJWiuLNE=",
  },
  {
    region: "North East",
    states: [
      "Arunachal Pradesh",
      "Assam",
      "Manipur",
      "Meghalaya",
      "Mizoram",
      "Nagaland",
      "Sikkim",
      "Tripura",
    ],
    image:
      "https://media.springernature.com/lw685/springer-static/image/chp%3A10.1007%2F978-94-007-7055-3_14/MediaObjects/306083_1_En_14_Fig3_HTML.jpg",
  },
  {
    region: "East",
    states: [
      "Andaman and Nicobar Islands",
      "Bihar",
      "Jharkhand",
      "Odisha",
      "West Bengal",
    ],
    image:
      "https://janinesjourneys.com/wp-content/uploads/2019/02/person-690245_1920-1920x1277.jpg",
  },
  {
    region: "Central",
    states: ["Chhattisgarh", "Madhya Pradesh"],
    image:
      "https://thumbs.dreamstime.com/b/rural-india-majority-its-over-billion-citizens-still-living-small-villages-life-remains-central-to-india%C3%A2%E2%82%AC%E2%84%A2s-identity-61026432.jpg",
  },
  {
    region: "West",
    states: [
      "Dadra and Nagar Haveli and Daman and Diu",
      "Goa",
      "Gujarat",
      "Maharashtra",
    ],
    image:
      "https://www.villagesquare.in/wp-content/uploads/2022/05/8-2.jpg",
  },
  {
    region: "South",
    states: [
      "Andhra Pradesh",
      "Karnataka",
      "Kerala",
      "Lakshadweep",
      "Puducherry",
      "Tamil Nadu",
      "Telangana",
    ],
    image:
      "https://www.incredibleindia.gov.in/content/dam/incredible-india/images/kerala/munnar/external-blogs/munnar-travel-blog/munnar-travel-blog-masthead-popular-popular.jpg",
  },
];

// Rural tourism data (remains the same as in the previous good response)
const ruralTourismData = {
  Delhi: [
    {
      name: "Hauz Khas Village",
      description:
        "Hauz Khas Village blends rural charm with urban art, offering a unique tourist experience in Delhi through its historic ruins, bohemian cafés, and vibrant street life.",
      image:
        "https://i.ytimg.com/vi/_f5bOYwOw8k/maxresdefault.jpg",
      details: "A historic urban village in South Delhi with a captivating blend of medieval ruins, art galleries, boutiques, and trendy cafes. It offers a unique cultural experience, juxtaposing ancient architecture with contemporary lifestyle. Ideal for leisurely strolls and exploring hidden gems.",
    },
    {
      name: "Mehrauli Archaeological Park",
      description:
        "Mehrauli Archaeological Park offers a unique blend of rural tourism and heritage exploration in Delhi, showcasing centuries-old monuments amidst natural landscape.",
      image:
        "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2018/01/31/Pictures/archaeological-park_9d8cda7c-0684-11e8-90ea-37dc70df54a3.jpg",
      details: "Sprawling over 200 acres, this park is home to a rich collection of historical ruins and tombs from various dynasties, including the Khalji, Tughlaq, and Mughal periods. It's a peaceful retreat offering historical insights and green spaces, perfect for heritage walks.",
    },
    {
      name: "Asola Bhatti Wildlife Sanctuary",
      description:
        "A quiet escape on the Delhi-Haryana border, offering a glimpse of local wildlife and natural beauty within a rural setting.",
      image:
        "https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/1/2012/08/asolabhatti.jpg",
      details: "Located at the tail end of the Aravalli hills, this sanctuary is Delhi's green lung. It's a crucial habitat for various flora and fauna, including leopards, civets, and numerous bird species. Ideal for nature walks, birdwatching, and experiencing a touch of wilderness near the city.",
    },
  ],
  Haryana: [
    {
      name: "Sohna Rural Complex",
      description:
        "Looking for a nice weekend option away from the hustle bustle of Delhi? Sohna is the place for you.",
      image:
        "https://www.treebo.com/blog/wp-content/uploads/2018/06/Sohna.jpg",
      details: "This beautifully lush green town of Haryana, Sohna is located in the foothills of the Aravalli Mountains. Sohna is very popular for its medicinal water springs and the ancient Shiva temple.",
    },
    {
      name: "Sultanpur Bird Sanctuary",
      description:
        "A bird sanctuary offering a rural landscape perfect for birdwatching, especially during migratory seasons, providing a serene natural experience.",
      image:
        "https://www.treebo.com/blog/wp-content/uploads/2018/06/Sultanpur-Bird-Sanctuary.jpg",
      details: "The Sultanpur Bird Sanctuary is a lovely place to visit. Home to almost 250 different spices of birds, this stunning sanctuary is sure to gladden your heart. Take the kids or your parents — or even go alone; either way, you’re sure to have a good time.",
    },
    {
      name: "Tikkar Taal",
      description:
        "Tikkar Taal, nestled in the serene Morni Hills of Haryana, is a hidden gem for rural tourism.",
      image: "https://i.ytimg.com/vi/8YHJYKWdIho/maxresdefault.jpg",
      details: "Surrounded by lush greenery and hills, it offers a peaceful escape into nature. Visitors can enjoy boating, trekking, and exploring the rustic charm of nearby villages. It’s an ideal destination for those seeking tranquility and a taste of rural life.",
    },
    {
      name: "Pratapgarh",
      description:
        "The place Pratapgarh offers a complete rural experience which is a change from the madness of the city.",
      image: "https://www.treebo.com/blog/wp-content/uploads/2018/06/Pratapgarh-Farms.jpg",
      details: "This is a great place to visit on a weekend with your family and kids. The place offers a complete rural experience which is a change from the madness of the city. The kids can enjoy outdoor games or horse and camel rides.",
    },
  ],
  "Himachal Pradesh": [
    {
      name: "Naggar Village (Kullu)",
      description:
        "A quaint village with traditional Himachali homes, ancient temples, and the historic Naggar Castle, offering breathtaking views of the Beas valley.",
      image:
        "http://www.thehillgypsy.com/wp-content/uploads/2020/04/naggar-1.jpg",
      details: "Naggar, once the capital of the Kullu kingdom, is steeped in history and natural beauty. Explore the traditional wooden houses, visit the Naggar Castle (now a heritage hotel), and immerse yourself in the local Himachali culture. It offers stunning views of the Beas River and surrounding mountains.",
    },
    {
      name: "Prashar Lake (Mandi)",
      description:
        "A serene high-altitude lake with a floating island, surrounded by snow-capped peaks and traditional Himachali architecture, accessible via a picturesque trek.",
      image:
        "https://www.oyorooms.com/travel-guide/wp-content/uploads/2020/01/Parashar-Lake-1-1.jpg",
      details: "Prashar Lake is a hidden gem in the Mandi district, known for its tranquil blue waters and a unique floating island. The pagoda-style temple dedicated to Sage Prashar adds to its charm. It's a popular trekking destination, offering panoramic views of the Dhauladhar, Pir Panjal, and Kinnaur mountain ranges.",
    },
    {
      name: "Malana Village (Parvati Valley)",
      description:
        "An ancient isolated village known for its unique culture, self-governance, and stunning mountain views, offering an authentic rural Himalayan experience.",
      image:
        "https://i.ytimg.com/vi/ycEXEqVJZhs/maxresdefault.jpg",
      details: "Malana is an ancient village in the Parvati Valley, famous for its distinct culture and dialect (Kanashi) and its self-governing administrative system. Villagers consider themselves descendants of Alexander the Great. It offers a unique cultural immersion experience amidst stunning Himalayan landscapes.",
    },
  ],
  "Jammu and Kashmir": [
    {
      name: "Doodhpathri (Budgam)",
      description:
        "A stunning meadow known as the 'Valley of Milk', offering pristine pastoral landscapes, gushing streams, and views of the Pir Panjal range.",
      image:
        "https://media.tacdn.com/media/attractions-splice-spp-360x240/0a/77/15/01.jpg",
      details: "Doodhpathri, literally 'Valley of Milk', is a picturesque bowl-shaped meadow in the Budgam district. It's a tranquil retreat with sparkling streams, lush green pastures, and views of the snow-capped Pir Panjal mountains. Ideal for picnics, short treks, and experiencing untouched natural beauty.",
    },
    {
      name: "Gurez Valley (Bandipora)",
      description:
        "A remote and picturesque valley on the ancient Silk Route, known for its pristine beauty, traditional wooden houses, and unique Dard-Shin culture.",
      image:
        "https://logout.world/media/event/2201/Kashmir_Gurez_Valley_Cover_thumb.png",
      details: "Gurez Valley is an unexplored gem in the Himalayas, offering breathtaking views of the Kishan Ganga River and the majestic Habba Khatoon peak. Home to the Dard-Shin people, it retains a unique cultural identity. It's perfect for offbeat travelers seeking pristine nature and cultural immersion.",
    },
    {
      name: "Tulian Lake (Pahalgam)",
      description:
        "A breathtaking alpine lake accessible via a challenging trek from Pahalgam, offering stunning natural beauty and a true high-altitude rural adventure.",
      image:
        "https://i.ytimg.com/vi/K3c1xm4pGMo/maxresdefault.jpg",
      details: "Tulian Lake is a high-altitude alpine lake situated between the Pir Panjal and Zanskar mountain ranges, above Pahalgam. The trek to the lake is challenging but rewarding, offering panoramic views of the Himalayas and a serene, pristine environment. It's an adventure for experienced trekkers.",
    },
  ],
  Ladakh: [
    {
      name: "Nubra Valley Villages",
      description:
        "Villages like Hunder and Diskit offer unique rural experiences with cold deserts, double-humped camels, monasteries, and stunning landscapes.",
      image:
        "https://www.adventureactivities.co.in/jammu-kashmir/images/silk-route2.jpg",
      details: "The Nubra Valley is a high-altitude cold desert with breathtaking landscapes. Hunder is famous for its sand dunes and Bactrian camels, while Diskit boasts the Diskit Monastery with a giant Buddha statue. These villages offer unique insights into Ladakhi rural life and culture amidst dramatic scenery.",
    },
    {
      name: "Aryan Valley (Dah Hanu)",
      description:
        "Home to the Brokpa community, believed to be direct descendants of Alexander's army, these villages offer a glimpse into a unique culture and traditional way of life.",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.20HroxavHihRB5fzO5IjiwHaEK&pid=Api&P=0&h=180",
      details: "The Aryan Valley is inhabited by the Brokpas, an ethnic group believed to be the last pure descendants of Alexander the Great's army. Villages like Dah and Hanu preserve a distinct culture, dress, and language. It's a fascinating destination for anthropological and cultural exploration.",
    },
    {
      name: "Sham Valley (Lower Ladakh)",
      description:
        "Known as the 'Apricot Valley', this region offers beautiful villages, ancient monasteries, and opportunities for village walks and homestays.",
      image:
        "https://d1nwfvw9iqnfnz.cloudfront.net/filters:autojpg()/filters:quality(80)/fit-in/800x800/gowithguide/tours/6625/107989.jpg",
      details: "Sham Valley, located downstream of Leh, is known for its lush apricot orchards and serene villages. It's a popular trekking route (Sham Valley Trek) that takes you through traditional Ladakhi villages, ancient monasteries like Alchi and Likir, and provides opportunities for homestays and cultural interactions.",
    },
  ],
  Punjab: [
    {
      name: "Anandpur Sahib Virasat-e-Khalsa",
      description:
        "While a modern museum, it's set amidst the rural landscape of Anandpur Sahib, offering insight into Sikh history and culture in a serene environment.",
      image:
        "https://punjabtourism.punjab.gov.in/museums/virasat-e-khalsa/virasat-e-khalsa-6.jpg",
      details: "Virasat-e-Khalsa is a magnificent museum complex celebrating the rich history and culture of Sikhism. While modern in design, its setting in the historical town of Anandpur Sahib, surrounded by a rural landscape, offers a profound cultural and historical experience.",
    },
    {
      name: "Kila Raipur (Rural Olympics)",
      description:
        "Famous for its annual rural sports festival (Rural Olympics), showcasing traditional Punjabi rural life, sports, and culture.",
      image:
        "https://punjabtourism.punjab.gov.in/museums/virasat-e-khalsa/virasat-e-khalsa-3.jpg",
      details: "Kila Raipur hosts the annual Rural Olympics, a unique festival where villagers compete in traditional Punjabi sports like bullock cart racing, dog racing, and tug-of-war. It's a vibrant showcase of Punjabi rural strength, sportsmanship, and cultural festivities.",
    },
    {
      name: "Shekhawati Haveli Homestays (Firozpur/Muktsar region)",
      description:
        "Experience rural Punjabi hospitality by staying in restored Havelis, offering a glimpse into the opulent yet rustic past of the region.",
      image:
        "https://hwnews.in/wp-content/uploads/2022/06/Shekhawati-960x540.jpg",
      details: "While Shekhawati is primarily in Rajasthan, parts of the Firozpur and Muktsar regions in Punjab also have historical Havelis that offer homestay experiences. These provide an authentic taste of rural Punjabi hospitality, traditional architecture, and local cuisine.",
    },
  ],
  Rajasthan: [
    {
      name: "Mandawa (Shekhawati)",
      description:
        "A charming town in the Shekhawati region, known for its elaborately painted Havelis, offering a unique blend of art, history, and rural charm.",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.EJ1vHgoOpRfwqqaIHt_RZAHaCk&pid=Api&P=0&h=180",
      details: "Mandawa, a town in the heart of the Shekhawati region, is an open-air art gallery, famous for its exquisitely painted Havelis adorned with frescoes. It offers a deep dive into Marwari merchant history and rural Rajasthani art, perfect for heritage walks and photography.",
    },
    {
      name: "Khuri Village (Jaisalmer)",
      description:
        "A traditional desert village near Jaisalmer, offering authentic rural desert life, camel safaris, folk music, and cultural performances.",
      image:
        "https://www.aamantrantours.com/rajasthan-day-trips/images/RJ1504-jaisalmer-to-khuri-village4.jpg",
      details: "Khuri is a small, tranquil village south-west of Jaisalmer, offering an authentic desert experience away from the tourist crowds. Enjoy camel safaris over golden sand dunes, overnight stays in traditional mud huts, and cultural evenings with folk music and dance.",
    },
    {
      name: "Ranakpur (Pali)",
      description:
        "Known for its exquisite Jain temples, Ranakpur is nestled in a serene valley, offering a tranquil rural setting amidst architectural marvels.",
      image:
        "https://www.rajasthantourplanner.com/images/best-timevisit-ranakpur.jpg",
      details: "Ranakpur is home to one of India's largest and most important Jain temple complexes, renowned for its intricate marble carvings and exquisite architecture. Situated in a quiet valley, it offers a serene spiritual and rural experience, surrounded by the Aravalli hills.",
    },
  ],
  "Uttar Pradesh": [
    {
      name: "Shringverpur",
      description:
        "Shringverpur is situated near Allahabad.According to folklore, Lord Rama crossed the river Ganges at Shringaverpur on his way to exile along with Sita and Lakshmana.",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/db/ea/0f/caption.jpg?w=1400&h=-1&s=1",
      details: "This village holds historical and religious significance, with legends linking it to Rama, Sita, and Lakshmana. ",
    },
    {
      name: "Kurauna",
      description:
        "Kurauna is a Village in Aurai Block in Sant Ravidas Nagar District of Uttar Pradesh State.",
      image:
        "https://uinewz.com/wp-content/uploads/2023/12/Rural-Tourism-jpg.webp",
      details: "This village has been recognized for its tourism potential, offering a glimpse into traditional rural life.",
    },
    {
      name: "Kakori and Malihabad",
      description:
        "These villages near Lucknow offer opportunities to explore mango orchards, guava farms, and local crafts like Chikankari.",
      image:
        "https://imgs.search.brave.com/x1dc4S86ttc1gb3fd45YIsWDyriVsypD1SVj4mpRNx0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzE0L0FfSGluZHVf/dGVtcGxlLF9BbWFy/a2FudGFrX01hZGh5/YV9QcmFkZXNoX0lu/ZGlhLmpwZw",
      details: "Kakori is recognized for its connection to Urdu poetry and literature, and it has a memorial dedicated to the revolutionaries.Malihabad is famous for its mango production, especially the Dasheri variety, which is considered the king of mangoes.",
    },
  ],
  "Arunachal Pradesh": [
    {
      name: "Ziro Valley",
      description:
        "Known for its Apatani tribal villages, unique agricultural practices (paddy-fish cultivation), and stunning landscapes, offering an authentic rural tribal experience.",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.UwGSrmryp6ZxSuqhkGId4QHaE8&pid=Api&P=0&h=180",
      details: "Ziro Valley is a UNESCO World Heritage Site known for the indigenous Apatani tribe. Their sustainable 'paddy-fish cultivation' system, traditional bamboo and wooden houses, and vibrant festivals make it a unique rural tourism destination. Experience the rich tribal culture and pristine natural beauty.",
    },
    {
      name: "Mechuka Valley",
      description:
        "A serene valley near the Indo-China border, known for its natural beauty, unique tribal culture, and the ancient Samten Yongcha Monastery.",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.i4dQhstUIEOfc275KdOOKwHaFj&pid=Api&P=0&h=180",
      details: "Mechuka, or Menchuka, is an exquisite valley nestled amidst snow-capped peaks, offering breathtaking vistas and a serene environment. It's home to the Memba tribe and the 400-year-old Samten Yongcha Monastery. Ideal for peace, natural beauty, and cultural discovery.",
    },
    {
      name: "Sangti Valley (Dirang)",
      description:
        "A beautiful valley near Dirang, famous for its black-necked cranes during winter and picturesque rural landscapes with traditional Monpa houses.",
      image:
        "https://travespert.com/blogs/wp-content/uploads/sites/2/2023/04/sangti-valley-1.webp",
      details: "Sangti Valley is a hidden paradise known for its picturesque landscapes, fruit orchards, and the wintering grounds of the endangered Black-necked Crane. The Monpa villages with their traditional stone and wood houses offer a charming rural experience.",
    },
  ],
  Assam: [
    {
      name: "Majuli Island",
      description:
        "The world's largest river island, a hub of Assamese Neo-Vaishnavite culture, known for its serene rural life, Satras (monasteries), and pottery villages.",
      image:
        "https://tse4.mm.bing.net/th?id=OIP.ZPc4DiDYrvUNGpZIDw642AHaEK&pid=Api&P=0&h=180",
      details: "Majuli is a cultural capital of Assam, famed for its Vaishnavite Satras (monasteries) that preserve traditional arts like mask-making and music. Experience the serene rural life, interact with local Mishing tribes, and witness traditional pottery making. It's a unique cultural and natural marvel.",
    },
    {
      name: "Pottery Villages of Salmara",
      description:
        "Explore traditional pottery-making villages, witnessing the craft of Kumars (potters) and experiencing the local rural lifestyle.",
      image:
        "https://nexplore.org/blog/wp-content/uploads/2017/08/5.jpg",
      details: "The pottery villages of Salmara in Assam are known for their traditional craft of terracotta pottery. Visitors can observe the artisans at work, learn about the age-old techniques, and experience the simple, rustic charm of rural Assamese life.",
    },
    {
      name: "Kaziranga's fringe villages",
      description:
        "While Kaziranga is famous for wildlife, the surrounding Mishing and Karbi villages offer insights into indigenous cultures, handloom weaving, and rural life.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Mishing_Village%2C_Assam.jpg/1280px-Mishing_Village%2C_Assam.jpg",
      details: "Beyond the wildlife of Kaziranga, the surrounding Mishing and Karbi villages offer a vibrant rural experience. Learn about their unique stilt houses, traditional handloom weaving, and taste authentic ethnic cuisine. It's an opportunity to connect with the indigenous communities.",
    },
  ],
  Manipur: [
    {
      name: "Keibul Lamjao National Park surrounding areas",
      description:
        "The only floating national park in the world, surrounded by villages that showcase the unique Loktak Lake ecosystem and local fishing communities.",
      image:
        "https://static.toiimg.com/thumb/msid-77732296,width-748,height-499,resizemode-4/77732296.jpg",
      details: "Keibul Lamjao National Park, located on Loktak Lake, is unique for its floating phumdis (heterogeneous mass of vegetation, soil, and organic matter). The surrounding fishing villages offer a fascinating insight into the life of the local people who live on and around the lake, using circular fishing nets.",
    },
    {
      name: "Andro Village (Imphal East)",
      description:
        "A traditional Loi village known for its indigenous pottery, ancient cultural complex, and showcasing the rich heritage of Manipur's rural communities.",
      image:
        "https://www.north-east-india.com/manipur/andro-village.jpg",
      details: "Andro is a culturally rich village where visitors can witness the traditional art of pottery making without a potter's wheel. It also houses a cultural complex showcasing the different traditional houses of Manipur's tribes and a doll-making center, offering a deep dive into Manipuri rural heritage.",
    },
    {
      name: "Moreh Border Town hinterlands",
      description:
        "Explore the rural areas around this bustling border town to witness cross-cultural influences and the traditional lifestyles of local communities.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Moreh_Market.jpg/1200px-Moreh_Market.jpg",
      details: "Moreh, a major trade point on the India-Myanmar border, offers a unique blend of cultures. The rural hinterlands around Moreh provide an opportunity to observe the daily lives of local communities, engage in cross-border trade observations, and experience the fusion of Indian and Burmese influences.",
    },
  ],
  Meghalaya: [
    {
      name: "Mawlynnong Village",
      description:
        "Dubbed 'Asia's Cleanest Village', it's a model of rural tourism focusing on eco-friendliness, traditional Khasi culture, and living root bridges.",
      image:
        "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2023/12/19/ad850532a481cb0321a8d50598f7e15c_1000x1000.jpg",
      details: "Mawlynnong is not just Asia's cleanest village; it's also a testament to community-led eco-tourism. Explore its pristine surroundings, witness the iconic living root bridge, and immerse yourself in the Khasi matrilineal culture. It's a perfect example of sustainable rural living.",
    },
    {
      name: "Kongthong Village (Whistling Village)",
      description:
        "A unique village where residents communicate through whistling tunes instead of names, offering a fascinating insight into indigenous traditions.",
      image:
        "https://images.wanderon.in/blogs/new/2023/09/top-min-29.jpg",
      details: "Kongthong is an extraordinary village where every individual is given a unique 'tune' or whistle as a name, used for communication. This fascinating tradition of the Khasi tribe provides a rare cultural experience, deep in the serene hills of Meghalaya.",
    },
    {
      name: "Nongriat Village (Living Root Bridges)",
      description:
        "Accessible by trek, this village is famous for its intricate living root bridges, showcasing sustainable rural engineering and the unique Khasi way of life.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Double_Decker_Living_Root_Bridge%2C_Nongriat.jpg/1200px-Double_Decker_Living_Root_Bridge%2C_Nongriat.jpg",
      details: "Nongriat is a challenging but rewarding destination, famous for its magnificent Double Decker Living Root Bridge. The trek to the village takes you through lush forests and provides an immersive experience of traditional Khasi village life and their incredible bio-engineering skills.",
    },
  ],
  Mizoram: [
    {
      name: "Reiek Tlang (Aizawl)",
      description:
        "A picturesque mountain peak with a traditional Mizo village recreated to showcase Mizo culture and rural life amidst stunning natural beauty.",
      image:
        "https://www.india.com/wp-content/uploads/2024/07/Reiek-Tlang.jpg",
      details: "Reiek Tlang offers panoramic views of the surrounding hills and valleys. A traditional Mizo village has been recreated here to give visitors an authentic experience of Mizo rural life, including traditional huts, cultural artifacts, and local customs, all amidst a serene natural backdrop.",
    },
    {
      name: "Falkawan Village",
      description:
        "Known for its cultural village showcasing traditional Mizo houses, artifacts, and a glimpse into the rural lifestyle of the Mizo people.",
      image:
        "https://alchetron.com/cdn/rural-tourism-55bde7ab-f5e0-4b0d-96ac-765db9ce66e-resize-750.jpeg",
      details: "Falkawan is a specially developed cultural village that provides an insightful overview of Mizo traditional life. It features authentic Mizo huts, tools, hunting equipment, and cultural artifacts, offering visitors a comprehensive understanding of the rural heritage of Mizoram.",
    },
    {
      name: "Thenzawl",
      description:
        "A beautiful plain known for its handloom industry, traditional Mizo villages, and surrounding natural beauty, offering an authentic rural experience.",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.cJevM2Oc5l_izfumFhJo1gHaDa&pid=Api&P=0&h=180",
      details: "Thenzawl is a vibrant town in Mizoram known for its handloom products and pleasant climate. The surrounding villages showcase traditional Mizo weaving practices. Visitors can explore the craftsmanship, enjoy the peaceful rural environment, and discover local waterfalls and caves.",
    },
  ],
  Nagaland: [
    {
      name: "Khonoma Green Village",
      description:
        "The first 'Green Village' of India, known for its conservation efforts, traditional Angami Naga tribal life, terraced farming, and rich biodiversity.",
      image:
        "https://xplro.com/wp-content/uploads/2024/07/Xplro-2024-07-24T011351.970-1024x536.jpg",
      details: "Khonoma is a pioneering eco-village where the Angami Naga tribe has embraced conservation. It's known for its unique terraced cultivation, traditional Angami houses, and commitment to sustainable living. Visitors can experience the rich tribal culture, participate in village walks, and learn about their conservation initiatives.",
    },
    {
      name: "Touphema Tourist Village",
      description:
        "A government-run initiative to promote rural tourism, offering traditional Naga huts for stay and showcasing various Naga tribal cultures and crafts.",
      image:
        "https://media.tripinvites.com/places/kohima/touphema-village/touphema-village-featured.jpg",
      details: "Touphema Tourist Village provides an immersive experience of Naga culture. It features traditional Naga huts equipped for tourist stays, a museum showcasing tribal artifacts, and cultural performances. It's an excellent place to understand the diverse tribes and their rural way of life.",
    },
    {
      name: "Longwa Village (Mon)",
      description:
        "A unique Konyak Naga village straddling the India-Myanmar border, famous for its headhunting traditions (past) and traditional longhouses.",
      image:
        "https://wildhilladventure.com/wp-content/uploads/2023/05/10-1-25.png",
      details: "Longwa is one of the largest villages of the Konyak Nagas, famous for their tattooed warriors and a past of headhunting. The unique feature is that the Angh's (King's) house straddles the India-Myanmar border. It offers a rare glimpse into a vanishing tribal culture and traditional longhouse architecture.",
    },
  ],
  Sikkim: [
    {
      name: "Dzongu Valley (North Sikkim)",
      description:
        "A protected area reserved for the Lepcha aboriginals, offering pristine nature, traditional Lepcha villages, and a tranquil rural escape.",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.L7gMewKQjVDgLEpr2LaQEgHaFj&pid=Api&P=0&h=180",
      details: "Dzongu is a sacred and protected land of the indigenous Lepcha community. It's an untouched paradise of lush forests, serene rivers, and traditional Lepcha villages. Offers opportunities for homestays, nature walks, and learning about the unique Lepcha culture and their harmonious relationship with nature.",
    },
    {
      name: "Yuksom (West Sikkim)",
      description:
        "The first capital of Sikkim, a historic village surrounded by lush forests, known for its tranquil ambiance and as the base for trekking to Goechala.",
      image:
        "http://sikkimtourism.org/wp-content/uploads/2022/06/places-to-visit-in-yuksom.jpg",
      details: "Yuksom holds significant historical and religious importance as the first capital of Sikkim. It's the gateway to the Kanchenjunga National Park and a popular base for treks like the Goechala trek. The village retains a serene, rustic charm with its ancient monasteries and rich biodiversity.",
    },
    {
      name: "Kewzing Village (South Sikkim)",
      description:
        "A charming Bhutia village known for its peaceful environment, traditional houses, and surrounding cardamom plantations, offering homestay opportunities.",
      image:
        "https://im.whatshot.in/img/2021/Jun/kw2-1623742871.jpg",
      details: "Kewzing is a tranquil Bhutia village offering panoramic views of the Himalayas and lush cardamom plantations. It's known for its traditional Sikkimese houses and offers authentic homestay experiences where visitors can immerse themselves in local customs, cuisine, and rural life.",
    },
  ],
  Tripura: [
    {
      name: "Udaipur (Tripura)",
      description:
        "Known as the 'City of Lakes', its rural surroundings are dotted with ancient temples and serene water bodies, offering a peaceful rural charm.",
      image:
        "https://thumbs.dreamstime.com/b/udaipur-en-tripura-india-grupo-de-templos-gunavati-es-un-tres-ladrillo-construido-la-ciudad-antigua-capital-205363081.jpg",
      details: "Udaipur, also known as Rangamati, is a historic town rich in temples and lakes, notably the Tripura Sundari Temple (one of the 51 Shakti Peethas). Its surrounding rural areas offer a peaceful atmosphere, ancient ruins, and a glimpse into the local agrarian life of Tripura.",
    },
    {
      name: "Jampui Hills",
      description:
        "Famous for its orange orchards and beautiful landscapes, the Mizo tribal villages here offer a tranquil rural escape and cultural immersion.",
      image:
        "https://indiano.travel/wp-content/uploads/2022/08/Untitled-design-79.jpgg",
      details: "Jampui Hills, the 'Eternal Spring' of Tripura, is famous for its picturesque landscapes, vibrant orange orchards, and the cultural richness of the Mizo community residing there. It offers a tranquil rural retreat, perfect for nature lovers and those seeking cultural experiences.",
    },
    {
      name: "Neermahal surrounding villages",
      description:
        "While Neermahal is a palace, the surrounding rural areas and communities around Rudrasagar Lake offer a glimpse into local life and fishing practices.",
      image:
        "https://i.ytimg.com/vi/yEg4RB4du-A/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGFIgVyhlMA8=&rs=AOn4CLAgFng_SmeqU4MsS1qL8xppggi3IA",
      details: "Neermahal, the 'Water Palace' of Tripura, is a stunning architectural marvel situated in the middle of Rudrasagar Lake. The surrounding rural villages offer insight into the lives of local fishermen, traditional boat building, and the serene beauty of the lake's ecosystem.",
    },
  ],
  "Andaman and Nicobar Islands": [
    {
      name: "Havelock Island (Rural pockets)",
      description:
        "Beyond the popular beaches, the interior areas of Havelock offer glimpses of rural island life, with local settlements and coconut plantations.",
      image:
        "https://seepositive.in/wp-content/uploads/2023/11/3pm1.jpg",
      details: "While renowned for its stunning beaches, the interior and less-explored areas of Havelock Island offer a glimpse into the serene rural life of the islanders. Witness traditional fishing methods, explore coconut and paddy plantations, and experience the laid-back island vibe away from the tourist hubs.",
    },
    {
      name: "Baratang Island (Mud Volcanoes and Limestone Caves)",
      description:
        "The journey to these natural wonders involves passing through dense tropical forests and tribal areas, offering a remote rural experience.",
      image:
        "https://i.ytimg.com/vi/LDI7_VzPrwk/maxresdefault.jpg",
      details: "Baratang Island is an adventurous destination known for its natural wonders. The journey through dense tropical forests to reach the mud volcanoes and ancient limestone caves provides a raw, rural experience, often passing through areas inhabited by indigenous tribes.",
    },
    {
      name: "Little Andaman Island (Tribal settlements and plantations)",
      description:
        "Known for its indigenous tribes (Onge) and vast palm oil plantations, offering a raw and untouched rural island experience.",
      image:
        "http://andamanpeople.weebly.com/uploads/9/8/2/8/98282818/ggggg.jpg",
      details: "Little Andaman is the fourth largest island and offers a more remote and untouched experience. It is home to the Onge tribe and features vast palm oil plantations and serene beaches. It's a place to experience the raw beauty and rural indigenous life of the Andaman islands.",
    },
  ],
  Bihar: [
    {
      name: "Pottery Villages (e.g., near Hajipur)",
      description:
        "Explore traditional pottery-making villages where local artisans create earthenware, showcasing age-old rural craftsmanship.",
      image:
        "https://hanoioldquarterguide.com/wp-content/uploads/2024/02/Bat-Trang-Pottery-Village.jpg",
      details: "Bihar has several villages, especially near Hajipur, where traditional pottery making is a thriving rural industry. Visitors can observe the skilled artisans transforming clay into beautiful earthenware using age-old techniques, offering a glimpse into the region's rich rural craftsmanship.",
    },
    {
      name: "Madhubani Villages (Mithila region)",
      description:
        "Visit villages known for the exquisite Madhubani painting, where art is deeply embedded in rural life and traditions.",
      image:
        "https://i.pinimg.com/originals/17/9d/e9/179de99f1d68fe812ffc956825e4ab2c.jpg",
      details: "The Mithila region of Bihar is the origin of the vibrant Madhubani painting, a traditional folk art form. Visiting these villages allows you to see women artists creating intricate paintings on walls and canvases, depicting myths, rituals, and daily life, truly immersing you in rural Bihari art and culture.",
    },
    {
      name: "Bodh Gaya Rural Surroundings",
      description:
        "While Bodh Gaya is a spiritual hub, the surrounding rural landscape offers a glimpse into local life, agriculture, and serene village environments.",
      image:
        "https://i.ytimg.com/vi/Op7fpqi6V3w/maxresdefault.jpg",
      details: "Beyond the Mahabodhi Temple, the rural areas surrounding Bodh Gaya are characterized by lush agricultural fields, serene village life, and a quiet, contemplative atmosphere. It offers a chance to observe the daily routines of local farmers and experience the spiritual calm away from the pilgrimage crowds.",
    },
  ],
  Jharkhand: [
    {
      name: "Netarhat (Mahuadanr)",
      description:
        "A serene hill station known as the 'Queen of Chotanagpur', offering beautiful sunrises/sunsets, pine forests, and a tranquil rural ambiance.",
      image:
        "https://i.ytimg.com/vi/gGypxlxIvLI/maxresdefault.jpg",
      details: "Netarhat, located in the Latehar district, is Jharkhand's highest hill station. It's famous for its stunning sunrises and sunsets, dense pine forests, and peaceful rural environment. It offers a cool climate and a refreshing escape into nature.",
    },
    {
      name: "Rural areas around Betla National Park",
      description:
        "Experience the tribal culture and rural life in the villages surrounding Betla National Park, known for their traditional practices and harmony with nature.",
      image:
        "https://live.staticflickr.com/816/27470345798_8813686df1_b.jpg",
      details: "The villages bordering Betla National Park are predominantly inhabited by indigenous tribes. Exploring these areas offers insights into their traditional livelihoods, unique cultural practices, and their sustainable co-existence with the forest and wildlife. It's a blend of wildlife and cultural immersion.",
    },
    {
      name: "Santhal Villages (Dumka)",
      description:
        "Explore the traditional Santhal tribal villages, witnessing their unique culture, music, dance, and daily rural life.",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.HHvAEKfGwrJqeOJvqOUqlwHaEc&pid=Api&P=0&h=180",
      details: "The Santhal tribe is one of the largest tribal groups in India, with a significant presence in Jharkhand. Visiting Santhal villages around Dumka provides an opportunity to experience their vibrant culture, traditional music and dance, unique customs, and their agrarian way of life.",
    },
  ],
  Odisha: [
    {
      name: "Raghurajpur Heritage Village (Puri)",
      description:
        "A renowned heritage crafts village famous for its Pattachitra paintings, palm leaf engravings, and traditional rural Odishan artistry.",
      image:
        "https://i.ytimg.com/vi/6d56nLinLVw/maxresdefault.jpg",
      details: "Raghurajpur is a living museum of traditional Odishan crafts. Almost every household is involved in Pattachitra painting, palm leaf engraving, Tussar silk painting, and other folk arts. It offers an incredible immersion into rural Indian artistry and a chance to interact with the artists directly.",
    },
    {
      name: "Pipili (Puri)",
      description:
        "Known for its exquisite applique work, Pipili is a vibrant rural town where traditional craftsmanship thrives, offering colorful textiles and handicrafts.",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.7Bxmq4RiKsJl-UCWevSrdQHaDt&pid=Api&P=0&h=180",
      details: "Pipili is famous for its vibrant applique work, a traditional craft used for religious purposes and home decor. The entire town is a hub of artisans creating colorful canopies, umbrellas, wall hangings, and more, reflecting the rich rural textile traditions of Odisha.",
    },
    {
      name: "Bhitarkanika surrounding villages",
      description:
        "Explore the rural communities around Bhitarkanika National Park, experiencing their unique coastal life, fishing practices, and mangrove ecosystems.",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.6nHDV7aI2qU8pgfBxX52RQHaDK&pid=Api&P=0&h=180",
      details: "The villages bordering Bhitarkanika National Park offer a unique coastal rural experience. Interact with local fishing communities, learn about their traditional livelihoods, and observe their harmonious relationship with the rich mangrove ecosystem and its diverse wildlife.",
    },
  ],
  "West Bengal": [
    {
      name: "Shantiniketan Rural Art Villages (Birbhum)",
      description:
        "Explore villages like Boner Pukur and Khowai known for their rich rural art forms, Baul music, handicrafts, and tribal culture inspired by Rabindranath Tagore.",
      image:
        "http://www.amtravel.co.in/images/santi1.png",
      details: "Around Santiniketan, villages like Sonajhuri offer a vibrant rural art scene. Famous for tribal handicrafts, local Baul musicians, and weekly 'haats' (markets), these villages provide an immersive cultural experience, reflecting the rural artistic ethos fostered by Rabindranath Tagore.",
    },
    {
      name: "Sunderbans Delta Villages",
      description:
        "Experience the unique life in the villages bordering the Sunderbans mangrove forest, interacting with local communities, fishing, and traditional practices.",
      image:
        "https://tripjive.com/wp-content/uploads/2024/11/Sundarbans-village-excursions-1.jpg",
      details: "The villages within and bordering the Sunderbans Delta offer a unique and challenging rural life, coexisting with the world's largest mangrove forest and its wildlife. Experience traditional fishing, honey collecting (seasonal), and the resilience of communities adapting to this unique environment.",
    },
    {
      name: "Purbasthali (Bardhaman)",
      description:
        "A birdwatching paradise and a rural area on the banks of the Oxbow Lake, offering a tranquil escape and insights into local agricultural life.",
      image:
        "https://www.holidify.com/images/attr_square/4144.jpg",
      details: "Purbasthali, located on the banks of an Oxbow Lake (Chupi Char), is a haven for migratory birds during winter. Its serene rural landscape, traditional farming, and boat rides on the lake offer a peaceful retreat and excellent birdwatching opportunities, reflecting the typical rural charm of Bengal.",
    },
  ],
  Chhattisgarh: [
    {
      name: "Bastar Tribal Villages",
      description:
        "Explore the remote tribal villages of Bastar, known for their unique indigenous cultures, traditional crafts (Dhokra art), and vibrant weekly markets.",
      image:
        "https://chhattisgarhtourism.co.in/photo_gallery/bastar/03.jpg",
      details: "Bastar is known for its rich tribal heritage, particularly the Muria, Gond, and Dhurwa tribes. Visiting their remote villages offers a deep cultural immersion, witnessing their unique lifestyles, traditional art forms like Dhokra metal craft, and vibrant weekly 'haats' (markets).",
    },
    {
      name: "Mainpat (Surguja)",
      description:
        "Known as the 'Shimla of Chhattisgarh', it's a hill station with Tibetan settlements and beautiful rural landscapes, offering cultural insights and serene views.",
      image:
        "https://thejerker.com/wp-content/uploads/2023/03/awaw.jpg",
      details: "Mainpat is a serene hill station often called the 'Shimla of Chhattisgarh'. It's unique for its significant Tibetan refugee settlements, offering a glimpse into Tibetan culture, monasteries, and lush landscapes. It's a peaceful rural escape with a distinct cultural flavor.",
    },
    {
      name: "Kawardha Palace surrounding villages",
      description:
        "While the palace is a heritage site, its rural surroundings offer a glimpse into the local Bega and Gond tribal life and their traditional practices.",
      image:
        "https://i.ytimg.com/vi/OPBteSDhmzU/maxresdefault.jpg",
      details: "The area around Kawardha Palace is home to the Bega and Gond tribes, known for their traditional practices and art forms. Exploring the surrounding rural villages allows visitors to interact with these communities, witness their daily life, and learn about their unique customs and crafts.",
    },
  ],
  "Madhya Pradesh": [
    {
      name: "Orchha Heritage Town",
      description:
        "A historic town with palaces and temples, its rural setting along the Betwa River offers a tranquil experience with traditional village life.",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.oWR4FqDZO8YMjLuqNMCJrAHaED&pid=Api&P=0&h=180",
      details: "Orchha is a medieval town known for its exquisite palaces, temples, and cenotaphs built by the Bundela rulers. Its tranquil rural setting on the banks of the Betwa River offers a serene atmosphere, with opportunities for river rafting and exploring the charming village life.",
    },
    {
      name: "Panna National Park surrounding villages",
      description:
        "The villages around Panna National Park offer insights into rural Bundelkhand life, local crafts, and interaction with communities coexisting with wildlife.",
      image:
        "https://tse3.mm.bing.net/th?id=OIP.Qk7eOaTWIcPzNzvfK34bQgHaCk&pid=Api&P=0&h=180",
      details: "The rural areas around Panna National Park provide a blend of wildlife and cultural tourism. Visitors can interact with the local Bundelkhand communities, learn about their traditional farming methods, and discover local crafts, witnessing the harmony between human life and nature.",
    },
    {
      name: "Maheshwar (Khargone)",
      description:
        "A historic town on the banks of Narmada, famous for its handloom weaving (Maheshwari sarees) and serene ghats, offering a blend of heritage and rural craft.",
      image:
        "https://www.indianholiday.com/pictures/travelguide/other-images/dest_head_img-293.jpeg",
      details: "Maheshwar is a sacred town on the Narmada River, renowned for its beautiful temples, historic fort, and the exquisite Maheshwari sarees woven by local artisans. It offers a rich heritage experience combined with the charm of a rural craft hub.",
    },
  ],
  "Dadra and Nagar Haveli and Daman and Diu": [
    {
      name: "Khanvel and surrounding tribal villages",
      description:
        "Khanvel offers a lush green landscape with tribal villages like Dudhni, where visitors can experience Warli art, local festivals, and traditional lifestyles.",
      image:
        "https://static.vecteezy.com/system/resources/previews/046/257/221/non_2x/landscape-of-inland-tribal-villages-in-the-middle-of-forests-and-mountains-misty-forest-views-free-photo.jpg",
      details: "Khanvel is a verdant town surrounded by dense forests and tribal villages, particularly known for its proximity to Dudhni Lake. Visitors can explore the Warli tribal art, participate in local festivals, and experience the traditional rural lifestyle of the indigenous communities.",
    },
    {
      name: "Rural Daman and Diu coastal villages",
      description:
        "Beyond the main towns, the smaller coastal villages offer a glimpse into the fishing communities' life, traditional boats, and serene beachside rural charm.",
      image:
        "https://images.wanderon.in/blogs/new/2024/01/d2e7376f-fade-4e85-8db4-362a9cb1b80f.jpg",
      details: "The Union Territory's smaller coastal villages in Daman and Diu offer a tranquil rural escape. Witness the daily life of traditional fishing communities, admire their colorful boats, and enjoy the serene, unspoiled beaches away from the bustling city areas.",
    },
    {
      name: "Silvassa hinterlands",
      description:
        "Explore the rural areas surrounding Silvassa to witness indigenous traditions, local markets, and the agricultural practices of the region.",
      image:
        "https://tse4.mm.bing.net/th?id=OIP.UxsQv9fGbR4rzON_J8boXgAAAA&pid=Api&P=0&h=180",
      details: "The hinterlands of Silvassa are characterized by lush greenery and tribal communities. Exploring these rural areas provides an opportunity to discover indigenous traditions, visit local weekly markets, and observe the agricultural practices that sustain the region's rural economy.",
    },
  ],
  Goa: [
    {
      name: "Goan Hinterlands (Savoi-Verem)",
      description:
        "Explore spice plantations and traditional Goan villages away from the coast, offering a glimpse into the region's agricultural life and heritage homes.",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.JPYP6B3upWC4VzdFGJqXqAHaE8&pid=Api&P=0&h=180",
      details: "Beyond Goa's famed beaches, the hinterlands like Savoi-Verem offer a refreshing rural experience. Explore lush spice plantations, traditional Goan-Portuguese homes, and serene villages, gaining insight into the state's agricultural heritage and quiet charm.",
    },
    {
      name: "Netravali Wildlife Sanctuary surrounding villages",
      description:
        "The villages around Netravali offer eco-tourism opportunities, interaction with local communities, and a chance to experience rural Goan nature.",
      image:
        "https://nomadsaikat.com/wp-content/uploads/2023/11/Netravali-Wildlife-Sanctuary.webp",
      details: "The villages surrounding Netravali Wildlife Sanctuary are perfect for eco-tourism. They offer opportunities to interact with local communities, experience traditional Goan rural life, and explore the sanctuary's natural beauty, including waterfalls and diverse flora and fauna.",
    },
    {
      name: "Divar Island",
      description:
        "A serene island accessible by ferry, known for its picturesque villages, old Portuguese houses, paddy fields, and peaceful rural atmosphere.",
      image:
        "https://www.holidify.com/images/cmsuploads/compressed/shutterstock_1214370046_20191129145509.jpg",
      details: "Divar Island, a short ferry ride from Old Goa, offers a tranquil escape. It's characterized by its picturesque villages, well-preserved old Portuguese houses, lush paddy fields, and a serene, unhurried rural atmosphere, providing a glimpse into Goa's quieter side.",
    },
  ],
  Gujarat: [
    {
      name: "Hodka Village (Kutch)",
      description:
        "A traditional Meghwal artisan village in the Rann of Kutch, famous for its mud houses (Bhunga), intricate embroidery, and local music.",
      image:
        "https://static-blog.treebo.com/wp-content/uploads/2023/08/Hodka-Kutch-1024x675.jpg",
      details: "Hodka is an authentic Kutchhi village, home to the Meghwal community. It's famous for its unique circular mud houses (Bhunga) adorned with intricate mirror work and its vibrant embroidery traditions. Experience genuine rural Kutchi hospitality and culture, including folk music and dance.",
    },
    {
      name: "Vadla Village (near Mandvi)",
      description:
        "Known for its traditional shipbuilding (Dhows) and vibrant local culture, offering a unique rural maritime experience.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Mandvi_shipbuilding.jpg/1200px-Mandvi_shipbuilding.jpg",
      details: "Vadla, a small village near Mandvi, is renowned for its centuries-old tradition of building wooden ships (Dhows) by hand. Visitors can witness this incredible craftsmanship and experience the unique rural maritime culture of the region, providing a glimpse into a dying art.",
    },
    {
      name: "Poshina (Sabarkantha)",
      description:
        "A tribal village known for its traditional tribal markets, local crafts, and proximity to ancient temples, offering an insight into rural tribal life.",
      image:
        "https://www.gujarattourism.com/content/dam/gujrattourism/images/destinations/kutch/attractions/beaches/mandvi-beach/Mandvi%20Beach%20(13).jpg",
      details: "Poshina is a tribal village nestled in the Aravalli hills, known for its vibrant tribal markets, traditional handicrafts (especially terracotta horses), and ancient Jain temples. It offers a deep dive into the rural tribal life and artistic traditions of Gujarat.",
    },
  ],
  Maharashtra: [
    {
      name: "Purushwadi Village (Ahmednagar)",
      description:
        "Known for its annual Firefly Festival, this tribal village offers rural homestays, traditional meals, and a glimpse into agrarian life in the Western Ghats.",
      image:
        "https://www.namasteindiatrip.com/blog/wp-content/uploads/2014/06/Village-Tourism.jpg",
      details: "Purushwadi is a quaint tribal village in the Sahyadri mountains, famous for its magical Firefly Festival in early summer. It offers authentic rural homestays, traditional meals, and a chance to experience the simple, agrarian lifestyle of the local communities amidst nature's splendor.",
    },
    {
      name: "Ganpatipule Rural Coastal areas",
      description:
        "Beyond the famous temple, the serene coastal villages offer pristine beaches, traditional Konkani cuisine, and a relaxed rural seaside atmosphere.",
      image:
        "https://www.roaring-india.com/ri_media/Aerial-view-of-Ganpatipule-temple-and-beach.jpg",
      details: "While Ganpatipule is known for its Ganesh temple, the surrounding coastal villages offer a tranquil rural seaside escape. Enjoy pristine beaches, taste authentic Konkani seafood, and experience the laid-back charm of traditional fishing villages along the Konkan coast.",
    },
    {
      name: "Tadoba Andhari Tiger Reserve fringe villages",
      description:
        "Experience the rural life of communities living near the tiger reserve, understanding their symbiotic relationship with the forest and local culture.",
      image:
        "https://www.hlimg.com/images/things2do/738X538/img-2017050920275359cb909d7258e_1559557371-6800e.jpeg",
      details: "The villages on the fringes of Tadoba Andhari Tiger Reserve provide a unique insight into how local communities coexist with wildlife. Engage with the Gond and other tribal groups, learn about their conservation efforts, and experience their traditional rural life amidst the buffer zone of the tiger reserve.",
    },
  ],
  "Andhra Pradesh": [
    {
      name: "Araku Valley Tribal Villages",
      description:
        "Explore the indigenous tribal communities of Araku Valley, known for their coffee plantations, Dhimsa dance, and traditional rural lifestyles.",
      image:
        "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2022/05/02122151/Tribal-Dance.jpg",
      details: "Araku Valley is known for its picturesque landscapes and indigenous tribal communities, particularly the Adivasis. Explore their coffee plantations, witness the vibrant Dhimsa dance, and learn about their sustainable rural livelihoods and unique customs.",
    },
    {
      name: "Lepakshi (Anantapur)",
      description:
        "Known for its Veerabhadra Temple with stunning Vijayanagara architecture, the surrounding rural area offers a peaceful glimpse into local life.",
      image:
        "https://tse4.mm.bing.net/th?id=OIP.CWiLzpiJysG2xc6hFyAB1gEzDL&pid=Api&P=0&h=180",
      details: "Lepakshi is home to the Veerabhadra Temple, a masterpiece of Vijayanagara architecture famous for its frescoes and the giant Nandi statue. The surrounding rural landscape offers a tranquil setting, allowing visitors to observe traditional village life and agricultural practices.",
    },
    {
      name: "Kondapalli Village (Krishna District)",
      description:
        "Famous for its traditional wooden toys (Kondapalli toys), the village showcases local craftsmanship and a vibrant rural artisan community.",
      image:
        "https://www.inditales.com/wp-content/uploads/2022/11/Kondapalli-toys.jpg",
      details: "Kondapalli is a charming village renowned for its traditional wooden toys, which are handcrafted by local artisans using soft wood and natural dyes. Visiting the village provides a fascinating insight into this unique rural craft and allows for direct interaction with the toy makers.",
    },
  ],
  Karnataka: [
    {
      name: "Gokarna Rural Beach Villages",
      description:
        "Beyond the main town, smaller beaches like Half Moon and Paradise are accessible by trek or boat, offering a serene, rural beach experience.",
      image:
        "https://experienceindiaholidays.com/wp-content/uploads/2019/02/Gokarna-Header.jpg",
      details: "While Gokarna is a pilgrimage town, its surrounding smaller beaches like Om, Half Moon, and Paradise offer a more secluded and rural coastal experience. Accessible often by foot or local boats, these spots provide a tranquil escape with basic shacks and local fishing communities.",
    },
    {
      name: "Agumbe (Shimoga)",
      description:
        "Known as the 'Cherrapunji of the South', it's a rainforest village with stunning waterfalls, rich biodiversity, and a tranquil rural atmosphere.",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/e3/4a/5b/amthi-homestay.jpg?w=800&h=600&s=1",
      details: "Agumbe is a picturesque rainforest village in the Western Ghats, renowned for its high rainfall and rich biodiversity, particularly King Cobras. It offers stunning waterfalls, dense forests, and a serene rural environment, ideal for nature lovers and those seeking a quiet retreat.",
    },
    {
      name: "Hampi Rural Surroundings",
      description:
        "While Hampi is famous for its ruins, the surrounding rural landscape with its paddy fields, banana plantations, and local villages offers a unique charm.",
      image:
        "https://www.tripsavvy.com/thmb/1URit_FAJxh89jF5qVStfKBtL38=/3008x2000/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-665893810-8bda544690814540a5ff68090236ac19.jpg",
      details: "The rural areas around the UNESCO World Heritage site of Hampi offer a stark contrast to its ancient ruins. Explore lush green paddy fields, vast banana plantations, and local villages, experiencing the laid-back lifestyle and agricultural traditions that sustain the region.",
    },
  ],
  Kerala: [
    {
      name: "Kumbalangi Integrated Tourism Village (Ernakulam)",
      description:
        "India's first ecotourism village, offering insights into local fishing, crab farming, coir making, and a sustainable rural lifestyle.",
      image:
        "https://dynamic.tourtravelworld.com/hotspot-images/kumbalangi-integrated-tourism-village-5856.jpg",
      details: "Kumbalangi is a pioneering model of responsible tourism. Visitors can engage in activities like crab farming, coir making, fishing with Chinese fishing nets, and learning about traditional livelihoods, offering an authentic and sustainable rural Kerala experience.",
    },
    {
      name: "Thekkady Rural Periyar Villages",
      description:
        "The villages around Periyar National Park offer spice plantation tours, tribal village visits, and a glimpse into the agrarian life of the region.",
      image:
        "https://edge.ixigo.com/ixi-api/img/5212488565cd3b9a71000001_600x315.jpg",
      details: "The rural areas surrounding Periyar National Park are renowned for their spice plantations (cardamom, pepper, cinnamon). Visitors can take guided tours, interact with local farmers, and experience tribal village life, learning about their traditional practices and harmony with nature.",
    },
    {
      name: "Responsible Tourism Villages (Vaikom)",
      description:
        "Initiatives like those in Vaikom promote community-based tourism, allowing visitors to experience coir making, pottery, and traditional village life.",
      image:
        "https://i.ytimg.com/vi/N0nQ2v5JoXQ/maxresdefault.jpg",
      details: "Vaikom is a prime example of Kerala's responsible tourism initiatives. Through community-based programs, visitors can engage in activities like coir manufacturing, traditional pottery, mat weaving, and toddy tapping, offering an authentic insight into Kerala's rural craftsmanship and life.",
    },
  ],
  Lakshadweep: [
    {
      name: "Agatti Island Villages",
      description:
        "Experience the local island life in the villages of Agatti, known for their pristine beaches, coral reefs, and simple, tranquil rural existence.",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.H9jKiUVAp1EdhDJxQQoBgwHaEK&pid=Api&P=0&h=180",
      details: "Agatti Island is a breathtaking coral atoll with pristine beaches and vibrant coral reefs. Exploring its villages offers a glimpse into the simple, sustainable rural life of the islanders, their reliance on fishing and coconut cultivation, and their unique island culture.",
    },
    {
      name: "Kadmat Island local communities",
      description:
        "Interact with the local fishing communities on Kadmat Island, understanding their sustainable practices and enjoying the untouched rural island beauty.",
      image:
        "https://thejerker.com/wp-content/uploads/2024/04/74.png",
      details: "Kadmat Island is a long, narrow island known for its beautiful lagoon and diverse marine life. Engaging with the local communities, primarily fishermen, provides insight into their traditional fishing methods and sustainable practices, offering a serene and authentic island rural experience.",
    },
    {
      name: "Kalpeni Island villages",
      description:
        "Known for its coral debris and traditional Moplah houses, the villages on Kalpeni offer a glimpse into the unique rural lifestyle of the islands.",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/af/81/c0/kalapani-beach-resort.jpg?w=1200&h=-1&s=1",
      details: "Kalpeni Island is unique for its large storm bank of coral debris. Its villages feature traditional Moplah houses and offer a glimpse into the local way of life, including coir processing and fishing. The tranquil lagoons are perfect for water sports and enjoying the quiet rural island atmosphere.",
    },
  ],
  Puducherry: [
    {
      name: "Auroville Villages (outside the main township)",
      description:
        "While Auroville is an experimental township, its surrounding rural villages offer a unique blend of sustainable living, organic farming, and cultural diversity.",
      image:
        "https://travellinkslive.com/wp-content/uploads/2020/05/Auro-Mirra-Stay.jpg",
      details: "Beyond the core of Auroville, the surrounding rural villages showcase a unique blend of sustainable living, organic farming practices, and a diverse community. Visitors can explore local initiatives, farms, and interact with residents, experiencing a different facet of rural life.",
    },
    {
      name: "Rural fishing villages along the coast",
      description:
        "Explore the traditional fishing villages along the Puducherry coastline, observing local fishing techniques and experiencing the authentic coastal rural life.",
      image:
        "https://thumbs.dreamstime.com/z/view-traditional-japanese-fishing-village-along-pacific-coast-katsuura-chiba-japan-may-th-beautiful-blue-ocean-green-188923927.jpg",
        details: "Beyond the local fishing techniques, the surrounding rural villages showcase a unique blend of sustainable living, organic farming practices, and a diverse community. Visitors can explore local initiatives, farms, and interact with residents, experiencing a different facet of rural life.",
    },
    {
      name: "Villages around the backwaters",
      description:
        "Discover the serene rural life around Puducherry's backwaters, with opportunities for birdwatching, boating, and enjoying the tranquil natural surroundings.",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.jOoBU_JQAew8tsOSOy2W8AHaE6&pid=Api&P=0&h=180",
      details: "The backwater areas around Puducherry offer a serene rural escape. These villages are ideal for birdwatching, tranquil boat rides, and experiencing the calm pace of life dictated by the waterways and lush greenery, providing a peaceful contrast to the bustling city.",
    },
  ],
  "Tamil Nadu": [
    {
      name: "Chettinad Villages (Karaikudi region)",
      description:
        "Famous for their grand mansions (Havelis), unique cuisine, and traditional crafts, these villages offer a rich cultural and rural heritage experience.",
      image:
        "https://thumbs.dreamstime.com/z/karaikudi-chettinad-tamil-nadu-india-17603535.jpg",
      details: "The Chettinad region is famous for its wealthy Nattukottai Chettiar community and their opulent mansions, unique cuisine, and traditional crafts. Villages like Karaikudi and Kanadukathan offer homestays in these heritage homes, providing a rich cultural and culinary rural experience.",
    },
    {
      name: "Kodaikanal Rural Outskirts",
      description:
        "Beyond the popular hill station, the rural areas offer tribal villages, organic farms, and opportunities for nature walks amidst serene landscapes.",
      image:
        "https://framedventures.com/wp-content/uploads/2022/09/places-to-visit-in-kodaikanal.jpg",
      details: "While Kodaikanal is a popular hill station, its surrounding rural areas provide a peaceful escape. Explore indigenous tribal villages, visit organic farms cultivating spices and fruits, and enjoy nature walks through pristine forests, experiencing the serene rural life of the Palani Hills.",
    },
    {
      name: "Theni District Rural Areas",
      description:
        "Known for its vast farmlands (grapes, cotton), lush greenery, and traditional villages, offering an authentic agricultural rural experience.",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.RAZNdjg3aSDxi4BxFxhWaAHaE7&pid=Api&P=0&h=180",
      details: "Theni district is known as the 'Grape City' of Tamil Nadu, with vast vineyards and agricultural lands. The rural areas offer an authentic experience of farming life, local markets, and traditional village customs amidst lush green landscapes and scenic beauty.",
    },
  ],
  Telangana: [
    {
      name: "Pochampally Village (Yadadri Bhuvanagiri)",
      description:
        "A renowned weaving village famous for its Ikat sarees, where visitors can witness the intricate weaving process and experience rural Telangana craftsmanship.",
      image:
        "https://media.assettype.com/TNIE/import/2021/9/13/original/Pochampally.jpg?w=640&auto=format%2Ccompress&fit=max",
      details: "Pochampally is a celebrated weaving village recognized for its exquisite Ikat sarees, a traditional resist-dyeing technique. Visitors can witness the intricate weaving process, interact with the weavers, and purchase authentic handloom products, experiencing the rich rural textile heritage of Telangana.",
    },
    {
      name: "Kollapur Rural Mandal (Nagarkurnool)",
      description:
        "Nestled on the banks of the Krishna River, this rural area offers historical sites, traditional temples, and a glimpse into agrarian life.",
      image:
        "https://2.bp.blogspot.com/-RrYO6x8ofQI/WGFL5E2NBAI/AAAAAAAACeM/XHUTDsYt9SYfE-vMo-LieeJcFmuYxZW5QCLcB/s1600/jatprole_temples.jpg",
      details: "Kollapur region, situated on the banks of the Krishna River, is rich in history and natural beauty. Its rural landscape is dotted with ancient temples and provides a serene environment to observe traditional agrarian life, making it ideal for cultural and nature enthusiasts.",
    },
    {
      name: "Rural areas around Warangal Fort",
      description:
        "While the Warangal Fort is a heritage site, its surrounding rural villages offer insights into local culture, traditional architecture, and agricultural practices.",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.pUfuiFdNEAYPTOYD6R6DxAHaFE&pid=Api&P=0&h=180",
        details: "Inside the fort is the Swayambhu Temple of Lord Shiva. An Inscription near the temple dates back to 1163AD.",
    },
  ],
};


// New Component for Place Details
const PlaceDetailModal = ({ place, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="sticky top-0 bg-white z-10 p-4 border-b flex justify-between items-center">
          <h2 className="text-3xl font-bold text-green-800">
            {place.name} Details
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="p-6">
          <div className="h-64 mb-6 overflow-hidden rounded-lg">
            <img
              src={place.image}
              alt={place.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="font-bold text-2xl text-gray-800 mb-3">
            {place.name}
          </h3>
          <p className="text-gray-700 mb-4 text-lg">{place.description}</p>
          <p className="text-gray-600 mb-6 leading-relaxed">{place.details}</p>
          {/* Add more details here if needed */}
          {/* Example: <p><strong>Location:</strong> {place.location}</p> */}
          {/* Example: <p><strong>Best Time to Visit:</strong> {place.bestTime}</p> */}

          <div className="mt-8 text-center">
            <button
              onClick={onClose}
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium"
            >
              Back to Rural Tourism
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// RuralTourism Modal Component
const RuralTourism = ({ state, onClose }) => {
  const [selectedPlaceForDetails, setSelectedPlaceForDetails] = useState(null);
  const places = ruralTourismData[state];

  const handleExploreMoreClick = (place) => {
    setSelectedPlaceForDetails(place);
  };

  const handleClosePlaceDetails = () => {
    setSelectedPlaceForDetails(null);
  };

  if (!places || places.length === 0) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
          <div className="sticky top-0 bg-white z-10 p-4 border-b flex justify-between items-center">
            <h2 className="text-3xl font-bold text-green-800">
              Rural Tourism in {state}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Close"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="p-6 text-center text-gray-700">
            <p className="text-xl">
              No specific rural tourism data available for {state} yet. Please
              check back later!
            </p>
            <div className="mt-8">
              <button
                onClick={onClose}
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium"
              >
                Back to States
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="sticky top-0 bg-white z-10 p-4 border-b flex justify-between items-center">
          <h2 className="text-3xl font-bold text-green-800">
            Rural Tourism in {state}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {places.map((place, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-xl text-gray-800 mb-2">
                    {place.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{place.description}</p>
                  <button
                    onClick={() => handleExploreMoreClick(place)}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 w-full"
                  >
                    Explore More
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={onClose}
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium"
            >
              Back to States
            </button>
          </div>
        </div>
      </div>

      {selectedPlaceForDetails && (
        <PlaceDetailModal
          place={selectedPlaceForDetails}
          onClose={handleClosePlaceDetails}
        />
      )}
    </div>
  );
};

// Main Component (remains mostly the same, but now uses the updated RuralTourism)
const StateUt = () => {
  const [selectedState, setSelectedState] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleStateClick = (state) => {
    setSelectedState(state);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Still scrolls to top when state modal opens
  };

  const handleCloseModal = () => {
    setSelectedState(null);
  };

  const filteredRegions = regionData
    .map((region) => ({
      ...region,
      states: region.states.filter((state) =>
        state.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter((region) => region.states.length > 0);

  return (
    <div className="py-12 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Explore India by Regions
        </h1>

        <div className="mb-8 max-w-md mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search states..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg
              className="absolute right-3 top-3.5 h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        <div className="overflow-y-auto max-h-[600px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-2">
          {filteredRegions.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <div className="h-56 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.region}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <h2 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                  {item.region}
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  {item.states.map((state, idx) => (
                    <p
                      className="text-gray-700 hover:text-green-600 cursor-pointer transition-colors duration-200 py-1 px-3 hover:bg-green-50 rounded-md"
                      key={idx}
                      onClick={() => handleStateClick(state)}
                    >
                      {state}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedState && (
        <RuralTourism state={selectedState} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default StateUt;