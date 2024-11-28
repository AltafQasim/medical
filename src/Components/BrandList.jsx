import Brand from "./Brand";

const BrandList = () => {
  const brands = [
    "Staples",
    "Sprouts",
    "Grocery outlet",
    "Mobile stones",
    "Sports Basement",
    "Container Store",
    "Target",
    "Bevmo!",
  ];
  const BrandList = [
    {
      label: "Accord",
      image: "https://cdn.accord-healthcare.com/com/public/accord-2019-v2.svg",
    },
    {
      label: "Roche",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Hoffmann-La_Roche_logo.svg/250px-Hoffmann-La_Roche_logo.svg.png",
    },
    {
      label: "Bayer",
      image: "https://www.bayer.com/themes/custom/bayer_cpa/logo.svg",
    },
    {
      label: "Eli Lilly & Company",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Eli_Lilly_and_Company.svg/1200px-Eli_Lilly_and_Company.svg.png",
    },
    {
      label: "Takeda",
      image:
        "https://assets-dam.takeda.com/image/upload/v1/legacy-dotcom/globalassets/corporate/takeda_logo.png",
    },
    {
      label: "GSK",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/GSK_logo_2014.svg/1200px-GSK_logo_2014.svg.png",
    },
    {
      label: "MSD",
      image: "https://www.msd.de/wp-content/uploads/sites/33/2020/11/MSD.png",
    },
    {
      label: "Hikma",
      image:
        "https://www.hikma.com/media/ma3j3uhz/logocoral.svg?width=145&height=40&v=133426217345700000",
    },
  ];
  return (
    <div className="p-5 w-full">
      <div className="text-xl md:text-2xl lg:text-3xl  mb-5 font-semibold">
        Choose By Brand
      </div>
      <div className="flex flex-wrap gap-2 justify-evenly">
        {BrandList.map((x, i) => (
          <Brand key={i} name={x.label} image={x.image} />
        ))}
      </div>
    </div>
  );
};
export default BrandList;
