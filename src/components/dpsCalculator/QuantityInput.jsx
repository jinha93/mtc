export default function QuantityInput() {
    return (
        <div className="flex items-center border border-gray-200 rounded h-5 px-1 bg-gray-200 text-center mx-1">
            <button
                type="button"
                className="leading-10 text-gray-600 transition hover:opacity-75"
            >
                －
            </button>

            <input
                type="number"
                id="Quantity"
                value="1"
                className="w-full h-3 bg-gray-200 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
            />

            <button
                type="button"
                className="leading-10 text-gray-600 transition hover:opacity-75"
            >
                ＋
            </button>
        </div>
    )
}