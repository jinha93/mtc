import Skill from "./Skill"

const typeData = [
    '근접','낙하','버프','범위','실드','투사체'
]

export default function Skills(props) {
    return (
        <div className="border-2 border-gray-900 rounded-lg p-5 w-full h-full flex flex-col gap-2 overflow-y-scroll">
            <h1 className="text-2xl font-bold text-gray-900">스킬</h1>

            {typeData.map((type, index) => {
                return (
                    <div key={index}>
                        <div className="border rounded-lg text-center bg-gray-400 text-white text-sm flex-1">{type}</div>
                        <div className="grid grid-cols-6 gap-x-2 gap-y-1 p-1">
                            {props.skillsData.map((skill, index) => {
                                return (
                                    type === skill.type 
                                    ?
                                        <Skill
                                            key={index}
                                            index={index}
                                            skill={skill}
                                            skillsData={props.skillsData}
                                            setSkillData={props.setSkillData}
                                        />
                                    : 
                                        null
                                )
                            })}
                        </div>
                    </div>
                )
            })}

        </div>
    )
}