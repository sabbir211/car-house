import axios from "axios"
import { useEffect, useState } from "react"
import CustomSpin from "../UtilityComponents/CustomSpin"

const useCars = (limit) => {
    const [loading, setLoading] = useState(false)
    const [cars, setCars] = useState([])

    useEffect(() => {
        setLoading(true)
        axios.get(`https://car-house-bcsm.onrender.com/inventory?size=${limit}`)
            .then(res => {
                setCars(res.data)
                setLoading(false)
            })
    }, [limit])
    return [cars, setCars, loading]
}
export default useCars