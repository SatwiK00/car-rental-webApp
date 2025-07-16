import logo from "./logo.svg";
import logo1 from "./logo1.svg";
import gmail_logo from "./gmail_logo.svg";
import facebook_logo from "./facebook_logo.svg";
import instagram_logo from "./instagram_logo.svg";
import twitter_logo from "./twitter_logo.svg";
import menu_icon from "./menu_icon.svg";
import search_icon from "./search_icon.svg"
import close_icon from "./close_icon.svg"
import users_icon from "./users_icon.svg"
import car_icon from "./car_icon.svg"
import location_icon from "./location_icon.svg"
import fuel_icon from "./fuel_icon.svg"
import addIcon from "./addIcon.svg"
import carIcon from "./carIcon.svg"
import carIconColored from "./carIconColored.svg"
import dashboardIcon from "./dashboardIcon.svg"
import dashboardIconColored from "./dashboardIconColored.svg"
import addIconColored from "./addIconColored.svg"
import listIcon from "./listIcon.svg"
import listIconColored from "./listIconColored.svg"
import cautionIconColored from "./cautionIconColored.svg"
import arrow_icon from "./arrow_icon.svg"
import star_icon from "./star_icon.svg"
import check_icon from "./check_icon.svg"
import tick_icon from "./tick_icon.svg"
import delete_icon from "./delete_icon.svg"
import eye_icon from "./eye_icon.svg"
import eye_close_icon from "./eye_close_icon.svg"
import filter_icon from "./filter_icon.svg"
import edit_icon from "./edit_icon.svg"
import calendar_icon_colored from "./calendar_icon_colored.svg"
import location_icon_colored from "./location_icon_colored.svg"
import testimonial_image_1 from "./testimonial_image_1.png"
import testimonial_image_2 from "./testimonial_image_2.png"
import testimonial_image_3 from "./testimonial_image_3.png"
import main_car from "./main_car.png"
import banner_car_image from "./banner_car_image.png"
import user_profile from "./user_profile.png"
import upload_icon from "./upload_icon.svg"
import car_image1 from "./car_image1.png"
import car_image2 from "./car_image2.png"
import car_image3 from "./car_image3.png"
import car_image4 from "./car_image4.png"
import car_image5 from "./car_image5.png"
import car_image6 from "./car_image6.png"
import car_image7 from "./car_image7.png"
import car_image8 from "./car_image8.png"
import car_image9 from "./car_image9.png"
import car_image10 from "./car_image10.png"
import car_image11 from "./car_image11.png"
import car_image12 from "./car_image12.png"

export const cityList = ['New York', 'Los Angeles', 'Houston', 'Chicago']

export const assets = {
    logo,
    logo1,
    gmail_logo,
    facebook_logo,
    instagram_logo,
    twitter_logo,
    menu_icon,
    search_icon,
    close_icon,
    users_icon,
    edit_icon,
    car_icon,
    location_icon,
    fuel_icon,
    addIcon,
    carIcon,
    carIconColored,
    dashboardIcon,
    dashboardIconColored,
    addIconColored,
    listIcon,
    listIconColored,
    cautionIconColored,
    calendar_icon_colored,
    location_icon_colored,
    arrow_icon,
    star_icon,
    check_icon,
    tick_icon,
    delete_icon,
    eye_icon,
    eye_close_icon,
    filter_icon,
    testimonial_image_1,
    testimonial_image_2,
    testimonial_image_3,
    main_car,
    banner_car_image,
    car_image1,
    upload_icon,
    user_profile,
    car_image2,
    car_image3,
    car_image4,
    car_image5,
    car_image6,
    car_image7,
    car_image8,
    car_image9,
    car_image10,
    car_image11,
    car_image12
}

export const menuLinks = [
    { name: "Home", path: "/" },
    { name: "Cars", path: "/cars" },
    { name: "My Bookings", path: "/my-bookings" },
]

export const ownerMenuLinks = [
    { name: "Dashboard", path: "/owner", icon: dashboardIcon, coloredIcon: dashboardIconColored },
    { name: "Add car", path: "/owner/add-car", icon: addIcon, coloredIcon: addIconColored },
    { name: "Manage Cars", path: "/owner/manage-cars", icon: carIcon, coloredIcon: carIconColored },
    { name: "Manage Bookings", path: "/owner/manage-bookings", icon: listIcon, coloredIcon: listIconColored },
]

