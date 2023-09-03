import React from 'react'
import Form from './form'
import List from './list'
import Rule from './rule'

const Homepage = ({list,notification,setlist,datafetch,registereduser,registrationlimit,modal,setmodal,loader}) => {
  return (
   <>
   {modal?  <Rule setmodal={setmodal}  />:null}
     
      <Form list={list} datafetch={datafetch}  notification={notification} registereduser={registereduser} registrationlimit={registrationlimit} />
      <List list={list} setlist={setlist} loader={loader}  />

   </>
  )
}

export default Homepage