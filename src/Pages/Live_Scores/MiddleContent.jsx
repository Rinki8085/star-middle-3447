import React from "react";
import Filter from "./Filter";
import Styles from "./MiddleContent.module.css";
import Timeline from "./Timeline";

const MiddleContent = () => {
  return (
    <div className={Styles.main}>
      <Timeline />
      <Filter />
    </div>
  );
};

export default MiddleContent;
