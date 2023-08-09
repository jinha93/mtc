import { useEffect, useState } from "react"

export default function Compatibility(props) {

    const options = [
        { name: '1', value: '1'}
        , { name: '0.5', value: '0.5', src: 'compatibility_0.5'}
        , { name: '1.5', value: '1.5', src: 'compatibility_1.5'}
        , { name: '3.0', value: '3.0', src: 'compatibility_3.0'}
    ];

    const [currentOption, setOption] = useState(0);

    const onChange = (index) => {
        if(currentOption === index){
            setOption(0);
        }else{
            setOption(index)
        }       
    }

    useEffect(() => {
        props.setCompatibility(options[currentOption].value);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[currentOption])


    // 선택 스킬 변경 시 옵션 초기화
    useEffect(() => {
        setOption(0);
    }, [props.selectSkill])

    // 버프, 실드, 무속성 cursor-not-allowed 처리
    const [disabled, setDisabled] = useState(false);
    useEffect(() => {
        const {type, attribute} = props.selectSkill;
        if(type === '버프' || type === '실드' || attribute === '무'){
            setDisabled(true)
        }else{
            setDisabled(false)
        }
    }, [props.selectSkill])

    return (
        <nav className="grid grid-cols-3 text-center gap-1" aria-label="Tabs">
            {options.map((option, index) => {
                return (
                    index !== 0 ?
                    <button
                        key={index}
                        className={
                            disabled 
                            ?
                                "flex rounded-lg border items-center sm:p-0.5 cursor-not-allowed" 
                            :
                                currentOption === index
                                ?
                                    "flex rounded-lg border items-center sm:p-0.5 border-blue-500 ring-1 ring-blue-500" 
                                :
                                    "flex rounded-lg border items-center sm:p-0.5" 
                        }
                        onClick={disabled ? null : () => onChange(index)}
                    >
                        <img className="w-5 h-5 object-cover rounded-lg mx-auto" src={require(`../../assets/images/${option.src}.png`)} alt=""/>
                        <span className="hidden 2xl:block ml-1 text-sm">{option.name}</span>
                    </button>
                    : null
                )
            })}
        </nav>
    )
}