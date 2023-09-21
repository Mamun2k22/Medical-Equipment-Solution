
import { Inter } from "next/font/google";
import Banner from "@/Components/Home/Banner/Banner";
import { AboutUs } from "@/Components/OtherComponents/AboutUs/AboutUs";
import ProductsSolutions from "@/Components/Home/ProductsSolutions/ProductsSolutions";
import WhatsNew from "@/Components/Home/WhatsNew/WhatsNew";
import Categories from "@/Components/Home/Categories/Categories";
 

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <Banner></Banner>
      <ProductsSolutions></ProductsSolutions>
      <WhatsNew></WhatsNew>
      <AboutUs></AboutUs>
      <Categories></Categories>
    </main>
  );
}
