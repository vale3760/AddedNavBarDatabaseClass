import React from 'react';
import img from "./USRegionMap.PNG";
import LineChart from "./LineChart";
import Image from 'react-bootstrap/Image'

const Trend_4 = () => {
    return (
        <div>
            <h1>Flu/All Deaths Per Region in [yearNo] Through Seasons</h1>
            <LineChart />
            <Image src={img} fluid/>
        </div>
    )
}

export default Trend_4