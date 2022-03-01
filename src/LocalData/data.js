import CommercialSvg from "../components/Features/Svgs/CommercialSvg";
import HotelSvg from "../components/Features/Svgs/HotelSvg";
import KidsSvg from "../components/Features/Svgs/KidsSvg";
import MedicalSvg from "../components/Features/Svgs/MedicalSvg";
import ParkSvg from "../components/Features/Svgs/ParkSvg";
import SportSvg from "../components/Features/Svgs/SportSvg";

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
    text: "Downtown Makadi Heights Mall",
    icon: <CommercialSvg />,
  },
  {
    header: "Kids Friendly Areas",
    text: "Kids Aqua Park Kids Areas",
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
