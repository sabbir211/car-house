import { async } from '@firebase/util';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useToken = (user) => {
    const [token, setToken] = useState('')

    useEffect(() => {
        const email = user?.user?.email
        const getToken = async () => {
            if (email) {
                
                const res = await axios.post('https://young-crag-76268.herokuapp.com/login', { email })
           
                localStorage.setItem("accessToken", res.data);
                setToken(res.data)
            }

        }
        getToken()
    }, [user])

    return [token, setToken]
};

export default useToken;