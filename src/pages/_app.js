import { Footer } from "@/Components/Shared/Footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "@/styles/globals.css";
import Categories from "@/Components/Home/Categories/Categories";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <Categories></Categories>
      <Footer />
    </div>
  );
}
