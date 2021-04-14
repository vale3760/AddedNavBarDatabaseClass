import React from 'react';
import LineChart from "./LineChart";
import Image from 'react-bootstrap/Image'
import img from "./USRegionMap.PNG";

const Trend_1 = () => {
    return (
        <div>
            <h1>Deaths Per Region Over the Years</h1>
            <LineChart />
            <Image src={img} fluid/>
        </div>
    )
}

export default Trend_1
