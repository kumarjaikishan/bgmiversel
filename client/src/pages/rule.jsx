import React from 'react'
import './rule.css'
const Rule = ({setmodal}) => {
   
    return (
        <>
            <div className="rule">
                <div className='hell'>
                    <div className='box'>
                        <div><u><h1>Rules Must Be Follow</h1></u></div>
                        <ul>
                            <li><span className='sno'>1 </span> <span>Never Use Level 3 Helmet⛑️ Or Vest 🦺 Or AWM</span></li>
                            <li><span className='sno'>2 </span> <span>Don't use Grenade 💣 Or stun 🧨 Or Pistol 🔫 </span></li>
                            <li><span className='sno'>3 </span> <span>Don't use Any Kind of Cheat </span></li>
                            <li><span className='sno'>4 </span> <span>Slide Must be Turn Off </span></li>
                            <li><span className='sno'>5 </span> <span>Player BGMI ID must bu 40 or above Level </span></li>
                            <li><span className='sno'>6 </span> <span>If Any Player Not abailable on Given slot then, Opponent Will Qualify </span></li>
                        </ul>
                        <button onClick={()=> setmodal(false)}>Close</button>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Rule