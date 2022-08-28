import React from "react";
import Config from "../assets/config.json";

const Factory = () => {
    return (
        <div className="factory">
            Factory
            {Object.keys(Config.items).map((key) => {
                return (
                    <div>{Config.items[key].name}</div>)
                })}
            {Config.items.Desc_CompactedCoal_C.name}
        </div>
    )
};
export default Factory;

// Factory object = input/output + number of building ()