import { useEffect } from "react";
import BrandList from "./BrandList";
import Carousel from "./Carousel";
import Category from "./Category";
import Deals from "./Deals";
import DebitCard from "./DebitCard";
import DiscountList from "./DiscountList";
import FooterLinks from "./FooterLinks";
import HelpSection from "./HelpSection";
import StoreList from "./StoreList";
import TodayDeals from "./TodayDeals";

const Home = () => {
  const banners = [
    `../../medical/Images/banners/banner1.jpg`,
    `../../medical/Images/banners/banner2.jpg`,
    `../../medical/Images/banners/banner3.jpg`,
    `../../medical/Images/banners/banner4.jpg`,
    `../../medical/Images/banners/banner5.jpg`,
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Carousel images={banners} />
      <Category />
      <Deals />
      <BrandList />
      <DiscountList />
      <TodayDeals />
      <DebitCard />
      <StoreList />
      <HelpSection />
      <hr className="mx-8 my-5 xs-mx:mx-3 border-gray-400" />
      <FooterLinks />
    </>
  );
};
export default Home;
