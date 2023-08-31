import loadingSrc from "../assets/images/loading.gif";

export default function Loading({loading}){
    return (
        <>
        {
            loading ?
                <div className="absolute w-[100vw] h-[100vh] top-0 left-0 bg-[#ffffffb7] z-[999] flex flex-col items-center justify-center">
                    <img src={loadingSrc} alt='loading'/>
                </div>
            : null
        }
        </>
    )
}