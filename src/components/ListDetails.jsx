import { Link } from "react-router-dom"

function ListDetails({href, children, text}) {
    return (
        <li>
            <Link to={href} className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-dark-400 text-slate-600 hover:text-slate-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                <span className="inline-flex justify-center items-center ml-4">
                    {children}
                </span>
                <span className="ml-2 text-sm tracking-wide truncate text-slate-300">{text}</span>
            </Link>
        </li>
    )
}

export default ListDetails