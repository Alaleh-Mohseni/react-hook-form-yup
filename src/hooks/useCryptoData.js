import { useState, useEffect } from "react";
import { httpClient } from "../services/http";
import { MARKETS, CURRENCY, IDS, ORDER, PAGE, PER_PAGE } from "../config/api-endpoints";

export function useCryptoData() {
  const [topCoins, setTopCoins] = useState([])
  const [cryptoData, setCryptoData] = useState([])
  const [sortBy, setSortBy] = useState("market_cap_desc");
  const [page, setPage] = useState(1);
  const [totalPages] = useState(350);
  const [perPage, setPerPage] = useState(8);
  const [coinSearch, setCoinSearch] = useState("");
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const getTopCryptoData = async () => {
    try {
      setLoading(true)
      const response = await httpClient.get(`${MARKETS}${CURRENCY}=usd`)
      const coins = response.data.slice(0, 3)
      const topCryptoCoins = coins.map(coins => {
        return {
          ...coins
        }
      })

      setTopCoins(topCryptoCoins)
    } catch (err) {
      setError(true)
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  const getCryptoData = async () => {
    try {
      const response = await httpClient.get(`${MARKETS}${CURRENCY}=usd${IDS}=${coinSearch}${ORDER}=${sortBy}${PAGE}=${page}${PER_PAGE}=${perPage}`)
      console.log(response)
      setCryptoData(response.data);
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    getTopCryptoData()
    getCryptoData()
  }, [coinSearch, sortBy, page, perPage])


  return { topCoins, cryptoData, setPage, totalPages, loading, error}
}