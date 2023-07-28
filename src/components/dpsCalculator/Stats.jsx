const statsData = [
    {
        name: '공격력'
    },
    {
        name: '무기 공격력'
    },
    {
        name: '공격 속도'
    },
    {
        name: '치명타 확률'
    },
    {
        name: '치명타 대미지'
    },
    {
        name: '보스 대상 공격력'
    },
    {
        name: '모든 대미지%'
    },
    {
        name: '스킬 대미지%'
    },
    {
        name: '기본 공격 대미지%'
    },
    {
        name: '근거리 대미지%'
    },
    {
        name: '원거리 대미지%'
    },
    {
        name: '불 속성 대미지%'
    },
    {
        name: '물 속성 대미지%'
    },
    {
        name: '바람 속성 대미지%'
    },
    {
        name: '땅 속성 대미지%'
    },
    {
        name: '전기 속성 대미지%'
    },
    {
        name: '얼음 속성 대미지%'
    },
    {
        name: '식물 속성 대미지%'
    },
    {
        name: '독 속성 대미지%'
    },
    {
        name: '빛 속성 대미지%'
    },
    {
        name: '어둠 속성 대미지%'
    },
]

export default function Stats(){
    return(
        <div className="border-2 border-gray-900 rounded-lg p-5 w-full h-full flex flex-col gap-2">
            <h1 className="text-2xl font-bold text-gray-900">캐릭터 스탯</h1>
            {statsData.map((stat, index) => {
                return(
                    <div className="flex justify-between" key={index}>
                        <span className="text-sm">{stat.name}</span>
                        <input className="text-sm text-right w-16 border border-gray-400 rounded-lg h-5 px-2"></input>
                    </div>
                )
            })}
        </div>
    )
}