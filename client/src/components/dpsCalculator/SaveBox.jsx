import { useState } from "react";
import axios from 'axios';
import Loading from "../Loading";

export default function SaveBox(props) {

    const [idValue, setId] = useState('');
    const [pwValue, setPw] = useState('');

    const saveId = event => {
        setId(event.target.value);
    };
    
    const savePw = event => {
        setPw(event.target.value);
    };

    const select = () => {
        setLoading(true);

        const user = {
            userId: idValue,
            password: pwValue
        }

        axios({
            url: "/api/getMyDps",
            method: 'POST',
            data: user
        }).then((result) => {
            const { userSkillList, userStatList, myDps, selectSkillList } = result.data.data;
            props.setSkillDataList(userSkillList)
            props.setStatDataList(userStatList)
            props.setMyDps(myDps)
            props.setSelectSkillList(selectSkillList);

            setLoading(false);
        }).catch((error) => {
            alert(error.response.data.message)
            console.log(error);

            setLoading(false);
        })

    };

    const save = () => {
        setLoading(true);

        // ID, PW
        const userData = {
            userId: idValue,
            password: pwValue
        }

        // 스킬 정보
        const skillDataList = [];
        for(let skillData of props.skillDataList){
            skillDataList.push({...skillData, user: userData});
        }

        // 스탯 정보
        const statDataList = [];
        for(let statData of props.statDataList){
            statDataList.push({...statData, user: userData});
        }

        // MyDps 정보
        const myDps = {...props.myDps, user: userData, myDpsId:null};

        // 선택 스킬 정보
        const selectSkillList = [];
        for(let i in props.skillArr){
            const json = {
                idx: i,
                skillIdx: props.skillArr[i],
                skill: props.skillDataList[props.skillArr[i]].skill,
                dps: props.totalDpsArr[i]
            }
            selectSkillList.push(json);
        }

        axios({
            url: "/api/myDps",
            method: 'POST',
            data: {
                userDto: userData,
                userSkillDtoList: skillDataList,
                userStatDtoList: statDataList,
                myDpsDto: myDps,
                selectSkillDtoList: selectSkillList,
            }
        }).then((result) => {
            alert(result.data.message)

            setLoading(false);
        }).catch((error) => {
            alert(error.response.data.message)
            console.log(error);

            setLoading(false);
        })
    }


    // 로딩
    const [loading, setLoading] = useState(false);

    return (
        <>
        <Loading loading={loading}/>
        <div className="border-2 border-gray-900 rounded-lg w-full h-full p-3">
            <h1 className="text-xl font-bold text-gray-900">저장 & 불러오기</h1>
            <div className="mt-2 gap-2 flex flex-col">
                <input 
                    type="text"
                    placeholder="Enter ID"
                    className="border border-gray-400 rounded-lg px-2 py-1"
                    onChange={saveId}
                />
                <input 
                    type="password"
                    placeholder="Enter Password"
                    className="border border-gray-400 rounded-lg px-2 py-1"
                    onChange={savePw}
                />
                <div className="grid grid-cols-2 gap-1">
                    <button className="border border-gray-400 rounded-lg px-3 py-1.5 text-gray-900 hover:bg-gray-900 hover:text-white" onClick={() => save()}>
                        <span aria-hidden="true" role="img" className="text-sm">💾</span>
                        <span className="text-xs font-medium">저장</span>
                    </button>
                    <button className="border border-gray-400 rounded-lg px-3 py-1.5 text-gray-900 hover:bg-gray-900 hover:text-white" onClick={() => select()}>
                        <span aria-hidden="true" role="img" className="text-sm">📂</span>
                        <span className="text-xs font-medium">불러오기</span>
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}