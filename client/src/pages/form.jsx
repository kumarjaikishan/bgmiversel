import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import FaceIcon from '@mui/icons-material/Face';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../assets/logo.png'
import discord from '../assets/discord.png'
import './form.css'
import swal from 'sweetalert'
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

const Form = ({ notification, list, datafetch, registereduser, registrationlimit }) => {
    const init = {
        name: "",
        id: ""
    }
    useEffect(() => {

    }, [])

    const [msg, setmsg] = useState({
        name: "",
        id: ""
    })

    const [data, setdata] = useState(init);
    const handle = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setdata({
            ...data, [name]: value
        })
    }
    const submite = () => {
        //    data.id.length !==10 ? notification.warn("ID not valid", 1400):null;
        let check = false;
        if (data.id.length >= 8 && data.id.length <= 12) {
            // alert("ho jayega")
        }else{
            setmsg({
                id: "Character ID not Valid"
            })
            return notification.warn("Character ID not Valid", 1400)
        }
        if (data.name.length < 1) {
            setmsg({
                name: "Name not Valid"
            })
            return notification.warn("Name can't be empty", 1400)
        }

        list.map((val) => {
            if (val.id === data.id) {
                check = true;
                return notification.warn("Player Already Registered", 1400)
            }
        })

        if (!check) {
            setdata(init);
            setmsg({
                name: "",
                id: ""
            })

            const add = async () => {
                let name = data.name;
                let id = data.id
                let stat = "pending";
                let torunaname = "classic";
                let datee = new Date();
                let date = datee.getFullYear() + "-" + datee.getUTCMonth() + "-" + datee.getUTCDate();
                try {
                    const result = await fetch('/addplayer', {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            torunaname, name, id, date, stat
                        })
                    })
                    const detail = await result.json();
                    console.log(detail)
                    datafetch();
                    swal("Success!", "Your Registration Competed", "success");
                } catch (error) {
                    console.log(error)
                }
              
            }
            add();
            return notification.success("Registration Successful", 1400)
        }

    }

    return (
        <div className='form'>
            <div className="under">
                <span className='logo'><img src={logo} alt="" /></span>
                <div className='inpu'>
                    <TextField
                        label="Character Name*"
                        size="small"
                        id="outlined-required"
                        className='filled'
                        onChange={handle}
                        name="name"
                        helperText={msg.name}
                        value={data.name}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">
                                <FaceIcon />
                            </InputAdornment>,
                        }}
                    />
                    <TextField
                        label="Character ID*"
                        size="small"
                        className='filled'
                        type="number"
                        onChange={handle}
                        color={data.id.length >= 8 && data.id.length <= 12 ? "primary" : "warning"}
                        onKeyPress={(event) => { if (!/[0-9]/.test(event.key)) { event.preventDefault(); } }}
                        name="id"
                        helperText={msg.id}
                        value={data.id}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">
                                <AcUnitIcon />
                            </InputAdornment>,
                        }}
                    />
                    <div className='errormsg'>
                        {
                            registereduser >= registrationlimit ? "Sorry Registration Limit Reached" : null
                        }
                    </div>
                    <div className='alertmsg'>
                    *Player must join Discord server for claim you Winnings 💸
                    </div>
                </div>

                <button type="submit" onClick={submite} disabled={registereduser >= registrationlimit ? true : false}>Register Me</button>
                <div className='social'>
                    <span>  <a href="https://www.youtube.com/@dozplayz" target='_blank' title='Official Youtube'> <YouTubeIcon className='fat' /></a></span>
                    <span>  <a href="https://www.instagram.com/doz_playz/" target='_blank' title='Official Instagram'> <InstagramIcon className='fat' /></a></span>
                    <span><a href="https://discord.gg/QBbHhMkuAv" target='_blank' title='Official Discord'> <img src={discord} alt="" /></a></span>

                </div>
            </div>
        </div>
    )
}

export default Form