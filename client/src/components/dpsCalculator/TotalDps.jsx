export default function TotalDps(props){
    return(
        <div className="border-2 border-gray-900 rounded-lg w-full h-full p-3 col-span-2">
            <div className="flex flex-col px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-gray-500">
                    Total Dps
                </dt>

                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">{props.totalDps}</dd>
            </div>
        </div>
    )
}