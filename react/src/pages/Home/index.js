// home這個頁面的根元件(root)
import {useState} from 'react';    // 使用hook : useState 

import React from 'react';   // 舊版react需要寫引入react。React17開始可以省略，但這邊還是先示範寫出來。
import Edit from './components/Edit';
import Info from './components/Info';
import './index.css';

const Home = () => {

    const [data, setData] = useState([])
    // data: State的名稱
    // setData: 去改變狀態時寫的工具名稱
    // useState(給定初始的State設定值),這邊設定data為一個空陣列
    // useState放在Home這邊,這樣Edit和Info就可以共用這個State
    
    return <div>      {/* // React從return的JSX語法來得知這是一個js元件而非一般的function */}
        <Edit add = {setData}/>       {/* 給定一個名稱add,將setData傳入Edit元件中,之後就可以在Edit元件那邊用add名稱去取出setData工具,並執行自己寫的setState動作 */}
        <Info infoData = {data} deleteData = {setData}/>      {/* 給定一個名稱infoData,將data傳入Info元件中,之後就可以在Info元件那邊用infoData名稱去取出data */}
    </div>    
}

export default Home;