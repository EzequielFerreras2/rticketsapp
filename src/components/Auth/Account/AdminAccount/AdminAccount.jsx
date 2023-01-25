
import { Grid } from '@mui/material';
import React, { useEffect } from 'react'
import { useAccountStore } from '../../../../store/accounts/useAccountStore'
import BasicButton from '../../../common/BasicButton/BasicButton';
import AmdAccTable from './AmdAccTable';
import CachedTwoToneIcon from '@mui/icons-material/CachedTwoTone';
const AdminAccount = () => {


const {accounts,onGetUsers} = useAccountStore();

const upDateUsers =()=>{

  onGetUsers();

};

useEffect(() => {
  onGetUsers();
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

  return (
    <div>
      <h1>Administar Cuentas</h1>
      <br/>
      <Grid container direction={"row"} justifyContent="flex-end" alignItems="center" sx={{height:'100%',}}>
          <Grid item  >
            <BasicButton
              name="Actualizar"
              startIcons={<CachedTwoToneIcon/>}
              colors="#0276aa"
              onClick={()=> upDateUsers()}
              />
          </Grid >
        </Grid>
        <br/>
      <AmdAccTable Account={accounts}  />
    </div>

  )
}

export default AdminAccount