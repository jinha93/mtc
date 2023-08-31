import SelectNormalOrBoss from "./SelectNormalOrBoss"
import SelectSkill from "./SelectSkill"
import DefaultAttack from "./DefaultAttack"
import TotalDps from "./TotalDps"
import SaveBox from "./SaveBox"
import { useState, useEffect } from "react"

export default function SelectSection(props) {

    const maps = [1,2,3,4,5,6,7,8];

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
        totalDps = (Number(totalDps)+Number(defaultAttackDps)).toFixed(1);
        setTotalDps(totalDps);
    }, [totalDpsArr, defaultAttackDps])



    // MyDps 정보
    const [myDps, setMyDps] = useState({
        normalOrBoss: 'N',              // 보스추가대미지 여부
        defaultAttackDps: 0,             // 기본공격 DPS
        totalDps: 0,                    // 최종 DPS
    })

    useEffect(() => {
        const myDpsTmp = {...myDps, totalDps:totalDps, defaultAttackDps:defaultAttackDps}
        setMyDps(myDpsTmp);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [totalDps, defaultAttackDps])


    // 선택 스킬 정보
    const [selectSkillList, setSelectSkillList] = useState([]);

    return (
        <div className="border-2 border-gray-900 rounded-lg w-full h-full p-5">
            <div className="h-[5%]">
                <SelectNormalOrBoss
                    myDps={myDps}
                    setMyDps={setMyDps}
                />
            </div>
            <div className="grid grid-cols-4 grid-rows-2 gap-5 h-[65%] pt-5">
                {maps.map((tab, index) => {
                    return(
                        <SelectSkill 
                            key={index}
                            index={index}
                            statDataList={props.statDataList} 
                            skillDataList={props.skillDataList}

                            myDps={myDps}
                            selectSkillList={selectSkillList}

                            setTotalDpsArrIndex={setTotalDpsArrIndex}
                            skillArr={skillArr}
                            setSkillArrIndex={setSkillArrIndex}
                        /> 
                    )
                })}
            </div>
            <div className="grid grid-cols-4 gap-5 h-[30%] pt-5">
                <DefaultAttack
                    statDataList={props.statDataList}
                    myDps={myDps}
                    setDefaultAttackDps={setDefaultAttackDps}
                />
                <TotalDps totalDps={Number(totalDps)}/>
                <SaveBox
                    myDps={myDps}
                    setMyDps={setMyDps}
                    statDataList={props.statDataList}
                    setStatDataList={props.setStatDataList}
                    skillDataList={props.skillDataList}
                    setSkillDataList={props.setSkillDataList}
                    skillArr={skillArr}
                    totalDpsArr={totalDpsArr}
                    setSelectSkillList={setSelectSkillList}
                />
            </div>
        </div>
    )
}