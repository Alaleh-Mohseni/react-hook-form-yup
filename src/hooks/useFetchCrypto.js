import { useState } from "react";
import { useQueries } from "@tanstack/react-query";
import { httpClient } from "@services/http";
import { MARKETS, CURRENCY, IDS, ORDER, PAGE, PER_PAGE } from "@config/api-endpoints";


export function useFetchCrypto() {
    const [page, setPage] = useState(1);
    const [totalPages] = useState(350);
    const [perPage, setPerPage] = useState(8);
    const [coinSearch, setCoinSearch] = useState("");


    const getMarketCryptoData = (coinSearch, page, perPage) => {
        return httpClient.get(
            `${MARKETS}${CURRENCY}=usd${IDS}=${coinSearch}${ORDER}=market_cap_desc${PAGE}=${page}${PER_PAGE}=${perPage}`
        )
            .then(res => res.data)
    }

    const onSuccess = (data) => {
        console.log("fetch succeeded!", data)
    }

    const onError = (error) => {
        console.log("fetch failed!", error)
    }

    const [topCoins, marketValue] = useQueries({
        queries: [
            {
                queryKey: ["top-coins"],
                queryFn: () =>
                    httpClient.get(`${MARKETS}${CURRENCY}=usd`)
                        .then(res => res.data),
                staleTime: 1000,
                onSuccess: onSuccess,
                onError: onError,
            },
            {
                queryKey: ["market-value", coinSearch, page, perPage],
                queryFn: () => getMarketCryptoData(coinSearch, page, perPage),
                staleTime: 2000,
            },
        ]
    })


    return { topCoins, marketValue, totalPages, setPage}
}