import { useEffect, useState } from "react";

export default function Skill(props){

    const [count, setCount] = useState(0);
    const add = () => {
        if(count+1 > 25){return;}
        setCount(count+1);
    }
    const minus = () => {
        if(count-1 < 0){return;}
        setCount(count-1);
    }
    
    useEffect(() => {
        setCount(props.skill.level)
    }, [props.skill.level])


    useEffect(() => {
        const skillsData = [...props.skillsData];
        skillsData[props.index] = {...props.skill, level:count}
        
        props.setSkillData(skillsData);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [count])

    return (
        <div className="w-full">
            <img src={require(`../../assets/images/skills/${props.skill.id}.png`)} className="w-14 h-14 object-cover rounded-lg" alt={props.skill.name}></img>
            <div className="flex items-center border border-gray-200 rounded h-5 bg-gray-200 text-center w-14">
                <button
                    type="button"
                    className="leading-10 text-gray-600 transition hover:opacity-75"
                    onClick={() => minus()}
                >
                    －
                </button>

                <input
                    type="number"
                    id="Quantity"
                    key={count}
                    defaultValue={count}
                    onChange={props.onChange}
                    readOnly
                    className="w-full h-3 bg-gray-200 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"                    
                />

                <button
                    type="button"
                    className="leading-10 text-gray-600 transition hover:opacity-75"
                    onClick={() => add()}
                >
                    ＋
                </button>
            </div>
        </div>
    )
}