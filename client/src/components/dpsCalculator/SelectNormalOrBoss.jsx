import { useState } from "react";

export default function SelectNormalOrBoss(props){

    const tabs = [
        {name: '일반', value: 'N'}
        , {name: '보스', value: 'B'}
    ];

    const onChange = (index) => {
        setTab(index)
        props.setNormalOrBoss(tabs[index].value)
    }
    const [currentTab, setTab] = useState(0);

    return(
        <nav className="grid grid-cols-2 text-center gap-5" aria-label="Tabs">
            {tabs.map((tab, index) => {
                return (
                    <a
                        href="#!"
                        key={index}
                        onClick={() => onChange(index)}
                        className={
                            currentTab === index
                            ?
                            "shrink-0 rounded-lg bg-gray-300 p-2 text-sm font-medium text-gray-700"
                            :
                            "shrink-0 rounded-lg p-2 text-sm font-medium text-gray-500 border hover:bg-gray-300 hover:text-gray-700"
                        }
                    >
                        {tab.name}
                    </a>
                )
            })}
        </nav>
    )
}