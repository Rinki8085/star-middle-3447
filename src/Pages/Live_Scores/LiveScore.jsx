import React from "react";
import Advertise from "./Advertise";
import Blogs from "./Blogs";
import Styles from "./LiveScore.module.css";
import MiddleContent from "./MiddleContent";

const LiveScore = () => {
  return (
    <div>
      <Advertise />
      <div className={Styles.main}>
        <MiddleContent/>
        <Blogs />
      </div>
    </div>
  );
};

export default LiveScore;
