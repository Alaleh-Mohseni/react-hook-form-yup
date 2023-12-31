import { Link } from "react-router-dom"

function Links({text, href}){
    return (
        <Link to={href} className="font-medium text-indigo-500 hover:underline">{text}</Link>
    )
}

export default Links