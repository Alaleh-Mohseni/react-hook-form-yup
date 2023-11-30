import { useFetchCrypto } from "@hooks/useFetchCrypto";
import Pagination from "./Pagination";
import { IoIosRefreshCircle } from "react-icons/io";


function MarketValue() {
    const { marketValue, setPage, totalPages } = useFetchCrypto()

    return (
        <div className="flex space-x-8 py-6">
            <div className="flex flex-col rounded-xl w-[850px] justify-center pb-3 bg-gray-900 shadow-md">
                <h2 className="p-6">Market Value</h2>
                {marketValue.error ? (
                    <div className="flex justify-center space-x-2 py-3">
                        <p className="text-red-500">{marketValue.error.message}</p>
                        <IoIosRefreshCircle
                            className="text-red-500"
                            size={'24'}
                            onClick={marketValue.refetch}
                        />
                    </div>
                ) : (
                    <div className="flex flex-col overflow-x-auto">
                        {marketValue.isLoading ? (
                            <p className="m-auto text-white">Loading...</p>
                        ) : (
                            <table className="w-full text-sm text-left rtl:text-right text-slate-400">
                                <thead className="text-xs uppercase border-b border-t border-slate-500">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Name
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Price
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            High(24h)
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Low(24h)
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Market Cap
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {marketValue.data?.map(item => (
                                        <tr key={item.id} className="border-gray-700 hover:bg-gray-950">
                                            <th scope="row" className="flex items-center px-6 py-4 whitespace-nowrap text-white">
                                                <img className="w-10 h-10 rounded-full" src={item.image} alt="Coin logo" />
                                                <div className="ps-3">
                                                    <p className="font-medium">{item.name}</p>
                                                    <p className="font-normal text-gray-500">{item.symbol}</p>
                                                </div>
                                            </th>
                                            <td className="px-6 py-4">
                                                ${item.current_price}
                                            </td>
                                            <td className="px-6 py-4 text-green-700">
                                                {item.high_24h}
                                            </td>
                                            <td className="px-6 py-4 text-red-600">
                                                {item.low_24h}
                                            </td>
                                            <td className="px-6 py-4">
                                                ${item.market_cap.toLocaleString()}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                        < Pagination setPage={setPage} totalPages={totalPages} />
                    </div>
                )}
            </div>
        </div >
    )
}

export default MarketValue