export const dummyCarData = [
    {
      _id: "67ff5bc069c03d4e45f30b77",
      owner: "67fe3467ed8a8fe17d0ba6e2",
      brand: "BMW",
      model: "X5",
      image: car_image1,
      year: 2006,
      category: "SUV",
      seating_capacity: 5,
      fuel_type: "Hybrid",
      transmission: "Semi-Automatic",
      pricePerDay: 300,
      location: "New York",
      description: "The BMW X5 is a mid-size luxury SUV with all-wheel drive and refined comfort. Known for blending performance with versatility.",
      isAvailable: true,
      createdAt: "2025-04-16T07:26:56.215Z",
    },
    {
      _id: "67ff6b758f1b3684286a2a65",
      owner: "67fe3467ed8a8fe17d0ba6e2",
      brand: "BMW",
      model: "M2",
      image: car_image2,
      year: 2021,
      category: "Coupe",
      seating_capacity: 4,
      fuel_type: "Petrol",
      transmission: "Manual",
      pricePerDay: 130,
      location: "Chicago",
      description: "The BMW M2 is a high-performance compact coupe that delivers thrilling driving dynamics and precise handling.",
      isAvailable: true,
      createdAt: "2025-04-16T08:33:57.993Z",
    },
    {
      _id: "67ff6b9f8f1b3684286a2a68",
      owner: "67fe3467ed8a8fe17d0ba6e2",
      brand: "Tesla",
      model: "Model 3",
      image: car_image3,
      year: 2023,
      category: "Sedan",
      seating_capacity: 5,
      fuel_type: "Electric",
      transmission: "Automatic",
      pricePerDay: 200,
      location: "Los Angeles",
      description: "The Tesla Model 3 is an all-electric sedan offering impressive range, cutting-edge technology, and smooth acceleration.",
      isAvailable: true,
      createdAt: "2025-04-16T08:34:39.592Z",
    },
    {
      _id: "68009c93a3f5fc6338ea7e34",
      owner: "67fe3467ed8a8fe17d0ba6e2",
      brand: "Chevrolet",
      model: "Camaro",
      image: car_image4,
      year: 2022,
      category: "Coupe",
      seating_capacity: 4,
      fuel_type: "Petrol",
      transmission: "Semi-Automatic",
      pricePerDay: 209,
      location: "Houston",
      description: "The Chevrolet Camaro is a muscle car with aggressive styling and strong performance, perfect for enthusiasts.",
      isAvailable: true,
      createdAt: "2025-04-17T06:15:47.318Z",
    },
    {
      _id: "6800aaa3a3f5fc6338ea7e35",
      owner: "67fe3467ed8a8fe17d0ba6e2",
      brand: "Audi",
      model: "Q7",
      image: car_image5,
      year: 2021,
      category: "SUV",
      seating_capacity: 7,
      fuel_type: "Diesel",
      transmission: "Automatic",
      pricePerDay: 280,
      location: "Miami",
      description: "The Audi Q7 is a luxury 7-seater SUV offering a comfortable ride, high-tech features, and a refined cabin.",
      isAvailable: true,
      createdAt: "2025-04-17T07:10:12.111Z",
    },
    {
      _id: "6800bbb3a3f5fc6338ea7e36",
      owner: "67fe3467ed8a8fe17d0ba6e2",
      brand: "Mercedes-Benz",
      model: "C-Class",
      image: car_image6,
      year: 2020,
      category: "Sedan",
      seating_capacity: 5,
      fuel_type: "Petrol",
      transmission: "Automatic",
      pricePerDay: 190,
      location: "San Francisco",
      description: "The Mercedes-Benz C-Class is a compact luxury sedan known for its premium interior and balanced performance.",
      isAvailable: true,
      createdAt: "2025-04-18T08:05:23.429Z",
    },
    {
      _id: "6800ccc3a3f5fc6338ea7e37",
      owner: "67fe3467ed8a8fe17d0ba6e2",
      brand: "Ford",
      model: "Mustang",
      image: car_image7,
      year: 2019,
      category: "Coupe",
      seating_capacity: 4,
      fuel_type: "Petrol",
      transmission: "Manual",
      pricePerDay: 175,
      location: "Las Vegas",
      description: "The Ford Mustang is a legendary American muscle car delivering power, speed, and head-turning design.",
      isAvailable: true,
      createdAt: "2025-04-19T06:55:34.882Z",
    },
    {
      _id: "6800ddd3a3f5fc6338ea7e38",
      owner: "67fe3467ed8a8fe17d0ba6e2",
      brand: "Toyota",
      model: "Corolla",
      image: car_image8,
      year: 2022,
      category: "Sedan",
      seating_capacity: 5,
      fuel_type: "Hybrid",
      transmission: "Automatic",
      pricePerDay: 95,
      location: "Phoenix",
      description: "The Toyota Corolla is a reliable compact sedan offering great fuel economy and modern safety features.",
      isAvailable: true,
      createdAt: "2025-04-19T07:20:15.774Z",
    },
    {
      _id: "6800eee3a3f5fc6338ea7e39",
      owner: "67fe3467ed8a8fe17d0ba6e2",
      brand: "Honda",
      model: "Civic",
      image: car_image9,
      year: 2023,
      category: "Sedan",
      seating_capacity: 5,
      fuel_type: "Petrol",
      transmission: "Automatic",
      pricePerDay: 105,
      location: "Dallas",
      description: "The Honda Civic blends performance with practicality, featuring a sleek design and advanced driver aids.",
      isAvailable: true,
      createdAt: "2025-04-20T09:45:10.111Z",
    },
    {
      _id: "6800fff3a3f5fc6338ea7e40",
      owner: "67fe3467ed8a8fe17d0ba6e2",
      brand: "Hyundai",
      model: "Tucson",
      image: car_image10,
      year: 2021,
      category: "SUV",
      seating_capacity: 5,
      fuel_type: "Diesel",
      transmission: "Automatic",
      pricePerDay: 120,
      location: "Seattle",
      description: "The Hyundai Tucson is a compact SUV with a spacious cabin, modern design, and great fuel economy.",
      isAvailable: true,
      createdAt: "2025-04-20T11:05:46.782Z",
    },
    {
      _id: "68010003a3f5fc6338ea7e41",
      owner: "67fe3467ed8a8fe17d0ba6e2",
      brand: "Lexus",
      model: "RX 500h",
      image: car_image11,
      year: 2023,
      category: "SUV",
      seating_capacity: 5,
      fuel_type: "Hybrid",
      transmission: "Automatic",
      pricePerDay: 250,
      location: "Atlanta",
      description: "The Lexus RX 500h is a luxury hybrid SUV with sleek styling, excellent fuel economy, and a premium ride experience.",
      isAvailable: true,
      createdAt: "2025-04-21T10:32:56.399Z",
    },
    {
      _id: "68010113a3f5fc6338ea7e42",
      owner: "67fe3467ed8a8fe17d0ba6e2",
      brand: "Nissan",
      model: "Altima",
      image: car_image12,
      year: 2022,
      category: "Sedan",
      seating_capacity: 5,
      fuel_type: "Petrol",
      transmission: "Automatic",
      pricePerDay: 110,
      location: "Philadelphia",
      description: "The Nissan Altima is a midsize sedan with a comfortable ride, efficient engines, and intelligent safety features.",
      isAvailable: true,
      createdAt: "2025-04-21T12:15:33.908Z",
    }
  ];
  

