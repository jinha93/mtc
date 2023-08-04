export default function DefaultAttack(){
    return (
        <div className="border-2 border-gray-900 rounded-lg w-full h-full p-3">
            <h1 className="text-xl font-bold text-gray-900">기본공격</h1>
            <div className=" mt-5">
                <dl className="-my-3 divide-y divide-gray-900 text-sm">
                    <div className="grid grid-cols-1 gap-1 py-1 sm:grid-cols-2 sm:gap-4">
                        <dt className="font-medium text-gray-900">대미지</dt>
                        <dd className="text-gray-700 text-right">17241.2</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 py-1 sm:grid-cols-2 sm:gap-4">
                        <dt className="font-medium text-gray-900">대미지(치명타)</dt>
                        <dd className="text-gray-700 text-right">90775.0</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 py-1 sm:grid-cols-2 sm:gap-4">
                        <dt className="font-medium text-gray-900">DPS</dt>
                        <dd className="text-gray-700 text-right">34854.6</dd>
                    </div>
                </dl>
            </div>
        </div>
    )
}