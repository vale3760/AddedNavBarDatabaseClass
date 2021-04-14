import React from 'react';
import img from "./USRegionMap.PNG";
import LineChart from "./LineChart";
import Image from 'react-bootstrap/Image'

const Trend_5 = () => {
    return (
        <div>
            <h1>Mortality of States Per Region On a Certain Holiday</h1>
            <LineChart />
            <Image src={img} fluid/>
        </div>
    )
}

export default Trend_5