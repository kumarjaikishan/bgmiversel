import React, { useEffect, useState } from 'react'
import './admin.css'
import Playerlist from './playerlist';
import Team from './team';
import swal from 'sweetalert'
import { useNavigate } from "react-router-dom";

const Admin = ({ list, datafetch, isadmin, setadmin }) => {
  let navigate = useNavigate();
  useEffect(() => {
    if (!isadmin) {
      navigate('/login');
      return;
    }
    fune();
  }, [list])

  const [inp, setinp] = useState("")
  const [toggle, settoggle] = useState(false);
  const [team1, setteam1] = useState([]);
  const [team2, setteam2] = useState([]);
  const [final1, setfinal1] = useState([]);
  const [final2, setfinal2] = useState([]);

  const [filteredlist, setfilteredlist] = useState([]);
  const fune = () => {
    const temp = list.filter((val, ind) => {
      if (val.stat !== "reject") {
        return val;
      }
    })
    setfilteredlist(temp);
  }
  const handle = (e) => {
    setinp(e.target.value);
  }

  const test = () => {
    if (inp == "sparrowisgreat") {
      setadmin(true)
    }
  }

  const fun = () => {
    setteam1([]);
    setteam2([]);
    let faltu = [];
    let total = [...filteredlist];
    // console.log(total)
    for (let i = 0; i < total.length; i++) {
      let rand = Math.ceil(Math.random() * total.length) - 1;
      let part = total.splice(rand, 1)
      faltu.push(part[0]);
    }
    setteam1(faltu);
    setteam2(total);
    // console.log(team1);
    // console.log(total);
  }

  const finale = () => {
    if (filteredlist.length % 2 === 0) {
      let finalone = [...team1];
      let finaltwo = [...team2];
      let tempteam1 = []
      let tempteam2 = []
      for (let i = 0; i < team1.length; i++) {
        let rand1 = Math.ceil(Math.random() * finalone.length) - 1;
        let rand2 = Math.ceil(Math.random() * finaltwo.length) - 1;
        let part1 = finalone.splice(rand1, 1)
        let part2 = finaltwo.splice(rand2, 1)
        tempteam1.push(part1[0]);
        tempteam2.push(part2[0]);
      }
      setfinal1(tempteam1);
      setfinal2(tempteam2);
      return;
    } else {
      console.log("The number is odd.");
      swal("Stop!", "Number of Player Is Odd, please make it Even", "warn");
      return;
    }

  }
  return (
    <div className="admin">
      {/* <div className="modal">
        <input type="text" placeholder='Enter password' onChange={handle} name='inp' />
        <button onClick={test}>Submit</button>
      </div> */}
      <div className='headcontrol'>
        <span>
          <b><span className='titlee'>M24 Touranment</span></b>
          {/* <input type="text" /> */}
        </span>
        <span>
          <button onClick={() => settoggle(false)}>Home</button>
          <button onClick={() => settoggle(true)} >Teams</button>
          <button onClick={fun}>Create Team</button>
          <button onClick={finale}>Battle</button>
        </span>
      </div>

      {
        toggle ? <Team team1={team1} team2={team2} final1={final1} final2={final2} /> : <Playerlist list={list} datafetch={datafetch} />
      }

    </div>
  )
}

export default Admin;