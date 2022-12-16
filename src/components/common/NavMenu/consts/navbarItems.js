import React from 'react'
import PeopleIcon from '@mui/icons-material/People';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import DashboardCustomizeTwoToneIcon from '@mui/icons-material/DashboardCustomizeTwoTone';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import InventoryIcon from '@mui/icons-material/Inventory';
import AltRouteIcon from '@mui/icons-material/AltRoute';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import HistoryEduTwoToneIcon from '@mui/icons-material/HistoryEduTwoTone';





export const mainSideBarItems =  [
    {
        id:0,
        icon:<DashboardCustomizeTwoToneIcon style={{ fill: '#0072ea' }}/>,
        label:'Dashboard',
        route:'Dashboard',
        hidden:false
    },
    {
        id:1,
        icon:<HistoryEduTwoToneIcon style={{ fill: '#0072ea' }}/>,
        label:'Crear De Casos',
        route:'CreateCases',
        hidden:false
    },
    {
        id:2,
        icon:<ReceiptLongIcon/>,
        label:'Cotización',
        route:'Cotizacion',
        hidden:true
    },
    {
        id:3,
        icon:<PointOfSaleIcon/>,
        label:'Factura',
        route:'Factura',
        hidden:true
    },
    {
        id:4,
        icon:<InventoryIcon/>,
        label:'Inventario',
        route:'Inventario',
        hidden:true
    },
    {
        id:5,
        icon:<AltRouteIcon/>,
        label:'Proveedores',
        route:'Inventario',
        hidden:true
    },
    {
        id:6,
        icon:<AccountBalanceWalletIcon/>,
        label:'Nomina',
        route:'Payroll',
        hidden:true
    },
    {
        id:7,
        icon:<PeopleIcon/>,
        label:'Empleados',
        route:'Employees',
        hidden:true
    },
]