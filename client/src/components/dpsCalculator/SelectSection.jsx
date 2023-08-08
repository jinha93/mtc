import SelectNormalOrBoss from "./SelectNormalOrBoss"
import SelectSkill from "./SelectSkill"
import DefaultAttack from "./DefaultAttack"
import TotalDps from "./TotalDps"
import { useState, useEffect } from "react"

export default function SelectSection(props) {

    const createSelectSkill = () => {
        const arr = [];
        for(let i=0; i<8; i++){
            arr.push(
                <SelectSkill 
                    key={i}
                    stats={props.stats} 
                    skillsData={props.skillsData}
                    normalOrBoss={normalOrBoss} 
                    index={i}
                    setTotalDpsArrIndex={setTotalDpsArrIndex}
                    skillArr={skillArr}
                    setSkillArrIndex={setSkillArrIndex}
                />
            );
        }
        return arr;
    }

    // 보스추가대미지 여부
    const [normalOrBoss, setNormalOrBoss] = useState('N')

    // 선택한 스킬 배열
    const [skillArr, setSkillArr] = useState([]);
    const setSkillArrIndex = (i, value) => {
        skillArr[i] = value
        const arr = [...skillArr];
        setSkillArr(arr);
    }

    // 최종 DPS
    const [totalDps, setTotalDps] = useState(0);
    const [totalDpsArr, setTotalDpsArr] = useState([]);
    const [defaultAttackDps, setDefaultAttackDps] = useState(0);

    const setTotalDpsArrIndex = (i, value) => {
        totalDpsArr[i] = value
        const arr = [...totalDpsArr];
        setTotalDpsArr(arr);
    }
    useEffect(() => {
        let totalDps = 0;
        for(let dps of totalDpsArr){
            if(dps !== undefined) totalDps += Number(dps);
        }
        setTotalDps((Number(totalDps)+Number(defaultAttackDps)).toFixed(1));
    }, [totalDpsArr, defaultAttackDps])
    
    return (
        <div className="border-2 border-gray-900 rounded-lg w-full h-full p-5">
            <div className="h-[5%]">
                <SelectNormalOrBoss
                    setNormalOrBoss={setNormalOrBoss}
                />
            </div>
            <div className="grid grid-cols-4 grid-rows-2 gap-5 h-[65%] pt-5">
                {createSelectSkill()}
            </div>
            <div className="grid grid-cols-4 gap-5 h-[30%] pt-5">
                <DefaultAttack
                    stats={props.stats}
                    normalOrBoss={normalOrBoss}
                    setDefaultAttackDps={setDefaultAttackDps}
                />
                <TotalDps totalDps={Number(totalDps)}/>
            </div>
        </div>
    )
}