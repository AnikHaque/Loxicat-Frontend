import HomeAboutMain from "./HomeAboutMain";
import './HomeAbout.css'
const HomeAbout = () => {
  return (
    <div className="">
      <div className="container mx-auto p-5 px-[5%] pt-28">
        <div className="grid grid-cols-1  lg:grid-cols-2">
          <div className="px-[5%] ">
            <img src="https://i.postimg.cc/d1fT7ht7/Group-20.png" />
          </div>

          <HomeAboutMain></HomeAboutMain>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
