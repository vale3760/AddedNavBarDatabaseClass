import React from 'react';
import Image from 'react-bootstrap/Image'
import img from "./USRegionMap.PNG";
import LineChart from "./LineChart";

const Trend_3 = () => {
    return (
        <div>
            <h1>[StateName] Deaths By Age Groups Over the Years</h1>
            <LineChart />
            <Image src={img} fluid/>
        </div>
    )
}

export default Trend_3