import img from "../assets/images/test.png";

export default function Error() {
    return (
        <div className="px-4 bg-white mx-auto text-center mt-20">
            <h1 className="tracking-widest text-gray-500 uppercase mb-10 text-3xl">404 | Not Found</h1>
            <img src={img} className="w-1/2 mx-auto"/>
        </div>
    )
}