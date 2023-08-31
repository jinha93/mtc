import { useState, useEffect } from "react";
import axios from 'axios';
import img from "../assets/images/test.png";

export default function Error() {

    const [list, setList] = useState([]);

    useEffect(() => {
        axios({
            //url: "/api/userSkill",
            url: "/api/userSkill/test",
            method: 'GET'
        }).then((result) => {
            let list = [...result.data];
            console.log(result.data)
            setList(list)
        }).catch((error) => {
            console.log(error);
        })

    }, []);

    const create = () => {
        const data = [
            {
                user: {
                    userId: 'test'
                },
                skill: {
                    skillId: 'S01'
                },
                level: '1'
            },
            {
                user: {
                    userId: 'test'
                },
                skill: {
                    skillId: 'S02'
                },
                level: '2'
            },
            {
                user: {
                    userId: 'test'
                },
                skill: {
                    skillId: 'S03'
                },
                level: '3'
            },
        ]

        axios({
            url: "/api/userSkills",
            method: 'POST',
            data: data
        }).then((result) => {
            console.log(result)
            console.log(result.data)
        }).catch((error) => {
            console.log(error);
        })

    }

    return (
        <div className="px-4 bg-white mx-auto text-center mt-20">
            {/* <h1 className="tracking-widest text-gray-500 uppercase mb-10 text-3xl">404 | Not Found</h1> */}
            {/* {msg.map((content, idx) => <li key={`${idx} - ${content}`}>{content}</li>)} */}
            {
                list.map((item, idx) => (
                    <div>
                        {item.skillId}
                    </div>
                ))
            }
            <button type="button" onClick={() => create()}>저장</button>
            <img src={img} className="md:w-1/2 mx-auto" alt="error"/>
        </div>
    )
}