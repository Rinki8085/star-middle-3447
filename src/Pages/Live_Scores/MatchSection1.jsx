import React from "react";
import Styles from "./MatchSection.module.css";

const MatchSection1 = ({ data }) => {
  return (
    <div className={Styles.main}>
      <div className={Styles.heading}>Top Events</div>
      <hr />
      <div className={Styles.grid}>
        {data
          .filter((el, index) => index % 6 == 0)
          .map((el) => (
            <div key={el.id}>
              <h4>{el.status}</h4>
              <h6>{el.dateTimeGMT}</h6>
              <img src={el.t1img} alt="" />
              <span>{el.t1}</span>
              <span>{el.t1s}</span>
              <br></br>
              <img src={el.t2img} alt="" />
              <span>{el.t2}</span>
              <span>{el.t2s}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MatchSection1;
