import HomeAbout from "./HomeAbout";
import HomeAboutCard from "./HomeAboutCard";

import "./HomeAbout.css";
import HomeMeetTheTeam from "./HomeMeetTeam";

const HomeAboutRoot = () => {
  return (
    <div className="home-about">
      <HomeAbout></HomeAbout>
      <HomeAboutCard></HomeAboutCard>
    </div>
  );
};

export default HomeAboutRoot;
