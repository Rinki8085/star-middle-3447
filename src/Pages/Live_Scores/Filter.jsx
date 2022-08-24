import React from "react";
import Styles from "./Filter.module.css";

const Filter = () => {
  const mappingData = [
    "Int'I",
    "T20s",
    "ODI",
    "Test",
    "Men",
    "Women",
    "Domestic",
    "FC",
    "Youth",
    "List A",
    "Others",
  ];
  return (
    <div className={Styles.main}>
      <h5 className={Styles.reset}>Reset</h5>
      {mappingData.map((el,index) => (
        <button className={Styles.btns} key={index}>{el}</button>
      ))}
    </div>
  );
};

export default Filter;
