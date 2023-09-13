import { useEffect, useState } from "react"

export const useDebaunce = (value, delay) => {
    const [debaunceValue, setDebaunceValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(()=> {
            setDebaunceValue(value)
        }, delay)
        return () => {
            clearTimeout(handler)
        }
    }, [value, delay])

    return debaunceValue
}