function Button({ text }) {
    return (
        <button
            type="submit"
            className="w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
            {text}
        </button>
    )
}

export default Button