import SelectNormalOrBoss from "./SelectNormalOrBoss"
import SelectSkill from "./SelectSkill"
import DefaultAttack from "./DefaultAttack"
import TotalDps from "./TotalDps"

export default function SelectSection(props) {

    const createSelectSkill = () => {
        const arr = [];
        for(let i=0; i<8; i++){
            arr.push(<SelectSkill key={i} stats={props.stats} skillsData={props.skillsData}/>);
        }
        return arr;
    }

    return (
        <div className="border-2 border-gray-900 rounded-lg w-full h-full p-5">
            <div className="h-[5%]">
                <SelectNormalOrBoss/>
            </div>
            <div className="grid grid-cols-4 grid-rows-2 gap-5 h-[65%] pt-5">
                {createSelectSkill()}
            </div>
            <div className="grid grid-cols-4 gap-5 h-[30%] pt-5">
                <DefaultAttack/>
                <TotalDps/>
            </div>
        </div>
    )
}