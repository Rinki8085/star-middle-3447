import React, { useEffect, useState } from "react";
import MatchSection1 from "./MatchSection1";


const Matches = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await fetch(
      "https://api.cricapi.com/v1/cricScore?apikey=29112f7f-3c29-4b2b-9e2c-7b0f8d7b2237"
    );
    const payload = await res.json();
    // console.log(payload.data);

    setData(payload.data);
  };

  return (
    <div>
      <MatchSection1 data={data} />
    </div>
  );
};

export default Matches;
