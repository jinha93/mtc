import { Fragment, useEffect, useState } from "react";
import Compatibility from "./Compatibility";

export default function SelectSkill(props) {

    const [_damage, setDamage] = useState(0);
    const [_criticalDamage, setCriticalDamage] = useState(0);
    const [_dps, setDps] = useState(0);

    // 스탯 데이터 초기화
    const [statDataList, setStatDataList] = useState(props.statDataList)
    useEffect(() => {
        setStatDataList(props.statDataList)
        // console.log('statData', statData)
    }, [props.statDataList])

    // 스킬 데이터 초기화
    const [skillDataList, setSkillDataList] = useState(props.skillDataList);
    useEffect(() => {
        setSkillDataList(props.skillDataList)
        // console.log('skillData', skillData)
    }, [props.skillDataList])


    // MyDps 정보 초기화
    const [myDps, setMyDps] = useState(props.myDps);
    useEffect(() => {
        setMyDps(props.myDps)
        // console.log('myDps', myDps)
    }, [props.myDps])

    // 선택 스킬 배열 초기화
    const [skillArr, setSkillArr] = useState(props.skillArr)
    useEffect(() => {
        setSkillArr(props.skillArr)
        // console.log('buffSkillArr', buffSkillArr)
    }, [props.skillArr])

    // 속성 상성
    const [compatibility, setCompatibility] = useState(1);

    // 스킬 선택
    const [selectSkillIndex, setSelectSkillIndex] = useState(0);
    const onChangeSkill = (e) => {
        const selectIndex = e.target.value;

        for (let skillIndex of skillArr) {
            if (skillIndex === selectIndex) {
                alert('동일스킬존재');
                return;
            }
        }

        setSelectSkillIndex(selectIndex);

        // 선택 스킬 저장
        props.setSkillArrIndex(props.index, selectIndex);
    }

    useEffect(() => {
        let skillIndex = 0;
        for (let skill of props.selectSkillList) {
            if (skill.idx === props.index) {
                skillIndex = skill.skillIdx
            }
        }
        setSelectSkillIndex(skillIndex);

        // 선택 스킬 저장
        props.setSkillArrIndex(props.index, skillIndex);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.selectSkillList])


    // 스킬 계수 계산
    const calcCoefficient = (skill) => {
        const { level } = skill;
        const { coefficient } = skill.skill;

        if (level === undefined || level === 0) return 0;
        const bonusArr = [0, 0.18, 0.41, 0.54, 0.77];

        let addCoefficient = 0;
        for (var i = 1; i <= level; i++) {
            if (i !== 1) {
                if (i % 5 === 1) {
                    addCoefficient += bonusArr[Math.ceil(i / 6)]
                } else {
                    addCoefficient += Math.ceil(i / 5) * 0.03
                }
            }
        }

        return (Number(coefficient) + Number(coefficient) * Number(addCoefficient)).toFixed(2);
    }

    useEffect(() => {
        if (skillDataList[selectSkillIndex].skill.skillId === 'S00') return;
        calc();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectSkillIndex, skillDataList, statDataList, myDps, compatibility, skillArr])

    // 계산
    const calc = () => {
        // 스탯
        const attack = statDataList.find(v => v.stat.statId === 'attack').value
        const criticalRate = statDataList.find(v => v.stat.statId === 'criticalRate').value / 100
        const criticalDamage = statDataList.find(v => v.stat.statId === 'criticalDamage').value / 100
        const bossAttack = statDataList.find(v => v.stat.statId === 'bossAttack').value / 100
        const allDamageRate = statDataList.find(v => v.stat.statId === 'allDamageRate').value / 100
        const skillDamageRate = statDataList.find(v => v.stat.statId === 'skillDamageRate').value / 100
        const meleeDamageRate = statDataList.find(v => v.stat.statId === 'meleeDamageRate').value / 100
        const rangedDamageRate = statDataList.find(v => v.stat.statId === 'rangedDamageRate').value / 100

        const fireDamageRate = statDataList.find(v => v.stat.statId === 'fireDamageRate').value / 100
        const waterDamageRate = statDataList.find(v => v.stat.statId === 'waterDamageRate').value / 100
        const windDamageRate = statDataList.find(v => v.stat.statId === 'windDamageRate').value / 100
        const groundDamageRate = statDataList.find(v => v.stat.statId === 'groundDamageRate').value / 100
        const electricDamageRate = statDataList.find(v => v.stat.statId === 'electricDamageRate').value / 100
        const iceDamageRate = statDataList.find(v => v.stat.statId === 'iceDamageRate').value / 100
        const plantDamageRate = statDataList.find(v => v.stat.statId === 'plantDamageRate').value / 100
        const poisonDamageRate = statDataList.find(v => v.stat.statId === 'poisonDamageRate').value / 100
        const lightDamageRate = statDataList.find(v => v.stat.statId === 'lightDamageRate').value / 100
        const darknessDamageRate = statDataList.find(v => v.stat.statId === 'darknessDamageRate').value / 100

        // 선택한 스킬 정보
        const totalCoefficient = Number(calcCoefficient(skillDataList[selectSkillIndex]));
        const type = skillDataList[selectSkillIndex].skill.type;
        const attribute = skillDataList[selectSkillIndex].skill.attribute;
        const hitCnt = Number(skillDataList[selectSkillIndex].skill.hitCnt);
        const cooldown = Number(skillDataList[selectSkillIndex].skill.cooldown);

        // 거리별 대미지
        const distanceDamage = type === '근접' ? meleeDamageRate : rangedDamageRate;
        // 보스공격대미지
        const normalOrBoss = props.myDps ? props.myDps.normalOrBoss : 'N';
        const bossAttackDamage = normalOrBoss === 'B' ? 1 + bossAttack : 1;
        console.log(normalOrBoss);
        // 버프스킬
        let buffDamage = 0;
        for (let skillIndex of skillArr) {
            if (skillIndex !== undefined && skillDataList[skillIndex].skill.type === '버프') {
                buffDamage = attribute === skillDataList[skillIndex].skill.attribute ? calcCoefficient(skillDataList[skillIndex]) / 100 : 0;
            }
        }
        // 속성 대미지
        let attributeDamage = 0;
        switch (attribute) {
            case '불':
                attributeDamage = fireDamageRate;
                break;
            case '물':
                attributeDamage = waterDamageRate;
                break;
            case '바람':
                attributeDamage = windDamageRate;
                break;
            case '땅':
                attributeDamage = groundDamageRate;
                break;
            case '전기':
                attributeDamage = electricDamageRate;
                break;
            case '얼음':
                attributeDamage = iceDamageRate;
                break;
            case '식물':
                attributeDamage = plantDamageRate;
                break;
            case '독':
                attributeDamage = poisonDamageRate;
                break;
            case '빛':
                attributeDamage = lightDamageRate;
                break;
            case '어둠':
                attributeDamage = darknessDamageRate;
                break;
            default:
                attributeDamage = 0;
                break;
        }

        // 대미지 = 공격력 * (1+모든대미지) * (1+스킬대미지) * (1+거리별대미지) * 스킬계수 * 스킬타수 * 보스공격대미지 * (1+속성대미지+버프대미지) * 속성상성배수
        const damage = ((attack * (1 + allDamageRate) * (1 + skillDamageRate) * (1 + distanceDamage)) * totalCoefficient * hitCnt * bossAttackDamage * (1 + attributeDamage + buffDamage) * compatibility).toFixed(1);
        // 대미지(치명타) = 대미지 * 치명타대미지
        const damageCritical = (damage * criticalDamage).toFixed(1);
        // DPS = (대미지 * 치명타확률 * 치명타 대미지 + 대미지 * (1-치명타확률)) / (쿨타임) / (1+속성대미지+버프대미지) * (1+속성대미지+버프대미지*2/3)
        const dps = ((damage * criticalRate * criticalDamage + damage * (1 - criticalRate)) / cooldown / (1 + attributeDamage + buffDamage) * (1 + attributeDamage + buffDamage * 2 / 3)).toFixed(1);

        setDamage(damage);
        setCriticalDamage(damageCritical);
        setDps(dps);

        // 최종 DPS 적용
        props.setTotalDpsArrIndex(props.index, dps);
    }

    const typeData = [
        '기본','근접','낙하','버프','범위','실드','투사체'
    ]

    return (
        <div className="border-2 border-gray-900 rounded-lg w-full h-full p-3">
            <div className="md:flex">
                <img src={require(`../../assets/images/skills/${skillDataList[selectSkillIndex].skill.skillId}.png`)} className="w-14 h-14 object-cover border rounded-lg border-gray-900 mx-auto md:mx-0" alt={'스킬선택'}></img>
                <div className="w-full mt-1 md:mt-0 md:ml-1 grid grid-rows-2 gap-1 h-14">
                    <select className="w-full border rounded-lg border-gray-900 text-gray-700 text-sm" onChange={onChangeSkill} value={selectSkillIndex}>
                    {typeData.map((type, index) => {
                        return (
                            type !== '기본'
                            ?
                                <optgroup label={type} key={index}>
                                {props.skillDataList.map((skill, index) => {
                                    return (
                                        type === skill.skill.type 
                                        ?
                                            <option
                                                key={index}
                                                value={index}
                                            >
                                                {skill.skill.skillName}
                                            </option>
                                        :
                                            null
                                    )
                                })}
                                </optgroup>
                            :
                                <Fragment key={index}>
                                {props.skillDataList.map((skill, index) => {
                                    return (
                                        type === skill.skill.type 
                                        ?
                                            <option
                                                key={index}
                                                value={index}
                                            >
                                                {skill.skill.skillName}
                                            </option>
                                        :
                                            null
                                    )
                                })}
                                </Fragment>
                        )
                    })}
                    </select>
                    <Compatibility setCompatibility={setCompatibility} selectSkill={skillDataList[selectSkillIndex]}/>
                </div>
            </div>

            <div className="mt-5">
                <dl className="-my-3 divide-y divide-gray-900 text-sm">
                    <div className="md:flex gap-1 py-1 justify-between">
                        <dt className="font-medium text-gray-900 text-center md:text-left">대미지</dt>
                        <dd className="text-gray-700 text-center md:text-right">{_damage}</dd>
                    </div>

                    <div className="md:flex gap-1 py-1 justify-between">
                        <dt className="font-medium text-gray-900 text-center md:text-left">치명타</dt>
                        <dd className="text-gray-700 text-center md:text-right">{_criticalDamage}</dd>
                    </div>

                    <div className="md:flex gap-1 py-1 justify-between">
                        <dt className="font-medium text-gray-900 text-center md:text-left">DPS</dt>
                        <dd className="text-gray-700 text-center md:text-right">{_dps}</dd>
                    </div>
                </dl>
            </div>
        </div>
    )
}