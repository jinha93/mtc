import { useEffect, useState } from "react";

export default function SelectNormalOrBoss(props){

    const [currentTab, setTab] = useState(0);

    const tabs = [
        {name: '일반', value: 'N'}
        , {name: '보스', value: 'B'}
    ];

    const onClick = (index) => {
        setTab(index)

        const myDps = {...props.myDps, normalOrBoss:tabs[index].value};
        props.setMyDps(myDps);
    }

    useEffect(() => {
        const myDps = {...props.myDps, normalOrBoss:tabs[currentTab].value};
        props.setMyDps(myDps);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentTab])

    useEffect(() => {
        const normalOrBoss = props.myDps ? props.myDps.normalOrBoss : 'N';
        normalOrBoss ? setTab(tabs.findIndex(v => v.value === normalOrBoss)) : setTab(0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.myDps])

    return(
        <nav className="grid grid-cols-2 text-center gap-5" aria-label="Tabs">
            {tabs.map((tab, index) => {
                return (
                    <a
                        href="#!"
                        key={index}
                        onClick={() => onClick(index)}
                        className={
                            currentTab === index
                            ?
                            "shrink-0 rounded-lg bg-gray-300 p-2 text-sm font-medium text-white"
                            :
                            "shrink-0 rounded-lg p-2 text-sm font-medium border hover:bg-gray-300 hover:text-white"
                        }
                    >
                        {tab.name}
                    </a>
                )
            })}
        </nav>
    )
}