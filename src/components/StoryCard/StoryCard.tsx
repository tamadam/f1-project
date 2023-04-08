import { Children, ReactNode, useEffect, useState } from "react";
import "./StoryCard.css";

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
    <div className="story-card">
      <div className="card-content-container">
        <div
          className="card-text-container"
          style={{ order: mediaLeft && windowWidth >= 800 ? 3 : 1 }}
        >
          <h2 className="story-card-main-title">{title}</h2>
          <p className="story-card-subtitle">{subtitle}</p>
        </div>
        <div className="card-media-container">
          <div className="multi-media-container">
            {extraImage && (
              <>
                <img alt="" src={extraImage} />
                <div className="tv-container">{children}</div>
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
