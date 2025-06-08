import HomeAboutRoot from "../../Components/About/HomeAboutRoot";
import HomeMeetTheTeam from "../../Components/About/HomeMeetTeam";
import Brands from "../../Components/Brands/Brands";
import Choose from "../../Components/Choose/Choose";
import Carousel1 from "../../Components/Hero/Carousel1";
import HomeCards from "../../Components/Hero/HomeCards";
import NewsCard from "../../Components/News/NewsCard";
import HomeServices from "../../Components/Services/HomeServices";
import Testimonial from "../../Components/Testimonial/Testimonial";
import Navbar from "../../Shared/Navbar";


const Home = () => {
  return (
    <div>
      <Carousel1></Carousel1>
      <HomeCards></HomeCards>
      <HomeAboutRoot></HomeAboutRoot>
      <HomeServices></HomeServices>
      <HomeMeetTheTeam></HomeMeetTheTeam>
      <Choose></Choose>
 <Testimonial></Testimonial> 
 <NewsCard></NewsCard>
 <Brands></Brands>
 {/* <Footer></Footer> */}
    </div>
  );
};

export default Home;
