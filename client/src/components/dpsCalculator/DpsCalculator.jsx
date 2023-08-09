import { useState } from "react"

import Stats from "./Stats"
import Skills from "./Skills"
import SelectSection from "./SelectSection"

export default function DpsCalculator(){

    // 캐릭터 스탯
    const [stats, setStats] = useState([
        // { name: '공격력', id: 'attack', value: 4846}
        // , {name: '공격 속도', id: 'attackSpeed', value: 130}
        // , {name: '치명타 확률', id: 'criticalRate', value: 81.9}
        // , {name: '치명타 대미지', id: 'criticalDamage', value: 697.6}
        // , {name: '보스 대상 공격력', id: 'bossAttack', value: 0}
        // , {name: '모든 대미지%', id: 'allDamageRate', value: 0}
        // , {name: '스킬 대미지%', id: 'skillDamageRate', value: 139.4}
        // , {name: '기본 공격 대미지%', id: 'normalAttackDamageRate', value: 155.5}
        // , {name: '근거리 대미지%', id: 'meleeDamageRate', value: 0}
        // , {name: '원거리 대미지%', id: 'rangedDamageRate', value: 111.6}
        // , {name: '불 속성 대미지%', id: 'fireDamageRate', value: 0}
        // , {name: '물 속성 대미지%', id: 'waterDamageRate', value: 0}
        // , {name: '바람 속성 대미지%', id: 'windDamageRate', value: 0}
        // , {name: '땅 속성 대미지%', id: 'groundDamageRate', value: 0}
        // , {name: '전기 속성 대미지%', id: 'electricDamageRate', value: 0}
        // , {name: '얼음 속성 대미지%', id: 'iceDamageRate', value: 0}
        // , {name: '식물 속성 대미지%', id: 'plantDamageRate', value: 0}
        // , {name: '독 속성 대미지%', id: 'poisonDamageRate', value: 0}
        // , {name: '빛 속성 대미지%', id: 'lightDamageRate', value: 0}
        // , {name: '어둠 속성 대미지%', id: 'darknessDamageRate', value: 0}
        { name: '공격력', id: 'attack', value: 0}
        , {name: '공격 속도', id: 'attackSpeed', value: 0}
        , {name: '치명타 확률', id: 'criticalRate', value: 0}
        , {name: '치명타 대미지', id: 'criticalDamage', value: 0}
        , {name: '보스 대상 공격력', id: 'bossAttack', value: 0}
        , {name: '모든 대미지%', id: 'allDamageRate', value: 0}
        , {name: '스킬 대미지%', id: 'skillDamageRate', value: 0}
        , {name: '기본 공격 대미지%', id: 'normalAttackDamageRate', value: 0}
        , {name: '근거리 대미지%', id: 'meleeDamageRate', value: 0}
        , {name: '원거리 대미지%', id: 'rangedDamageRate', value: 0}
        , {name: '불 속성 대미지%', id: 'fireDamageRate', value: 0}
        , {name: '물 속성 대미지%', id: 'waterDamageRate', value: 0}
        , {name: '바람 속성 대미지%', id: 'windDamageRate', value: 0}
        , {name: '땅 속성 대미지%', id: 'groundDamageRate', value: 0}
        , {name: '전기 속성 대미지%', id: 'electricDamageRate', value: 0}
        , {name: '얼음 속성 대미지%', id: 'iceDamageRate', value: 0}
        , {name: '식물 속성 대미지%', id: 'plantDamageRate', value: 0}
        , {name: '독 속성 대미지%', id: 'poisonDamageRate', value: 0}
        , {name: '빛 속성 대미지%', id: 'lightDamageRate', value: 0}
        , {name: '어둠 속성 대미지%', id: 'darknessDamageRate', value: 0}
    ]);

    const [skillsData, setSkillData] = useState([
        {id: 'default', name: 'Please select'}
        , {id: 'S01', name: '트리플 플래쉬', type: '근접', attribute: '무', hitCnt: '3', cooldown: '5', defaultCoefficient: '2', level:1}
        , {id: 'S02', name: '파이어 봄', type: '근접', attribute: '불', hitCnt: '1', cooldown: '3', defaultCoefficient: '3.5', level:1}
        , {id: 'S03', name: '아쿠아 슬랩', type: '근접', attribute: '물', hitCnt: '2', cooldown: '2', defaultCoefficient: '0.8', level:1}
        , {id: 'S04', name: '스톤 드롭', type: '근접', attribute: '땅', hitCnt: '1', cooldown: '4.5', defaultCoefficient: '2', level:1}
        , {id: 'S05', name: '윈드 커터', type: '근접', attribute: '바람', hitCnt: '3', cooldown: '1.5', defaultCoefficient: '0.3', level:1}
        , {id: 'S06', name: '아이스 윙', type: '근접', attribute: '얼음', hitCnt: '1', cooldown: '4', defaultCoefficient: '1.5', level:1}
        , {id: 'S07', name: '일렉트릭 쇼크', type: '근접', attribute: '번개', hitCnt: '3', cooldown: '3', defaultCoefficient: '0.5', level:1}
        , {id: 'S08', name: '플랜트 엣지', type: '근접', attribute: '식물', hitCnt: '1', cooldown: '4', defaultCoefficient: '1.75', level:1}
        , {id: 'S09', name: '포이즌 스윙', type: '근접', attribute: '독', hitCnt: '1', cooldown: '1', defaultCoefficient: '1.5', level:1}
        , {id: 'S10', name: '홀리 플래쉬', type: '근접', attribute: '빛', hitCnt: '7', cooldown: '5', defaultCoefficient: '0.8', level:1}
        , {id: 'S11', name: '다크 운드', type: '근접', attribute: '어둠', hitCnt: '5', cooldown: '5', defaultCoefficient: '0.5', level:1}
        , {id: 'S12', name: '퍼니쉬먼트', type: '낙하', attribute: '무', hitCnt: '1', cooldown: '5', defaultCoefficient: '4', level:1}
        , {id: 'S13', name: '메테오', type: '낙하', attribute: '불', hitCnt: '1', cooldown: '5', defaultCoefficient: '5', level:1}
        , {id: 'S14', name: '워터 존', type: '낙하', attribute: '물', hitCnt: '1', cooldown: '5', defaultCoefficient: '4', level:1}
        , {id: 'S15', name: '락 필라', type: '낙하', attribute: '땅', hitCnt: '1', cooldown: '6', defaultCoefficient: '4', level:1}
        , {id: 'S16', name: '윈드 토네이도', type: '낙하', attribute: '바람', hitCnt: '6', cooldown: '8', defaultCoefficient: '1', level:1}
        , {id: 'S17', name: '아이스 애로우', type: '낙하', attribute: '얼음', hitCnt: '6', cooldown: '4', defaultCoefficient: '0.8', level:1}
        , {id: 'S18', name: '일렉트릭 스톰', type: '낙하', attribute: '번개', hitCnt: '5', cooldown: '12', defaultCoefficient: '0.75', level:1}
        , {id: 'S19', name: '데들리 루츠', type: '낙하', attribute: '식물', hitCnt: '3', cooldown: '4', defaultCoefficient: '1', level:1}
        , {id: 'S20', name: '포이즌 스톰', type: '낙하', attribute: '독', hitCnt: '5', cooldown: '12', defaultCoefficient: '0.7', level:1}
        , {id: 'S21', name: '저지먼트', type: '낙하', attribute: '빛', hitCnt: '3', cooldown: '3', defaultCoefficient: '0.65', level:1}
        , {id: 'S22', name: '데스 존', type: '낙하', attribute: '어둠', hitCnt: '5', cooldown: '8', defaultCoefficient: '0.5', level:1}
        , {id: 'S23', name: '버프 노말', type: '버프', attribute: '무', hitCnt: '0', cooldown: '10', defaultCoefficient: '2.5', level:1}
        , {id: 'S24', name: '버프 파이어', type: '버프', attribute: '불', hitCnt: '0', cooldown: '30', defaultCoefficient: '30', level:1}
        , {id: 'S25', name: '버프 워터', type: '버프', attribute: '물', hitCnt: '0', cooldown: '30', defaultCoefficient: '30', level:1}
        , {id: 'S26', name: '버프 그라운드', type: '버프', attribute: '땅', hitCnt: '0', cooldown: '30', defaultCoefficient: '30', level:1}
        , {id: 'S27', name: '버프 윈드', type: '버프', attribute: '바람', hitCnt: '0', cooldown: '30', defaultCoefficient: '30', level:1}
        , {id: 'S28', name: '버프 아이스', type: '버프', attribute: '얼음', hitCnt: '0', cooldown: '30', defaultCoefficient: '30', level:1}
        , {id: 'S29', name: '버프 일렉트릭', type: '버프', attribute: '번개', hitCnt: '0', cooldown: '30', defaultCoefficient: '30', level:1}
        , {id: 'S30', name: '버프 플랜트', type: '버프', attribute: '식물', hitCnt: '0', cooldown: '30', defaultCoefficient: '30', level:1}
        , {id: 'S31', name: '버프 포이즌', type: '버프', attribute: '독', hitCnt: '0', cooldown: '30', defaultCoefficient: '30', level:1}
        , {id: 'S32', name: '버프 라이트', type: '버프', attribute: '빛', hitCnt: '0', cooldown: '30', defaultCoefficient: '30', level:1}
        , {id: 'S33', name: '버프 다크니스', type: '버프', attribute: '어둠', hitCnt: '0', cooldown: '30', defaultCoefficient: '30', level:1}
        , {id: 'S34', name: '파워 스트라이크', type: '범위', attribute: '무', hitCnt: '2', cooldown: '1.5', defaultCoefficient: '0.6', level:1}
        , {id: 'S35', name: '파이어 불릿', type: '범위', attribute: '불', hitCnt: '3', cooldown: '4', defaultCoefficient: '1.5', level:1}
        , {id: 'S36', name: '웨일 웨이브', type: '범위', attribute: '물', hitCnt: '3', cooldown: '8', defaultCoefficient: '1.5', level:1}
        , {id: 'S37', name: '불도즈', type: '범위', attribute: '땅', hitCnt: '3', cooldown: '6', defaultCoefficient: '2', level:1}
        , {id: 'S38', name: '윈드 허리케인', type: '범위', attribute: '바람', hitCnt: '3', cooldown: '6', defaultCoefficient: '0.5', level:1}
        , {id: 'S39', name: '아이스 에이지', type: '범위', attribute: '얼음', hitCnt: '2', cooldown: '10', defaultCoefficient: '3', level:1}
        , {id: 'S40', name: '라이트닝 체인', type: '범위', attribute: '번개', hitCnt: '5', cooldown: '2', defaultCoefficient: '0.4', level:1}
        , {id: 'S41', name: '블루밍', type: '범위', attribute: '식물', hitCnt: '3', cooldown: '7', defaultCoefficient: '1', level:1}
        , {id: 'S42', name: '포이즌 봄', type: '범위', attribute: '독', hitCnt: '1', cooldown: '6', defaultCoefficient: '6', level:1}
        , {id: 'S43', name: '디바인 시피어', type: '범위', attribute: '빛', hitCnt: '1', cooldown: '2', defaultCoefficient: '2', level:1}
        , {id: 'S44', name: '보이드', type: '범위', attribute: '어둠', hitCnt: '3', cooldown: '1.8', defaultCoefficient: '0.35', level:1}
        , {id: 'S45', name: '실드 노말', type: '실드', attribute: '무', hitCnt: '0', cooldown: '10', defaultCoefficient: '25', level:1}
        , {id: 'S46', name: '실드 파이어', type: '실드', attribute: '불', hitCnt: '0', cooldown: '10', defaultCoefficient: '50', level:1}
        , {id: 'S47', name: '실드 워터', type: '실드', attribute: '물', hitCnt: '0', cooldown: '10', defaultCoefficient: '50', level:1}
        , {id: 'S48', name: '실드 그라운드', type: '실드', attribute: '땅', hitCnt: '0', cooldown: '10', defaultCoefficient: '50', level:1}
        , {id: 'S49', name: '실드 윈드', type: '실드', attribute: '바람', hitCnt: '0', cooldown: '10', defaultCoefficient: '50', level:1}
        , {id: 'S50', name: '실드 아이스', type: '실드', attribute: '얼음', hitCnt: '0', cooldown: '10', defaultCoefficient: '50', level:1}
        , {id: 'S51', name: '실드 일렉트릭', type: '실드', attribute: '번개', hitCnt: '0', cooldown: '10', defaultCoefficient: '50', level:1}
        , {id: 'S52', name: '실드 플랜트', type: '실드', attribute: '식물', hitCnt: '0', cooldown: '10', defaultCoefficient: '50', level:1}
        , {id: 'S53', name: '실드 포이즌', type: '실드', attribute: '독', hitCnt: '0', cooldown: '10', defaultCoefficient: '50', level:1}
        , {id: 'S54', name: '실드 라이트', type: '실드', attribute: '빛', hitCnt: '0', cooldown: '10', defaultCoefficient: '50', level:1}
        , {id: 'S55', name: '실드 다크니스', type: '실드', attribute: '어둠', hitCnt: '0', cooldown: '10', defaultCoefficient: '50', level:1}
        , {id: 'S56', name: '파이널 애로우', type: '투사체', attribute: '무', hitCnt: '1', cooldown: '2.5', defaultCoefficient: '5', level:1}
        , {id: 'S57', name: '플레임 볼', type: '투사체', attribute: '불', hitCnt: '1', cooldown: '1.5', defaultCoefficient: '2', level:1}
        , {id: 'S58', name: '아쿠아 볼', type: '투사체', attribute: '물', hitCnt: '1', cooldown: '1.8', defaultCoefficient: '2.2', level:1}
        , {id: 'S59', name: '머드 샷', type: '투사체', attribute: '땅', hitCnt: '4', cooldown: '2.5', defaultCoefficient: '1', level:1}
        , {id: 'S60', name: '거스트 애로우', type: '투사체', attribute: '바람', hitCnt: '1', cooldown: '1', defaultCoefficient: '1.3', level:1}
        , {id: 'S61', name: '아이시클 스피어', type: '투사체', attribute: '얼음', hitCnt: '3', cooldown: '6', defaultCoefficient: '2', level:1}
        , {id: 'S62', name: '일렉트릭 샷', type: '투사체', attribute: '번개', hitCnt: '1', cooldown: '3', defaultCoefficient: '3', level:1}
        , {id: 'S63', name: '로지 데스', type: '투사체', attribute: '식물', hitCnt: '3', cooldown: '3', defaultCoefficient: '0.75', level:1}
        , {id: 'S64', name: '에시딕 볼', type: '투사체', attribute: '독', hitCnt: '1', cooldown: '1.5', defaultCoefficient: '0.77', level:1}
        , {id: 'S65', name: '레이저 빔', type: '투사체', attribute: '빛', hitCnt: '1', cooldown: '2', defaultCoefficient: '2', level:1}
        , {id: 'S66', name: '다크 블레싱', type: '투사체', attribute: '어둠', hitCnt: '1', cooldown: '2.5', defaultCoefficient: '3', level:1}
    ]);
    
    // console.log(skillsData);
    return (
        <div className="pt-10 px-10 xl:flex gap-5 xl:h-[80vh]">
            <div className="md:flex gap-5 w-full md:h-screen xl:w-5/12 xl:h-auto">
                <div className="md:w-5/12">
                    <Stats 
                        stats={stats}
                        setStats={setStats}
                    />
                </div>
                <div className="mt-5 md:mt-0 md:w-7/12">
                    <Skills
                        stats={stats}
                        skillsData={skillsData}
                        setSkillData={setSkillData}
                    />
                </div>
            </div>
            <div className="mt-5 xl:mt-0 xl:w-7/12">
                <SelectSection
                    stats={stats}
                    skillsData={skillsData}
                />
            </div>
        </div>
    )
}