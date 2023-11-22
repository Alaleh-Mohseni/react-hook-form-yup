import { useEffect, useState } from "react";
import { httpClient } from "../services/http";
import { MARKETS, CURRENCY, ORDER, PAGE, PER_PAGE, COINS, DAY, INTERVAL } from "../config/api-endpoints";


export function useChart() {
    const [cryptoId, setCryptoId] = useState([]);
    const [chartData, setChartData] = useState([]);
    const [days, setDays] = useState(2);
    const [id, setId] = useState("bitcoin");
    const [interval, setInterval] = useState([]);


    const getCryptoId = async () => {
        try {
            const response = await httpClient.get(`${MARKETS}${CURRENCY}=usd${ORDER}=market_cap_desc${PAGE}=1${PER_PAGE}=200`)
            setCryptoId(response.data)
        } catch (err) {
            console.log(err)
        }
    }

    const getCoinsPrice = async () => {
        try {
            const response = await httpClient.get(`${COINS}/${id}/market_chart${CURRENCY}=usd${DAY}=${days}${INTERVAL}=${interval}`)
            setChartData(response.data.prices)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getCryptoId()
        getCoinsPrice()
    }, [id, days, interval])


    const dataInChart = chartData.map((value) => ({
        x: value[0],
        y: value[1].toFixed(2),
    }));

    function oneDay() {
        setInterval((prevInterval) => "hourly");
        setDays((prevDays) => 1);
    }

    function oneWeek() {
        setDays((prevDays) => 7);
        setInterval((prevInterval) => "daily");
    }

    function oneMonth() {
        setDays((prevDays) => 30);
        setInterval((prevInterval) => "monthly");
    }

    function sixMonths() {
        setDays((prevDays) => 180);
        setInterval((prevInterval) => "monthly");
    }

    function oneYear() {
        setDays((prevDays) => 365);
        setInterval((prevInterval) => "yearly");
    }


    return {cryptoId, setId, days, oneDay, oneWeek, sixMonths, oneYear, oneMonth, dataInChart, id }
}