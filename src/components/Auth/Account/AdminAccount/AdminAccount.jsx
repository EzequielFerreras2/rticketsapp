
import React, { useEffect } from 'react'
import { useAccountStore } from '../../../../store/accounts/useAccountStore'
import AmdAccTable from './AmdAccTable';

const AdminAccount = () => {

const {accounts} = useAccountStore();


  return (
    <div>
      <h1>Administar Cuentas</h1>
      <br/>
      <AmdAccTable Account={accounts}  />
    </div>

  )
}

export default AdminAccount