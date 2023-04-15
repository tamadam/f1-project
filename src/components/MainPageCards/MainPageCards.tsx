import React, { useContext, useEffect, useRef, useState } from "react";
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
import StandingsLine from "../StandingsLine/StandingsLine";
import alonsoAvatar from "../../assets/alonso.png";
import leclercAvatar from "../../assets/leclerc.png";
import norrisAvatar from "../../assets/norris.png";
import verstappenAvatar from "../../assets/verstappen.png";
import phone from "../../assets/phone.png";
import Faq from "../Faq/Faq";
import MainFooter from "../MainFooter/MainFooter";

const MainPageCards = () => {
  const [year, setYear] = useState("current");
  const language = useContext(LanguageContext);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dataLineContainer = lineRef.current;
    const lines = dataLineContainer?.querySelectorAll(".line");
    const avatars = dataLineContainer?.querySelectorAll(".avatar");
    const rankTexts = dataLineContainer?.querySelectorAll(
      ".rank-value-container"
    );

    const observer = new IntersectionObserver((entries) => {
      console.log(entries);
      let lineCounter = 1;
      let avatarCounter = 1;

      entries.forEach((entry) => {
        lines?.forEach((line) => {
          line.classList.toggle(
            `start-animate-line${lineCounter}`,
            entry.isIntersecting
          );
          lineCounter += 1;
        });
        avatars?.forEach((avatar) => {
          avatar.classList.toggle(
            `start-animate-avatar${avatarCounter}`,
            entry.isIntersecting
          );
          avatarCounter += 1;
        });
        rankTexts?.forEach((rankText, index) => {
          if (index == 0) {
            rankText.classList.toggle("show-first-place", entry.isIntersecting);
          }
        });

        if (entry.isIntersecting) observer.unobserve(entry.target);
      });
    }, {});

    if (lineRef.current) observer.observe(lineRef.current);
  }, [language]);

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
        <div className="standings-demo-container" ref={lineRef}>
          <StandingsLine
            lineColor="blue"
            avatarImage={verstappenAvatar}
            rankValue={9.4}
          />
          <StandingsLine
            lineColor="red"
            avatarImage={leclercAvatar}
            rankValue={6.6}
          />
          <StandingsLine
            lineColor="#006756"
            avatarImage={alonsoAvatar}
            rankValue={8.2}
          />
          <StandingsLine
            lineColor="orange"
            avatarImage={norrisAvatar}
            rankValue={4.1}
          />
        </div>
      </StoryCard>
      <SeparatorLine />
      <StoryCard
        title="Lorem ipsum ide colore."
        subtitle="Damorde di sipanale wontage sampelevo, si ku, puid hugro."
      >
        <img src={phone} alt="phone with logo" />
      </StoryCard>
      <SeparatorLine />
      <Faq />
      <SeparatorLine />

      {/*------------------ 
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
    */}
    </div>
  );
};

export default MainPageCards;
