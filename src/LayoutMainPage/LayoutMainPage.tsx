// hooks
import { useEffect, useRef, useState } from "react";
import useLanguage from "../languages/useLanguage";

// components
import NavBar from "../components/NavBar/NavBar";
import MainCard from "../components/MainCard/MainCard";
import SeparatorLine from "../components/SeparatorLine/SeparatorLine";
import StoryCard from "../components/StoryCard/StoryCard";
import StandingsLine from "../components/StandingsLine/StandingsLine";
import Faq from "../components/Faq/Faq";
import SupportedDevices from "../components/SupportedDevices/SupportedDevices";
import MainFooter from "../components/MainFooter/MainFooter";

// assets
import scrollUpIcon from "../assets/scrollUpIcon.png";
import alonsoAvatar from "../assets/driverAvatars/alonso.png";
import leclercAvatar from "../assets/driverAvatars/leclerc.png";
import norrisAvatar from "../assets/driverAvatars/norris.png";
import verstappenAvatar from "../assets/driverAvatars/verstappen.png";
import phone from "../assets/phone.png";
import demoVideo from "../assets/titlevideo.mp4";
import laptopBackground from "../assets/laptop.png";
import posterImage from "../assets/posterImage.webp";

import "./LayoutMainPage.css";

import ConstructorList from "../components/ConstructorList";
import ConstructorStandingList from "../components/ConstructorStandingList";
import DriverList from "../components/DriverList";
import DriverStandingList from "../components/DriverStandingList";

const LayoutMainPage = () => {
  // get translations
  const { language } = useLanguage();

  // set scroll up arrow
  const [isArrowVisible, setArrowVisible] = useState(false);

  // threshold to set visibility of the arrow
  const scrollThreshold = 300;

  // for power rankings demo
  const lineRef = useRef<HTMLDivElement>(null);

  // hide / unhide arrow on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > scrollThreshold) {
        setArrowVisible(true);
      } else {
        setArrowVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // animate power rankings on language change or page reload
  useEffect(() => {
    const dataLineContainer = lineRef.current;
    const lines = dataLineContainer?.querySelectorAll(".main-page-driver-line");
    const avatars = dataLineContainer?.querySelectorAll(
      ".main-page-driver-avatar"
    );
    const rankTexts = dataLineContainer?.querySelectorAll(
      ".main-page-driver-value-container"
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
            rankText.classList.toggle(
              "main-page-show-first-driver-value",
              entry.isIntersecting
            );
          }
        });

        if (entry.isIntersecting) observer.unobserve(entry.target);
      });
    }, {});

    if (lineRef.current) observer.observe(lineRef.current);
  }, [language]);

  // scroll up on arrow click
  const handleArrowClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isArrowVisible && (
        <div className="arrow-container" onClick={handleArrowClick}>
          <img src={scrollUpIcon} alt="" />
        </div>
      )}
      <header>
        <NavBar />
      </header>
      <main className="main-page-cards">
        <MainCard />
        <SeparatorLine />
        <StoryCard
          title={language.storyCard.card1.storyTitle}
          subtitle={language.storyCard.card1.storySubtitle}
          extraImage={laptopBackground}
        >
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
          <div
            className="main-page-power-rankings-demo-container"
            ref={lineRef}
          >
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
          title={language.storyCard.card3.storyTitle}
          subtitle={language.storyCard.card3.storySubtitle}
        >
          <img src={phone} alt="phone with logo" />
        </StoryCard>
        <SeparatorLine />
        <Faq />
        <SeparatorLine />
        <SupportedDevices />
        <SeparatorLine />
      </main>
      <footer>
        <MainFooter />
      </footer>
    </>
  );
};

export default LayoutMainPage;
