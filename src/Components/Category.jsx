import { Link } from "react-router-dom";
import Card from "./Card";

const Category = () => {
  const items = [
    "Books",
    "Laptop",
    "Mobile",
    "Headphone",
    "Furniture",
    "Handbag",
  ];
  const categories = [
    {
      href: "https://www.netmeds.com/non-prescriptions/ayush/homeopathy",
      src: "https://www.netmeds.com/images/category/v1/491/thumb/homeopathy_1.png",
      alt: "Homeopathy",
    },
    {
      href: "https://www.netmeds.com/non-prescriptions/ayush/ayurvedic",
      src: "https://www.netmeds.com/images/category/prod/thumb/ayurvedic.png",
      alt: "Ayurvedic",
    },
    {
      href: "https://www.netmeds.com/non-prescriptions/fitness/vitamins-and-supplements",
      src: "https://www.netmeds.com/images/category/v1/3222/thumb/vitamins_and_supplements_4.png",
      alt: "Vitamins And Supplements",
    },
    {
      href: "https://www.netmeds.com/non-prescriptions/sexual-wellness/sexual-health-supplements",
      src: "https://www.netmeds.com/images/category/prod/thumb/sexual_health_supplements.png",
      alt: "Sexual Health Supplements",
    },
    {
      href: "https://www.netmeds.com/non-prescriptions/diabetes-support/diabetes-care-ayurveda",
      src: "https://www.netmeds.com/images/category/prod/thumb/diabetes_care_ayurveda.png",
      alt: "Diabetes Care Ayurveda",
    },
  ];
  return (
    <div className="mt-10 mx-1">
      <span className=" sm-mx:pl-2 text-xl md:text-2xl lg:text-3xl  ml-2 font-semibold">
        Top Categories
      </span>
      <div className="flex gap-2 md:gap-5 lg-mx:flex-wrap justify-evenly my-5">
        {categories.map((category, index) => (
          <Link
            to={`/search/${category.alt}`}
            className="drug_details"
            key={index}
          >
            <span className="custom_img">
              <img
                className="xl:w-auto w-32"
                src={category.src}
                alt={category.alt}
              />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Category;
