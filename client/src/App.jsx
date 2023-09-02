import { useEffect, useState } from 'react'
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './pages/homepage'
import Navbar from './components/navbar/navbar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Admin from './components/admin/admin';
import Instant from './pages/instant';

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    datafetch();
  }, [])
  const [registereduser, setregistereduser] = useState(0);
  const [registrationlimit,setregistrationlimit]= useState(25);
  const [matlist, setmatlist] = useState([
    //     {
    //     team1: [],
    //     team2: [],
    //     mode: "ar",
    //     status: true,
    //     winner: "none"
    // }
  ]);

  const [list, setlist] = useState([]);

  const notification = {
    success: (msg, dur) => {
      toast.success(msg, {
        autoClose: dur,
      });
    },
    warn: (msg, dur) => {
      toast.warning(msg, {
        autoClose: dur,
      });
    }
  }
  const datafetch = async () => {
    const result = await fetch('http://localhost:5000/getplayer', {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    const detail = await result.json();
    console.log(detail.data)
    // sethey(detail.data)
    setlist(detail.data);
    registrationfull(detail.data);
  }

  const registrationfull = (data) => {
    let count = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i].stat == "pending" || data[i].stat == "approve") {
        count++;
      }
    }
    setregistereduser(count);
    console.log(count)
  }


  return (
    <>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/"  element={<Homepage registereduser={registereduser} registrationlimit={registrationlimit} list={list} setlist={setlist} datafetch={datafetch} notification={notification} />} />
        <Route path="/result" element={<Admin list={list} datafetch={datafetch} />} />
        <Route path="/instant" element={<Instant matlist={matlist} setmatlist={setmatlist} list={list} />} />
      </Routes>
    </>
  )
}

export default App
