import QuantityInput from "./QuantityInput";

const skillsData = [
    {
        gb: '근접',
        list: [
            // {
            //     name: '무속성_근접_트리플 플래쉬',
            //     src: '무속성_근접_트리플 플래쉬.png'
            // },
            {
                name: '불속성_근접_파이어봄',
                src: '불속성_근접_파이어봄.png'
            },
            {
                name: '물속성_근접_아쿠아슬랩',
                src: '물속성_근접_아쿠아슬랩.png'
            },
            {
                name: '땅속성_근접_스톤드롭',
                src: '땅속성_근접_스톤드롭.png'
            },
            {
                name: '바람속성_근접_윈드커터',
                src: '바람속성_근접_윈드커터.png'
            },
            {
                name: '얼음속성_근접_아이스윙',
                src: '얼음속성_근접_아이스윙.png'
            },
            {
                name: '번개속성_근접_일렉트릭 쇼크',
                src: '번개속성_근접_일렉트릭 쇼크.png'
            },
            {
                name: '식물속성_근접_플랜트 엣지',
                src: '식물속성_근접_플랜트 엣지.png'
            },
            // {
            //     name: '독속성_근접_포이즌 스윙',
            //     src: '독속성_근접_포이즌 스윙.png'
            // },
            // {
            //     name: '빛속성_근접_홀리 플래쉬',
            //     src: '빛속성_근접_홀리 플래쉬.png'
            // },
            {
                name: '어둠속성_근접_다크 운드',
                src: '어둠속성_근접_다크 운드.png'
            },
        ]
    }
];

export default function Skills() {
    return (
        <div className="border-2 border-gray-900 rounded-lg p-5 w-full h-full flex flex-col gap-2">
            <h1 className="text-2xl font-bold text-gray-900">스킬</h1>

            {skillsData.map((skills, index) => {
                return (
                    <div key={index}>
                        <div className="border rounded-lg text-center bg-gray-400 text-white text-sm flex-1">{skills.gb}</div>
                        <div className="grid grid-cols-6 gap-1 p-1">
                            {skills.list.map((skill, index) => {
                                return (
                                    <div className="w-full" key={index}>
                                        <img src={require(`../../assets/images/skills/${skill.src}`)} className="w-16 h-16 object-cover"></img>
                                        <QuantityInput></QuantityInput>
                                    </div>

                                )
                            })
                            }

                        </div>
                    </div>
                )
            })}

        </div>
    )
}