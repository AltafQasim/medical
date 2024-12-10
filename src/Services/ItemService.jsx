const items = [
  {
    id: 2,
    title: "AirPods Max",
    desc: "A perfect balance of high-fidelity audio",
    price: 559,
    rating: 3,
    category: "Headphone",
  },
  {
    id: 5,
    title: "Macbook pro 13",
    desc: "256, 8 core GPU, 8 GB",
    price: 1099,
    rating: 4,
    category: "Laptop",
  },
  {
    id: 8,
    title: "Ipad Mini",
    desc: "Compact size and 5 colors available",
    price: 539,
    rating: 5,
    category: "Mobile",
  },
  {
    id: 9,
    title: "iPhone 13 Pro",
    desc: "Flagship smartphone with advanced features",
    price: 1099,
    rating: 5,
    category: "Mobile",
  },
  {
    id: 10,
    title: "Samsung Galaxy S21",
    desc: "High-performance smartphone with excellent camera",
    price: 999,
    rating: 4,
    category: "Mobile",
  },
  {
    id: 11,
    title: "Google Pixel 6",
    desc: "Premium Android smartphone with top-notch features",
    price: 899,
    rating: 4,
    category: "Mobile",
  },
  {
    id: 12,
    title: "OnePlus 9 Pro",
    desc: "High-performance smartphone with fast charging",
    price: 799,
    rating: 5,
    category: "Mobile",
  },
  {
    id: 13,
    title: "Xiaomi Mi 11",
    desc: "Affordable flagship smartphone with powerful processor",
    price: 699,
    rating: 4,
    category: "Mobile",
  },
  {
    id: 4,
    title: "Supreme Water Bottle",
    desc: "1 Litre water bottle",
    price: 19,
    rating: 2,
    category: "Fitness",
  },
  {
    id: 14,
    title: "iPhone 12 Mini",
    desc: "Compact iPhone with powerful features",
    price: 699,
    rating: 4,
    category: "Mobile",
  },
  {
    id: 15,
    title: "Samsung Galaxy Note 20",
    desc: "Premium smartphone with S Pen and large display",
    price: 799,
    rating: 4,
    category: "Mobile",
  },
  {
    id: 16,
    title: "Google Pixel 5",
    desc: "Mid-range smartphone with excellent camera",
    price: 699,
    rating: 4,
    category: "Mobile",
  },
  {
    id: 7,
    title: "Instax mini 9",
    desc: "Selfie mode and selfie mirror, Macro mode",
    price: 99,
    rating: 4,
    category: "Mobile",
  },
  {
    id: 17,
    title: "MacBook Pro 16",
    desc: "Powerful laptop with stunning Retina display",
    price: 2399,
    rating: 5,
    category: "Laptop",
  },
  {
    id: 19,
    title: "HP Spectre x360",
    desc: "Versatile 2-in-1 laptop with sleek design",
    price: 1599,
    rating: 5,
    category: "Laptop",
  },
  {
    id: 18,
    title: "Dell XPS 15",
    desc: "Premium laptop with InfinityEdge display",
    price: 1899,
    rating: 4,
    category: "Laptop",
  },
  {
    id: 3,
    title: "Flower Laptop Sleeve",
    desc: "15 in. x 10 in. -Flap top closure",
    price: 39,
    rating: 3,
    category: "Laptop",
  },
  {
    id: 1,
    title: "Laptop sleeve MacBook",
    desc: "Organic Cotton, fairtrade certified",
    price: 59,
    rating: 4,
    category: "Laptop",
  },
  {
    id: 20,
    title: "Lenovo ThinkPad X1 Carbon",
    desc: "Business laptop with durable build",
    price: 1499,
    rating: 4,
    category: "Laptop",
  },
  {
    id: 21,
    title: "Microsoft Surface Laptop 4",
    desc: "Elegant laptop with excellent battery life",
    price: 1299,
    rating: 4,
    category: "Laptop",
  },
  {
    id: 22,
    title: "Asus ZenBook 14",
    desc: "Compact laptop with NanoEdge display",
    price: 1099,
    rating: 4,
    category: "Laptop",
  },
  {
    id: 23,
    title: "Acer Swift 5",
    desc: "Ultralight laptop with powerful performance",
    price: 999,
    rating: 3,
    category: "Laptop",
  },
  {
    id: 24,
    title: "Razer Blade 15",
    desc: "Gaming laptop with high-refresh rate display",
    price: 2199,
    rating: 5,
    category: "Laptop",
  },
  {
    id: 25,
    title: "The Great Gatsby",
    desc: "A classic novel of the Jazz Age, portraying the decadence of the 1920s.",
    price: 15,
    rating: 5,
    category: "Books",
  },
  {
    id: 26,
    title: "1984",
    desc: "George Orwell's dystopian novel about a totalitarian regime.",
    price: 12,
    rating: 4,
    category: "Books",
  },
  {
    id: 27,
    title: "To Kill a Mockingbird",
    desc: "A profound novel about racial injustice in the Deep South.",
    price: 10,
    rating: 5,
    category: "Books",
  },
  {
    id: 28,
    title: "Pride and Prejudice",
    desc: "Jane Austen's romantic novel that explores manners and matrimonial machinations.",
    price: 9,
    rating: 4,
    category: "Books",
  },
  {
    id: 29,
    title: "The Catcher in the Rye",
    desc: "A novel about teenage rebellion and angst.",
    price: 11,
    rating: 3,
    category: "Books",
  },
  {
    id: 30,
    title: "The Hobbit",
    desc: "J.R.R. Tolkien's fantasy novel about the adventures of Bilbo Baggins.",
    price: 14,
    rating: 5,
    category: "Books",
  },
  {
    id: 31,
    title: "Moby-Dick",
    desc: "Herman Melville's epic tale of obsession and the sea.",
    price: 18,
    rating: 4,
    category: "Books",
  },
  {
    id: 32,
    title: "War and Peace",
    desc: "Leo Tolstoy's grand narrative of Russian society during the Napoleonic Wars.",
    price: 20,
    rating: 4,
    category: "Books",
  },
  {
    id: 33,
    title: "Sony WH-1000XM4",
    desc: "Industry leading noise cancellation with high resolution audio.",
    price: 349,
    rating: 5,
    category: "Headphone",
  },
  {
    id: 34,
    title: "Bose QuietComfort 35 II",
    desc: "Wireless Bluetooth headphones with world-class noise cancellation.",
    price: 299,
    rating: 4,
    category: "Headphone",
  },
  {
    id: 35,
    title: "Sennheiser HD 450BT",
    desc: "Wireless over-ear headphones with active noise cancellation.",
    price: 199,
    rating: 4,
    category: "Headphone",
  },
  {
    id: 36,
    title: "Apple AirPods Pro",
    desc: "Active noise cancellation for immersive sound.",
    price: 249,
    rating: 5,
    category: "Headphone",
  },
  {
    id: 37,
    title: "Beats Solo Pro",
    desc: "Wireless noise cancelling on-ear headphones.",
    price: 299,
    rating: 4,
    category: "Headphone",
  },
  {
    id: 38,
    title: "Jabra Elite 85h",
    desc: "Smart active noise cancelling headphones.",
    price: 249,
    rating: 4,
    category: "Headphone",
  },
  {
    id: 39,
    title: "Bowers & Wilkins PX7",
    desc: "Over-ear noise cancelling wireless headphones.",
    price: 399,
    rating: 5,
    category: "Headphone",
  },
  {
    id: 6,
    title: "HomePod mini",
    desc: "5 Colors Available",
    price: 239,
    rating: 5,
    category: "Headphone",
  },
  {
    id: 40,
    title: "AKG N700NC M2",
    desc: "Wireless over-ear noise cancelling headphones.",
    price: 299,
    rating: 4,
    category: "Headphone",
  },
];

