import CommercialSvg from "../components/Features/Svgs/CommercialSvg";
import HotelSvg from "../components/Features/Svgs/HotelSvg";
import KidsSvg from "../components/Features/Svgs/KidsSvg";
import MedicalSvg from "../components/Features/Svgs/MedicalSvg";
import ParkSvg from "../components/Features/Svgs/ParkSvg";
import SportSvg from "../components/Features/Svgs/SportSvg";
import slide_1x from "../assets/images/slide-1x.png";
import slide_2x from "../assets/images/slide-2x.png";
import about_1x from "../assets/images/about-1x.png";
import about_2x from "../assets/images/about-2x.png";


export const localData = {
  section_about: {
    header: "the place , we call home",
    text: "Makadi Heights is a town built over 3.4 million square meters planned for development, with an elevation reaching 78 meters above sea level guaranteeing magnificent panoramic sea views residential units. Envisioned as a comprehensive town.",
    left_button: "download brochure",
    right: "Show Master plan",
  },
  section_features: {
    header: "discover lifestyle , amentities",
    text: "Occupying a land area of 33,000 square meters, Makadi Heights’ stunning clubhouse",
  },
};
export const features = [
  {
    header: "Commercial Areas",
    text: "Downtown / Makadi Heights Mall",
    icon: <CommercialSvg />,
  },
  {
    header: "Kids Friendly Areas",
    text: "Kids Aqua Park / Kids Areas",
    icon: <KidsSvg />,
  },
  {
    header: "Hotels",
    text: "Far far away, behind the word mountains",
    icon: <HotelSvg />,
  },
  {
    header: "Sports Facilities",
    text: "Sports Courts, Fitness Center Water Sports Activities",
    icon: <SportSvg />,
  },
 
  {
    header: "Central Park",
    text: "Far far away, behind the word mountains",
    icon: <ParkSvg />,
  },
 
  {
    header: "Medical Facilities",
    text: "Far far away, behind the word mountains",
    icon: <MedicalSvg />,
  },
];
export const slides = [
  {
    image_1x:slide_1x,
    image_2x:slide_2x,
    alt:'summer vacation',
    style:"img-slider__img--1"
  },
  {
    image_1x:about_1x,
    image_2x:about_2x,
    alt:'together forever',
    style:"img-slider__img--2"
  },
  {
    image_1x:slide_1x,
    image_2x:slide_2x,
    alt:'relaxation',
    style:"img-slider__img--3"
  },
  {
    image_1x:about_1x,
    image_2x:about_2x,
    alt:'love story',
    style:"img-slider__img--4"
  },
  {
    image_1x:slide_1x,
    image_2x:slide_2x,
    alt:'chilling out',
    style:"img-slider__img--5"
  },
  {
    image_1x:about_1x,
    image_2x:about_2x,
    alt:'happy couples',
    style:"img-slider__img--6"
  },
]