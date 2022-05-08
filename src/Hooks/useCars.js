import axios from "axios"
import { useEffect, useState } from "react"
import CustomSpin from "../UtilityComponents/CustomSpin"

const useCars=(limit)=>{
    const [loading,setloading]=useState(false)
    const [cars, setCars] = useState([])
    
    useEffect(() => {
         axios.get(`https://young-crag-76268.herokuapp.com/inventory?size=${limit}`)
            .then(res => setCars(res.data))
    }, [])
   
    return [cars,setCars]
}
export default useCars