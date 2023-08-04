import { useState, useEffect } from "react";
import img from "../assets/images/test.png";

export default function Error() {

    const [msg, setMsg] = useState([]);

    useEffect(() => {
        fetch("/api/hello")
            .then((res) => {return res.json();})
            .then((data) => {setMsg(data);})
    }, []);

    return (
        <div className="px-4 bg-white mx-auto text-center mt-20">
            {/* <h1 className="tracking-widest text-gray-500 uppercase mb-10 text-3xl">404 | Not Found</h1> */}
            {msg.map((content, idx) => <li key={`${idx} - ${content}`}>{content}</li>)}
            <img src={img} className="w-1/2 mx-auto" alt="error"/>
        </div>
    )
}