import React, { useContext, useState } from "react";
import MainCard from "../MainCard/MainCard";
import SeparatorLine from "../SeparatorLine/SeparatorLine";
import StoryCard from "../StoryCard/StoryCard";
import YearSelector from "../YearSelector";
import DriverList from "../DriverList";
import DriverStandingList from "../DriverStandingList";
import ConstructorList from "../ConstructorList";
import ConstructorStandingList from "../ConstructorStandingList";
import demoVideo from "../../assets/titlevideo.mp4";
import laptopBackground from "../../assets/laptop6.png";
import mainLogo from "../../assets/f1logomain3.png";
import posterImage from "../../assets/posterImage.webp";
import { LanguageContext } from "../../App";
import "./MainPageCards.css";

const MainPageCards = () => {
  const [year, setYear] = useState("current");
  const language = useContext(LanguageContext);

  return (
    <div className="main-page-cards">
      <MainCard />
      <SeparatorLine />
      <StoryCard
        title={language.storyCard.card1.storyTitle}
        subtitle={language.storyCard.card1.storySubtitle}
        extraImage={
          laptopBackground /*"https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"*/
        }
      >
        {/*src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"*/}
        <video
          autoPlay={true}
          playsInline={true}
          muted={true}
          loop={true}
          poster={posterImage}
          controls={false}
        >
          <source src={demoVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </StoryCard>
      <SeparatorLine />
      <StoryCard
        mediaLeft={true}
        title={language.storyCard.card2.storyTitle}
        subtitle={language.storyCard.card2.storySubtitle}
      >
        <img alt="" src={mainLogo}></img>
      </StoryCard>
      <SeparatorLine />
      {/*------------------ */}
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <YearSelector onSelectYear={(year) => setYear(year)} />
        <div className="data-container">
          <DriverList year={year} />
          <DriverStandingList year={year} />

          <ConstructorList year={year} />
          <ConstructorStandingList year={year} />
        </div>
      </div>
    </div>
  );
};

export default MainPageCards;
