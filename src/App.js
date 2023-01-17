import { CssBaseline } from "@mui/material";
import { Box } from "@mui/system";
import {useEffect, useState } from "react";
import Swal from "sweetalert2";
import Header from "./components/common/NavMenu/Header";
import InRoute from "./routes/InRoute";
import { useAccountStore } from "./store/accounts/useAccountStore";
import { useAtuhStore } from "./store/auth/useAuthStore";
import { useCateoryStore } from "./store/category/useCategoryStore";
import { useCategoryCasesStore } from "./store/CategoryCases/useCategoryCasesStore";
import { useSubCategoryStore } from "./store/subcategory/useSubCategory";


function App() {
  
var [isNavbarHidden, setIsNavbarHidden] = useState(false);
const accId = localStorage.getItem("id")
const {status,checkToken,}= useAtuhStore();
const {setUsers,onGetUsers}= useAccountStore();
const {ongetCategory}= useCateoryStore();
const {onGetSubCategory}= useSubCategoryStore();
const {onGetCategoryCases}= useCategoryCasesStore();

useEffect(() => {

  updateNavbar();
  
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [status]);


useEffect(() => {
 
  check()
  
  
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [status]);

const check =()=>{

   try {

    checkToken();
    onGetUsers()
    setUsers(accId);
    ongetCategory();
    onGetSubCategory();
    onGetCategoryCases(); 
    
   } catch (error) {
    
   }
  

    
};

  const DisplayHeader= (props) =>{
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn !== true ) {
      return (
        <Header/>
      )   
    }
  };

  const updateNavbar =()=>
  {
    
  if (status === 'checking' || status === 'not-authenticated'){
    setIsNavbarHidden (true);
  }

  else{
    setIsNavbarHidden (false);
  }
};
if( status === 'checking' ){
      Swal.fire({
        title: `${status}...`,
        timerProgressBar: true,
        allowOutsideClick: false,
        didOpen: () => {
            Swal.showLoading()
        },})
    }
    else{

      Swal.close();
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


