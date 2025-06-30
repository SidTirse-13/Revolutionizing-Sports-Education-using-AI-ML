import "./Feature.css";
import React from "react";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeatureElement1 = (item) => {
  return (
    <div id="features-main-container">
      <div id="features-content-container">
        <h1>{item.item.heading}</h1>
        <p>{item.item.info}</p>
      </div>
      <div id="features-image-container">
        <img src={item.item.image} alt="" />
      </div>
    </div>
  );
};
const FeatureElement2 = (item) => {
  return (
    <div id="features-main-container">
      <div id="features-image-container">
        <img src={item.item.image} alt="" />
      </div>
      <div id="features-content-container">
        <h1>{item.item.heading}</h1>
        <p>{item.item.info}</p>
      </div>
    </div>
  );
};

const Features = () => {
  const Feature_contents = [
    {
      heading: "Win Prediction",
      info: "The score prediction feature leverages advanced algorithms and historical data to forecast outcomes of sports events, helping teams, analysts, and fans make data-driven decisions. It enhances game strategies, fan engagement, and provides insights into potential game dynamics!",
      image: "./images/Features/Prediction.png",
    },
    {
      heading: "Chatbot",
      info: "The chatbot for sports projects provides instant, AI-driven support for athletes, coaches, and fans, answering queries, offering training tips, and managing scheduling. It enhances user engagement, streamlines communication, and offers 24/7 assistance, improving overall efficiency and experience.",
      image: "./images/Features/chatbotnobg.png",
    },
    {
      heading: "Video Calling",
      info: "The sports projects video conferencing feature enables seamless, real-time collaboration among coaches, athletes allowing for remote training sessions, strategy discussions, and performance analysis. It enhances communication, and facilitates global connections for sports development and teamwork.",
      image: "./images/Features/videocallnobg.png",
    },
    {
      heading: "News Feed",
      info: "The news feed feature delivers real-time updates on sports events, team performance, player news, and match results, keeping fans and stakeholders informed. It offers personalized content, ensuring users stay connected with the latest developments in their favorite sports and teams.",
      image: "./images/Features/1234.png.png",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    swipeToSlide: false,
  };

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div id="features">
      {windowSize.innerWidth <= 768 ? (
        <Slider className="elements" {...settings}>
          <FeatureElement2 item={Feature_contents[0]} />
          <FeatureElement2 item={Feature_contents[1]} />
          <FeatureElement2 item={Feature_contents[2]} />
          <FeatureElement2 item={Feature_contents[3]} />
        </Slider>
      ) : (
        <div>
          <FeatureElement1 item={Feature_contents[0]} />
          <FeatureElement2 item={Feature_contents[1]} />
          <FeatureElement1 item={Feature_contents[2]} />
          <FeatureElement2 item={Feature_contents[3]} />
        </div>
      )}
    </div>
  );
};

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

export default Features;
