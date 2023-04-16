import "./StoryCard.css";
import { ReactNode, useEffect, useState } from "react";

interface Props {
  title: string;
  subtitle: string;
  children?: ReactNode;
  mediaLeft?: boolean;
  extraImage?: string;
}

const StoryCard = ({
  title,
  subtitle,
  children,
  mediaLeft = false,
  extraImage = "",
}: Props) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // handle window resize for deciding which order should be used
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="main-page-story-card-container">
      <div className="main-page-story-card-content-container">
        <div
          className="main-page-story-card-text-container"
          style={{ order: mediaLeft && windowWidth >= 800 ? 3 : 1 }}
        >
          <h2 className="main-page-story-card-main-title">{title}</h2>
          <p className="main-page-story-card-subtitle">{subtitle}</p>
        </div>
        <div className="main-page-story-card-media-container">
          <div className="main-page-story-card-multi-media-container">
            {extraImage && (
              <>
                <img alt="" src={extraImage} />
                <div className="main-page-laptop-media-container">
                  {children}
                </div>
              </>
            )}
            {!extraImage && children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
