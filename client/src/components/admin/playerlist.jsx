import React from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import swal from 'sweetalert'
import CancelIcon from '@mui/icons-material/Cancel';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';

const Playerlist = ({ list,datafetch }) => {
  const playeredit = async (id,set) => {
    try {
      const result = await fetch('/playerapprove', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          id,set
        })
      })
      const detail = await result.json();
      console.log(detail)
      swal("Success!","User "+ set+ " Successfully", "success");
      datafetch();
    } catch (error) {
      console.log(error);
    }
  
   
  }
  return (
    <div className="aggre">
      {
        list.map((val, ind) => {
          // return <div className='ano' key={ind}><span className='sno'>{ind+1}</span><span className='combine'> <span>{val.id} </span><span>- {val.name}</span></span> </div>
          return <div className='ano' key={ind}>
            <span className='sno'>{ind + 1}</span>
            <span className='idname'>
              <span>{val.id}</span>
              <span >- {val.name}</span>
              {
              val.stat == "approve" ?
               <ThumbUpIcon className='staticon' titleAccess='Approved' /> : 
               val.stat == "reject" ?<CancelIcon className='staticon reject' titleAccess='Canceled' />:
               <HourglassTopIcon className='staticon pending' titleAccess='Pending' />
              }
            </span>
            <DoneIcon titleAccess='Approve' className='staticon ' onClick={() => playeredit(val._id,"approve")} />
            <CloseIcon titleAccess='Reject' className='staticon ' onClick={() => playeredit(val._id,"reject")} />
            <DeleteIcon titleAccess='Delete' className='staticon ' onClick={() => playeredit(val._id,"delete")} />
          </div>
        })
      }
    </div>
  )
}

export default Playerlist