import { useState } from "react";

export default function SelectNormalOrBoss(){

    const tabs = [
        {name: '일반', value: 'N'}
        , {name: '보스', value: 'B'}
    ];

    const [currentTab, setTab] = useState(0);

    return(
        <nav className="grid grid-cols-2 text-center gap-5" aria-label="Tabs">
            {tabs.map((tab, index) => {
                return (
                    <a
                        href="#!"
                        key={index}
                        onClick={() => setTab(index)}
                        className={
                            currentTab === index
                            ?
                            "shrink-0 rounded-lg bg-gray-200 p-2 text-sm font-medium text-gray-700"
                            :
                            "shrink-0 rounded-lg p-2 text-sm font-medium text-gray-500 border hover:bg-gray-200 hover:text-gray-700"
                        }
                    >
                        {tab.name}
                    </a>
                )
            })}
        </nav>
    )
}