import { useEffect, useState } from "react";
import Compatibility from "./Compatibility";

export default function SelectSkill(props) {

    const [_damage, setDamage] = useState(0);
    const [_criticalDamage, setCriticalDamage] = useState(0);
    const [_dps, setDps] = useState(0);

    // 스탯 데이터 초기화
    const [statData, setStatData] = useState(props.stats)
    useEffect(() => {
        setStatData(props.stats)
        // console.log('statData', statData)
    }, [props.stats])

    // 스킬 데이터 초기화
    const [skillData, setSkillData] = useState(props.skillsData);
    useEffect(() => {
        setSkillData(props.skillsData)
        // console.log('skillData', skillData)
    }, [props.skillsData])

    // 노말OR보스 여부 초기화
    const [normalOrBoss, setNormalOrBoss] = useState('N')
    useEffect(() => {
        setNormalOrBoss(props.normalOrBoss)
        // console.log('normalOrBoss', normalOrBoss)
    }, [props.normalOrBoss])

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

    // 스킬 계수 계산
    const calcCoefficient = (skill) => {
        const { defaultCoefficient, level } = skill;

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

        return (Number(defaultCoefficient) + Number(defaultCoefficient) * Number(addCoefficient)).toFixed(2);
    }

    useEffect(() => {
        if (skillData[selectSkillIndex].id === 'default') return;
        calc();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectSkillIndex, skillData, statData, normalOrBoss, compatibility])

    // 계산
    const calc = () => {
        // 스탯
        const attack = statData.find(v => v.id === 'attack').value
        const criticalRate = statData.find(v => v.id === 'criticalRate').value / 100
        const criticalDamage = statData.find(v => v.id === 'criticalDamage').value / 100
        const bossAttack = statData.find(v => v.id === 'bossAttack').value / 100
        const allDamageRate = statData.find(v => v.id === 'allDamageRate').value / 100
        const skillDamageRate = statData.find(v => v.id === 'skillDamageRate').value / 100
        const meleeDamageRate = statData.find(v => v.id === 'meleeDamageRate').value / 100
        const rangedDamageRate = statData.find(v => v.id === 'rangedDamageRate').value / 100

        const fireDamageRate = statData.find(v => v.id === 'fireDamageRate').value / 100
        const waterDamageRate = statData.find(v => v.id === 'waterDamageRate').value / 100
        const windDamageRate = statData.find(v => v.id === 'windDamageRate').value / 100
        const groundDamageRate = statData.find(v => v.id === 'groundDamageRate').value / 100
        const electricDamageRate = statData.find(v => v.id === 'electricDamageRate').value / 100
        const iceDamageRate = statData.find(v => v.id === 'iceDamageRate').value / 100
        const plantDamageRate = statData.find(v => v.id === 'plantDamageRate').value / 100
        const poisonDamageRate = statData.find(v => v.id === 'poisonDamageRate').value / 100
        const lightDamageRate = statData.find(v => v.id === 'lightDamageRate').value / 100
        const darknessDamageRate = statData.find(v => v.id === 'darknessDamageRate').value / 100

        // 선택한 스킬 정보
        const totalCoefficient = Number(calcCoefficient(skillData[selectSkillIndex]));
        const type = skillData[selectSkillIndex].type;
        const attribute = skillData[selectSkillIndex].attribute;
        const hitCnt = Number(skillData[selectSkillIndex].hitCnt);
        const cooldown = Number(skillData[selectSkillIndex].cooldown);

        // 거리별 대미지
        const distanceDamage = type === '근접' ? meleeDamageRate : rangedDamageRate;
        // 보스공격대미지
        const bossAttackDamage = normalOrBoss === 'B' ? 1 + bossAttack : 1;
        // 버프스킬
        let buffDamage = 0;
        for (let skillIndex of skillArr) {
            if (skillIndex !== undefined && skillData[skillIndex].type === '버프') {
                buffDamage = attribute === skillData[skillIndex].attribute ? calcCoefficient(skillData[skillIndex]) / 100 : 0;
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
    return (
        <div className="border-2 border-gray-900 rounded-lg w-full h-full p-3">
            <div className="md:flex">
                <img src={require(`../../assets/images/skills/${skillData[selectSkillIndex].id}.png`)} className="w-14 h-14 object-cover border rounded-lg border-gray-900 mx-auto md:mx-0" alt={'스킬선택'}></img>
                <div className="w-full mt-1 md:mt-0 md:ml-1 grid grid-rows-2 gap-1 h-14">
                    <select className="w-full border rounded-lg border-gray-900 text-gray-700 text-sm" onChange={onChangeSkill} value={selectSkillIndex}>
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
                    <Compatibility setCompatibility={setCompatibility} selectSkill={skillData[selectSkillIndex]}/>
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