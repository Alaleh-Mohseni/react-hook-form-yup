import { useState } from "react";
import { useQueries } from "@tanstack/react-query";
import { httpClient } from "@services/http";
import { MARKETS, CURRENCY, ORDER, PAGE, PER_PAGE, COINS, DAY, INTERVAL } from "@config/api-endpoints";


export function useCharts() {
    const [days, setDays] = useState(2);
    const [id, setId] = useState("bitcoin");
    const [interval, setInterval] = useState([]);


    const getCoinsPrice = (id, days, interval) => {
        return httpClient.get(`${COINS}/${id}/market_chart${CURRENCY}=usd${DAY}=${days}${INTERVAL}=${interval}`)
            .then(res => res.data.prices)
    }

    const onSuccess = (data) => {
        console.log("fetch succeeded!", data)
    }

    const onError = (error) => {
        console.log("fetch failed!", error)
    }


    const [cryptoId, chartData] = useQueries({
        queries: [
            {
                queryKey: ["cryptp-id"],
                queryFn: () =>
                    httpClient
                        .get(`${MARKETS}${CURRENCY}=usd${ORDER}=market_cap_desc${PAGE}=1${PER_PAGE}=200`)
                        .then(res => res.data),
                staleTime: 1000,
                onSuccess: onSuccess,
                onError: onError,
            },
            {
                queryKey: ["chart-data", id, days, interval],
                queryFn: () => getCoinsPrice(id, days, interval),
                staleTime: 1000,
            },
        ]
    })


    const dataInChart = chartData.data?.map(value => ({
        x: value[0],
        y: value[1].toFixed(2),
    }))

    const oneDay = () => {
        setDays((prevDays) => 1);
        setInterval((prevInterval) => "hourly");
    }

    const oneWeek = () => {
        setDays((prevDays) => 7);
        setInterval((prevInterval) => "daily");
    }

    const oneMonth = () => {
        setDays((prevDays) => 30);
        setInterval((prevInterval) => "monthly");
    }

    const sixMonths = () => {
        setDays((prevDays) => 180);
        setInterval((prevInterval) => "monthly");
    }

    const oneYear = () => {
        setDays((prevDays) => 365);
        setInterval((prevInterval) => "yearly");
    }

    return { cryptoId, setId, days, oneDay, oneWeek, sixMonths, oneYear, oneMonth, dataInChart, id }

}