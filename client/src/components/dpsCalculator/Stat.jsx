export default function Stat(props){

    const onChange = (e) => {
        const {value} = e.target;
        
        const stats = [...props.stats];
        stats[props.index] = {...props.stat, value: value}

        props.setStats(stats);
    };


    return(
        <div className="flex justify-between">
            <span className="text-sm truncate ">{props.stat.name}</span>
            <input 
                type="number"
                min={0}
                onChange={onChange}
                value={props.stat.value}
                className="text-sm text-right w-14 border border-gray-400 rounded-md h-5 px-1 [&::-webkit-inner-spin-button]:appearance-none"
            >
            </input>
        </div>
    )
}