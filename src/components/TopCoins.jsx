import { useFetchCrypto } from "@hooks/useFetchCrypto";
import { AiOutlineRise } from "react-icons/ai";
import { IoMdTrendingDown } from "react-icons/io";
import { IoIosRefreshCircle } from "react-icons/io";


function TopCoins() {
    const { topCoins } = useFetchCrypto()

    function showTopCoins() {

        if (topCoins.isLoading) {
            return <p className="m-auto">Loading...</p>
        }

        if (topCoins.error) {
            return (
                <div className="flex justify-center space-x-2">
                    <p className="text-red-500">{topCoins.error.message}</p>
                    <IoIosRefreshCircle
                        className="text-red-500"
                        size={'24'}
                        onClick={topCoins.refetch}
                    />
                </div>
            )
        }

        return topCoins.data?.slice(0, 3).map((item) => {
            const cryptoName = item.name
            return (
                <div key={item.id} className="flex flex-col rounded-xl shadow-md bg-gray-900 w-[260px] h-[150px] p-8 justify-center items-center relative">
                    <div className='w-[70px] h-[70px] bg-transparent rounded-full absolute left-[50%] -top-10 transform translate-x-[-50%]'
                        style={{
                            'backgroundColor':
                                cryptoName === 'Bitcoin' ? '#fb923c' :
                                    cryptoName === 'Ethereum' ? '#1e1b4b' :
                                        cryptoName === 'Tether' ? '#134e4a' :
                                            'transparent'
                        }}
                    >
                        <img src={item.image} />
                    </div>
                    <h2>${item.total_volume.toLocaleString()}</h2>
                    {item.price_change_percentage_24h < 0 ? (
                        <div className="flex justify-center items-center space-x-1 text-red-600 mt-2">
                            <IoMdTrendingDown />
                            <span className="text-sm">{item.price_change_percentage_24h.toFixed(2)}%</span>
                        </div>
                    ) : (
                        <div className="flex justify-center items-center space-x-2 text-green-700 mt-2">
                            <AiOutlineRise />
                            <span className="text-sm">+{item.price_change_percentage_24h.toFixed(2)}%</span>
                        </div>
                    )
                    }
                </div>
            )
        })
    }


    return (
        <div className="flex space-x-8 py-6 mt-20">
            {showTopCoins()}
        </div>
    )
}

export default TopCoins