import React from "react";
import "./Timeline.css";

import IMG from "./human.png";

const data = [
  {
    year: "2007",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    year: "2011",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    year: "2012",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    year: "2015",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    year: "2016",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    year: "2017",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const HorizontalTimeline: React.FC = () => {
  return (
    <div className="timeline-wrapper">
      <div className="timeline-horizontal">
        {/* <div>
          <img src={IMG} />
        </div> */}
        {data.map((item, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "top" : "bottom"}`}
          >
            <div className={`card card${index + 1}`}>
              <h3>{item.year}</h3>
              <p>{item.text}</p>
            </div>
            <span className={`dot dot${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalTimeline;
