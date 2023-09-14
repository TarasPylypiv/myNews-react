import { useEffect, useState } from "react"

export const usefetch = (fetchFunction, params) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLaading] = useState(true);
    const [error, setError] = useState(null);

    const stringParams = params ? new URLSearchParams(params).toString() : '';

    useEffect(() => {
        (async () => {
            try {
                setIsLaading(true)
                const result = await fetchFunction(params)
                setData(result)
            } catch (error) {
                setError(error)
            } finally {
                setIsLaading(false)
            }
        })()
    }, [fetchFunction, stringParams])

    return {data, isLoading, error}
}