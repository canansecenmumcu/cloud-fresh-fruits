import Hero from "@/components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Menus from "@/components/Menus/Menus";
import Banner from "@/components/Banners/Banner";
import Banner2 from "@/components/Banners/Banner2";
import Banner3 from "@/components/Banners/Banner3";
import Footer from "@/components/Footer/Footer";


export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <Menus />
        <Banner />
        <Banner2 />
        <Banner3 />
        <Footer />
      </main>
    </>
  );
}

