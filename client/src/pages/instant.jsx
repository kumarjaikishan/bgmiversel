import React, { useState } from 'react'
import './instant.css'

const Instant = ({ list, matlist, setmatlist }) => {

    const selec = () => {
        let arr1 = [];
        let arr2 = [];
        let liste1 = document.querySelectorAll(".list1");
        let liste2 = document.querySelectorAll(".list2");
        for (let i = 0; i < liste1.length; i++) {
            if (liste1[i].checked) {
                arr1.push(liste1[i].value);
            }
        }

        for (let i = 0; i < liste2.length; i++) {
            if (liste2[i].checked) {
                arr2.push(liste2[i].value);
            }
        }

        let mod = document.getElementsByName("mode");
        let finalmode = ""
        for (let i = 0; i < mod.length; i++) {
            if (mod[i].checked) {
                finalmode = mod[i].value;
            }
        }

        setmatlist([
            ...matlist,
            {
                team1: arr1,
                team2: arr2,
                mode: finalmode,
                status: true,
                winner: "none"
            }
        ])

        for (let i = 0; i < liste1.length; i++) {
            liste1[i].checked = false;
            liste2[i].checked = false;

        }
    }
    const hell = (inde) => {
        console.log(inde);
        matlist.filter((val, ind) => {
            if (ind == inde) {
                return;
            }
            return val;
        })
    }

    const winner = (event) => {
        let index = event.target.id;
        let vale = event.target.value;
        //    console.log(index + vale)
        const newstate = matlist.map((val, ind) => {
            if (ind == index) {
                // console.log("ha match hua")
                return { ...val, winner: vale };
            }
            return val;
        })
        setmatlist(newstate);
    }

    return (
        <>
            <div className="instant">
                <div className="lists">
                    <span>
                        <span >
                            <span><h2>List 1</h2></span>
                            {
                                list.map((val, ind) => {
                                    return <div key={ind}>
                                        <span>{ind + 1}</span>
                                        <span><input type="checkbox" name="" id={val.name} value={val.name} className='list1' /></span>
                                        <span>{val.name}</span>
                                    </div>
                                })
                            }
                        </span>
                        <span id='list2'>
                            <span><h2>List 2</h2></span>
                            {
                                list.map((val, ind) => {
                                    return <div key={ind}>
                                        <span>{ind + 1}</span>
                                        <span><input type="checkbox" name="" id={val.name} value={val.name} className='list2' /></span>
                                        <span>{val.name}</span>
                                    </div>
                                })
                            }
                        </span>
                    </span>
                    <span>
                        <span>  Assult Rifle  <input type="radio" name="mode" id="" value="A.R" /></span>
                        <span> Sniper <input type="radio" name="mode" id="" value="Sniper" /></span>

                    </span>
                    <button onClick={selec}>Create Team</button>
                </div>
                <div className="result">
                    {
                        matlist.map((val, ind) => {
                            return <div key={ind} className='hu'>
                                <span>
                                    <span className='battlemode'>{ind + 1}</span>
                                    <span className={val.winner === "team1" ? "line won" : "line"}>
                                        {
                                            val.team1.map((val, ind, whole) => {
                                                return <span key={ind}  >
                                                    <span>{val}</span>
                                                    {whole.length === ind + 1 ? null : <span> & </span>}
                                                </span>
                                            })
                                        }
                                    </span>
                                    <span> v/s </span>
                                    <span className={val.winner === "team2" ? "line won" : "line"}>
                                        {
                                            val.team2.map((val, ind, whole) => {
                                                return <span key={ind} >
                                                    <span>{val}</span>
                                                    {whole.length === ind + 1 ? null : <span> & </span>}
                                                </span>
                                            })
                                        }
                                    </span>
                                    <span className='battlemode'>{val.mode}</span>
                                </span>
                                <span>
                                    <button onClick={() => { hell(ind) }}> Delete </button>

                                    <select name="" id={ind} onChange={winner} value={val.winner}>
                                        <option value="none">Select Winner</option>
                                        <option value="team1">team 1</option>
                                        <option value="team2">team 2</option>
                                    </select>
                                </span>
                            </div>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Instant