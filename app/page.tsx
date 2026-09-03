import BestSellingItems from "@/components/layout/mainHeroSection/bestSelling";
import B2BHero from "@/components/layout/mainHeroSection/hero";
import HandpickedItems from "@/components/layout/mainHeroSection/productSection";
import OrganicBanner from "@/components/layout/mainHeroSection/banner";
import SpecialOffer from "@/components/layout/mainHeroSection/specialOffer";
import B2BMarketplace from "@/components/layout/b2bSection/b2bMarketPlace";

export default function Home() {
  return (
    <>
      <B2BHero />
      <HandpickedItems />
      <BestSellingItems />
      <B2BMarketplace />
      <OrganicBanner />
      <SpecialOffer />
    </>
  );
}
