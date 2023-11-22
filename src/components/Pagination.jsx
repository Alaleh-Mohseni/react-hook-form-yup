import ReactPaginate from "react-paginate";

function Pagination({ setPage, totalPages }) {

    const handleClick = (e) => {
        setPage(++e.selected)
    }

    return (
        <nav aria-label="Page navigation example" className="my-2">
            <ReactPaginate
                previousLabel={"previous"}
                nextLabel={"next"}
                breakLabel={"..."}
                pageCount={totalPages}
                marginPagesDisplayed={2}
                pageRangeDisplayed={2}
                onPageChange={handleClick}
                containerClassName={"flex justify-center -space-x-px text-base h-10 my-4"}
                pageClassName={"flex items-center justify-center border px-4 h-10 leading-tight bg-gray-900 border-gray-700 text-gray-400 hover:bg-gray-950 hover:text-white"}
                pageLinkClassName={"text-indigo-400"}
                previousClassName={"flex items-center justify-center border px-4 h-10 ms-0 leading-tight border-e-0 rounded-s-lg bg-gray-900 border-gray-700 text-gray-400 hover:bg-gray-950 hover:text-white"}
                previousLinkClassName={""}
                nextClassName={"flex items-center justify-center px-4 h-10 border leading-tight rounded-e-lg bg-gray-900 border-gray-700 text-gray-400 hover:bg-gray-950 hover:text-white"}
                nextLinkClassName={""}
                breakClassName={"flex items-center justify-center px-4 h-10 border leading-tight bg-gray-900 border-gray-700 text-gray-400 hover:bg-gray-950 hover:text-white"}
                breakLinkClassName={"text-indigo-400"}
                activeClassName={"active"}
            />
        </nav>
    )
}

export default Pagination