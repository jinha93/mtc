export default function Stat(props){

    const onChange = (e) => {
        const {value} = e.target;
        
        const statDataList = [...props.statDataList];
        statDataList[props.index] = {...props.statData, value: value}

        props.setStatDataList(statDataList);
    };

    return(
        <div className="flex justify-between">
            <span className="text-sm truncate ">{props.statData.stat.name}</span>
            <input 
                type="number"
                min={0}
                onChange={onChange}
                value={props.statData.value}
                placeholder={0}
                className="text-sm text-right w-14 border border-gray-400 rounded-md h-5 px-1 [&::-webkit-inner-spin-button]:appearance-none"
            >
            </input>
        </div>
    )
}