const products = [
  {
    id: 1,
    title: "Accord - Codeine Phosphate",
    brand: "Accord",
    images: ["/codeine natural 1.jpg"],
    price: 92,
    rating: 1,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum sit reprehenderit, repellat doloribus dignissimos officiis soluta iusto nemo.",
    category: "Homeopathy",
  },
  {
    id: 2,
    title: "Accord - DHC 30mg",
    brand: "Accord",
    images: [
      "/Dihydrocodeine 30mg natural 1.jpg",
      "/Dihydrocodeine 30mg natural 2.jpg",
    ],
    price: 70,
    rating: 5,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum sit reprehenderit, repellat doloribus dignissimos officiis soluta iusto nemo.",
    category: "Homeopathy",
  },
  {
    id: 3,
    title: "Accord - Pregabalin 200mg",
    brand: "Accord ",
    images: [
      "/Pregabalin Accord natural 1.jpg",
      "/Pregabalin Accord natural 2.jpg",
    ],
    price: 55,
    rating: 1,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum sit reprehenderit, repellat doloribus dignissimos officiis soluta iusto nemo.",
    category: "Homeopathy",
  },
  {
    id: 4,
    title: "Accord - Tramadol 50mg",
    brand: "Accord ",
    images: ["/tramadol 50mg 1.jpg", "/tramadol 50mg 2.jpg"],
    price: 74,
    rating: 2,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum sit reprehenderit, repellat doloribus dignissimos officiis soluta iusto nemo.",
    category: "Homeopathy",
  },
  {
    id: 5,
    title: "Aran - Xanax 1mg",
    brand: "Aran ",
    images: ["/alprazolam natural.jpg"],
    price: 63,
    rating: 2,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum sit reprehenderit, repellat doloribus dignissimos officiis soluta iusto nemo.",
    category: "Homeopathy",
  },
  {
    id: 6,
    title: "Belbian - Zolpidem Tartrate",
    brand: "Belbian",
    images: ["/belbien zolpidem10mg.jpg", "/belbien-zolpidem-tablet.jpg"],
    price: 27,
    rating: 1,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum sit reprehenderit, repellat doloribus dignissimos officiis soluta iusto nemo.",
    category: "Homeopathy",
  },
  {
    id: 7,
    title: "Bensedin - Diazepam 10mg",
    brand: "Bensedin ",
    images: ["/bensedin 1.jpg", "/bensedin 2.jpg"],
    price: 29,
    rating: 3,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum sit reprehenderit, repellat doloribus dignissimos officiis soluta iusto nemo.",
    category: "Homeopathy",
  },
  {
    id: 8,
    title: "Bristol - Cocodomol",
    brand: "Bristol ",
    images: ["/cocodamol 1.jpg", "/cocodamol 2.jpg"],
    price: 23,
    rating: 4,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum sit reprehenderit, repellat doloribus dignissimos officiis soluta iusto nemo.",
    category: "Homeopathy",
  },
  {
    id: 9,
    title: "Bristol - Dihydrocodeine",
    brand: "Bristol ",
    images: ["/dihydrocodeine 1.jpg", "/dihydrocodeine 2.jpg"],
    price: 83,
    rating: 5,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum sit reprehenderit, repellat doloribus dignissimos officiis soluta iusto nemo.",
    category: "Homeopathy",
  },
  {
    id: 10,
    title: "Clonazepam 2mg - Aran",
    brand: "Clonazepam 2mg ",
    images: ["/rnaze-2 natural 2.jpg", "/rnaze-2 natural.jpg"],
    price: 87,
    rating: 3,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum sit reprehenderit, repellat doloribus dignissimos officiis soluta iusto nemo.",
    category: "Homeopathy",
  },
  {
    id: 11,
    title: "Codeine Phosphate 30mg Accord",
    brand: "Codeine Phosphate 30mg Accord",
    images: ["/codeine natural 1.jpg"],
    price: 39,
    rating: 2,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum sit reprehenderit, repellat doloribus dignissimos officiis soluta iusto nemo.",
    category: "Homeopathy",
  },
  {
    id: 12,
    title: "Codeine Phosphate 30mg Wockhardt",
    brand: "Codeine Phosphate 30mg Wockhardt",
    images: ["/codeine natural 2.jpg", "/codeine natural 3.jpg"],
    price: 97,
    rating: 5,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum sit reprehenderit, repellat doloribus dignissimos officiis soluta iusto nemo.",
    category: "Ayurvedic",
  },
  {
    id: 13,
    title: "Dr. Reddys - Pregabalin 300mg",
    brand: "Dr. Reddys ",
    images: ["/pregabalin natural 2.jpg", "/pregabalin natural.jpg"],
    price: 43,
    rating: 3,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum sit reprehenderit, repellat doloribus dignissimos officiis soluta iusto nemo.",
    category: "Ayurvedic",
  },
  {
    id: 14,
    title: "Elikem - Nitrazepam 10mg",
    brand: "Elikem ",
    images: [
      "/Nitrazepam 10mg natural 1.jpg",
      "/Nitrazepam 10mg natural 2.jpg",
    ],
    price: 15,
    rating: 1,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum sit reprehenderit, repellat doloribus dignissimos officiis soluta iusto nemo.",
    category: "Ayurvedic",
  },
  {
    id: 15,
    title: "Elikem Diazepam 10mg",
    brand: "Elikem Diazepam 10mg",
    images: ["/elikem natural.jpg"],
    price: 78,
    rating: 1,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum sit reprehenderit, repellat doloribus dignissimos officiis soluta iusto nemo.",
    category: "Ayurvedic",
  },
  {
    id: 16,
    title: "Galenika - Rivotril 2mg",
    brand: "Galenika ",
    images: ["/rivotril 1.jpg", "/rivotril 2.jpg"],
    price: 67,
    rating: 1,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum sit reprehenderit, repellat doloribus dignissimos officiis soluta iusto nemo.",
    category: "Ayurvedic",
  },
  {
    id: 17,
    title: "Galenika - Xanax 1mg",
    brand: "Galenika ",
    images: ["/ksalol 1.jpg", "/ksalol 2.jpg"],
    price: 85,
    rating: 1,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum sit reprehenderit, repellat doloribus dignissimos officiis soluta iusto nemo.",
    category: "Ayurvedic",
  },
  {
    id: 18,
    title: "Genethics - Lorazepam 1mg",
    brand: "Genethics ",
    images: ["/lorazepam natural 3.jpg", "/lorazepam natural 4.jpg"],
    price: 65,
    rating: 5,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum sit reprehenderit, repellat doloribus dignissimos officiis soluta iusto nemo.",
    category: "Ayurvedic",
  },
  {
    id: 19,
    title: "Genus - Lorazepam 1mg",
    brand: "Genus ",
    images: ["/Lorazepam Genus.jpg", "/Lorazepam.jpg"],
    price: 41,
    rating: 1,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum sit reprehenderit, repellat doloribus dignissimos officiis soluta iusto nemo.",
    category: "Ayurvedic",
  },
  {
    id: 20,
    title: "HAB - Carisoprodol 500mg",
    brand: "HAB ",
    images: ["/painosoma 1.jpg", "/painosoma 2.jpg"],
    price: 58,
    rating: 3,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum sit reprehenderit, repellat doloribus dignissimos officiis soluta iusto nemo.",
    category: "Ayurvedic",
  },
  {
    id: 21,
    title: "HAB - Modafanil 200mg",
    brand: "HAB ",
    images: ["/modafinil natural.jpg"],
    price: 48,
    rating: 2,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum sit reprehenderit, repellat doloribus dignissimos officiis soluta iusto nemo.",
    category: "Vitamins And Supplements",
  },
  {
    id: 22,
    title: "Hab - Nervisign 300mg",
    brand: "Hab ",
    images: ["/nervisign 300 natural 1.jpg"],
    price: 90,
    rating: 2,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum sit reprehenderit, repellat doloribus dignissimos officiis soluta iusto nemo.",
    category: "Vitamins And Supplements",
  },
  {
    id: 23,
    title: "HAB - Zoiclone White 7.5mg",
    brand: "HAB ",
    images: ["/zopiclone 3.jpg", "/zopiclone 4.jpg"],
    price: 96,
    rating: 5,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum sit reprehenderit, repellat doloribus dignissimos officiis soluta iusto nemo.",
    category: "Vitamins And Supplements",
  },
  {
    id: 24,
    title: "HAB - Zopiclone Blue 7.5mg",
    brand: "HAB ",
    images: ["/zopiclone 1.jpg", "/zopiclone 2.jpg"],
    price: 65,
    rating: 1,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum sit reprehenderit, repellat doloribus dignissimos officiis soluta iusto nemo.",
    category: "Vitamins And Supplements",
  },
  {
    id: 25,
    title: "HAB - Zopisign 10mg",
    brand: "HAB ",
    images: ["/zopisign 1.jpg", "/zopisign 2.jpg"],
    price: 66,
    rating: 2,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum sit reprehenderit, repellat doloribus dignissimos officiis soluta iusto nemo.",
    category: "Vitamins And Supplements",
  },
  {
    id: 27,
    title: "Lunata - Zolpidem tartrate 10mg",
    brand: "Lunata ",
    images: ["/lunata 1.jpg", "/lunata 2.jpg"],
    price: 53,
    rating: 5,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum sit reprehenderit, repellat doloribus dignissimos officiis soluta iusto nemo.",
    category: "Vitamins And Supplements",
  },
  {
    id: 28,
    title: "Modafinil Metamed 200mg",
    brand: "Modafinil Metamed 200mg",
    images: ["/modamood natural 1.jpg", "/modamood natural 2.jpg"],
    price: 33,
    rating: 3,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum sit reprehenderit, repellat doloribus dignissimos officiis soluta iusto nemo.",
    category: "Vitamins And Supplements",
  },
  {
    id: 29,
    title: "Noumed - Tramadol 50mg",
    brand: "Noumed ",
    images: ["/tramadol 1 1.jpg", "/tramadol 1 2.jpg"],
    price: 54,
    rating: 2,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum sit reprehenderit, repellat doloribus dignissimos officiis soluta iusto nemo.",
    category: "Vitamins And Supplements",
  },
  {
    id: 30,
    title: "Pfizer Lorazepam 2mg",
    brand: "Pfizer Lorazepam 2mg",
    images: ["/ativan natural.jpg"],
    price: 94,
    rating: 2,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum sit reprehenderit, repellat doloribus dignissimos officiis soluta iusto nemo.",
    category: "Vitamins And Supplements",
  },
  {
    id: 31,
    title: "Pharmvit - Lorazepam 1mg",
    brand: "Pharmvit ",
    images: ["/lorazepam natural 5.jpg", "/lorazepam natural.jpg"],
    price: 28,
    rating: 1,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum sit reprehenderit, repellat doloribus dignissimos officiis soluta iusto nemo.",
    category: "Vitamins And Supplements",
  },
  {
    id: 32,
    title: "Pregabalin Nervisign 300 HAB",
    brand: "Pregabalin Nervisign 300 HAB",
    images: ["/nervisign 300 natural 1.jpg"],
    price: 51,
    rating: 2,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum sit reprehenderit, repellat doloribus dignissimos officiis soluta iusto nemo.",
    category: "Vitamins And Supplements",
  },
  {
    id: 33,
    title: "Pregabalin Pregagesic 300 Universal",
    brand: "Pregabalin Pregagesic 300 Universal",
    images: ["/pregagesic 300 natural 1.jpg"],
    price: 100,
    rating: 4,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum sit reprehenderit, repellat doloribus dignissimos officiis soluta iusto nemo.",
    category: "Sexual Health Supplements",
  },
  {
    id: 34,
    title: "RelonChem - Mirtazapine 45mg",
    brand: "RelonChem ",
    images: ["/mirtazapine 45 natural 1.jpg", "/mirtazapine 45 natural 2.jpg"],
    price: 28,
    rating: 3,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum sit reprehenderit, repellat doloribus dignissimos officiis soluta iusto nemo.",
    category: "Sexual Health Supplements",
  },
  {
    id: 35,
    title: "RelonChem - Mirtazapine",
    brand: "RelonChem ",
    images: ["/mirtazapine 45 natural 1.jpg", "/mirtazapine 45 natural 2.jpg"],
    price: 76,
    rating: 4,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum sit reprehenderit, repellat doloribus dignissimos officiis soluta iusto nemo.",
    category: "Sexual Health Supplements",
  },
  {
    id: 36,
    title: "RelonChem - Pregabalin 300mg",
    brand: "RelonChem ",
    images: [
      "/Pregabalin Relonchem natural 1.jpg",
      "/Pregabalin Relonchem natural 2.jpg",
    ],
    price: 23,
    rating: 3,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum sit reprehenderit, repellat doloribus dignissimos officiis soluta iusto nemo.",
    category: "Sexual Health Supplements",
  },
  {
    id: 37,
    title: "Relonchem - Tramadol 50mg",
    brand: "Relonchem ",
    images: ["/tramadol 1.jpg", "/tramadol 2.jpg"],
    price: 91,
    rating: 2,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum sit reprehenderit, repellat doloribus dignissimos officiis soluta iusto nemo.",
    category: "Sexual Health Supplements",
  },
  {
    id: 38,
    title: "Signature - Pregabalin Nervigesic 300mg",
    brand: "Signature ",
    images: ["/nervigesic 1.jpg", "/Nervigesic white bg.jpg"],
    price: 14,
    rating: 4,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum sit reprehenderit, repellat doloribus dignissimos officiis soluta iusto nemo.",
    category: "Sexual Health Supplements",
  },
  {
    id: 39,
    title: "Teva - Codeien Phosphate 30mg",
    brand: "Teva ",
    images: ["/codeine phosphate 1.jpg", "/codeine phosphate 2.jpg"],
    price: 70,
    rating: 2,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum sit reprehenderit, repellat doloribus dignissimos officiis soluta iusto nemo.",
    category: "Sexual Health Supplements",
  },
  {
    id: 40,
    title: "Teva - Pregabalin 300mg",
    brand: "Teva ",
    images: ["/pregabalin teva 2 natural.jpg", "/pregabalin teva natural.jpg"],
    price: 83,
    rating: 4,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum sit reprehenderit, repellat doloribus dignissimos officiis soluta iusto nemo.",
    category: "Sexual Health Supplements",
  },
  {
    id: 41,
    title: "Tillomed - Pregabalin 300mg",
    brand: "Tillomed ",
    images: ["/pregabalin 1.jpg", "/pregabalin 2.jpg"],
    price: 78,
    rating: 5,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum sit reprehenderit, repellat doloribus dignissimos officiis soluta iusto nemo.",
    category: "Sexual Health Supplements",
  },
  {
    id: 42,
    title: "Tollomed - Tramadol 50mg",
    brand: "Tollomed ",
    images: ["/tramadol 50 natural 1.jpg", "/tramadol 50 natural 2.jpg"],
    price: 73,
    rating: 1,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum sit reprehenderit, repellat doloribus dignissimos officiis soluta iusto nemo.",
    category: "Diabetes Care Ayurveda",
  },
  {
    id: 43,
    title: "Trakem - Tramadol 100mg",
    brand: "Trakem ",
    images: ["/Trakem 100 - 1.jpg", "/Trakem 100 - 2.jpg"],
    price: 13,
    rating: 1,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum sit reprehenderit, repellat doloribus dignissimos officiis soluta iusto nemo.",
    category: "Diabetes Care Ayurveda",
  },
  {
    id: 44,
    title: "Tramadaol 50mg Tillomed",
    brand: "Tramadaol 50mg Tillomed",
    images: ["/tramadol 50 natural 1.jpg", "/tramadol 50 natural 2.jpg"],
    price: 94,
    rating: 5,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum sit reprehenderit, repellat doloribus dignissimos officiis soluta iusto nemo.",
    category: "Diabetes Care Ayurveda",
  },
  {
    id: 45,
    title: "Universal - Pregabalin Pregagesic 300mg",
    brand: "Universal ",
    images: ["/pregagesic 300 natural 1.jpg"],
    price: 10,
    rating: 5,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum sit reprehenderit, repellat doloribus dignissimos officiis soluta iusto nemo.",
    category: "Diabetes Care Ayurveda",
  },
  {
    id: 46,
    title: "Wockhardt - Codeine Phosphate",
    brand: "Wockhardt ",
    images: ["/codeine natural 2.jpg", "/codeine natural 3.jpg"],
    price: 75,
    rating: 2,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum sit reprehenderit, repellat doloribus dignissimos officiis soluta iusto nemo.",
    category: "Diabetes Care Ayurveda",
  },
  {
    id: 47,
    title: "Zentiva - Cocodomol",
    brand: "Zentiva ",
    images: ["/zentiva 1.jpg", "/zentiva 2.jpg"],
    price: 18,
    rating: 4,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum sit reprehenderit, repellat doloribus dignissimos officiis soluta iusto nemo.",
    category: "Diabetes Care Ayurveda",
  },
  {
    id: 48,
    title: "Zentiva - Pregabalin 300mg",
    brand: "Zentiva ",
    images: ["/pregabalin zentiva 1-min.jpg", "/pregabalin zentiva 2.jpg"],
    price: 99,
    rating: 2,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum sit reprehenderit, repellat doloribus dignissimos officiis soluta iusto nemo.",
    category: "Diabetes Care Ayurveda",
  },
  {
    id: 49,
    title: "Zolpidem Neuro Vision 10mg",
    brand: "Zolpidem Neuro Vision 10mg",
    images: [
      "/zoltrate 10 natural 1.jpg",
      "/zoltrate 10 natural 2.jpg",
      "/zoltrate 10 natural 3.jpg",
    ],
    price: 15,
    rating: 1,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum sit reprehenderit, repellat doloribus dignissimos officiis soluta iusto nemo.",
    category: "Sexual Health Supplements",
  },
  {
    id: 50,
    title: "Zopidem Psycogen 10mg",
    brand: "Zopidem Psycogen 10mg",
    images: [
      "/olpid-10 natural 1.jpg",
      "/olpid-10 natural 2.jpg",
      "/olpid-10 natural 3.jpg",
      "/olpid-10 natural 4.jpg",
    ],
    price: 16,
    rating: 2,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum sit reprehenderit, repellat doloribus dignissimos officiis soluta iusto nemo.",
    category: "Sexual Health Supplements",
  },
];

const getItem = async (id) => {
  return products.find((item) => item.id === parseInt(id));
};

const getTrendingItems = async () => {
  const categories = [...new Set(products.map((item) => item.category))];
  const trendingItems = [];
  categories.forEach((category) => {
    const categoryItems = products.filter((item) => item.category === category);
    const sortedItems = categoryItems.sort((a, b) => b.rating - a.rating);
    const topTwoItems = sortedItems.slice(0, 2);
    trendingItems.push(...topTwoItems);
  });

  return trendingItems;
};

const getAllItems = async () => {
  return products;
};
const searchItems = async (search) => {
  return (
    products.filter((item) => {
      return (
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase()) ||
        item.desc.toLowerCase().includes(search.toLowerCase())
      );
    }) || []
  );
};

const getCategories = () => {
  const ans = [];
  products.forEach((item) => {
    if (!ans.includes(item.category)) {
      ans.push(item.category);
    }
  });
  return ans;
};

const getCategoryWiseItems = async (category) => {
  const ans =
    products.filter(
      (item) => item.category.toLowerCase() === category.toLowerCase()
    ) || [];
  return ans;
};

export {
  getItem,
  getTrendingItems,
  getAllItems,
  searchItems,
  getCategories,
  getCategoryWiseItems,
};