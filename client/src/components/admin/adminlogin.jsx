import React, { useState } from 'react'
import Admin from './admin'
import './admin.css'
import { useNavigate } from "react-router-dom";

const Admindis = ({setadmin,notification}) => {
    let navigate = useNavigate();
    const [inp, setinp] = useState("")

    const handle = (e) => {
        setinp(e.target.value);
    }

    const test = () => {
        if (inp == "sparrow") {
            setadmin(true)
            navigate('/admin');
            notification.success("Login Successfull", 1400)
        }else{
            notification.warn("Password not correct", 1400)
        }
    }
    return (
        <>
            {
                <div className="modal">
                    <input type="password" placeholder='Enter password' onChange={handle} name='inp' />
                    <button onClick={test}>Submit</button>
                </div>
            }

        </>
    )
}

export default Admindis