import React, { useEffect, useRef } from "react"
import tile from "./assets/tile.jpg"
const Base = () => {
    const canvasRef = useRef();
    useEffect(() => {
        if (!canvasRef?.current) return;
        const context = canvasRef.current.getContext('2d');
        canvasRef.current.width = 1000;
        canvasRef.current.height = 1000;
        let img = new Image();
        console.log(canvasRef, img);
        img.src = tile;
        context.drawImage(img, 0, 0, 612, 612);
    }, [canvasRef, canvasRef.current]);
    return (
        <div>
            <canvas style={{ height: "1000px", width: "1000px", border: "1px solid black" }} ref={(ref) =>canvasRef.current = ref} />
            <img src={tile} height={"100px"} width="100px" />
        </div>
    )
}

export default Base;