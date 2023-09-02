import React, { useEffect, useState } from 'react'
import './list.css'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import CancelIcon from '@mui/icons-material/Cancel';

const List = ({ list }) => {
    useEffect(() => {
    }, [])

    const hell = () => {
        console.log(list.list)
    }
    return (
        <>
            <div className="list">
                <h2>M24 Battle Touranment</h2>
                <div className="aggre">
                    {
                        list.map((val, ind) => {
                            // return <div className='ano' key={ind}><span className='sno'>{ind+1}</span><span className='combine'> <span>{val.id} </span><span>- {val.name}</span></span> </div>
                            return <div className='ano' key={ind}>
                                <span className='sno'>{ind + 1}</span>
                                <span className='idname'>
                                    <span>{val.id}</span>
                                    <span>- {val.name}</span>
                                </span>
                                {/* <span className='stat' title='Approval Status'><ThumbUpIcon className='staticon'/></span> */}
                                <span className='stat' title={val.stat == "done" ? "Approval Done" : "Approval Pending"}>
                                    {
                                        val.stat == "approve" ?
                                            <ThumbUpIcon className='staticon' titleAccess='Approved' /> :
                                            val.stat == "reject" ? <CancelIcon className='staticon reject' titleAccess='Rejected' /> :
                                                <HourglassTopIcon className='staticon pending' titleAccess='Pending' />
                                    }
                                </span>
                            </div>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default List