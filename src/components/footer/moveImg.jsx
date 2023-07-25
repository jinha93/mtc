import water_balloon_sm from "../../assets/images/water_balloon_lg.gif";

import "./moveImg.css"

export default function MoveImg(props) {
    return (
        <div className="relative h-[90px] overflow-x-hidden">
            <img id="moveImg" src={water_balloon_sm} className="move-img"/>
        </div>
    )
};