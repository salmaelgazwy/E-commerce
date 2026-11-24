import Footer from "@/components/Footer/Footer";
import Swipperimaepage from "@/components/Home/Swipperimage";
import ShopByCategoryGrid from "./(pages)/categories/page";

import Products from "./(pages)/products/page";
import NewsletterAppBanner from "@/components/NewsletterAppBanner/NewsletterAppBanner";



export default function Home() {
 
  return (
    
    <>
    
 <ShopByCategoryGrid />
 <Products />
 <NewsletterAppBanner/>



<Footer />
    
    
  
     
    </>
  );
}
