import { useEffect, useState } from "react"
import Stat from "./Stat";

export default function Stats(props){

    return(
        <div className="border-2 border-gray-900 rounded-lg p-5 w-full h-full flex flex-col gap-2">
            <h1 className="text-2xl font-bold text-gray-900">캐릭터 스탯</h1>
            {props.stats.map((stat, index) => {
                return(
                    <Stat
                        key={index}
                        index={index}
                        stat={stat}
                        stats={props.stats}
                        setStats={props.setStats}
                    />
                )
            })}
        </div>
    )
}