import React, { useEffect, useState } from 'react';
import { getBezierPath, getMarkerEnd } from 'react-flow-renderer';

export default function CustomEdge({
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
    style = {},
    data,
    markerEnd
}) {
    // const edgePath = getBezierPath({
    //     sourceX,
    //     sourceY,
    //     sourcePosition,
    //     targetX,
    //     targetY,
    //     targetPosition,
    //     curvature:100
    // });

    const edgePath = "M " + sourceX + " " + sourceY + " L " + targetX + " " + targetY;

    const {density, speed} = data
    const [myDots, setMyDots] = useState([])
    console.log(myDots);
    useEffect(() => {
        console.log(density, speed);
        const dots = new Array(density).fill(0).map((arr, index) => {
            console.log("intex > ",index);
            return (
                <circle key={index} cx="0" cy="0" r="4" fill="crimson">
                    <animateMotion begin={(2 / (speed / 100))/ density * (index) + "s"} dur={2 / (speed / 100) + "s"} repeatCount="indefinite">
                        <mpath xlinkHref={'#' + id} ></mpath>
                    </animateMotion>
                </circle>
            )
        })
        setMyDots(dots);
    }, [density]);

    return (
        <>
            <path
                id={id}
                style={{ ...style, strokeDashoffset: "15px", strokeDasharray: "10px" }}
                className="react-flow__edge-path"
                d={edgePath}
                markerEnd={markerEnd}
            // style={{strokeDashoffset: "15px"}}
            />
            {myDots}
            {/* <text>
        <textPath
          href={`#${id}`}
          style={{ fontSize: '12px' }}
          startOffset="50%"
          textAnchor="middle"
        >
          {data.text}
        </textPath>
      </text> */}
        </>
    );
}
