// 要放入home/index這個頁面的子元件

import React from 'react';
import Item from './Item';

const arr = ['333',2,3]

const Info = () => {
    return <div className='info'>
        {/* 1.引入多個子元件<Item/>  */}
        <Item/>
        <Item/>
        <Item/>
        
        {/* 2.用js的陣列map函式將陣列內容渲染進來，之後從外部撈資料就可以這樣用 */}
        {/* {
            arr.map(item => <div>
                {item}
            </div>)
        } */}
        
    </div>
}

export default Info;