export const dummyMyBookingsData = [
    {
        "_id": "68482bcc98eb9722b7751f70",
        "car": dummyCarData[0],
        "user": "6847f7cab3d8daecdb517095",
        "owner": "6847f7cab3d8daecdb517095",
        "pickupDate": "2025-06-13T00:00:00.000Z",
        "returnDate": "2025-06-14T00:00:00.000Z",
        "status": "confirmed",
        "price": 440,
        "createdAt": "2025-06-10T12:57:48.244Z",
    },
    {
        "_id": "68482bb598eb9722b7751f60",
        "car": dummyCarData[1],
        "user": "6847f7cab3d8daecdb517095",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "pickupDate": "2025-06-12T00:00:00.000Z",
        "returnDate": "2025-06-12T00:00:00.000Z",
        "status": "pending",
        "price": 130,
        "createdAt": "2025-06-10T12:57:25.613Z",
    },
    {
        "_id": "684800fa0fb481c5cfd92e56",
        "car": dummyCarData[2],
        "user": "6847f7cab3d8daecdb517095",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "pickupDate": "2025-06-11T00:00:00.000Z",
        "returnDate": "2025-06-12T00:00:00.000Z",
        "status": "pending",
        "price": 600,
        "createdAt": "2025-06-10T09:55:06.379Z",
    },
    {
        "_id": "6847fe790fb481c5cfd92d94",
        "car": dummyCarData[3],
        "user": "6847f7cab3d8daecdb517095",
        "owner": "6847f7cab3d8daecdb517095",
        "pickupDate": "2025-06-11T00:00:00.000Z",
        "returnDate": "2025-06-12T00:00:00.000Z",
        "status": "confirmed",
        "price": 440,
        "createdAt": "2025-06-10T09:44:25.410Z",
    }
]

export const dummyDashboardData = {
    "totalCars": 4,
    "totalBookings": 2,
    "pendingBookings": 0,
    "completedBookings": 2,
    "recentBookings": [
        dummyMyBookingsData[0],
        dummyMyBookingsData[1]
    ],
    "monthlyRevenue": 840
}