// home這個頁面的根元件(root)

import React from 'react';   // 舊版react需要寫引入react。React17開始可以省略，但這邊還是先示範寫出來。
import Edit from './components/Edit';
import Info from './components/Info';
import Item from './components/Item';
import './index.css';

const Home = () => {
    // React從return的JSX語法來得知這是一個js元件而非一般的function
    return <div> 
        <Edit />
        <Info />
    </div>    
}

export default Home;