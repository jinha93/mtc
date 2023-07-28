import { useState } from "react";

const grades = [
    {
        grade: "Common",
        buffMultiple: 0
    },
    {
        grade: "Rare",
        buffMultiple: 0.15
    },
    {
        grade: "Epic",
        buffMultiple: 0.5
    },
    {
        grade: "Legendary",
        buffMultiple: 1
    },
    {
        grade: "Mythical",
        buffMultiple: 1.8
    },
]

const buffs = [
    {
        name: 'Gold Acq.+',
        level: 0,
        color: 'bg-yellow-400',
        slotBuffRate: [0.05, 0.12, 0.2, 0.35]
    },
    {
        name: 'Exp Acq.+',
        level: 0,
        color: 'bg-blue-600',
        slotBuffRate: [0.05, 0.12, 0.2, 0.35]
    },
    {
        name: 'Growth Gem Acq.+',
        level: 1,
        color: 'bg-green-600',
        slotBuffRate: [0.03, 0.07, 0.12, 0.2]
    },
    {
        name: 'All Damage+',
        level: 2,
        color: 'bg-red-600',
        slotBuffRate: [0.02, 0.04, 0.07, 0.1]
    },
    {
        name: 'MoveSpeed+',
        level: 3,
        color: 'bg-purple-600',
        slotBuffRate: [0.005, 0.01, 0.015, 0.02]
    },
]


export default function SlotBuff() {

    // 등급별 개수
    const [counts, setCounts] = useState([0,0,0,0,0]);

    const onChange = (e) => {
        counts[e.target.id] = parseInt(e.target.value);

        
    }

    // 슬롯 버프 증가량(배수)
    const [multiple, setMultiple] = useState(0);
    const multipleCalc = () => {
        let sumCount = 0;
        let sumMultiple = 1;
        for(let index in counts){
            sumCount += counts[index];
            sumMultiple += grades[index].buffMultiple * counts[index];
        }

        if(sumCount > 4){
            alert('You cannot use more than 4 NFTs.');
            return;
        }

        setMultiple(sumMultiple);

        buffIncreaseAmountCalc();
    }

    // 버프별 증가량
    const [buffIncreaseAmounts, setBuffIncreaseAmounts] = useState([0,0,0,0,0]);
    const buffIncreaseAmountCalc = () => {
        for(let i=0; i<buffs.length; i++){
            const level = buffs[i].level;

            // 버프별 인정 개수
            let count = 0;
            for(let j=0; j<counts.length; j++){
                if(j >= level){
                    count += counts[j]
                }
            }
            buffIncreaseAmounts[i] = buffs[i].slotBuffRate[count-1] ? buffs[i].slotBuffRate[count-1] : 0;
        }
    }

    return (
        <div className="w-3/4 xl:w-1/3 mx-auto pt-5 md:pt-20 text-center">
            <h1 className="text-5xl font-bold mb-10">MTC Simulator</h1>
            {
                grades.map((row, idx) => (
                    <div key={idx} className="flex my-3">
                        <span className="inline-flex w-1/3 items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                            {row.grade}
                        </span>
                        <input
                            type="number"
                            placeholder="0"
                            min="0"
                            max="4"
                            id={idx}
                            className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                            onChange={onChange}
                        />
                    </div>
                ))
            }
            <button type="button" className="w-full bg-blue-500 rounded-lg h-10 text-white" onClick={multipleCalc}>Calculate</button>

            <div className="bg-gray-300 rounded-lg mt-5 pt-3 pb-1 px-5 text-left">
                {
                    buffs.map((row, idx) => (
                        <div key={idx} className="md:flex">
                            <div className="mb-1 text-sm font-medium w-full whitespace-nowrap">{row.name}</div>
                            <div className="w-full bg-gray-200 rounded-full mb-4">
                                <div 
                                    className={`${row.color} text-sm font-medium text-blue-100 text-center p-0.5 leading-none rounded-full`} 
                                    style={{ width: `${multiple*(buffIncreaseAmounts[idx]*100*100)/100 > 10 ? multiple*(buffIncreaseAmounts[idx]*100*100)/100 : 10}%`, maxWidth: '100%' }}
                                >
                                    {multiple*(buffIncreaseAmounts[idx]*100*100)/100}%
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    );
}
