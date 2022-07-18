import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';   // 因為Home元件是放在Home資料夾的index.js裡面,所以可以省略寫成'./pages/Home'

// ReactDOM.render(
//   <React.StrictMode>
//     
//   </React.StrictMode>,
//   document.getElementById('root')        //  舊版react預設寫法
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>
);
