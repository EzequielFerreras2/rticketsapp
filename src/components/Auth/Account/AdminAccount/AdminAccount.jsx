import { Button } from '@mui/material'
import React, { useEffect } from 'react'
import { useAccountStore } from '../../../../store/accounts/useAccountStore'
import AmdAccTable from './AmdAccTable';

const AdminAccount = () => {

const {account,onGetUsers} = useAccountStore();

useEffect(() => {
    onGetUsers();
}, []);


  return (
    <div>
      <h1>Administar Cuentas</h1>
      <br/>
      <AmdAccTable Account={account}  />
    </div>

  )
}

export default AdminAccount