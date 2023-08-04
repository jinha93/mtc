import water_balloon_sm from "../../assets/images/21104.gif";

import "./MoveImg.css"

export default function MoveImg(props) {
    return (
        <div className="relative h-[90px] overflow-hidden">
            <img id="moveImg" src={water_balloon_sm} className="move-img" alt="moveImg"/>
        </div>
    )
};