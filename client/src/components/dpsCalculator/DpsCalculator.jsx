import { useState } from "react"

import Stats from "./Stats"
import Skills from "./Skills"
import SelectSection from "./SelectSection"

export default function DpsCalculator(){

    // 캐릭터 스탯
    const [statDataList, setStatDataList] = useState([
        {
            "user": null,
            "stat": {
                "statId": "attack",
                "name": "공격력",
                "seq": 1
            },
            "value": 0,
            "userStatDtoList": null
        },
        {
            "user": null,
            "stat": {
                "statId": "attackSpeed",
                "name": "공격 속도",
                "seq": 2
            },
            "value": 0,
            "userStatDtoList": null
        },
        {
            "user": null,
            "stat": {
                "statId": "criticalRate",
                "name": "치명타 확률",
                "seq": 3
            },
            "value": 0,
            "userStatDtoList": null
        },
        {
            "user": null,
            "stat": {
                "statId": "criticalDamage",
                "name": "치명타 대미지",
                "seq": 4
            },
            "value": 0,
            "userStatDtoList": null
        },
        {
            "user": null,
            "stat": {
                "statId": "bossAttack",
                "name": "보스 대상 공격력",
                "seq": 5
            },
            "value": 0,
            "userStatDtoList": null
        },
        {
            "user": null,
            "stat": {
                "statId": "allDamageRate",
                "name": "모든 대미지%",
                "seq": 6
            },
            "value": 0,
            "userStatDtoList": null
        },
        {
            "user": null,
            "stat": {
                "statId": "skillDamageRate",
                "name": "스킬 대미지%",
                "seq": 7
            },
            "value": 0,
            "userStatDtoList": null
        },
        {
            "user": null,
            "stat": {
                "statId": "normalAttackDamageRate",
                "name": "기본 공격 대미지%",
                "seq": 8
            },
            "value": 0,
            "userStatDtoList": null
        },
        {
            "user": null,
            "stat": {
                "statId": "meleeDamageRate",
                "name": "근거리 대미지%",
                "seq": 9
            },
            "value": 0,
            "userStatDtoList": null
        },
        {
            "user": null,
            "stat": {
                "statId": "rangedDamageRate",
                "name": "원거리 대미지%",
                "seq": 10
            },
            "value": 0,
            "userStatDtoList": null
        },
        {
            "user": null,
            "stat": {
                "statId": "fireDamageRate",
                "name": "불 속성 대미지%",
                "seq": 11
            },
            "value": 0,
            "userStatDtoList": null
        },
        {
            "user": null,
            "stat": {
                "statId": "waterDamageRate",
                "name": "물 속성 대미지%",
                "seq": 12
            },
            "value": 0,
            "userStatDtoList": null
        },
        {
            "user": null,
            "stat": {
                "statId": "windDamageRate",
                "name": "바람 속성 대미지%",
                "seq": 13
            },
            "value": 0,
            "userStatDtoList": null
        },
        {
            "user": null,
            "stat": {
                "statId": "groundDamageRate",
                "name": "땅 속성 대미지%",
                "seq": 14
            },
            "value": 0,
            "userStatDtoList": null
        },
        {
            "user": null,
            "stat": {
                "statId": "electricDamageRate",
                "name": "전기 속성 대미지%",
                "seq": 15
            },
            "value": 0,
            "userStatDtoList": null
        },
        {
            "user": null,
            "stat": {
                "statId": "iceDamageRate",
                "name": "얼음 속성 대미지%",
                "seq": 16
            },
            "value": 0,
            "userStatDtoList": null
        },
        {
            "user": null,
            "stat": {
                "statId": "plantDamageRate",
                "name": "식물 속성 대미지%",
                "seq": 17
            },
            "value": 0,
            "userStatDtoList": null
        },
        {
            "user": null,
            "stat": {
                "statId": "poisonDamageRate",
                "name": "독 속성 대미지%",
                "seq": 18
            },
            "value": 0,
            "userStatDtoList": null
        },
        {
            "user": null,
            "stat": {
                "statId": "lightDamageRate",
                "name": "빛 속성 대미지%",
                "seq": 19
            },
            "value": 0,
            "userStatDtoList": null
        },
        {
            "user": null,
            "stat": {
                "statId": "darknessDamageRate",
                "name": "어둠 속성 대미지%",
                "seq": 20
            },
            "value": 0,
            "userStatDtoList": null
        }
    ]);

    const [skillDataList, setSkillDataList] = useState([
        {
            "user": null,
            "skill": {
                "skillId": "S00",
                "skillName": "Please select",
                "type": "기본",
                "attribute": "",
                "hitCnt": 0,
                "cooldown": 0.0,
                "coefficient": 0.0
            },
            "level": 0
        },
        {
            "user": null,
            "skill": {
                "skillId": "S01",
                "skillName": "트리플 플래쉬",
                "type": "근접",
                "attribute": "무",
                "hitCnt": 3,
                "cooldown": 5.0,
                "coefficient": 2.0
            },
            "level": 0
        },
        {
            "user": null,
            "skill": {
                "skillId": "S02",
                "skillName": "파이어 봄",
                "type": "근접",
                "attribute": "불",
                "hitCnt": 1,
                "cooldown": 3.0,
                "coefficient": 3.5
            },
            "level": 0
        },
        {
            "user": null,
            "skill": {
                "skillId": "S03",
                "skillName": "아쿠아 슬랩",
                "type": "근접",
                "attribute": "물",
                "hitCnt": 2,
                "cooldown": 2.0,
                "coefficient": 0.8
            },
            "level": 0
        },
        {
            "user": null,
            "skill": {
                "skillId": "S04",
                "skillName": "스톤 드롭",
                "type": "근접",
                "attribute": "땅",
                "hitCnt": 1,
                "cooldown": 4.5,
                "coefficient": 2.0
            },
            "level": 0
        },
        {
            "user": null,
            "skill": {
                "skillId": "S05",
                "skillName": "윈드 커터",
                "type": "근접",
                "attribute": "바람",
                "hitCnt": 3,
                "cooldown": 1.5,
                "coefficient": 0.3
            },
            "level": 0
        },
        {
            "user": null,
            "skill": {
                "skillId": "S06",
                "skillName": "아이스 윙",
                "type": "근접",
                "attribute": "얼음",
                "hitCnt": 1,
                "cooldown": 4.0,
                "coefficient": 1.5
            },
            "level": 0
        },
        {
            "user": null,
            "skill": {
                "skillId": "S07",
                "skillName": "일렉트릭 쇼크",
                "type": "근접",
                "attribute": "번개",
                "hitCnt": 3,
                "cooldown": 3.0,
                "coefficient": 0.5
            },
            "level": 0
        },
        {
            "user": null,
            "skill": {
                "skillId": "S08",
                "skillName": "플랜트 엣지",
                "type": "근접",
                "attribute": "식물",
                "hitCnt": 1,
                "cooldown": 4.0,
                "coefficient": 1.75
            },
            "level": 0
        },
        {
            "user": null,
            "skill": {
                "skillId": "S09",
                "skillName": "포이즌 스윙",
                "type": "근접",
                "attribute": "독",
                "hitCnt": 1,
                "cooldown": 1.0,
                "coefficient": 1.5
            },
            "level": 0
        },
        {
            "user": null,
            "skill": {
                "skillId": "S10",
                "skillName": "홀리 플래쉬",
                "type": "근접",
                "attribute": "빛",
                "hitCnt": 7,
                "cooldown": 5.0,
                "coefficient": 0.8
            },
            "level": 0
        },
        {
            "user": null,
            "skill": {
                "skillId": "S11",
                "skillName": "다크 운드",
                "type": "근접",
                "attribute": "어둠",
                "hitCnt": 5,
                "cooldown": 5.0,
                "coefficient": 0.5
            },
            "level": 0
        },
        {
            "user": null,
            "skill": {
                "skillId": "S12",
                "skillName": "퍼니쉬먼트",
                "type": "낙하",
                "attribute": "무",
                "hitCnt": 1,
                "cooldown": 5.0,
                "coefficient": 4.0
            },
            "level": 0
        },
        {
            "user": null,
            "skill": {
                "skillId": "S13",
                "skillName": "메테오",
                "type": "낙하",
                "attribute": "불",
                "hitCnt": 1,
                "cooldown": 5.0,
                "coefficient": 5.0
            },
            "level": 0
        },
        {
            "user": null,
            "skill": {
                "skillId": "S14",
                "skillName": "워터 존",
                "type": "낙하",
                "attribute": "물",
                "hitCnt": 1,
                "cooldown": 5.0,
                "coefficient": 4.0
            },
            "level": 0
        },
        {
            "user": null,
            "skill": {
                "skillId": "S15",
                "skillName": "락 필라",
                "type": "낙하",
                "attribute": "땅",
                "hitCnt": 1,
                "cooldown": 6.0,
                "coefficient": 4.0
            },
            "level": 0
        },
        {
            "user": null,
            "skill": {
                "skillId": "S16",
                "skillName": "윈드 토네이도",
                "type": "낙하",
                "attribute": "바람",
                "hitCnt": 6,
                "cooldown": 8.0,
                "coefficient": 1.0
            },
            "level": 0
        },
        {
            "user": null,
            "skill": {
                "skillId": "S17",
                "skillName": "아이스 애로우",
                "type": "낙하",
                "attribute": "얼음",
                "hitCnt": 6,
                "cooldown": 4.0,
                "coefficient": 0.8
            },
            "level": 0
        },
        {
            "user": null,
            "skill": {
                "skillId": "S18",
                "skillName": "일렉트릭 스톰",
                "type": "낙하",
                "attribute": "번개",
                "hitCnt": 5,
                "cooldown": 12.0,
                "coefficient": 0.75
            },
            "level": 0
        },
        {
            "user": null,
            "skill": {
                "skillId": "S19",
                "skillName": "데들리 루츠",
                "type": "낙하",
                "attribute": "식물",
                "hitCnt": 3,
                "cooldown": 4.0,
                "coefficient": 1.0
            },
            "level": 0
        },
        {
            "user": null,
            "skill": {
                "skillId": "S20",
                "skillName": "포이즌 스톰",
                "type": "낙하",
                "attribute": "독",
                "hitCnt": 5,
                "cooldown": 12.0,
                "coefficient": 0.7
            },
            "level": 0
        },
        {
            "user": null,
            "skill": {
                "skillId": "S21",
                "skillName": "저지먼트",
                "type": "낙하",
                "attribute": "빛",
                "hitCnt": 3,
                "cooldown": 3.0,
                "coefficient": 0.65
            },
            "level": 0
        },
        {
            "user": null,
            "skill": {
                "skillId": "S22",
                "skillName": "데스 존",
                "type": "낙하",
                "attribute": "어둠",
                "hitCnt": 5,
                "cooldown": 8.0,
                "coefficient": 0.5
            },
            "level": 0
        },
        {
            "user": null,
            "skill": {
                "skillId": "S23",
                "skillName": "버프 노말",
                "type": "버프",
                "attribute": "무",
                "hitCnt": 0,
                "cooldown": 10.0,
                "coefficient": 2.5
            },
            "level": 0
        },
        {
            "user": null,
            "skill": {
                "skillId": "S24",
                "skillName": "버프 파이어",
                "type": "버프",
                "attribute": "불",
                "hitCnt": 0,
                "cooldown": 30.0,
                "coefficient": 30.0
            },
            "level": 0
        },
        {
            "user": null,
            "skill": {
                "skillId": "S25",
                "skillName": "버프 워터",
                "type": "버프",
                "attribute": "물",
                "hitCnt": 0,
                "cooldown": 30.0,
                "coefficient": 30.0
            },
            "level": 0
        },
        {
            "user": null,
            "skill": {
                "skillId": "S26",
                "skillName": "버프 그라운드",
                "type": "버프",
                "attribute": "땅",
                "hitCnt": 0,
                "cooldown": 30.0,
                "coefficient": 30.0
            },
            "level": 0
        },
        {
            "user": null,
            "skill": {
                "skillId": "S27",
                "skillName": "버프 윈드",
                "type": "버프",
                "attribute": "바람",
                "hitCnt": 0,
                "cooldown": 30.0,
                "coefficient": 30.0
            },
            "level": 0
        },
        {
            "user": null,
            "skill": {
                "skillId": "S28",
                "skillName": "버프 아이스",
                "type": "버프",
                "attribute": "얼음",
                "hitCnt": 0,
                "cooldown": 30.0,
                "coefficient": 30.0
            },
            "level": 0
        },
        {
            "user": null,
            "skill": {
                "skillId": "S29",
                "skillName": "버프 일렉트릭",
                "type": "버프",
                "attribute": "번개",
                "hitCnt": 0,
                "cooldown": 30.0,
                "coefficient": 30.0
            },
            "level": 0
        },
        {
            "user": null,
            "skill": {
                "skillId": "S30",
                "skillName": "버프 플랜트",
                "type": "버프",
                "attribute": "식물",
                "hitCnt": 0,
                "cooldown": 30.0,
                "coefficient": 30.0
            },
            "level": 0
        },
        {
            "user": null,
            "skill": {
                "skillId": "S31",
                "skillName": "버프 포이즌",
                "type": "버프",
                "attribute": "독",
                "hitCnt": 0,
                "cooldown": 30.0,
                "coefficient": 30.0
            },
            "level": 0
        },
        {
            "user": null,
            "skill": {
                "skillId": "S32",
                "skillName": "버프 라이트",
                "type": "버프",
                "attribute": "빛",
                "hitCnt": 0,
                "cooldown": 30.0,
                "coefficient": 30.0
            },
            "level": 0
        },
        {
            "user": null,
            "skill": {
                "skillId": "S33",
                "skillName": "버프 다크니스",
                "type": "버프",
                "attribute": "어둠",
                "hitCnt": 0,
                "cooldown": 30.0,
                "coefficient": 30.0
            },
            "level": 0
        },
        {
            "user": null,
            "skill": {
                "skillId": "S34",
                "skillName": "파워 스트라이크",
                "type": "범위",
                "attribute": "무",
                "hitCnt": 2,
                "cooldown": 1.5,
                "coefficient": 0.6
            },
            "level": 0
        },
        {
            "user": null,
            "skill": {
                "skillId": "S35",
                "skillName": "파이어 불릿",
                "type": "범위",
                "attribute": "불",
                "hitCnt": 3,
                "cooldown": 4.0,
                "coefficient": 1.5
            },
            "level": 0
        },
        {
            "user": null,
            "skill": {
                "skillId": "S36",
                "skillName": "웨일 웨이브",
                "type": "범위",
                "attribute": "물",
                "hitCnt": 3,
                "cooldown": 8.0,
                "coefficient": 1.5
            },
            "level": 0
        },
        {
            "user": null,
            "skill": {
                "skillId": "S37",
                "skillName": "불도즈",
                "type": "범위",
                "attribute": "땅",
                "hitCnt": 3,
                "cooldown": 6.0,
                "coefficient": 2.0
            },
            "level": 0
        },
        {
            "user": null,
            "skill": {
                "skillId": "S38",
                "skillName": "윈드 허리케인",
                "type": "범위",
                "attribute": "바람",
                "hitCnt": 3,
                "cooldown": 6.0,
                "coefficient": 0.5
            },
            "level": 0
        },
        {
            "user": null,
            "skill": {
                "skillId": "S39",
                "skillName": "아이스 에이지",
                "type": "범위",
                "attribute": "얼음",
                "hitCnt": 2,
                "cooldown": 10.0,
                "coefficient": 3.0
            },
            "level": 0
        },
        {
            "user": null,
            "skill": {
                "skillId": "S40",
                "skillName": "라이트닝 체인",
                "type": "범위",
                "attribute": "번개",
                "hitCnt": 5,
                "cooldown": 2.0,
                "coefficient": 0.4
            },
            "level": 0
        },
        {
            "user": null,
            "skill": {
                "skillId": "S41",
                "skillName": "블루밍",
                "type": "범위",
                "attribute": "식물",
                "hitCnt": 3,
                "cooldown": 7.0,
                "coefficient": 1.0
            },
            "level": 0
        },
        {
            "user": null,
            "skill": {
                "skillId": "S42",
                "skillName": "포이즌 봄",
                "type": "범위",
                "attribute": "독",
                "hitCnt": 1,
                "cooldown": 6.0,
                "coefficient": 6.0
            },
            "level": 0
        },
        {
            "user": null,
            "skill": {
                "skillId": "S43",
                "skillName": "디바인 시피어",
                "type": "범위",
                "attribute": "빛",
                "hitCnt": 1,
                "cooldown": 2.0,
                "coefficient": 2.0
            },
            "level": 0
        },
        {
            "user": null,
            "skill": {
                "skillId": "S44",
                "skillName": "보이드",
                "type": "범위",
                "attribute": "어둠",
                "hitCnt": 3,
                "cooldown": 1.8,
                "coefficient": 0.35
            },
            "level": 0
        },
        {
            "user": null,
            "skill": {
                "skillId": "S45",
                "skillName": "실드 노말",
                "type": "실드",
                "attribute": "무",
                "hitCnt": 0,
                "cooldown": 10.0,
                "coefficient": 25.0
            },
            "level": 0
        },
        {
            "user": null,
            "skill": {
                "skillId": "S46",
                "skillName": "실드 파이어",
                "type": "실드",
                "attribute": "불",
                "hitCnt": 0,
                "cooldown": 10.0,
                "coefficient": 50.0
            },
            "level": 0
        },
        {
            "user": null,
            "skill": {
                "skillId": "S47",
                "skillName": "실드 워터",
                "type": "실드",
                "attribute": "물",
                "hitCnt": 0,
                "cooldown": 10.0,
                "coefficient": 50.0
            },
            "level": 0
        },
        {
            "user": null,
            "skill": {
                "skillId": "S48",
                "skillName": "실드 그라운드",
                "type": "실드",
                "attribute": "땅",
                "hitCnt": 0,
                "cooldown": 10.0,
                "coefficient": 50.0
            },
            "level": 0
        },
        {
            "user": null,
            "skill": {
                "skillId": "S49",
                "skillName": "실드 윈드",
                "type": "실드",
                "attribute": "바람",
                "hitCnt": 0,
                "cooldown": 10.0,
                "coefficient": 50.0
            },
            "level": 0
        },
        {
            "user": null,
            "skill": {
                "skillId": "S50",
                "skillName": "실드 아이스",
                "type": "실드",
                "attribute": "얼음",
                "hitCnt": 0,
                "cooldown": 10.0,
                "coefficient": 50.0
            },
            "level": 0
        },
        {
            "user": null,
            "skill": {
                "skillId": "S51",
                "skillName": "실드 일렉트릭",
                "type": "실드",
                "attribute": "번개",
                "hitCnt": 0,
                "cooldown": 10.0,
                "coefficient": 50.0
            },
            "level": 0
        },
        {
            "user": null,
            "skill": {
                "skillId": "S52",
                "skillName": "실드 플랜트",
                "type": "실드",
                "attribute": "식물",
                "hitCnt": 0,
                "cooldown": 10.0,
                "coefficient": 50.0
            },
            "level": 0
        },
        {
            "user": null,
            "skill": {
                "skillId": "S53",
                "skillName": "실드 포이즌",
                "type": "실드",
                "attribute": "독",
                "hitCnt": 0,
                "cooldown": 10.0,
                "coefficient": 50.0
            },
            "level": 0
        },
        {
            "user": null,
            "skill": {
                "skillId": "S54",
                "skillName": "실드 라이트",
                "type": "실드",
                "attribute": "빛",
                "hitCnt": 0,
                "cooldown": 10.0,
                "coefficient": 50.0
            },
            "level": 0
        },
        {
            "user": null,
            "skill": {
                "skillId": "S55",
                "skillName": "실드 다크니스",
                "type": "실드",
                "attribute": "어둠",
                "hitCnt": 0,
                "cooldown": 10.0,
                "coefficient": 50.0
            },
            "level": 0
        },
        {
            "user": null,
            "skill": {
                "skillId": "S56",
                "skillName": "파이널 애로우",
                "type": "투사체",
                "attribute": "무",
                "hitCnt": 1,
                "cooldown": 2.5,
                "coefficient": 5.0
            },
            "level": 0
        },
        {
            "user": null,
            "skill": {
                "skillId": "S57",
                "skillName": "플레임 볼",
                "type": "투사체",
                "attribute": "불",
                "hitCnt": 1,
                "cooldown": 1.5,
                "coefficient": 2.0
            },
            "level": 0
        },
        {
            "user": null,
            "skill": {
                "skillId": "S58",
                "skillName": "아쿠아 볼",
                "type": "투사체",
                "attribute": "물",
                "hitCnt": 1,
                "cooldown": 1.8,
                "coefficient": 2.2
            },
            "level": 0
        },
        {
            "user": null,
            "skill": {
                "skillId": "S59",
                "skillName": "머드 샷",
                "type": "투사체",
                "attribute": "땅",
                "hitCnt": 4,
                "cooldown": 2.5,
                "coefficient": 1.0
            },
            "level": 0
        },
        {
            "user": null,
            "skill": {
                "skillId": "S60",
                "skillName": "거스트 애로우",
                "type": "투사체",
                "attribute": "바람",
                "hitCnt": 1,
                "cooldown": 1.0,
                "coefficient": 1.3
            },
            "level": 0
        },
        {
            "user": null,
            "skill": {
                "skillId": "S61",
                "skillName": "아이시클 스피어",
                "type": "투사체",
                "attribute": "얼음",
                "hitCnt": 3,
                "cooldown": 6.0,
                "coefficient": 2.0
            },
            "level": 0
        },
        {
            "user": null,
            "skill": {
                "skillId": "S62",
                "skillName": "일렉트릭 샷",
                "type": "투사체",
                "attribute": "번개",
                "hitCnt": 1,
                "cooldown": 3.0,
                "coefficient": 3.0
            },
            "level": 0
        },
        {
            "user": null,
            "skill": {
                "skillId": "S63",
                "skillName": "로지 데스",
                "type": "투사체",
                "attribute": "식물",
                "hitCnt": 3,
                "cooldown": 3.0,
                "coefficient": 0.75
            },
            "level": 0
        },
        {
            "user": null,
            "skill": {
                "skillId": "S64",
                "skillName": "에시딕 볼",
                "type": "투사체",
                "attribute": "독",
                "hitCnt": 1,
                "cooldown": 1.5,
                "coefficient": 0.77
            },
            "level": 0
        },
        {
            "user": null,
            "skill": {
                "skillId": "S65",
                "skillName": "레이저 빔",
                "type": "투사체",
                "attribute": "빛",
                "hitCnt": 1,
                "cooldown": 2.0,
                "coefficient": 2.0
            },
            "level": 0
        },
        {
            "user": null,
            "skill": {
                "skillId": "S66",
                "skillName": "다크 블레싱",
                "type": "투사체",
                "attribute": "어둠",
                "hitCnt": 1,
                "cooldown": 2.5,
                "coefficient": 3.0
            },
            "level": 0
        }
    ]);
    
    return (
        <div className="pt-10 px-10 xl:flex gap-5 xl:h-[80vh]">
            <div className="md:flex gap-5 w-full md:h-screen xl:w-5/12 xl:h-auto">
                <div className="md:w-5/12">
                    <Stats 
                        statDataList={statDataList}
                        setStatDataList={setStatDataList}
                    />
                </div>
                <div className="mt-5 md:mt-0 md:w-7/12">
                    <Skills
                        skillDataList={skillDataList}
                        setSkillDataList={setSkillDataList}
                    />
                </div>
            </div>
            <div className="mt-5 xl:mt-0 xl:w-7/12">
                <SelectSection
                    statDataList={statDataList}
                    setStatDataList={setStatDataList}
                    skillDataList={skillDataList}
                    setSkillDataList={setSkillDataList}
                />
            </div>
        </div>
    )
}