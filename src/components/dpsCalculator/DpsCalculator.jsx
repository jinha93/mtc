import Stats from "./Stats"
import Skills from "./Skills"

export default function DpsCalculator(){
    return (
        <div className="p-10 flex gap-5">
            <div className="w-2/12">
                <Stats></Stats>
            </div>
            <div className="w-3/12">
                <Skills></Skills>
            </div>
            <div className="w-7/12">
                <div className="border-2 border-gray-900 rounded-lg w-full h-full">test</div>
            </div>
        </div>
    )
}