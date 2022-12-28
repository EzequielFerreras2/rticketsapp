import { Button } from '@mui/material'
import React, { useEffect } from 'react'
import { useAccountStore } from '../../../../store/accounts/useAccountStore'

const AdminAccount = () => {

const {account,onGetUsers} = useAccountStore();


useEffect(() => {
 
    onGetUsers()

}, [])


  return (
    <div>
      <h1>Admin Account</h1>
      <br/>
    </div>

  )
}

export default AdminAccount