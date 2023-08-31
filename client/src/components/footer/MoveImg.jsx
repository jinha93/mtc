import water_balloon from "../../assets/images/21104.gif";
import carrot_knight from "../../assets/images/21017.gif";
import igloo_golem from "../../assets/images/21022.gif";

import "./MoveImg.css"

export default function MoveImg(props) {
    return (
        <div className="relative h-[90px] overflow-hidden">
            <img id="moveImg" src={water_balloon} className="move-img" alt="moveImg"/>
            <img id="moveImg" src={carrot_knight} className="move-img-2" alt="moveImg"/>
            <img id="moveImg" src={igloo_golem} className="move-img-3" alt="moveImg"/>
        </div>
    )
};