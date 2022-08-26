import React, { useEffect, useState } from "react";
import MatchSection1 from "./MatchSection1";
import MatchSection2 from "./MatchSection2";
import MatchSection3 from "./MatchSection3";
import Styles from "./Filter.module.css";

const Matches = () => {
  const mappingData = ["T20", "ODI", "Test", "Men", "Women"];

  const [data, setData] = useState([]);

  const handleClick = (btn) => {
    const filterData = data.filter((el) => el.matchType === btn);
    console.log(filterData);

    setData(filterData);
  };

  const handleReset = () => {
    getData();
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await fetch("http://localhost:8080/liveScore");
    const payload = await res.json();
    // console.log(payload);

    setData(payload);
  };

  return (
    <div>
      <div className={Styles.main}>
        <h5 className={Styles.reset} onClick={handleReset}>
          Reset
        </h5>
        {mappingData.map((el, index) => (
          <button
            className={Styles.btns}
            key={index}
            value={el.toLowerCase()}
            onClick={(e) => handleClick(e.target.value)}
          >
            {el}
          </button>
        ))}
      </div>
      <MatchSection1 data={data} title="Top Events" />
      <MatchSection2 data={data} title="Nepal tour of Kenya" />
      <MatchSection3 data={data} title="Second Eleven Championship" />
    </div>
  );
};

export default Matches;
