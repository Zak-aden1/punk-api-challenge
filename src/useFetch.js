import { useState, useEffect } from "react"

const useFetch = (url) => {
    const [data, setData] = useState('')
    const [error, setError] = useState(null)
    const [ispending, setIspending] = useState(true)

    useEffect(() => {
      fetch(url)
      .then(res => {
        if (!res.ok) {
          throw Error('could not catch data')
        }
        return res.json()
      })
      .then((data) => {
        const beers = data.map((beer) =>({ ...beer, favIcon: false}))
        // console.log(beers);
        setData(beers)
        setIspending(false)
        setError(null)
      })
      .catch(err => {
        setIspending(false)
        setError(err.message)
      })
    }, [url])
    return {data, ispending, error}
}

export default useFetch