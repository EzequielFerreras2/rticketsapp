import { ThemeProvider } from '@mui/system';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import { dashboardTheme } from './dashboardTheme';
import { store } from './store/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={dashboardTheme}>
          <Routes>
            <Route path='/*' element={<App />}/>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
 
);

