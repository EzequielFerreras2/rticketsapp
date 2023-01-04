import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import React, { useEffect, useState } from 'react';
import { useAccountStore } from '../../../store/accounts/useAccountStore';
import { useAtuhStore } from '../../../store/auth/useAuthStore';


const Account = () => {

    const {user} = useAtuhStore();
    const {account,onGetUsers} = useAccountStore();
    const [acc, setAcc] = useState([]);

    useEffect(() => {
        onGetUsers();
        setAcc(account);
    }, []);

    useEffect(() => {
        
        getAccount();
   
    }, [acc])


    const getAccount =async() =>{
       

            const us= await acc.filter(res => res.id === user.id);
            us.map(res=>{setAcc(res);});
            console.log(acc)
    
       
    };

   
    return (
        <div>
            <br/>
            
             <Card sx={{ maxWidth: 345 }}>
                <Stack direction="row" justifyContent={"center"} spacing={2}>
                <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 80, height: 80}}
                />
                </Stack>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {acc.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {acc.email}
        </Typography>
      </CardContent>
      
    </Card>
        </div>
    );
}

export default Account;
