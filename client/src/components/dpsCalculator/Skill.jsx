import { useEffect, useState } from "react";

export default function Skill(props){

    const [count, setCount] = useState(props.skillData.level);
    const add = () => {
        if(count+1 > 25){return;}
        setCount(parseInt(count)+1);
    }
    const minus = () => {
        if(count-1 < 0){return;}
        setCount(parseInt(count)-1);
    }

    useEffect(() => {
        setCount(props.skillData.level);
    }, [props.skillData])
    
    useEffect(() => {
        const skillDataList = [...props.skillDataList];
        skillDataList[props.index] = {...props.skillData, level:count}
        
        props.setSkillDataList(skillDataList);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [count])

    const onChange = (e) => {
        const { value } = e.target;
        if(value > 25){ setCount(25); return;};
        if(value < 0){ setCount(0); return;};
        
        setCount(value);
    }

    return (
        <div className="w-full">
            <img src={require(`../../assets/images/skills/${props.skillData.skill.skillId}.png`)} className="w-full object-cover rounded-lg" alt='스킬이미지'></img>
            <div className="flex items-center border border-gray-200 rounded h-5 bg-gray-200 text-center">
                <button
                    type="button"
                    className="hidden sm:block leading-10 text-gray-600 transition hover:opacity-75"
                    onClick={() => minus()}
                >
                    －
                </button>

                <input
                    type="number"
                    min={0}
                    max={25}
                    value={count}
                    onChange={onChange}
                    className="w-full h-3 bg-gray-200 border-transparent text-center text-sm [&::-webkit-inner-spin-button]:appearance-none"                    
                />

                <button
                    type="button"
                    className="hidden sm:block leading-10 text-gray-600 transition hover:opacity-75"
                    onClick={() => add()}
                >
                    ＋
                </button>
            </div>
        </div>
    )
}