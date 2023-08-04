import { useEffect, useState } from "react"

import Stats from "./Stats"
import Skills from "./Skills"
import SelectSection from "./SelectSection"

export default function DpsCalculator(){

    // 캐릭터 스탯
    const [stats, setStats] = useState([
        { name: '공격력', id: 'attack', value: 2164}
        , {name: '공격 속도', id: 'attackSpeed', value: 65}
        , {name: '치명타 확률', id: 'criticalRate', value: 57.8}
        , {name: '치명타 대미지', id: 'criticalDamage', value: 526.5}
        , {name: '보스 대상 공격력', id: 'bossAttack', value: 58}
        , {name: '모든 대미지%', id: 'allDamageRate', value: 62}
        , {name: '스킬 대미지%', id: 'skillDamageRate', value: 125.6}
        , {name: '기본 공격 대미지%', id: 'NormalAttackDamageRate', value: 62}
        , {name: '근거리 대미지%', id: 'meleeDamageRate', value: 0}
        , {name: '원거리 대미지%', id: 'rangedDamageRate', value: 46.4}
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
        , {id: 'S01', name: '트리플 플래쉬', type: '근접', attribute: '무', hitCnt: '3', cooldown: '5', defaultValue: '2'}
        , {id: 'S02', name: '파이어 봄', type: '근접', attribute: '불', hitCnt: '1', cooldown: '3', defaultValue: '3.5'}
        , {id: 'S03', name: '아쿠아 슬랩', type: '근접', attribute: '물', hitCnt: '2', cooldown: '2', defaultValue: '0.8'}
        , {id: 'S04', name: '스톤 드롭', type: '근접', attribute: '땅', hitCnt: '1', cooldown: '4.5', defaultValue: '2'}
        , {id: 'S05', name: '윈드 커터', type: '근접', attribute: '바람', hitCnt: '3', cooldown: '1.5', defaultValue: '0.3'}
        , {id: 'S06', name: '아이스 윙', type: '근접', attribute: '얼음', hitCnt: '1', cooldown: '4', defaultValue: '1.5'}
        , {id: 'S07', name: '일렉트릭 쇼크', type: '근접', attribute: '번개', hitCnt: '3', cooldown: '3', defaultValue: '0.5'}
        , {id: 'S08', name: '플랜트 엣지', type: '근접', attribute: '식물', hitCnt: '1', cooldown: '4', defaultValue: '1.75'}
        , {id: 'S09', name: '포이즌 스윙', type: '근접', attribute: '독', hitCnt: '1', cooldown: '1', defaultValue: '1.5'}
        , {id: 'S10', name: '홀리 플래쉬', type: '근접', attribute: '빛', hitCnt: '7', cooldown: '5', defaultValue: '0.8'}
        , {id: 'S11', name: '다크 운드', type: '근접', attribute: '어둠', hitCnt: '5', cooldown: '5', defaultValue: '0.5'}
        , {id: 'S12', name: '퍼니쉬먼트', type: '낙하', attribute: '무', hitCnt: '1', cooldown: '5', defaultValue: '4'}
        , {id: 'S13', name: '메테오', type: '낙하', attribute: '불', hitCnt: '1', cooldown: '5', defaultValue: '5'}
        , {id: 'S14', name: '워터 존', type: '낙하', attribute: '물', hitCnt: '1', cooldown: '5', defaultValue: '4'}
        , {id: 'S15', name: '락 필라', type: '낙하', attribute: '땅', hitCnt: '1', cooldown: '6', defaultValue: '4'}
        , {id: 'S16', name: '윈드 토네이도', type: '낙하', attribute: '바람', hitCnt: '6', cooldown: '8', defaultValue: '1'}
        , {id: 'S17', name: '아이스 애로우', type: '낙하', attribute: '얼음', hitCnt: '6', cooldown: '4', defaultValue: '0.8'}
        , {id: 'S18', name: '일렉트릭 스톰', type: '낙하', attribute: '번개', hitCnt: '5', cooldown: '12', defaultValue: '0.75'}
        , {id: 'S19', name: '데들리 루츠', type: '낙하', attribute: '식물', hitCnt: '3', cooldown: '4', defaultValue: '1'}
        , {id: 'S20', name: '포이즌 스톰', type: '낙하', attribute: '독', hitCnt: '5', cooldown: '12', defaultValue: '0.7'}
        , {id: 'S21', name: '저지먼트', type: '낙하', attribute: '빛', hitCnt: '3', cooldown: '3', defaultValue: '0.65'}
        , {id: 'S22', name: '데스 존', type: '낙하', attribute: '어둠', hitCnt: '5', cooldown: '8', defaultValue: '0.5'}
        , {id: 'S23', name: '버프 노말', type: '버프', attribute: '무', hitCnt: '0', cooldown: '10', defaultValue: '2.5'}
        , {id: 'S24', name: '버프 파이어', type: '버프', attribute: '불', hitCnt: '0', cooldown: '30', defaultValue: '30'}
        , {id: 'S25', name: '버프 워터', type: '버프', attribute: '물', hitCnt: '0', cooldown: '30', defaultValue: '30'}
        , {id: 'S26', name: '버프 그라운드', type: '버프', attribute: '땅', hitCnt: '0', cooldown: '30', defaultValue: '30'}
        , {id: 'S27', name: '버프 윈드', type: '버프', attribute: '바람', hitCnt: '0', cooldown: '30', defaultValue: '30'}
        , {id: 'S28', name: '버프 아이스', type: '버프', attribute: '얼음', hitCnt: '0', cooldown: '30', defaultValue: '30'}
        , {id: 'S29', name: '버프 일렉트릭', type: '버프', attribute: '번개', hitCnt: '0', cooldown: '30', defaultValue: '30'}
        , {id: 'S30', name: '버프 플랜트', type: '버프', attribute: '식물', hitCnt: '0', cooldown: '30', defaultValue: '30'}
        , {id: 'S31', name: '버프 포이즌', type: '버프', attribute: '독', hitCnt: '0', cooldown: '30', defaultValue: '30'}
        , {id: 'S32', name: '버프 라이트', type: '버프', attribute: '빛', hitCnt: '0', cooldown: '30', defaultValue: '30'}
        , {id: 'S33', name: '버프 다크니스', type: '버프', attribute: '어둠', hitCnt: '0', cooldown: '30', defaultValue: '30'}
        , {id: 'S34', name: '파워 스트라이크', type: '범위', attribute: '무', hitCnt: '2', cooldown: '1.5', defaultValue: '0.6'}
        , {id: 'S35', name: '파이어 불릿', type: '범위', attribute: '불', hitCnt: '3', cooldown: '4', defaultValue: '1.5'}
        , {id: 'S36', name: '웨일 웨이브', type: '범위', attribute: '물', hitCnt: '3', cooldown: '8', defaultValue: '1.5'}
        , {id: 'S37', name: '불도즈', type: '범위', attribute: '땅', hitCnt: '3', cooldown: '6', defaultValue: '2'}
        , {id: 'S38', name: '윈드 허리케인', type: '범위', attribute: '바람', hitCnt: '3', cooldown: '6', defaultValue: '0.5'}
        , {id: 'S39', name: '아이스 에이지', type: '범위', attribute: '얼음', hitCnt: '2', cooldown: '10', defaultValue: '3'}
        , {id: 'S40', name: '라이트닝 체인', type: '범위', attribute: '번개', hitCnt: '5', cooldown: '2', defaultValue: '0.4'}
        , {id: 'S41', name: '블루밍', type: '범위', attribute: '식물', hitCnt: '3', cooldown: '7', defaultValue: '1'}
        , {id: 'S42', name: '포이즌 봄', type: '범위', attribute: '독', hitCnt: '1', cooldown: '6', defaultValue: '6'}
        , {id: 'S43', name: '디바인 시피어', type: '범위', attribute: '빛', hitCnt: '1', cooldown: '2', defaultValue: '2'}
        , {id: 'S44', name: '보이드', type: '범위', attribute: '어둠', hitCnt: '3', cooldown: '1.8', defaultValue: '0.35'}
        , {id: 'S45', name: '실드 노말', type: '실드', attribute: '무', hitCnt: '0', cooldown: '10', defaultValue: '25'}
        , {id: 'S46', name: '실드 파이어', type: '실드', attribute: '불', hitCnt: '0', cooldown: '10', defaultValue: '50'}
        , {id: 'S47', name: '실드 워터', type: '실드', attribute: '물', hitCnt: '0', cooldown: '10', defaultValue: '50'}
        , {id: 'S48', name: '실드 그라운드', type: '실드', attribute: '땅', hitCnt: '0', cooldown: '10', defaultValue: '50'}
        , {id: 'S49', name: '실드 윈드', type: '실드', attribute: '바람', hitCnt: '0', cooldown: '10', defaultValue: '50'}
        , {id: 'S50', name: '실드 아이스', type: '실드', attribute: '얼음', hitCnt: '0', cooldown: '10', defaultValue: '50'}
        , {id: 'S51', name: '실드 일렉트릭', type: '실드', attribute: '번개', hitCnt: '0', cooldown: '10', defaultValue: '50'}
        , {id: 'S52', name: '실드 플랜트', type: '실드', attribute: '식물', hitCnt: '0', cooldown: '10', defaultValue: '50'}
        , {id: 'S53', name: '실드 포이즌', type: '실드', attribute: '독', hitCnt: '0', cooldown: '10', defaultValue: '50'}
        , {id: 'S54', name: '실드 라이트', type: '실드', attribute: '빛', hitCnt: '0', cooldown: '10', defaultValue: '50'}
        , {id: 'S55', name: '실드 다크니스', type: '실드', attribute: '어둠', hitCnt: '0', cooldown: '10', defaultValue: '50'}
        , {id: 'S56', name: '파이널 애로우', type: '투사체', attribute: '무', hitCnt: '1', cooldown: '2.5', defaultValue: '5'}
        , {id: 'S57', name: '플레임 볼', type: '투사체', attribute: '불', hitCnt: '1', cooldown: '1.5', defaultValue: '2'}
        , {id: 'S58', name: '아쿠아 볼', type: '투사체', attribute: '물', hitCnt: '1', cooldown: '1.8', defaultValue: '2.2'}
        , {id: 'S59', name: '머드 샷', type: '투사체', attribute: '땅', hitCnt: '4', cooldown: '2.5', defaultValue: '1'}
        , {id: 'S60', name: '거스트 애로우', type: '투사체', attribute: '바람', hitCnt: '1', cooldown: '1', defaultValue: '1.3'}
        , {id: 'S61', name: '아이시클 스피어', type: '투사체', attribute: '얼음', hitCnt: '3', cooldown: '6', defaultValue: '2'}
        , {id: 'S62', name: '일렉트릭 샷', type: '투사체', attribute: '번개', hitCnt: '1', cooldown: '3', defaultValue: '3'}
        , {id: 'S63', name: '로지 데스', type: '투사체', attribute: '식물', hitCnt: '3', cooldown: '3', defaultValue: '0.75'}
        , {id: 'S64', name: '에시딕 볼', type: '투사체', attribute: '독', hitCnt: '1', cooldown: '1.5', defaultValue: '0.77'}
        , {id: 'S65', name: '레이저 빔', type: '투사체', attribute: '빛', hitCnt: '1', cooldown: '2', defaultValue: '2'}
        , {id: 'S66', name: '다크 블레싱', type: '투사체', attribute: '어둠', hitCnt: '1', cooldown: '2.5', defaultValue: '3'}
    ]);
    
    // console.log(skillsData);
    return (
        <div className="pt-10 px-10 flex gap-5 h-[80vh]">
            <div className="w-2/12">
                <Stats 
                    stats={stats}
                    setStats={setStats}
                />
            </div>
            <div className="w-3/12">
                <Skills
                    stats={stats}
                    skillsData={skillsData}
                    setSkillData={setSkillData}
                />
            </div>
            <div className="w-7/12">
                <SelectSection
                    stats={stats}
                    skillsData={skillsData}
                />
            </div>
        </div>
    )
}