import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../api/axiosPrivate';
import auth from '../firebase.init';

const useMyCars = (user) => {
    const [myCars, setMyCars] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        const email = user?.email
        axiosPrivate.get(`https://young-crag-76268.herokuapp.com/userscar?email=${email}`)
            .then(res => setMyCars(res.data))
            .catch(error => {
                if (error.response.status === 401 || error.response.status === 403) {

                    signOut(auth)
                    navigate("/login")
                }
            })

    }, [user])
    return [myCars,setMyCars]
};

export default useMyCars;