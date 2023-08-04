import { useEffect, useState } from "react";

export default function SelectSkill(props) {

    const [selectSkillIndex, setSkillIndex] = useState(0);

    const onChangeSkill = (e) => {
        var index = e.target.value;
        setSkillIndex(index);
    }

    useEffect(() => {
        if(props.skillsData[selectSkillIndex].id != 'default'){
            calc();
        }
    }, [selectSkillIndex, props.skillsData, props.stats])

    const [damage, setDamage] = useState(0);
    const [criticalDamage, setCriticalDamage] = useState(0);
    const [dps, setDps] = useState(0);

    const calc = () => {
        // 스탯
        const attack = props.stats.find(v => v.id === 'attack').value
        const allDamageRate = props.stats.find(v => v.id === 'allDamageRate').value/100
        const skillDamageRate = props.stats.find(v => v.id === 'skillDamageRate').value/100
        // const meleeDamageRate = props.stats.find(v => v.id === 'attack').value/100
        const rangedDamageRate = props.stats.find(v => v.id === 'rangedDamageRate').value/100

        // 스킬
        const totalCoefficient = Number(calcCoefficient());
        // const type = selectSkill.type;
        const hitCnt = Number(props.skillsData[selectSkillIndex].hitCnt);

        console.log(attack +"*"+ (1+allDamageRate) +"*"+ (1+skillDamageRate) +"*"+ (1+rangedDamageRate) +"*"+ totalCoefficient +"*"+ hitCnt)

        const damage = (attack * (1+allDamageRate) * (1+skillDamageRate) * (1+rangedDamageRate)) * totalCoefficient * hitCnt
        console.log(damage)

        setDamage(damage);


        // console.log(level + '레벨 스킬대미지 : ' + totalCoefficient);
    }

    // 선택한 스킬의 레벨별 계수 계산
    const calcCoefficient = () => {
        const {defaultValue, level} = props.skillsData[selectSkillIndex];
        console.log(defaultValue, level)

        if(level === undefined) return 0;
        const bonusArr = [0,0.18,0.41,0.54,0.77];

        let addCoefficient = 0;
        for(var i=1; i<=level; i++){
            if(i!=1){		
                if(i%5 == 1){
                    addCoefficient += bonusArr[Math.ceil(i/6)]
                }else{
                    addCoefficient += Math.ceil(i/5) * 0.03
                }
            }
        }

        return (Number(defaultValue) + Number(defaultValue) * Number(addCoefficient)).toFixed(2);
    }

    console.log(selectSkillIndex);
    return (
        <div className="border-2 border-gray-900 rounded-lg w-full h-full p-3">
            <div className="flex">
                <img src={require(`../../assets/images/skills/${props.skillsData[selectSkillIndex].id}.png`)} className="w-14 h-14 object-cover border rounded-lg border-gray-900" alt={'스킬선택'}></img>
                <select className="w-full border rounded-lg border-gray-900 text-gray-700 text-sm mx-1 my-3" onChange={onChangeSkill}>
                    {/* <option value="default">Please select</option> */}
                    {props.skillsData.map((skill, index) => {
                        return (
                            <option 
                                key={index}
                                value={index}
                            >
                                {skill.name}
                            </option>
                        )
                    })}
                </select>
            </div>

            <div className="mt-5">
                <dl className="-my-3 divide-y divide-gray-900 text-sm">
                    <div className="grid grid-cols-1 gap-1 py-1 sm:grid-cols-2 sm:gap-4">
                        <dt className="font-medium text-gray-900">대미지</dt>
                        <dd className="text-gray-700 text-right">{damage}</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 py-1 sm:grid-cols-2 sm:gap-4">
                        <dt className="font-medium text-gray-900">대미지(치명타)</dt>
                        <dd className="text-gray-700 text-right">{criticalDamage}</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 py-1 sm:grid-cols-2 sm:gap-4">
                        <dt className="font-medium text-gray-900">DPS</dt>
                        <dd className="text-gray-700 text-right">{dps}</dd>
                    </div>
                </dl>
            </div>
        </div>
    )
}