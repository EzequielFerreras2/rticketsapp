import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import InventoryIcon from '@mui/icons-material/Inventory';
import AltRouteIcon from '@mui/icons-material/AltRoute';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import DescriptionIcon from '@mui/icons-material/Description';






export const mainSideBarItems =  [
    {
        id:0,
        icon:<DashboardIcon/>,
        label:'Dashboard',
        route:'Dashboard',
        hidden:false
    },
    {
        id:1,
        icon:<DescriptionIcon/>,
        label:'Casos',
        route:'Cases',
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