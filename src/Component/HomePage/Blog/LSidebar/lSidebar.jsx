import React from 'react'
import './lSidebar.css'
import {Link as Routelink} from "react-router-dom"


const data1 = [
  {
    "id": 1,
    "name":"Zimbabwe v India"
  },
  {
    "id": 2,
    "name":"Asia Cup QLF"
  },
  {
    "id": 3,
    "name":"Asia Cup"
  },
  {
    "id": 4,
    "name":"England v South Africa"
  },
  {
    "id": 5,
    "name":"West Indies v New Zealand"
  },
  {
    "id": 6,
    "name":"Australia v Zimbabwe"
  },
  {
    "id": 7,
    "name":"The Hundred (M)"
  },
  {
    "id": 8,
    "name":"The Hundred (F)"
  },
  {
    "id": 9,
    "name":"Country Div1"
  },
  {
    "id": 10,
    "name":"Country Div2"
  },
  {
    "id":11,
    "name":"6IXTY (M)"
  },
  {
    "id": 12,
    "name":"6IXTY (F)"
  },
  {
    "id": 13,
    "name":"Women's Championship"
  },
  {
    "id": 14,
    "name":"World Test Championship"
  },
  {
    "id": 15,
    "name":"World Cup Super League"
  }
];
const data2 = [
  {
    "id": 1,
    "name":"T20 Time Out"
  },
  {
    "id": 2,
    "name":"T20 Time Out Hindi"
  },
  {
    "id": 3,
    "name":"ICC Rankings"
  },
  {
    "id": 4,
    "name":"Fantasy Pick"
  },
  {
    "id": 5,
    "name":"Haan Ya Naa"
  }
];
const data3 = [
  {
    "id": 1,
    "name":"Android App"
  },
  {
    "id": 2,
    "name":"iOS App"
  }
];
const data4 = [
  {
    "id": 1,
    "name":"Instagram"
  },
  {
    "id": 2,
    "name":"Twitter"
  },
  {
    "id": 3,
    "name":"Facebook"
  },
  {
    "id": 4,
    "name":"Youtube"
  }
];
const data5 = [
  {
    "id": 1,
    "name":"The Cricket Monthly"
  },
  {
    "id": 2,
    "name":"ESPN"
  }
];
 const LSBar = () => {

    return (
      <div className="LSBCONT">
        <div>
          <img style={{"border-radius": "10px"}} src="https://awesomescreenshot.s3.amazonaws.com/image/2796027/31803381-1705ec820788d46ae1285ca38e6e26c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA%2F20220828%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220828T041117Z&X-Amz-Expires=28800&X-Amz-SignedHeaders=host&X-Amz-Signature=1a31bb96004144d5e3db2625c6baa0fa064d1bab585deb1d5d9a7703689d95a2"/>
        </div>
        <div className="LSBC" style={{}}>
          <h5>Key Series</h5>
          
          <div>
          {data1.map((item)=>
         
         <p className="SCp"><b style={{color:"skyblue"}}>&gt;  </b><Routelink to={"/"} className="Subele">{item.name}</Routelink> </p>
      
          )}
          </div>
          
        </div>
        <div className="LSBC">
          <h5>QuickLinks</h5>
          <div>
          {data2.map((item)=>
         
         <p className="SCp"><b style={{color:"skyblue"}}>&gt;  </b><Routelink to={"/"} className="Subele">{item.name}</Routelink></p>
      
          )}
          </div>
          
        </div>
        <div className="LSBC">
          <h5>ESPN Quick Info App</h5>
          <div>
          {data3.map((item)=>
         
         <p className="SCp"><b style={{color:"skyblue"}}>&gt;  </b><Routelink to={"/"} className="Subele">{item.name}</Routelink></p>
      
          )}
          </div>
          
        </div>
        <div className="LSBC">
          <h5>Follow ESPN cricinfo</h5>
          <div>
          {data4.map((item)=>
         
         <p className="SCp"><b style={{color:"skyblue"}}>&gt;  </b><Routelink to={"/"} className="Subele">{item.name}</Routelink></p>
      
          )}
          </div>
          
        </div>
        <div className="LSBC">
          <h5>ESPN sites</h5>
          <div>
          {data5.map((item)=>
         
         <p className="SCp"><b style={{color:"skyblue"}}>&gt;  </b><Routelink to={"/"} className="Subele">{item.name}</Routelink></p>
      
          )}
          </div>
          
        </div>
      </div>
    )

}
export default LSBar