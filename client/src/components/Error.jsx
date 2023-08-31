import img from "../assets/images/test.png";

export default function Error() {
    return (
        <div className="px-4 bg-white mx-auto text-center mt-20">
            <img src={img} className="md:w-1/2 mx-auto" alt="error"/>
        </div>
    )
}