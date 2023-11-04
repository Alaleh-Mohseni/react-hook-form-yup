function ListTitles({title}) {
    return (
        <li className="px-5">
            <div className="flex flex-row items-center h-8">
                <div className="text-sm font-semibold tracking-wide text-slate-400">{title}</div>
            </div>
        </li>
    )
}

export default ListTitles