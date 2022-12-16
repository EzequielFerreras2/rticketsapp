import { CssBaseline } from "@mui/material";
import { Box } from "@mui/system";
import {useEffect, useState } from "react";
import Header from "./components/common/NavMenu/Header";
import InRoute from "./routes/InRoute";




function App() {
  
var [isNavbarHidden, setIsNavbarHidden] = useState(false);


 // not-authenticated //checking //authenticated
const usuario ={

  rol:"admin",
  status:"authenticated"

}

localStorage.setItem("user", JSON.stringify(usuario))
 
const user = JSON.parse(localStorage.getItem("user"));

const status =user.status;

  const DisplayHeader= (props) =>{
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn !== true ) {
      return (
        <Header/>
      )   
    }
  };

  useEffect(() => {

    updateNavbar();

    

  }, [status]);


  const updateNavbar =()=>{
  if (status === 'checking' || status === 'not-authenticated'){
    setIsNavbarHidden (true);
  }
  else{
    setIsNavbarHidden (false);
    
    
  }
  }

  


 
  

  return (

      <main className="App" ><Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <DisplayHeader isLoggedIn={isNavbarHidden}/>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              
              <br/>
              <InRoute updateNavbar={()=>updateNavbar()}/>
               
          </Box>
       </Box>
       </main>
  );
}

export default App;


