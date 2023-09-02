import React from 'react'
import Form from './form'
import List from './list'

const Homepage = ({list,notification,setlist,datafetch,registereduser,registrationlimit}) => {
  return (
   <>
    <Form list={list} datafetch={datafetch}  notification={notification} registereduser={registereduser} registrationlimit={registrationlimit} />
      <List list={list} setlist={setlist} />
   </>
  )
}

export default Homepage