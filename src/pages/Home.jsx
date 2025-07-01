import Header from "../components/layout/Header";
import Hero from "../components/home/Hero";
import AboutPreview from "../components/home/AboutPreview";
import ProductionPreview from "../components/home/ProductionPreview";
import ProductCategories from "../components/home/ProductCategories";
import Certificates from "../components/home/Certificates";
import CTASection from "../components/home/CTASection";
import Footer from "../components/layout/Footer";
import MoveOnSection from "../components/home/MoveOnSection";
import ArskarMovie from "../components/home/ArskarMovie";
import NewBlogPosts from "../components/home/NewBlogPosts";
import Catalogues from "../components/home/Catalogues";
import FollowUs from "../components/home/FollowUs";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AboutPreview />
      <ProductionPreview />
      <ProductCategories />
      <Certificates />
      <MoveOnSection />
      <ArskarMovie />
      <NewBlogPosts />
      <Catalogues />
      <FollowUs />
      <CTASection />
      <Footer />
    </>
  );
}
