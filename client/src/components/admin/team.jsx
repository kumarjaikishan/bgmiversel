import React from 'react'
import './team.css'
const Team = ({ team1, team2, final1, final2 }) => {

    return (
        <div className='tea'>
            <div className="team">
                <h2>TEAM 1</h2>
                {
                    team1.map((val, ind) => {
                        return <div key={ind}><span>{ind+1 }. </span><span> {val.name} </span></div>
                    })
                }
            </div>
            <div className="final">
                
                {
                    final1.map((val, ind) => {
                        return <div key={ind}>
                           <span >{final1[ind].name} </span><span> 🆚 </span><span>{final2[ind].name} </span>
                        </div>
                    })
                }
            </div>
            <div className="team">
                <h2>TEAM 2</h2>
                {
                    team2.map((val, ind) => {
                        return <div key={ind}><span>{ind+1 }. </span><span>{val.name} - </span></div>
                    })
                }
            </div>
        </div>
    )
}

export default Team