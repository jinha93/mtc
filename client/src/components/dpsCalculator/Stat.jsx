export default function Stat(props){

    const onChange = (e) => {
        const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출

        const stats = [...props.stats];
        stats[props.index] = {...props.stat, value: value}

        props.setStats(stats);
    };


    return(
        <div className="flex justify-between">
            <span className="text-sm">{props.stat.name}</span>
            <input 
                type="number"
                min={0}
                onChange={onChange}
                value={props.stat.value}
                className="text-sm text-right w-20 border border-gray-400 rounded-md h-5 px-1 appearance-none"
            >
            </input>
        </div>
    )
}